import Loader from "@components/ui/Loader";
import {
  CreateBidMutationVariables,
  OrderDirection,
  QueryQueryVariables,
  useAddToWatchListMutation,
  useCreateBidMutation,
  useQueryQuery,
  useWatchListQuery,
  WatchListQuery,
} from "@utils/graphql";
import graphQLClient from "@utils/useGQLQuery";
import moment from "moment";
import { useEffect, useState } from "react";
import DashboardTemplate from "../components/templates/DashboardTemplate";
import withPrivateRoute from "../utils/withPrivateRoute";
import Image from "next/image";
import Link from "next/link";
import {
  ClipboardListIcon,
  DocumentReportIcon,
  PlusIcon,
  MinusIcon,
} from "@heroicons/react/outline";
import { useQueryClient } from "react-query";
import { SecondsToDhms } from "@utils/common";
import Swal from "sweetalert2";
function WatchList() {
  const [accessToken, setAccessToken] = useState("");
  const [userId, setUserId] = useState("");
  const queryClient = useQueryClient();
  const [tick, setTick] = useState(0);
  const [serverTime, setserverTime] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTick((tic) => tic + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const { data: timeData } = useQueryQuery<QueryQueryVariables>(
    graphQLClient(),
    {},
    { refetchInterval: 60000 }
  );

  useEffect(() => {
    if (timeData && timeData.time) {
      setTick(0);
      setserverTime(timeData.time);
    }
  }, [timeData]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      const id = localStorage.getItem("id");
      setAccessToken(token);
      setUserId(id);
    }
  }, []);

  const { data, isLoading } = useWatchListQuery<WatchListQuery>(
    graphQLClient({ Authorization: `Bearer ${accessToken}` }),
    {
      take: 50,
      skip: 0,
      orderBy: [
        {
          bidTimeExpire: OrderDirection.Asc,
        },
      ],
      userVehicleBidsTake2: 1,
      userVehicleBidsSkip2: 0,
      userVehicleBidsOrderBy2: [{ amount: OrderDirection.Desc }],
    },
    {
      cacheTime: 5,
      refetchInterval: 10000,
      enabled: accessToken !== "" && userId !== "",
    }
  );
  const watchListMutation = useAddToWatchListMutation(
    graphQLClient({ Authorization: `Bearer ${accessToken}` }),
    {
      onSuccess() {
        queryClient.invalidateQueries("getEvent");
      },
    }
  );

  function SecondsLeft(item) {
    try {
      if (item) {
        const expiryTime = moment(item.bidTimeExpire);
        const currentTime = moment(serverTime).add(tick, "seconds");
        const diff = expiryTime.diff(currentTime, "seconds");
        if (diff > 0) {
          return (
            <div className="w-full">
              <div className="text-xs">End's in</div>
              <div className="text-base text-red-500">
                {SecondsToDhms(diff)}
              </div>
            </div>
          );
        } else {
          return (
            <div className="w-full">
              <div className="text-base text-red-500">Completed</div>
            </div>
          );
        }
      }
    } catch {}
    return (
      <div className="w-full">
        <div className="text-xs">End's in</div>
        <div className="text-base text-red-500">NA</div>
      </div>
    );
  }

  const addToWatchList = async (vehicleId: string) => {
    await watchListMutation.mutateAsync({
      data: {
        data: {
          watchList: {
            connect: [
              {
                id: vehicleId,
              },
            ],
          },
        },
        where: {
          id: userId,
        },
      },
    });
  };

  const removeFromWatchList = async (vehicleId: string) => {
    await watchListMutation.mutateAsync({
      data: {
        data: {
          watchList: {
            disconnect: [
              {
                id: vehicleId,
              },
            ],
          },
        },
        where: {
          id: userId,
        },
      },
    });
  };

  const callCreateBid = useCreateBidMutation<CreateBidMutationVariables>(
    graphQLClient({ Authorization: `Bearer ${accessToken}` })
  );
 
  async function CallBid(amount, vehicleId) {
    const confirmed = await Swal.fire({
      text: "Are you sure to bid for Rs. " + amount + "?",
      title: "BID CONFIMATION",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, bid for it!",
      customClass: {
        popup: "animated bounceInDown",
        container: "custom-swal-container",
      },
    });

    if (confirmed.isConfirmed) {
      try {
        const cc = await callCreateBid.mutateAsync({
          data: {
            amount: parseInt(amount),
            bidVehicle: {
              connect: {
                id: vehicleId,
              },
            },
          },
        });
        // console.log("cc: ", cc);
        Swal.fire("Success!", "Your bid has been submitted.", "success");
      } catch (e) {
        // console.log("EEE: ", e);
      }
    }
  }
  
  return (
    <DashboardTemplate heading={"My Watch List"}>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="space-y-6 mt-8">
          {!data?.authenticatedItem?.watchList?.length && (
            <div>No Vehicles Found</div>
          )}
          {data?.authenticatedItem?.watchList
            ?.filter((item) => item.vehicleEventStatus == "live")
            .map((item, index) => (
              <div
                key={`d${index}`}
                className={`sm:flex font-sans border border-gray-200 rounded bg-gray-100 ${
                  moment(item?.bidTimeExpire).diff(moment(), "s") <= 120 &&
                  moment(item?.bidTimeExpire).diff(moment(), "s") > 0
                    ? "blink"
                    : ""
                }`}
              >
                {item?.frontImage && (
                  <div className="flex-none w-60 relative p-6">
                    <Image
                      alt=""
                      src={item?.frontImage}
                      layout="fill"
                      className="absolute inset-0 w-full h-full object-cover rounded"
                    />
                  </div>
                )}
                <div className="flex-auto p-6">
                  <div className="sm:flex flex-wrap">
                    <div className="flex-auto">
                      <h1 className="text-lg font-semibold text-slate-900">
                        {item?.yearOfManufacture} {item?.make} {item?.model} -{" "}
                        {item.registrationNumber}
                      </h1>
                      <div className="text-sm font-medium text-slate-700">
                        {item?.event?.seller?.name}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-3">
                      <div className="sm:col-span-1 flex items-center justify-between sm:block">
                        <dt className="text-sm font-medium text-gray-500">
                          Odometer
                        </dt>
                        <dd className="text-sm text-gray-900">
                          {item?.kmReading ?? "N/A"} km
                        </dd>
                      </div>
                      <div className="sm:col-span-1 flex items-center justify-between sm:block">
                        <dt className="text-sm font-medium text-gray-500">
                          Ownership
                        </dt>
                        <dd className="text-sm text-gray-900">
                          {item?.ownership}
                        </dd>
                      </div>
                      <div className="sm:col-span-1 flex items-center justify-between sm:block">
                        <dt className="text-sm font-medium text-gray-500">
                          RC Book
                        </dt>
                        <dd className="text-sm text-gray-900">
                          {item?.rcStatus}
                        </dd>
                      </div>
                      <div className="sm:col-span-1 flex items-center justify-between sm:block">
                        <dt className="text-sm font-medium text-gray-500">
                          Repo date
                        </dt>
                        <dd className="text-sm text-gray-900"> - </dd>
                      </div>
                      <div className="sm:col-span-1 flex items-center justify-between sm:block">
                        <dt className="text-sm font-medium text-gray-500">
                          Total Bids
                        </dt>
                        <dd className="text-sm text-gray-900">
                          {item?.totalBids}
                        </dd>
                      </div>
                      <div className="sm:col-span-1 flex items-center justify-between sm:block">
                        <dt className="text-sm font-medium text-gray-500">
                          Bids Remaining
                        </dt>
                        <dd className="text-sm text-gray-900">
                          {item?.event?.noOfBids - item?.userVehicleBidsCount}
                        </dd>
                      </div>
                      <div className="sm:col-span-1 flex items-center justify-between sm:block">
                        <dt className="text-sm font-medium text-gray-500">
                          Rank
                        </dt>
                        <dd className="text-base text-gray-900">
                          {item?.myBidRank ? item.myBidRank : "N/A"}
                        </dd>
                      </div>
                      {item?.event?.bidLock === "locked" ? (
                        <div className="sm:col-span-1 flex items-center justify-between sm:block">
                          <dt className="text-sm font-medium text-gray-500">
                            Current Quote
                          </dt>
                          <dd className="text-base text-gray-900">
                            {item?.currentBidAmount ?? "N/A"}
                          </dd>
                        </div>
                      ) : (
                        <div className="sm:col-span-1 flex items-center justify-between sm:block">
                          <dt className="text-sm font-medium text-gray-500">
                            Your Latest Quote
                          </dt>
                          <dd className="text-base text-gray-900">
                            {item?.userVehicleBids?.length
                              ? item?.userVehicleBids[0]?.amount
                              : "N/A"}
                          </dd>
                        </div>
                      )}
                    </dl>
                  </div>

                  <div className="flex space-x-4 mt-6 pt-4 text-sm font-medium border-t border-slate-200">
                    <div className="flex-auto flex space-x-4">
                      <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                          {!item.watchedByCount ? (
                            <button
                              type="button"
                              className="inline-flex items-center px-2 py-1 border border-transparent shadow-sm text-sm leading-4 font-medium rounded text-white bg-blue-800 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              onClick={() => addToWatchList(item.id)}
                            >
                              <PlusIcon
                                className="-ml-0.5 mr-2 h-4 w-4"
                                aria-hidden="true"
                              />
                              Add to watchlist
                            </button>
                          ) : (
                            <button
                              type="button"
                              className="inline-flex items-center px-2 py-1 border border-transparent shadow-sm text-sm leading-4 font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              onClick={() => removeFromWatchList(item.id)}
                            >
                              <MinusIcon
                                className="-ml-0.5 mr-2 h-4 w-4"
                                aria-hidden="true"
                              />
                              from watchlist
                            </button>
                          )}
                        </div>
                        <div className="mt-2 flex items-center text-sm text-blue-800">
                          <DocumentReportIcon
                            className="flex-shrink-0 mr-1.5 h-5 w-5 text-blue-700"
                            aria-hidden="true"
                          />
                          Inspection Report
                        </div>
                        <div className="mt-2">
                          <Link href={`/vehicle/${item.id}`}>
                            <a
                              target="_blank"
                              className="flex items-center text-sm text-blue-800"
                            >
                              <ClipboardListIcon
                                className="flex-shrink-0 mr-1.5 h-5 w-5 text-blue-700"
                                aria-hidden="true"
                              />
                              More Details
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-none w-60">
                  <div className="flex flex-col items-center justify-center relative p-4 space-y-2">
                    {SecondsLeft(item)}

                    <div className="w-full space-y-2 mt-4">
                      <div className="flex flex-col justify-left text-xs text-gray-700">
                        <span className="font-semibold">Start Date</span>
                        <span>
                          {item?.event?.startDate
                            ? moment(item?.event?.startDate).format(
                                "MMMM Do, YYYY ddd h:mm a"
                              )
                            : "NA"}
                        </span>
                      </div>
                      <div className="flex flex-col text-xs text-gray-700">
                        <span className="font-semibold">End Date</span>
                        <span>
                          {item?.bidTimeExpire
                            ? moment(item?.bidTimeExpire).format(
                                "MMMM Do, YYYY ddd h:mm a"
                              )
                            : "NA"}
                        </span>
                      </div>
                    </div>

                    <div className="w-full bg-gray-200 rounded-lg">
                      <div className="px-4 py-2">
                        <h2 className="text-sm font-semibold text-gray-900">
                          Bid Details
                        </h2>

                        <div className="space-y-2 mt-2">
                          <div className="flex items-center justify-between text-xs text-gray-700">
                            <span>Start Price</span>
                            <span>{item?.startPrice}</span>
                          </div>
                          <div className="flex items-center justify-between text-xs text-gray-700">
                            <span>Reserve Price</span>
                            <span>{item?.reservePrice}</span>
                          </div>
                          <div className="flex items-center justify-between text-xs text-gray-700">
                            <span>Quote Increment</span>
                            <span>{item?.quoteIncreament}</span>
                          </div>
                          <div className="flex items-center justify-between text-xs text-gray-700">
                            <span>Current Status</span>
                            {item?.userVehicleBidsCount && item?.myBidRank ? (
                              item?.myBidRank == 1 ? (
                                <span style={{ color: "#00CC00" }}>
                                  Winning
                                </span>
                              ) : (
                                <span style={{ color: "#FF3333" }}>Losing</span>
                              )
                            ) : (
                              <span style={{ color: "#CCCC00" }}>
                                Not Enrolled
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <EnterBid row={item} call={CallBid}  event={data["event"]}/>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </DashboardTemplate>
  );
}



const EnterBid = ({ row, call, event }) => {
  console.log("007", row);

  const [bidAmount, setBidAmount] = useState("");

  console.log("bidamount", event);

  useEffect(() => {
    if (event?.bidLock === "locked") {
      console.log("Entered useEffect");

      if (row?.currentBidAmount !== null && row?.currentBidAmount !== undefined) {
        console.log("Entered IF condition");
        setBidAmount(row?.currentBidAmount?.toString());
      }
    } else {
      if (row?.currentBidAmount !== null && row?.currentBidAmount !== undefined) {
        console.log("Entered IF condition");
        let amt = row?.userVehicleBids?.length
          ? row?.userVehicleBids[0].amount
          : row?.startPrice;
        setBidAmount(amt.toString());
      }
    }
  }, [event?.bidLock, row?.currentBidAmount]);

  const enrolled = row.userVehicleBidsCount > 0;

  return (
    <div>
      {event?.bidLock === "locked" ? (
        <input
          id="input"
          className="w-full border border-gray-500 px-5 py-2 placeholder-gray-500 focus:outline-none rounded-md"
          placeholder="Enter amount"
          // defaultValue={row.currentBidAmount !==0 ? row.currentBidAmount  :row.startPrice }
          value={bidAmount !== "0" ? bidAmount : row.startPrice}
          onChange={(e) => {
            setBidAmount(e.target.value.replace(/\D/g, ""));
          }}
        />
      ) : (
        <input
          id="input"
          className="w-full border border-gray-400 px-5 py-2 placeholder-gray-500 focus:outline-none rounded-md"
          placeholder="Enter amount"
          // defaultValue={row.currentBidAmount !==0 ? row.currentBidAmount  :row.startPrice }
          value={bidAmount !== "0" ? bidAmount : row.startPrice}
          onChange={(e) => {
            setBidAmount(e.target.value.replace(/\D/g, ""));
          }}
        />
      )}

      <button
        type="submit"
        className="mt-2 w-full flex items-center justify-center px-5 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
        onClick={() => {
       
          if (parseInt(bidAmount) === 0) {
            call(row.startPrice, row.id);
            setTimeout(() => {''
              // setBidAmount("");
            }, 1000);
          } else if (
            row?.event?.bidLock === "locked" &&
            row.currentBidAmount >= parseInt(bidAmount)
          ) {
            Swal.fire({
              title: "Bid amount should be greater than last bid",
              confirmButtonText: "OK",
              position: "top",
            });
          } else if (parseInt(bidAmount) % row.quoteIncreament !== 0) {
            Swal.fire({
              title:
                "Bid amount should be greater than minimum quote increment.",
              confirmButtonText: "OK",
              position: "top",
            });
          } else if (row.startPrice > parseInt(bidAmount)) {
            Swal.fire({
              title: "Bid amount should be greater than start price.",
              confirmButtonText: "OK",
              position: "top",
            });
          } else if (parseInt(bidAmount) > 2147483647) {
            Swal.fire({
              title: "Bid amount exceeded the limit.",
              confirmButtonText: "OK",
              position: "top",
            });
          } else {
            call(bidAmount, row.id);
            setTimeout(() => {
              // setBidAmount("");
            }, 1000);
          }
        }}
      >
        Bid Now
      </button>
    </div>
  );
};

export default withPrivateRoute(WatchList);
