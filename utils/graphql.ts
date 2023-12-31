import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/src/types.dom';
import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  //@ts-ignore
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JSON: any;
  Upload: any;
};

export type AuthenticatedItem = User;

export type Bid = {
  __typename?: 'Bid';
  amount?: Maybe<Scalars['Int']>;
  bidVehicle?: Maybe<Vehicle>;
  coupenDetail?: Maybe<Array<Coupen>>;
  coupenDetailCount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
};


export type BidCoupenDetailArgs = {
  orderBy?: Array<CoupenOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: CoupenWhereInput;
};


export type BidCoupenDetailCountArgs = {
  where?: CoupenWhereInput;
};

export type BidCreateInput = {
  amount?: InputMaybe<Scalars['Int']>;
  bidVehicle?: InputMaybe<VehicleRelateToOneForCreateInput>;
  coupenDetail?: InputMaybe<CoupenRelateToManyForCreateInput>;
  name?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

/**  A custom Bid History for Vehicle  */
export type BidHistory = {
  __typename?: 'BidHistory';
  amount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type BidManyRelationFilter = {
  every?: InputMaybe<BidWhereInput>;
  none?: InputMaybe<BidWhereInput>;
  some?: InputMaybe<BidWhereInput>;
};

export type BidOrderByInput = {
  amount?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type BidRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<BidWhereUniqueInput>>;
  create?: InputMaybe<Array<BidCreateInput>>;
};

export type BidRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<BidWhereUniqueInput>>;
  create?: InputMaybe<Array<BidCreateInput>>;
  disconnect?: InputMaybe<Array<BidWhereUniqueInput>>;
  set?: InputMaybe<Array<BidWhereUniqueInput>>;
};

export type BidRelateToOneForCreateInput = {
  connect?: InputMaybe<BidWhereUniqueInput>;
  create?: InputMaybe<BidCreateInput>;
};

export type BidRelateToOneForUpdateInput = {
  connect?: InputMaybe<BidWhereUniqueInput>;
  create?: InputMaybe<BidCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type BidUpdateArgs = {
  data: BidUpdateInput;
  where: BidWhereUniqueInput;
};

export type BidUpdateInput = {
  amount?: InputMaybe<Scalars['Int']>;
  bidVehicle?: InputMaybe<VehicleRelateToOneForUpdateInput>;
  coupenDetail?: InputMaybe<CoupenRelateToManyForUpdateInput>;
  name?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type BidWhereInput = {
  AND?: InputMaybe<Array<BidWhereInput>>;
  NOT?: InputMaybe<Array<BidWhereInput>>;
  OR?: InputMaybe<Array<BidWhereInput>>;
  amount?: InputMaybe<IntNullableFilter>;
  bidVehicle?: InputMaybe<VehicleWhereInput>;
  coupenDetail?: InputMaybe<CoupenManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type BidWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type BooleanFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilter>;
};

export type ContactUs = {
  __typename?: 'ContactUs';
  createdAt?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  status?: Maybe<ContactUsStatusType>;
  subject?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ContactUsCreateInput = {
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  mobile?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<ContactUsStatusType>;
  subject?: InputMaybe<Scalars['String']>;
};

export type ContactUsOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  firstName?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  lastName?: InputMaybe<OrderDirection>;
  message?: InputMaybe<OrderDirection>;
  mobile?: InputMaybe<OrderDirection>;
  state?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  subject?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export enum ContactUsStatusType {
  Created = 'created',
  Solved = 'solved'
}

export type ContactUsStatusTypeNullableFilter = {
  equals?: InputMaybe<ContactUsStatusType>;
  in?: InputMaybe<Array<ContactUsStatusType>>;
  not?: InputMaybe<ContactUsStatusTypeNullableFilter>;
  notIn?: InputMaybe<Array<ContactUsStatusType>>;
};

export type ContactUsUpdateArgs = {
  data: ContactUsUpdateInput;
  where: ContactUsWhereUniqueInput;
};

export type ContactUsUpdateInput = {
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  mobile?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<ContactUsStatusType>;
  subject?: InputMaybe<Scalars['String']>;
};

export type ContactUsWhereInput = {
  AND?: InputMaybe<Array<ContactUsWhereInput>>;
  NOT?: InputMaybe<Array<ContactUsWhereInput>>;
  OR?: InputMaybe<Array<ContactUsWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  lastName?: InputMaybe<StringFilter>;
  message?: InputMaybe<StringFilter>;
  mobile?: InputMaybe<StringFilter>;
  state?: InputMaybe<StringFilter>;
  status?: InputMaybe<ContactUsStatusTypeNullableFilter>;
  subject?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type ContactUsWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Coupen = {
  __typename?: 'Coupen';
  bidDetail?: Maybe<Bid>;
  coupenNumber?: Maybe<Scalars['String']>;
  coupenStatus?: Maybe<CoupenCoupenStatusType>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  paymentDetail?: Maybe<Payment>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userDetail?: Maybe<User>;
  vehicleDetail?: Maybe<Vehicle>;
};

export enum CoupenCoupenStatusType {
  Applied = 'applied',
  Unclaimed = 'unclaimed'
}

export type CoupenCoupenStatusTypeNullableFilter = {
  equals?: InputMaybe<CoupenCoupenStatusType>;
  in?: InputMaybe<Array<CoupenCoupenStatusType>>;
  not?: InputMaybe<CoupenCoupenStatusTypeNullableFilter>;
  notIn?: InputMaybe<Array<CoupenCoupenStatusType>>;
};

export type CoupenCreateInput = {
  bidDetail?: InputMaybe<BidRelateToOneForCreateInput>;
  coupenNumber?: InputMaybe<Scalars['String']>;
  coupenStatus?: InputMaybe<CoupenCoupenStatusType>;
  paymentDetail?: InputMaybe<PaymentRelateToOneForCreateInput>;
  userDetail?: InputMaybe<UserRelateToOneForCreateInput>;
  vehicleDetail?: InputMaybe<VehicleRelateToOneForCreateInput>;
};

export type CoupenManyRelationFilter = {
  every?: InputMaybe<CoupenWhereInput>;
  none?: InputMaybe<CoupenWhereInput>;
  some?: InputMaybe<CoupenWhereInput>;
};

export type CoupenOrderByInput = {
  coupenNumber?: InputMaybe<OrderDirection>;
  coupenStatus?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type CoupenRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<CoupenWhereUniqueInput>>;
  create?: InputMaybe<Array<CoupenCreateInput>>;
};

export type CoupenRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<CoupenWhereUniqueInput>>;
  create?: InputMaybe<Array<CoupenCreateInput>>;
  disconnect?: InputMaybe<Array<CoupenWhereUniqueInput>>;
  set?: InputMaybe<Array<CoupenWhereUniqueInput>>;
};

export type CoupenRelateToOneForCreateInput = {
  connect?: InputMaybe<CoupenWhereUniqueInput>;
  create?: InputMaybe<CoupenCreateInput>;
};

export type CoupenRelateToOneForUpdateInput = {
  connect?: InputMaybe<CoupenWhereUniqueInput>;
  create?: InputMaybe<CoupenCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type CoupenUpdateArgs = {
  data: CoupenUpdateInput;
  where: CoupenWhereUniqueInput;
};

export type CoupenUpdateInput = {
  bidDetail?: InputMaybe<BidRelateToOneForUpdateInput>;
  coupenNumber?: InputMaybe<Scalars['String']>;
  coupenStatus?: InputMaybe<CoupenCoupenStatusType>;
  paymentDetail?: InputMaybe<PaymentRelateToOneForUpdateInput>;
  userDetail?: InputMaybe<UserRelateToOneForUpdateInput>;
  vehicleDetail?: InputMaybe<VehicleRelateToOneForUpdateInput>;
};

export type CoupenWhereInput = {
  AND?: InputMaybe<Array<CoupenWhereInput>>;
  NOT?: InputMaybe<Array<CoupenWhereInput>>;
  OR?: InputMaybe<Array<CoupenWhereInput>>;
  bidDetail?: InputMaybe<BidWhereInput>;
  coupenNumber?: InputMaybe<StringFilter>;
  coupenStatus?: InputMaybe<CoupenCoupenStatusTypeNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  paymentDetail?: InputMaybe<PaymentWhereInput>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  userDetail?: InputMaybe<UserWhereInput>;
  vehicleDetail?: InputMaybe<VehicleWhereInput>;
};

export type CoupenWhereUniqueInput = {
  coupenNumber?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type CreateInitialUserInput = {
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  mobile?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type EmdUpdate = {
  __typename?: 'EmdUpdate';
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  emdNo?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  payment?: Maybe<Payment>;
  specialVehicleBuyingLimitIncrement?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
  vehicleBuyingLimitIncrement?: Maybe<Scalars['Int']>;
};

export type EmdUpdateCreateInput = {
  createdBy?: InputMaybe<UserRelateToOneForCreateInput>;
  emdNo?: InputMaybe<Scalars['Int']>;
  payment?: InputMaybe<PaymentRelateToOneForCreateInput>;
  specialVehicleBuyingLimitIncrement?: InputMaybe<Scalars['Int']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
  vehicleBuyingLimitIncrement?: InputMaybe<Scalars['Int']>;
};

export type EmdUpdateManyRelationFilter = {
  every?: InputMaybe<EmdUpdateWhereInput>;
  none?: InputMaybe<EmdUpdateWhereInput>;
  some?: InputMaybe<EmdUpdateWhereInput>;
};

export type EmdUpdateOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  emdNo?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  specialVehicleBuyingLimitIncrement?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
  vehicleBuyingLimitIncrement?: InputMaybe<OrderDirection>;
};

export type EmdUpdateRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<EmdUpdateWhereUniqueInput>>;
  create?: InputMaybe<Array<EmdUpdateCreateInput>>;
};

export type EmdUpdateRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<EmdUpdateWhereUniqueInput>>;
  create?: InputMaybe<Array<EmdUpdateCreateInput>>;
  disconnect?: InputMaybe<Array<EmdUpdateWhereUniqueInput>>;
  set?: InputMaybe<Array<EmdUpdateWhereUniqueInput>>;
};

export type EmdUpdateUpdateArgs = {
  data: EmdUpdateUpdateInput;
  where: EmdUpdateWhereUniqueInput;
};

export type EmdUpdateUpdateInput = {
  createdBy?: InputMaybe<UserRelateToOneForUpdateInput>;
  emdNo?: InputMaybe<Scalars['Int']>;
  payment?: InputMaybe<PaymentRelateToOneForUpdateInput>;
  specialVehicleBuyingLimitIncrement?: InputMaybe<Scalars['Int']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
  vehicleBuyingLimitIncrement?: InputMaybe<Scalars['Int']>;
};

export type EmdUpdateWhereInput = {
  AND?: InputMaybe<Array<EmdUpdateWhereInput>>;
  NOT?: InputMaybe<Array<EmdUpdateWhereInput>>;
  OR?: InputMaybe<Array<EmdUpdateWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  emdNo?: InputMaybe<IntFilter>;
  id?: InputMaybe<IdFilter>;
  payment?: InputMaybe<PaymentWhereInput>;
  specialVehicleBuyingLimitIncrement?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  user?: InputMaybe<UserWhereInput>;
  vehicleBuyingLimitIncrement?: InputMaybe<IntNullableFilter>;
};

export type EmdUpdateWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Event = {
  __typename?: 'Event';
  ExcelFile?: Maybe<ExcelUpload>;
  Report?: Maybe<Scalars['JSON']>;
  bidLock?: Maybe<EventBidLockType>;
  createdAt?: Maybe<Scalars['DateTime']>;
  downloadableFile?: Maybe<FileFieldOutput>;
  endDate?: Maybe<Scalars['DateTime']>;
  eventCategory?: Maybe<Scalars['String']>;
  eventNo?: Maybe<Scalars['Int']>;
  eventType?: Maybe<Array<EventType>>;
  eventTypeCount?: Maybe<Scalars['Int']>;
  extraTime?: Maybe<Scalars['Int']>;
  extraTimeTrigerIn?: Maybe<Scalars['Int']>;
  gapInBetweenVehicles?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  isSpecialEvent?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Location>;
  noOfBids?: Maybe<Scalars['Int']>;
  participants?: Maybe<Array<User>>;
  participantsCount?: Maybe<Scalars['Int']>;
  pauseDate?: Maybe<Scalars['DateTime']>;
  pausedTotalTime?: Maybe<Scalars['Int']>;
  seller?: Maybe<Seller>;
  startDate?: Maybe<Scalars['DateTime']>;
  status?: Maybe<EventStatusType>;
  termsAndConditions?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  vehicleLiveTimeIn?: Maybe<Scalars['Int']>;
  vehicles?: Maybe<Array<Vehicle>>;
  vehiclesCount?: Maybe<Scalars['Int']>;
};


export type EventEventTypeArgs = {
  orderBy?: Array<EventTypeOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: EventTypeWhereInput;
};


export type EventEventTypeCountArgs = {
  where?: EventTypeWhereInput;
};


export type EventParticipantsArgs = {
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: UserWhereInput;
};


export type EventParticipantsCountArgs = {
  where?: UserWhereInput;
};


export type EventVehiclesArgs = {
  orderBy?: Array<VehicleOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: VehicleWhereInput;
};


export type EventVehiclesCountArgs = {
  where?: VehicleWhereInput;
};

export enum EventBidLockType {
  Locked = 'locked',
  Unlocked = 'unlocked'
}

export type EventBidLockTypeNullableFilter = {
  equals?: InputMaybe<EventBidLockType>;
  in?: InputMaybe<Array<EventBidLockType>>;
  not?: InputMaybe<EventBidLockTypeNullableFilter>;
  notIn?: InputMaybe<Array<EventBidLockType>>;
};

export type EventCreateInput = {
  ExcelFile?: InputMaybe<ExcelUploadRelateToOneForCreateInput>;
  bidLock?: InputMaybe<EventBidLockType>;
  downloadableFile?: InputMaybe<FileFieldInput>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  eventCategory?: InputMaybe<Scalars['String']>;
  eventNo?: InputMaybe<Scalars['Int']>;
  eventType?: InputMaybe<EventTypeRelateToManyForCreateInput>;
  extraTime?: InputMaybe<Scalars['Int']>;
  extraTimeTrigerIn?: InputMaybe<Scalars['Int']>;
  gapInBetweenVehicles?: InputMaybe<Scalars['Int']>;
  isSpecialEvent?: InputMaybe<Scalars['Boolean']>;
  location?: InputMaybe<LocationRelateToOneForCreateInput>;
  noOfBids?: InputMaybe<Scalars['Int']>;
  participants?: InputMaybe<UserRelateToManyForCreateInput>;
  pauseDate?: InputMaybe<Scalars['DateTime']>;
  pausedTotalTime?: InputMaybe<Scalars['Int']>;
  seller?: InputMaybe<SellerRelateToOneForCreateInput>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<EventStatusType>;
  termsAndConditions?: InputMaybe<Scalars['String']>;
  vehicleLiveTimeIn?: InputMaybe<Scalars['Int']>;
  vehicles?: InputMaybe<VehicleRelateToManyForCreateInput>;
};

export type EventManyRelationFilter = {
  every?: InputMaybe<EventWhereInput>;
  none?: InputMaybe<EventWhereInput>;
  some?: InputMaybe<EventWhereInput>;
};

export type EventOrderByInput = {
  bidLock?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  endDate?: InputMaybe<OrderDirection>;
  eventCategory?: InputMaybe<OrderDirection>;
  eventNo?: InputMaybe<OrderDirection>;
  extraTime?: InputMaybe<OrderDirection>;
  extraTimeTrigerIn?: InputMaybe<OrderDirection>;
  gapInBetweenVehicles?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isSpecialEvent?: InputMaybe<OrderDirection>;
  noOfBids?: InputMaybe<OrderDirection>;
  pauseDate?: InputMaybe<OrderDirection>;
  pausedTotalTime?: InputMaybe<OrderDirection>;
  startDate?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  termsAndConditions?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
  vehicleLiveTimeIn?: InputMaybe<OrderDirection>;
};

export type EventRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<EventWhereUniqueInput>>;
  create?: InputMaybe<Array<EventCreateInput>>;
};

export type EventRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<EventWhereUniqueInput>>;
  create?: InputMaybe<Array<EventCreateInput>>;
  disconnect?: InputMaybe<Array<EventWhereUniqueInput>>;
  set?: InputMaybe<Array<EventWhereUniqueInput>>;
};

export type EventRelateToOneForCreateInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  create?: InputMaybe<EventCreateInput>;
};

export type EventRelateToOneForUpdateInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  create?: InputMaybe<EventCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export enum EventStatusType {
  Active = 'active',
  Blocked = 'blocked',
  Inactive = 'inactive',
  Pause = 'pause',
  Pending = 'pending',
  Stop = 'stop'
}

export type EventStatusTypeNullableFilter = {
  equals?: InputMaybe<EventStatusType>;
  in?: InputMaybe<Array<EventStatusType>>;
  not?: InputMaybe<EventStatusTypeNullableFilter>;
  notIn?: InputMaybe<Array<EventStatusType>>;
};

export type EventType = {
  __typename?: 'EventType';
  createdAt?: Maybe<Scalars['DateTime']>;
  events?: Maybe<Array<Event>>;
  eventsCount?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  seller?: Maybe<Array<Seller>>;
  sellerCount?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<User>;
};


export type EventTypeEventsArgs = {
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: EventWhereInput;
};


export type EventTypeEventsCountArgs = {
  where?: EventWhereInput;
};


export type EventTypeSellerArgs = {
  orderBy?: Array<SellerOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: SellerWhereInput;
};


export type EventTypeSellerCountArgs = {
  where?: SellerWhereInput;
};

export type EventTypeCreateInput = {
  events?: InputMaybe<EventRelateToManyForCreateInput>;
  name?: InputMaybe<Scalars['String']>;
  seller?: InputMaybe<SellerRelateToManyForCreateInput>;
  users?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type EventTypeManyRelationFilter = {
  every?: InputMaybe<EventTypeWhereInput>;
  none?: InputMaybe<EventTypeWhereInput>;
  some?: InputMaybe<EventTypeWhereInput>;
};

export type EventTypeOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type EventTypeRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<EventTypeWhereUniqueInput>>;
  create?: InputMaybe<Array<EventTypeCreateInput>>;
};

export type EventTypeRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<EventTypeWhereUniqueInput>>;
  create?: InputMaybe<Array<EventTypeCreateInput>>;
  disconnect?: InputMaybe<Array<EventTypeWhereUniqueInput>>;
  set?: InputMaybe<Array<EventTypeWhereUniqueInput>>;
};

export type EventTypeUpdateArgs = {
  data: EventTypeUpdateInput;
  where: EventTypeWhereUniqueInput;
};

export type EventTypeUpdateInput = {
  events?: InputMaybe<EventRelateToManyForUpdateInput>;
  name?: InputMaybe<Scalars['String']>;
  seller?: InputMaybe<SellerRelateToManyForUpdateInput>;
  users?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type EventTypeWhereInput = {
  AND?: InputMaybe<Array<EventTypeWhereInput>>;
  NOT?: InputMaybe<Array<EventTypeWhereInput>>;
  OR?: InputMaybe<Array<EventTypeWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  events?: InputMaybe<EventManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  seller?: InputMaybe<SellerManyRelationFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  users?: InputMaybe<UserWhereInput>;
};

export type EventTypeWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type EventUpdateArgs = {
  data: EventUpdateInput;
  where: EventWhereUniqueInput;
};

export type EventUpdateInput = {
  ExcelFile?: InputMaybe<ExcelUploadRelateToOneForUpdateInput>;
  bidLock?: InputMaybe<EventBidLockType>;
  downloadableFile?: InputMaybe<FileFieldInput>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  eventCategory?: InputMaybe<Scalars['String']>;
  eventNo?: InputMaybe<Scalars['Int']>;
  eventType?: InputMaybe<EventTypeRelateToManyForUpdateInput>;
  extraTime?: InputMaybe<Scalars['Int']>;
  extraTimeTrigerIn?: InputMaybe<Scalars['Int']>;
  gapInBetweenVehicles?: InputMaybe<Scalars['Int']>;
  isSpecialEvent?: InputMaybe<Scalars['Boolean']>;
  location?: InputMaybe<LocationRelateToOneForUpdateInput>;
  noOfBids?: InputMaybe<Scalars['Int']>;
  participants?: InputMaybe<UserRelateToManyForUpdateInput>;
  pauseDate?: InputMaybe<Scalars['DateTime']>;
  pausedTotalTime?: InputMaybe<Scalars['Int']>;
  seller?: InputMaybe<SellerRelateToOneForUpdateInput>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<EventStatusType>;
  termsAndConditions?: InputMaybe<Scalars['String']>;
  vehicleLiveTimeIn?: InputMaybe<Scalars['Int']>;
  vehicles?: InputMaybe<VehicleRelateToManyForUpdateInput>;
};

export type EventWhereInput = {
  AND?: InputMaybe<Array<EventWhereInput>>;
  ExcelFile?: InputMaybe<ExcelUploadWhereInput>;
  NOT?: InputMaybe<Array<EventWhereInput>>;
  OR?: InputMaybe<Array<EventWhereInput>>;
  bidLock?: InputMaybe<EventBidLockTypeNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  endDate?: InputMaybe<DateTimeFilter>;
  eventCategory?: InputMaybe<StringNullableFilter>;
  eventNo?: InputMaybe<IntFilter>;
  eventType?: InputMaybe<EventTypeManyRelationFilter>;
  extraTime?: InputMaybe<IntNullableFilter>;
  extraTimeTrigerIn?: InputMaybe<IntNullableFilter>;
  gapInBetweenVehicles?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IdFilter>;
  isSpecialEvent?: InputMaybe<BooleanFilter>;
  location?: InputMaybe<LocationWhereInput>;
  noOfBids?: InputMaybe<IntFilter>;
  participants?: InputMaybe<UserManyRelationFilter>;
  pauseDate?: InputMaybe<DateTimeNullableFilter>;
  pausedTotalTime?: InputMaybe<IntNullableFilter>;
  seller?: InputMaybe<SellerWhereInput>;
  startDate?: InputMaybe<DateTimeFilter>;
  status?: InputMaybe<EventStatusTypeNullableFilter>;
  termsAndConditions?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  vehicleLiveTimeIn?: InputMaybe<IntNullableFilter>;
  vehicles?: InputMaybe<VehicleManyRelationFilter>;
};

export type EventWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type ExcelUpload = {
  __typename?: 'ExcelUpload';
  createdAt?: Maybe<Scalars['DateTime']>;
  event?: Maybe<Event>;
  file?: Maybe<FileFieldOutput>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  vehicles?: Maybe<Array<Vehicle>>;
  vehiclesCount?: Maybe<Scalars['Int']>;
};


export type ExcelUploadVehiclesArgs = {
  orderBy?: Array<VehicleOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: VehicleWhereInput;
};


export type ExcelUploadVehiclesCountArgs = {
  where?: VehicleWhereInput;
};

export type ExcelUploadCreateInput = {
  event?: InputMaybe<EventRelateToOneForCreateInput>;
  file?: InputMaybe<FileFieldInput>;
  name?: InputMaybe<Scalars['String']>;
  vehicles?: InputMaybe<VehicleRelateToManyForCreateInput>;
};

export type ExcelUploadOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type ExcelUploadRelateToOneForCreateInput = {
  connect?: InputMaybe<ExcelUploadWhereUniqueInput>;
  create?: InputMaybe<ExcelUploadCreateInput>;
};

export type ExcelUploadRelateToOneForUpdateInput = {
  connect?: InputMaybe<ExcelUploadWhereUniqueInput>;
  create?: InputMaybe<ExcelUploadCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type ExcelUploadUpdateArgs = {
  data: ExcelUploadUpdateInput;
  where: ExcelUploadWhereUniqueInput;
};

export type ExcelUploadUpdateInput = {
  event?: InputMaybe<EventRelateToOneForUpdateInput>;
  file?: InputMaybe<FileFieldInput>;
  name?: InputMaybe<Scalars['String']>;
  vehicles?: InputMaybe<VehicleRelateToManyForUpdateInput>;
};

export type ExcelUploadWhereInput = {
  AND?: InputMaybe<Array<ExcelUploadWhereInput>>;
  NOT?: InputMaybe<Array<ExcelUploadWhereInput>>;
  OR?: InputMaybe<Array<ExcelUploadWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  event?: InputMaybe<EventWhereInput>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  vehicles?: InputMaybe<VehicleManyRelationFilter>;
};

export type ExcelUploadWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type FileFieldInput = {
  upload: Scalars['Upload'];
};

export type FileFieldOutput = {
  __typename?: 'FileFieldOutput';
  filename: Scalars['String'];
  filesize: Scalars['Int'];
  url: Scalars['String'];
};

export type FloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type IdFilter = {
  equals?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<Scalars['ID']>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilter>;
  notIn?: InputMaybe<Array<Scalars['ID']>>;
};

export enum ImageExtension {
  Gif = 'gif',
  Jpg = 'jpg',
  Png = 'png',
  Webp = 'webp'
}

export type ImageFieldInput = {
  upload: Scalars['Upload'];
};

export type ImageFieldOutput = {
  __typename?: 'ImageFieldOutput';
  extension: ImageExtension;
  filesize: Scalars['Int'];
  height: Scalars['Int'];
  id: Scalars['ID'];
  url: Scalars['String'];
  width: Scalars['Int'];
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta';
  list?: Maybe<KeystoneAdminUiListMeta>;
  lists: Array<KeystoneAdminUiListMeta>;
};


export type KeystoneAdminMetaListArgs = {
  key: Scalars['String'];
};

export type KeystoneAdminUiFieldGroupMeta = {
  __typename?: 'KeystoneAdminUIFieldGroupMeta';
  description?: Maybe<Scalars['String']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  label: Scalars['String'];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta';
  createView: KeystoneAdminUiFieldMetaCreateView;
  customViewsIndex?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  fieldMeta?: Maybe<Scalars['JSON']>;
  isFilterable: Scalars['Boolean'];
  isOrderable: Scalars['Boolean'];
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
  label: Scalars['String'];
  listView: KeystoneAdminUiFieldMetaListView;
  path: Scalars['String'];
  search?: Maybe<QueryMode>;
  viewsIndex: Scalars['Int'];
};


export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView';
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden'
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView';
  fieldMode?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldMode>;
  fieldPosition?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldPosition>;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
  Read = 'read'
}

export enum KeystoneAdminUiFieldMetaItemViewFieldPosition {
  Form = 'form',
  Sidebar = 'sidebar'
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: 'KeystoneAdminUIFieldMetaListView';
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = 'hidden',
  Read = 'read'
}

export type KeystoneAdminUiListMeta = {
  __typename?: 'KeystoneAdminUIListMeta';
  description?: Maybe<Scalars['String']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  groups: Array<KeystoneAdminUiFieldGroupMeta>;
  hideCreate: Scalars['Boolean'];
  hideDelete: Scalars['Boolean'];
  initialColumns: Array<Scalars['String']>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars['Boolean'];
  isSingleton: Scalars['Boolean'];
  itemQueryName: Scalars['String'];
  key: Scalars['String'];
  label: Scalars['String'];
  labelField: Scalars['String'];
  listQueryName: Scalars['String'];
  pageSize: Scalars['Int'];
  path: Scalars['String'];
  plural: Scalars['String'];
  singular: Scalars['String'];
};

export type KeystoneAdminUiSort = {
  __typename?: 'KeystoneAdminUISort';
  direction: KeystoneAdminUiSortDirection;
  field: Scalars['String'];
};

export enum KeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type KeystoneMeta = {
  __typename?: 'KeystoneMeta';
  adminMeta: KeystoneAdminMeta;
};

export type Location = {
  __typename?: 'Location';
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  events?: Maybe<Array<Event>>;
  eventsCount?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  state?: Maybe<State>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type LocationEventsArgs = {
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: EventWhereInput;
};


export type LocationEventsCountArgs = {
  where?: EventWhereInput;
};

export type LocationCreateInput = {
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  events?: InputMaybe<EventRelateToManyForCreateInput>;
  name?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<StateRelateToOneForCreateInput>;
};

export type LocationManyRelationFilter = {
  every?: InputMaybe<LocationWhereInput>;
  none?: InputMaybe<LocationWhereInput>;
  some?: InputMaybe<LocationWhereInput>;
};

export type LocationOrderByInput = {
  city?: InputMaybe<OrderDirection>;
  country?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type LocationRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<LocationWhereUniqueInput>>;
  create?: InputMaybe<Array<LocationCreateInput>>;
};

export type LocationRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<LocationWhereUniqueInput>>;
  create?: InputMaybe<Array<LocationCreateInput>>;
  disconnect?: InputMaybe<Array<LocationWhereUniqueInput>>;
  set?: InputMaybe<Array<LocationWhereUniqueInput>>;
};

export type LocationRelateToOneForCreateInput = {
  connect?: InputMaybe<LocationWhereUniqueInput>;
  create?: InputMaybe<LocationCreateInput>;
};

export type LocationRelateToOneForUpdateInput = {
  connect?: InputMaybe<LocationWhereUniqueInput>;
  create?: InputMaybe<LocationCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type LocationUpdateArgs = {
  data: LocationUpdateInput;
  where: LocationWhereUniqueInput;
};

export type LocationUpdateInput = {
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  events?: InputMaybe<EventRelateToManyForUpdateInput>;
  name?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<StateRelateToOneForUpdateInput>;
};

export type LocationWhereInput = {
  AND?: InputMaybe<Array<LocationWhereInput>>;
  NOT?: InputMaybe<Array<LocationWhereInput>>;
  OR?: InputMaybe<Array<LocationWhereInput>>;
  city?: InputMaybe<StringFilter>;
  country?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  events?: InputMaybe<EventManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  state?: InputMaybe<StateWhereInput>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type LocationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export enum MagicLinkRedemptionErrorCode {
  Failure = 'FAILURE',
  TokenExpired = 'TOKEN_EXPIRED',
  TokenRedeemed = 'TOKEN_REDEEMED'
}

export type Mutation = {
  __typename?: 'Mutation';
  authenticateUserWithPassword?: Maybe<UserAuthenticationWithPasswordResult>;
  createBid?: Maybe<Bid>;
  createBids?: Maybe<Array<Maybe<Bid>>>;
  createContactUs?: Maybe<ContactUs>;
  createContactuses?: Maybe<Array<Maybe<ContactUs>>>;
  createCoupen?: Maybe<Coupen>;
  createCoupens?: Maybe<Array<Maybe<Coupen>>>;
  createEmdUpdate?: Maybe<EmdUpdate>;
  createEmdUpdates?: Maybe<Array<Maybe<EmdUpdate>>>;
  createEvent?: Maybe<Event>;
  createEventType?: Maybe<EventType>;
  createEventTypes?: Maybe<Array<Maybe<EventType>>>;
  createEvents?: Maybe<Array<Maybe<Event>>>;
  createExcelUpload?: Maybe<ExcelUpload>;
  createExcelUploads?: Maybe<Array<Maybe<ExcelUpload>>>;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  createLocation?: Maybe<Location>;
  createLocations?: Maybe<Array<Maybe<Location>>>;
  createPayment?: Maybe<Payment>;
  createPayments?: Maybe<Array<Maybe<Payment>>>;
  createSeller?: Maybe<Seller>;
  createSellers?: Maybe<Array<Maybe<Seller>>>;
  createState?: Maybe<State>;
  createStates?: Maybe<Array<Maybe<State>>>;
  createUser?: Maybe<User>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  createVehicle?: Maybe<Vehicle>;
  createVehicles?: Maybe<Array<Maybe<Vehicle>>>;
  createWorkSheet?: Maybe<WorkSheet>;
  createWorkSheets?: Maybe<Array<Maybe<WorkSheet>>>;
  deleteBid?: Maybe<Bid>;
  deleteBids?: Maybe<Array<Maybe<Bid>>>;
  deleteContactUs?: Maybe<ContactUs>;
  deleteContactuses?: Maybe<Array<Maybe<ContactUs>>>;
  deleteCoupen?: Maybe<Coupen>;
  deleteCoupens?: Maybe<Array<Maybe<Coupen>>>;
  deleteEmdUpdate?: Maybe<EmdUpdate>;
  deleteEmdUpdates?: Maybe<Array<Maybe<EmdUpdate>>>;
  deleteEvent?: Maybe<Event>;
  deleteEventType?: Maybe<EventType>;
  deleteEventTypes?: Maybe<Array<Maybe<EventType>>>;
  deleteEvents?: Maybe<Array<Maybe<Event>>>;
  deleteExcelUpload?: Maybe<ExcelUpload>;
  deleteExcelUploads?: Maybe<Array<Maybe<ExcelUpload>>>;
  deleteLocation?: Maybe<Location>;
  deleteLocations?: Maybe<Array<Maybe<Location>>>;
  deletePayment?: Maybe<Payment>;
  deletePayments?: Maybe<Array<Maybe<Payment>>>;
  deleteSeller?: Maybe<Seller>;
  deleteSellers?: Maybe<Array<Maybe<Seller>>>;
  deleteState?: Maybe<State>;
  deleteStates?: Maybe<Array<Maybe<State>>>;
  deleteUser?: Maybe<User>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  deleteVehicle?: Maybe<Vehicle>;
  deleteVehicles?: Maybe<Array<Maybe<Vehicle>>>;
  deleteWorkSheet?: Maybe<WorkSheet>;
  deleteWorkSheets?: Maybe<Array<Maybe<WorkSheet>>>;
  endSession: Scalars['Boolean'];
  redeemUserMagicAuthToken: RedeemUserMagicAuthTokenResult;
  sendUserMagicAuthLink: Scalars['Boolean'];
  updateBid?: Maybe<Bid>;
  updateBids?: Maybe<Array<Maybe<Bid>>>;
  updateContactUs?: Maybe<ContactUs>;
  updateContactuses?: Maybe<Array<Maybe<ContactUs>>>;
  updateCoupen?: Maybe<Coupen>;
  updateCoupens?: Maybe<Array<Maybe<Coupen>>>;
  updateEmdUpdate?: Maybe<EmdUpdate>;
  updateEmdUpdates?: Maybe<Array<Maybe<EmdUpdate>>>;
  updateEvent?: Maybe<Event>;
  updateEventType?: Maybe<EventType>;
  updateEventTypes?: Maybe<Array<Maybe<EventType>>>;
  updateEvents?: Maybe<Array<Maybe<Event>>>;
  updateExcelUpload?: Maybe<ExcelUpload>;
  updateExcelUploads?: Maybe<Array<Maybe<ExcelUpload>>>;
  updateLocation?: Maybe<Location>;
  updateLocations?: Maybe<Array<Maybe<Location>>>;
  updatePayment?: Maybe<Payment>;
  updatePayments?: Maybe<Array<Maybe<Payment>>>;
  updateSeller?: Maybe<Seller>;
  updateSellers?: Maybe<Array<Maybe<Seller>>>;
  updateState?: Maybe<State>;
  updateStates?: Maybe<Array<Maybe<State>>>;
  updateUser?: Maybe<User>;
  updateUsers?: Maybe<Array<Maybe<User>>>;
  updateVehicle?: Maybe<Vehicle>;
  updateVehicles?: Maybe<Array<Maybe<Vehicle>>>;
  updateWorkSheet?: Maybe<WorkSheet>;
  updateWorkSheets?: Maybe<Array<Maybe<WorkSheet>>>;
};


export type MutationAuthenticateUserWithPasswordArgs = {
  mobile: Scalars['String'];
  password: Scalars['String'];
};


export type MutationCreateBidArgs = {
  data: BidCreateInput;
};


export type MutationCreateBidsArgs = {
  data: Array<BidCreateInput>;
};


export type MutationCreateContactUsArgs = {
  data: ContactUsCreateInput;
};


export type MutationCreateContactusesArgs = {
  data: Array<ContactUsCreateInput>;
};


export type MutationCreateCoupenArgs = {
  data: CoupenCreateInput;
};


export type MutationCreateCoupensArgs = {
  data: Array<CoupenCreateInput>;
};


export type MutationCreateEmdUpdateArgs = {
  data: EmdUpdateCreateInput;
};


export type MutationCreateEmdUpdatesArgs = {
  data: Array<EmdUpdateCreateInput>;
};


export type MutationCreateEventArgs = {
  data: EventCreateInput;
};


export type MutationCreateEventTypeArgs = {
  data: EventTypeCreateInput;
};


export type MutationCreateEventTypesArgs = {
  data: Array<EventTypeCreateInput>;
};


export type MutationCreateEventsArgs = {
  data: Array<EventCreateInput>;
};


export type MutationCreateExcelUploadArgs = {
  data: ExcelUploadCreateInput;
};


export type MutationCreateExcelUploadsArgs = {
  data: Array<ExcelUploadCreateInput>;
};


export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};


export type MutationCreateLocationArgs = {
  data: LocationCreateInput;
};


export type MutationCreateLocationsArgs = {
  data: Array<LocationCreateInput>;
};


export type MutationCreatePaymentArgs = {
  data: PaymentCreateInput;
};


export type MutationCreatePaymentsArgs = {
  data: Array<PaymentCreateInput>;
};


export type MutationCreateSellerArgs = {
  data: SellerCreateInput;
};


export type MutationCreateSellersArgs = {
  data: Array<SellerCreateInput>;
};


export type MutationCreateStateArgs = {
  data: StateCreateInput;
};


export type MutationCreateStatesArgs = {
  data: Array<StateCreateInput>;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateUsersArgs = {
  data: Array<UserCreateInput>;
};


export type MutationCreateVehicleArgs = {
  data: VehicleCreateInput;
};


export type MutationCreateVehiclesArgs = {
  data: Array<VehicleCreateInput>;
};


export type MutationCreateWorkSheetArgs = {
  data: WorkSheetCreateInput;
};


export type MutationCreateWorkSheetsArgs = {
  data: Array<WorkSheetCreateInput>;
};


export type MutationDeleteBidArgs = {
  where: BidWhereUniqueInput;
};


export type MutationDeleteBidsArgs = {
  where: Array<BidWhereUniqueInput>;
};


export type MutationDeleteContactUsArgs = {
  where: ContactUsWhereUniqueInput;
};


export type MutationDeleteContactusesArgs = {
  where: Array<ContactUsWhereUniqueInput>;
};


export type MutationDeleteCoupenArgs = {
  where: CoupenWhereUniqueInput;
};


export type MutationDeleteCoupensArgs = {
  where: Array<CoupenWhereUniqueInput>;
};


export type MutationDeleteEmdUpdateArgs = {
  where: EmdUpdateWhereUniqueInput;
};


export type MutationDeleteEmdUpdatesArgs = {
  where: Array<EmdUpdateWhereUniqueInput>;
};


export type MutationDeleteEventArgs = {
  where: EventWhereUniqueInput;
};


export type MutationDeleteEventTypeArgs = {
  where: EventTypeWhereUniqueInput;
};


export type MutationDeleteEventTypesArgs = {
  where: Array<EventTypeWhereUniqueInput>;
};


export type MutationDeleteEventsArgs = {
  where: Array<EventWhereUniqueInput>;
};


export type MutationDeleteExcelUploadArgs = {
  where: ExcelUploadWhereUniqueInput;
};


export type MutationDeleteExcelUploadsArgs = {
  where: Array<ExcelUploadWhereUniqueInput>;
};


export type MutationDeleteLocationArgs = {
  where: LocationWhereUniqueInput;
};


export type MutationDeleteLocationsArgs = {
  where: Array<LocationWhereUniqueInput>;
};


export type MutationDeletePaymentArgs = {
  where: PaymentWhereUniqueInput;
};


export type MutationDeletePaymentsArgs = {
  where: Array<PaymentWhereUniqueInput>;
};


export type MutationDeleteSellerArgs = {
  where: SellerWhereUniqueInput;
};


export type MutationDeleteSellersArgs = {
  where: Array<SellerWhereUniqueInput>;
};


export type MutationDeleteStateArgs = {
  where: StateWhereUniqueInput;
};


export type MutationDeleteStatesArgs = {
  where: Array<StateWhereUniqueInput>;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteUsersArgs = {
  where: Array<UserWhereUniqueInput>;
};


export type MutationDeleteVehicleArgs = {
  where: VehicleWhereUniqueInput;
};


export type MutationDeleteVehiclesArgs = {
  where: Array<VehicleWhereUniqueInput>;
};


export type MutationDeleteWorkSheetArgs = {
  where: WorkSheetWhereUniqueInput;
};


export type MutationDeleteWorkSheetsArgs = {
  where: Array<WorkSheetWhereUniqueInput>;
};


export type MutationRedeemUserMagicAuthTokenArgs = {
  mobile: Scalars['String'];
  token: Scalars['String'];
};


export type MutationSendUserMagicAuthLinkArgs = {
  mobile: Scalars['String'];
};


export type MutationUpdateBidArgs = {
  data: BidUpdateInput;
  where: BidWhereUniqueInput;
};


export type MutationUpdateBidsArgs = {
  data: Array<BidUpdateArgs>;
};


export type MutationUpdateContactUsArgs = {
  data: ContactUsUpdateInput;
  where: ContactUsWhereUniqueInput;
};


export type MutationUpdateContactusesArgs = {
  data: Array<ContactUsUpdateArgs>;
};


export type MutationUpdateCoupenArgs = {
  data: CoupenUpdateInput;
  where: CoupenWhereUniqueInput;
};


export type MutationUpdateCoupensArgs = {
  data: Array<CoupenUpdateArgs>;
};


export type MutationUpdateEmdUpdateArgs = {
  data: EmdUpdateUpdateInput;
  where: EmdUpdateWhereUniqueInput;
};


export type MutationUpdateEmdUpdatesArgs = {
  data: Array<EmdUpdateUpdateArgs>;
};


export type MutationUpdateEventArgs = {
  data: EventUpdateInput;
  where: EventWhereUniqueInput;
};


export type MutationUpdateEventTypeArgs = {
  data: EventTypeUpdateInput;
  where: EventTypeWhereUniqueInput;
};


export type MutationUpdateEventTypesArgs = {
  data: Array<EventTypeUpdateArgs>;
};


export type MutationUpdateEventsArgs = {
  data: Array<EventUpdateArgs>;
};


export type MutationUpdateExcelUploadArgs = {
  data: ExcelUploadUpdateInput;
  where: ExcelUploadWhereUniqueInput;
};


export type MutationUpdateExcelUploadsArgs = {
  data: Array<ExcelUploadUpdateArgs>;
};


export type MutationUpdateLocationArgs = {
  data: LocationUpdateInput;
  where: LocationWhereUniqueInput;
};


export type MutationUpdateLocationsArgs = {
  data: Array<LocationUpdateArgs>;
};


export type MutationUpdatePaymentArgs = {
  data: PaymentUpdateInput;
  where: PaymentWhereUniqueInput;
};


export type MutationUpdatePaymentsArgs = {
  data: Array<PaymentUpdateArgs>;
};


export type MutationUpdateSellerArgs = {
  data: SellerUpdateInput;
  where: SellerWhereUniqueInput;
};


export type MutationUpdateSellersArgs = {
  data: Array<SellerUpdateArgs>;
};


export type MutationUpdateStateArgs = {
  data: StateUpdateInput;
  where: StateWhereUniqueInput;
};


export type MutationUpdateStatesArgs = {
  data: Array<StateUpdateArgs>;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateUsersArgs = {
  data: Array<UserUpdateArgs>;
};


export type MutationUpdateVehicleArgs = {
  data: VehicleUpdateInput;
  where: VehicleWhereUniqueInput;
};


export type MutationUpdateVehiclesArgs = {
  data: Array<VehicleUpdateArgs>;
};


export type MutationUpdateWorkSheetArgs = {
  data: WorkSheetUpdateInput;
  where: WorkSheetWhereUniqueInput;
};


export type MutationUpdateWorkSheetsArgs = {
  data: Array<WorkSheetUpdateArgs>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type PasswordFilter = {
  isSet: Scalars['Boolean'];
};

export type PasswordState = {
  __typename?: 'PasswordState';
  isSet: Scalars['Boolean'];
};

export type Payment = {
  __typename?: 'Payment';
  RegistrationExpire?: Maybe<Scalars['DateTime']>;
  amount?: Maybe<Scalars['Int']>;
  coupenDetail?: Maybe<Array<Coupen>>;
  coupenDetailCount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  emdUpdate?: Maybe<Array<EmdUpdate>>;
  emdUpdateCount?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  image?: Maybe<ImageFieldOutput>;
  paymentFor?: Maybe<Scalars['String']>;
  refNo?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
};


export type PaymentCoupenDetailArgs = {
  orderBy?: Array<CoupenOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: CoupenWhereInput;
};


export type PaymentCoupenDetailCountArgs = {
  where?: CoupenWhereInput;
};


export type PaymentEmdUpdateArgs = {
  orderBy?: Array<EmdUpdateOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: EmdUpdateWhereInput;
};


export type PaymentEmdUpdateCountArgs = {
  where?: EmdUpdateWhereInput;
};

export type PaymentCreateInput = {
  RegistrationExpire?: InputMaybe<Scalars['DateTime']>;
  amount?: InputMaybe<Scalars['Int']>;
  coupenDetail?: InputMaybe<CoupenRelateToManyForCreateInput>;
  createdBy?: InputMaybe<UserRelateToOneForCreateInput>;
  description?: InputMaybe<Scalars['String']>;
  emdUpdate?: InputMaybe<EmdUpdateRelateToManyForCreateInput>;
  image?: InputMaybe<ImageFieldInput>;
  paymentFor?: InputMaybe<Scalars['String']>;
  refNo?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type PaymentManyRelationFilter = {
  every?: InputMaybe<PaymentWhereInput>;
  none?: InputMaybe<PaymentWhereInput>;
  some?: InputMaybe<PaymentWhereInput>;
};

export type PaymentOrderByInput = {
  RegistrationExpire?: InputMaybe<OrderDirection>;
  amount?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  paymentFor?: InputMaybe<OrderDirection>;
  refNo?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type PaymentRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<PaymentWhereUniqueInput>>;
  create?: InputMaybe<Array<PaymentCreateInput>>;
};

export type PaymentRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<PaymentWhereUniqueInput>>;
  create?: InputMaybe<Array<PaymentCreateInput>>;
  disconnect?: InputMaybe<Array<PaymentWhereUniqueInput>>;
  set?: InputMaybe<Array<PaymentWhereUniqueInput>>;
};

export type PaymentRelateToOneForCreateInput = {
  connect?: InputMaybe<PaymentWhereUniqueInput>;
  create?: InputMaybe<PaymentCreateInput>;
};

export type PaymentRelateToOneForUpdateInput = {
  connect?: InputMaybe<PaymentWhereUniqueInput>;
  create?: InputMaybe<PaymentCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type PaymentUpdateArgs = {
  data: PaymentUpdateInput;
  where: PaymentWhereUniqueInput;
};

export type PaymentUpdateInput = {
  RegistrationExpire?: InputMaybe<Scalars['DateTime']>;
  amount?: InputMaybe<Scalars['Int']>;
  coupenDetail?: InputMaybe<CoupenRelateToManyForUpdateInput>;
  createdBy?: InputMaybe<UserRelateToOneForUpdateInput>;
  description?: InputMaybe<Scalars['String']>;
  emdUpdate?: InputMaybe<EmdUpdateRelateToManyForUpdateInput>;
  image?: InputMaybe<ImageFieldInput>;
  paymentFor?: InputMaybe<Scalars['String']>;
  refNo?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type PaymentWhereInput = {
  AND?: InputMaybe<Array<PaymentWhereInput>>;
  NOT?: InputMaybe<Array<PaymentWhereInput>>;
  OR?: InputMaybe<Array<PaymentWhereInput>>;
  RegistrationExpire?: InputMaybe<DateTimeNullableFilter>;
  amount?: InputMaybe<IntNullableFilter>;
  coupenDetail?: InputMaybe<CoupenManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<StringFilter>;
  emdUpdate?: InputMaybe<EmdUpdateManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  paymentFor?: InputMaybe<StringFilter>;
  refNo?: InputMaybe<IntFilter>;
  status?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type PaymentWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Query = {
  __typename?: 'Query';
  authenticatedItem?: Maybe<AuthenticatedItem>;
  bid?: Maybe<Bid>;
  bids?: Maybe<Array<Bid>>;
  bidsCount?: Maybe<Scalars['Int']>;
  /** complied Events */
  compliedEvents?: Maybe<Array<Maybe<Event>>>;
  contactUs?: Maybe<ContactUs>;
  contactuses?: Maybe<Array<ContactUs>>;
  contactusesCount?: Maybe<Scalars['Int']>;
  coupen?: Maybe<Coupen>;
  coupens?: Maybe<Array<Coupen>>;
  coupensCount?: Maybe<Scalars['Int']>;
  emdUpdate?: Maybe<EmdUpdate>;
  emdUpdates?: Maybe<Array<EmdUpdate>>;
  emdUpdatesCount?: Maybe<Scalars['Int']>;
  event?: Maybe<Event>;
  eventType?: Maybe<EventType>;
  eventTypes?: Maybe<Array<EventType>>;
  eventTypesCount?: Maybe<Scalars['Int']>;
  events?: Maybe<Array<Event>>;
  eventsCount?: Maybe<Scalars['Int']>;
  excelUpload?: Maybe<ExcelUpload>;
  excelUploads?: Maybe<Array<ExcelUpload>>;
  excelUploadsCount?: Maybe<Scalars['Int']>;
  keystone: KeystoneMeta;
  /** Live Events */
  liveEvents?: Maybe<Array<Maybe<Event>>>;
  location?: Maybe<Location>;
  locations?: Maybe<Array<Location>>;
  locationsCount?: Maybe<Scalars['Int']>;
  payment?: Maybe<Payment>;
  payments?: Maybe<Array<Payment>>;
  paymentsCount?: Maybe<Scalars['Int']>;
  seller?: Maybe<Seller>;
  sellers?: Maybe<Array<Seller>>;
  sellersCount?: Maybe<Scalars['Int']>;
  state?: Maybe<State>;
  states?: Maybe<Array<State>>;
  statesCount?: Maybe<Scalars['Int']>;
  /** Bid History for open auction */
  sudoBids?: Maybe<Array<Maybe<BidHistory>>>;
  /** User Pan Cards Count */
  sudoUsersCount?: Maybe<Scalars['Int']>;
  /** Server Time */
  time?: Maybe<Scalars['String']>;
  /** Upcoming Events */
  upcomingEvents?: Maybe<Array<Maybe<Event>>>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
  usersCount?: Maybe<Scalars['Int']>;
  vehicle?: Maybe<Vehicle>;
  vehicles?: Maybe<Array<Vehicle>>;
  vehiclesCount?: Maybe<Scalars['Int']>;
  workSheet?: Maybe<WorkSheet>;
  workSheets?: Maybe<Array<WorkSheet>>;
  workSheetsCount?: Maybe<Scalars['Int']>;
};


export type QueryBidArgs = {
  where: BidWhereUniqueInput;
};


export type QueryBidsArgs = {
  orderBy?: Array<BidOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: BidWhereInput;
};


export type QueryBidsCountArgs = {
  where?: BidWhereInput;
};


export type QueryCompliedEventsArgs = {
  orderBy?: InputMaybe<Array<InputMaybe<EventOrderByInput>>>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
  where?: InputMaybe<EventWhereInput>;
};


export type QueryContactUsArgs = {
  where: ContactUsWhereUniqueInput;
};


export type QueryContactusesArgs = {
  orderBy?: Array<ContactUsOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ContactUsWhereInput;
};


export type QueryContactusesCountArgs = {
  where?: ContactUsWhereInput;
};


export type QueryCoupenArgs = {
  where: CoupenWhereUniqueInput;
};


export type QueryCoupensArgs = {
  orderBy?: Array<CoupenOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: CoupenWhereInput;
};


export type QueryCoupensCountArgs = {
  where?: CoupenWhereInput;
};


export type QueryEmdUpdateArgs = {
  where: EmdUpdateWhereUniqueInput;
};


export type QueryEmdUpdatesArgs = {
  orderBy?: Array<EmdUpdateOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: EmdUpdateWhereInput;
};


export type QueryEmdUpdatesCountArgs = {
  where?: EmdUpdateWhereInput;
};


export type QueryEventArgs = {
  where: EventWhereUniqueInput;
};


export type QueryEventTypeArgs = {
  where: EventTypeWhereUniqueInput;
};


export type QueryEventTypesArgs = {
  orderBy?: Array<EventTypeOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: EventTypeWhereInput;
};


export type QueryEventTypesCountArgs = {
  where?: EventTypeWhereInput;
};


export type QueryEventsArgs = {
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: EventWhereInput;
};


export type QueryEventsCountArgs = {
  where?: EventWhereInput;
};


export type QueryExcelUploadArgs = {
  where: ExcelUploadWhereUniqueInput;
};


export type QueryExcelUploadsArgs = {
  orderBy?: Array<ExcelUploadOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ExcelUploadWhereInput;
};


export type QueryExcelUploadsCountArgs = {
  where?: ExcelUploadWhereInput;
};


export type QueryLiveEventsArgs = {
  orderBy?: InputMaybe<Array<InputMaybe<EventOrderByInput>>>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
  where?: InputMaybe<EventWhereInput>;
};


export type QueryLocationArgs = {
  where: LocationWhereUniqueInput;
};


export type QueryLocationsArgs = {
  orderBy?: Array<LocationOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: LocationWhereInput;
};


export type QueryLocationsCountArgs = {
  where?: LocationWhereInput;
};


export type QueryPaymentArgs = {
  where: PaymentWhereUniqueInput;
};


export type QueryPaymentsArgs = {
  orderBy?: Array<PaymentOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: PaymentWhereInput;
};


export type QueryPaymentsCountArgs = {
  where?: PaymentWhereInput;
};


export type QuerySellerArgs = {
  where: SellerWhereUniqueInput;
};


export type QuerySellersArgs = {
  orderBy?: Array<SellerOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: SellerWhereInput;
};


export type QuerySellersCountArgs = {
  where?: SellerWhereInput;
};


export type QueryStateArgs = {
  where: StateWhereUniqueInput;
};


export type QueryStatesArgs = {
  orderBy?: Array<StateOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: StateWhereInput;
};


export type QueryStatesCountArgs = {
  where?: StateWhereInput;
};


export type QuerySudoBidsArgs = {
  orderBy?: InputMaybe<Array<InputMaybe<BidOrderByInput>>>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
  where?: InputMaybe<BidWhereInput>;
};


export type QuerySudoUsersCountArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUpcomingEventsArgs = {
  orderBy?: InputMaybe<Array<InputMaybe<EventOrderByInput>>>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
  where?: InputMaybe<EventWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: UserWhereInput;
};


export type QueryUsersCountArgs = {
  where?: UserWhereInput;
};


export type QueryVehicleArgs = {
  where: VehicleWhereUniqueInput;
};


export type QueryVehiclesArgs = {
  orderBy?: Array<VehicleOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: VehicleWhereInput;
};


export type QueryVehiclesCountArgs = {
  where?: VehicleWhereInput;
};


export type QueryWorkSheetArgs = {
  where: WorkSheetWhereUniqueInput;
};


export type QueryWorkSheetsArgs = {
  orderBy?: Array<WorkSheetOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: WorkSheetWhereInput;
};


export type QueryWorkSheetsCountArgs = {
  where?: WorkSheetWhereInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RedeemUserMagicAuthTokenFailure = {
  __typename?: 'RedeemUserMagicAuthTokenFailure';
  code: MagicLinkRedemptionErrorCode;
  message: Scalars['String'];
};

export type RedeemUserMagicAuthTokenResult = RedeemUserMagicAuthTokenFailure | RedeemUserMagicAuthTokenSuccess;

export type RedeemUserMagicAuthTokenSuccess = {
  __typename?: 'RedeemUserMagicAuthTokenSuccess';
  item: User;
  token: Scalars['String'];
};

export type Seller = {
  __typename?: 'Seller';
  GSTNumbber?: Maybe<Scalars['String']>;
  bannedUsers?: Maybe<Array<User>>;
  bannedUsersCount?: Maybe<Scalars['Int']>;
  billingContactPerson?: Maybe<Scalars['String']>;
  contactPerson?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  events?: Maybe<Array<Event>>;
  eventsCount?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nationalHead?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  vehicleCategory?: Maybe<Array<EventType>>;
  vehicleCategoryCount?: Maybe<Scalars['Int']>;
};


export type SellerBannedUsersArgs = {
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: UserWhereInput;
};


export type SellerBannedUsersCountArgs = {
  where?: UserWhereInput;
};


export type SellerEventsArgs = {
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: EventWhereInput;
};


export type SellerEventsCountArgs = {
  where?: EventWhereInput;
};


export type SellerVehicleCategoryArgs = {
  orderBy?: Array<EventTypeOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: EventTypeWhereInput;
};


export type SellerVehicleCategoryCountArgs = {
  where?: EventTypeWhereInput;
};

export type SellerCreateInput = {
  GSTNumbber?: InputMaybe<Scalars['String']>;
  bannedUsers?: InputMaybe<UserRelateToManyForCreateInput>;
  billingContactPerson?: InputMaybe<Scalars['String']>;
  contactPerson?: InputMaybe<Scalars['String']>;
  events?: InputMaybe<EventRelateToManyForCreateInput>;
  mobile?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  nationalHead?: InputMaybe<Scalars['String']>;
  vehicleCategory?: InputMaybe<EventTypeRelateToManyForCreateInput>;
};

export type SellerManyRelationFilter = {
  every?: InputMaybe<SellerWhereInput>;
  none?: InputMaybe<SellerWhereInput>;
  some?: InputMaybe<SellerWhereInput>;
};

export type SellerOrderByInput = {
  GSTNumbber?: InputMaybe<OrderDirection>;
  billingContactPerson?: InputMaybe<OrderDirection>;
  contactPerson?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  mobile?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  nationalHead?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type SellerRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<SellerWhereUniqueInput>>;
  create?: InputMaybe<Array<SellerCreateInput>>;
};

export type SellerRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<SellerWhereUniqueInput>>;
  create?: InputMaybe<Array<SellerCreateInput>>;
  disconnect?: InputMaybe<Array<SellerWhereUniqueInput>>;
  set?: InputMaybe<Array<SellerWhereUniqueInput>>;
};

export type SellerRelateToOneForCreateInput = {
  connect?: InputMaybe<SellerWhereUniqueInput>;
  create?: InputMaybe<SellerCreateInput>;
};

export type SellerRelateToOneForUpdateInput = {
  connect?: InputMaybe<SellerWhereUniqueInput>;
  create?: InputMaybe<SellerCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type SellerUpdateArgs = {
  data: SellerUpdateInput;
  where: SellerWhereUniqueInput;
};

export type SellerUpdateInput = {
  GSTNumbber?: InputMaybe<Scalars['String']>;
  bannedUsers?: InputMaybe<UserRelateToManyForUpdateInput>;
  billingContactPerson?: InputMaybe<Scalars['String']>;
  contactPerson?: InputMaybe<Scalars['String']>;
  events?: InputMaybe<EventRelateToManyForUpdateInput>;
  mobile?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  nationalHead?: InputMaybe<Scalars['String']>;
  vehicleCategory?: InputMaybe<EventTypeRelateToManyForUpdateInput>;
};

export type SellerWhereInput = {
  AND?: InputMaybe<Array<SellerWhereInput>>;
  GSTNumbber?: InputMaybe<StringFilter>;
  NOT?: InputMaybe<Array<SellerWhereInput>>;
  OR?: InputMaybe<Array<SellerWhereInput>>;
  bannedUsers?: InputMaybe<UserManyRelationFilter>;
  billingContactPerson?: InputMaybe<StringFilter>;
  contactPerson?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  events?: InputMaybe<EventManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  mobile?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nationalHead?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  vehicleCategory?: InputMaybe<EventTypeManyRelationFilter>;
};

export type SellerWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type State = {
  __typename?: 'State';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  locations?: Maybe<Array<Location>>;
  locationsCount?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<Array<User>>;
  usersCount?: Maybe<Scalars['Int']>;
};


export type StateLocationsArgs = {
  orderBy?: Array<LocationOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: LocationWhereInput;
};


export type StateLocationsCountArgs = {
  where?: LocationWhereInput;
};


export type StateUsersArgs = {
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: UserWhereInput;
};


export type StateUsersCountArgs = {
  where?: UserWhereInput;
};

export type StateCreateInput = {
  locations?: InputMaybe<LocationRelateToManyForCreateInput>;
  name?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<UserRelateToManyForCreateInput>;
};

export type StateManyRelationFilter = {
  every?: InputMaybe<StateWhereInput>;
  none?: InputMaybe<StateWhereInput>;
  some?: InputMaybe<StateWhereInput>;
};

export type StateOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type StateRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<StateWhereUniqueInput>>;
  create?: InputMaybe<Array<StateCreateInput>>;
};

export type StateRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<StateWhereUniqueInput>>;
  create?: InputMaybe<Array<StateCreateInput>>;
  disconnect?: InputMaybe<Array<StateWhereUniqueInput>>;
  set?: InputMaybe<Array<StateWhereUniqueInput>>;
};

export type StateRelateToOneForCreateInput = {
  connect?: InputMaybe<StateWhereUniqueInput>;
  create?: InputMaybe<StateCreateInput>;
};

export type StateRelateToOneForUpdateInput = {
  connect?: InputMaybe<StateWhereUniqueInput>;
  create?: InputMaybe<StateCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type StateUpdateArgs = {
  data: StateUpdateInput;
  where: StateWhereUniqueInput;
};

export type StateUpdateInput = {
  locations?: InputMaybe<LocationRelateToManyForUpdateInput>;
  name?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<UserRelateToManyForUpdateInput>;
};

export type StateWhereInput = {
  AND?: InputMaybe<Array<StateWhereInput>>;
  NOT?: InputMaybe<Array<StateWhereInput>>;
  OR?: InputMaybe<Array<StateWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  locations?: InputMaybe<LocationManyRelationFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  users?: InputMaybe<UserManyRelationFilter>;
};

export type StateWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** New Live Bids */
  liveBid?: Maybe<Bid>;
  time?: Maybe<Time>;
};


export type SubscriptionLiveBidArgs = {
  id: Scalars['ID'];
};

export type Time = {
  __typename?: 'Time';
  iso: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  activeBids?: Maybe<Array<Vehicle>>;
  activeBidsCount?: Maybe<Scalars['Int']>;
  bannedSellers?: Maybe<Array<Seller>>;
  bannedSellersCount?: Maybe<Scalars['Int']>;
  businessName?: Maybe<Scalars['String']>;
  category?: Maybe<Array<EventType>>;
  categoryCount?: Maybe<Scalars['Int']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  coupenDetail?: Maybe<Array<Coupen>>;
  coupenDetailCount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  currentVehicleBuyingLimit?: Maybe<VehicleBuyingLimits>;
  dealerId?: Maybe<Scalars['String']>;
  dealership?: Maybe<ImageFieldOutput>;
  email?: Maybe<Scalars['String']>;
  emdUpdates?: Maybe<Array<EmdUpdate>>;
  emdUpdatesByAdmin?: Maybe<Array<EmdUpdate>>;
  emdUpdatesByAdminCount?: Maybe<Scalars['Int']>;
  emdUpdatesCount?: Maybe<Scalars['Int']>;
  eventDetail?: Maybe<Array<Event>>;
  eventDetailCount?: Maybe<Scalars['Int']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  idNo?: Maybe<Scalars['Int']>;
  idProof?: Maybe<ImageFieldOutput>;
  idProofBack?: Maybe<ImageFieldOutput>;
  idProofNo?: Maybe<Scalars['String']>;
  idProofType?: Maybe<UserIdProofTypeType>;
  image?: Maybe<ImageFieldOutput>;
  lastName?: Maybe<Scalars['String']>;
  magicAuthIssuedAt?: Maybe<Scalars['DateTime']>;
  magicAuthRedeemedAt?: Maybe<Scalars['DateTime']>;
  magicAuthToken?: Maybe<PasswordState>;
  mobile?: Maybe<Scalars['String']>;
  pancard?: Maybe<ImageFieldOutput>;
  pancardNo?: Maybe<Scalars['String']>;
  password?: Maybe<PasswordState>;
  paymentByAdmin?: Maybe<Payment>;
  payments?: Maybe<Array<Payment>>;
  paymentsCount?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  quotedBids?: Maybe<Array<Bid>>;
  quotedBidsCount?: Maybe<Scalars['Int']>;
  role?: Maybe<UserRoleType>;
  specialVehicleBuyingLimit?: Maybe<Scalars['Int']>;
  state?: Maybe<Scalars['String']>;
  states?: Maybe<Array<State>>;
  statesCount?: Maybe<Scalars['Int']>;
  status?: Maybe<UserStatusType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username?: Maybe<Scalars['String']>;
  vehicleBuyingLimit?: Maybe<Scalars['Int']>;
  watchList?: Maybe<Array<Vehicle>>;
  watchListCount?: Maybe<Scalars['Int']>;
};


export type UserActiveBidsArgs = {
  orderBy?: Array<VehicleOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: VehicleWhereInput;
};


export type UserActiveBidsCountArgs = {
  where?: VehicleWhereInput;
};


export type UserBannedSellersArgs = {
  orderBy?: Array<SellerOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: SellerWhereInput;
};


export type UserBannedSellersCountArgs = {
  where?: SellerWhereInput;
};


export type UserCategoryArgs = {
  orderBy?: Array<EventTypeOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: EventTypeWhereInput;
};


export type UserCategoryCountArgs = {
  where?: EventTypeWhereInput;
};


export type UserCoupenDetailArgs = {
  orderBy?: Array<CoupenOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: CoupenWhereInput;
};


export type UserCoupenDetailCountArgs = {
  where?: CoupenWhereInput;
};


export type UserEmdUpdatesArgs = {
  orderBy?: Array<EmdUpdateOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: EmdUpdateWhereInput;
};


export type UserEmdUpdatesByAdminArgs = {
  orderBy?: Array<EmdUpdateOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: EmdUpdateWhereInput;
};


export type UserEmdUpdatesByAdminCountArgs = {
  where?: EmdUpdateWhereInput;
};


export type UserEmdUpdatesCountArgs = {
  where?: EmdUpdateWhereInput;
};


export type UserEventDetailArgs = {
  orderBy?: Array<EventOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: EventWhereInput;
};


export type UserEventDetailCountArgs = {
  where?: EventWhereInput;
};


export type UserPaymentsArgs = {
  orderBy?: Array<PaymentOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: PaymentWhereInput;
};


export type UserPaymentsCountArgs = {
  where?: PaymentWhereInput;
};


export type UserQuotedBidsArgs = {
  orderBy?: Array<BidOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: BidWhereInput;
};


export type UserQuotedBidsCountArgs = {
  where?: BidWhereInput;
};


export type UserStatesArgs = {
  orderBy?: Array<StateOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: StateWhereInput;
};


export type UserStatesCountArgs = {
  where?: StateWhereInput;
};


export type UserWatchListArgs = {
  orderBy?: Array<VehicleOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: VehicleWhereInput;
};


export type UserWatchListCountArgs = {
  where?: VehicleWhereInput;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: 'UserAuthenticationWithPasswordFailure';
  message: Scalars['String'];
};

export type UserAuthenticationWithPasswordResult = UserAuthenticationWithPasswordFailure | UserAuthenticationWithPasswordSuccess;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: 'UserAuthenticationWithPasswordSuccess';
  item: User;
  sessionToken: Scalars['String'];
};

export type UserCreateInput = {
  activeBids?: InputMaybe<VehicleRelateToManyForCreateInput>;
  bannedSellers?: InputMaybe<SellerRelateToManyForCreateInput>;
  businessName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<EventTypeRelateToManyForCreateInput>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  coupenDetail?: InputMaybe<CoupenRelateToManyForCreateInput>;
  dealerId?: InputMaybe<Scalars['String']>;
  dealership?: InputMaybe<ImageFieldInput>;
  email?: InputMaybe<Scalars['String']>;
  emdUpdates?: InputMaybe<EmdUpdateRelateToManyForCreateInput>;
  emdUpdatesByAdmin?: InputMaybe<EmdUpdateRelateToManyForCreateInput>;
  eventDetail?: InputMaybe<EventRelateToManyForCreateInput>;
  firstName?: InputMaybe<Scalars['String']>;
  idNo?: InputMaybe<Scalars['Int']>;
  idProof?: InputMaybe<ImageFieldInput>;
  idProofBack?: InputMaybe<ImageFieldInput>;
  idProofNo?: InputMaybe<Scalars['String']>;
  idProofType?: InputMaybe<UserIdProofTypeType>;
  image?: InputMaybe<ImageFieldInput>;
  lastName?: InputMaybe<Scalars['String']>;
  magicAuthIssuedAt?: InputMaybe<Scalars['DateTime']>;
  magicAuthRedeemedAt?: InputMaybe<Scalars['DateTime']>;
  magicAuthToken?: InputMaybe<Scalars['String']>;
  mobile?: InputMaybe<Scalars['String']>;
  pancard?: InputMaybe<ImageFieldInput>;
  pancardNo?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  paymentByAdmin?: InputMaybe<PaymentRelateToOneForCreateInput>;
  payments?: InputMaybe<PaymentRelateToManyForCreateInput>;
  phone?: InputMaybe<Scalars['String']>;
  quotedBids?: InputMaybe<BidRelateToManyForCreateInput>;
  role?: InputMaybe<UserRoleType>;
  specialVehicleBuyingLimit?: InputMaybe<Scalars['Int']>;
  state?: InputMaybe<Scalars['String']>;
  states?: InputMaybe<StateRelateToManyForCreateInput>;
  status?: InputMaybe<UserStatusType>;
  username?: InputMaybe<Scalars['String']>;
  vehicleBuyingLimit?: InputMaybe<Scalars['Int']>;
  watchList?: InputMaybe<VehicleRelateToManyForCreateInput>;
};

export enum UserIdProofTypeType {
  Aadhar = 'aadhar',
  DrivingLicense = 'drivingLicense',
  Passport = 'passport'
}

export type UserIdProofTypeTypeNullableFilter = {
  equals?: InputMaybe<UserIdProofTypeType>;
  in?: InputMaybe<Array<UserIdProofTypeType>>;
  not?: InputMaybe<UserIdProofTypeTypeNullableFilter>;
  notIn?: InputMaybe<Array<UserIdProofTypeType>>;
};

export type UserManyRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export type UserOrderByInput = {
  businessName?: InputMaybe<OrderDirection>;
  city?: InputMaybe<OrderDirection>;
  country?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  dealerId?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  firstName?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  idNo?: InputMaybe<OrderDirection>;
  idProofNo?: InputMaybe<OrderDirection>;
  idProofType?: InputMaybe<OrderDirection>;
  lastName?: InputMaybe<OrderDirection>;
  magicAuthIssuedAt?: InputMaybe<OrderDirection>;
  magicAuthRedeemedAt?: InputMaybe<OrderDirection>;
  mobile?: InputMaybe<OrderDirection>;
  pancardNo?: InputMaybe<OrderDirection>;
  phone?: InputMaybe<OrderDirection>;
  role?: InputMaybe<OrderDirection>;
  specialVehicleBuyingLimit?: InputMaybe<OrderDirection>;
  state?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
  username?: InputMaybe<OrderDirection>;
  vehicleBuyingLimit?: InputMaybe<OrderDirection>;
};

export type UserRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  create?: InputMaybe<Array<UserCreateInput>>;
};

export type UserRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  create?: InputMaybe<Array<UserCreateInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserRelateToOneForCreateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
};

export type UserRelateToOneForUpdateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export enum UserRoleType {
  Admin = 'admin',
  Dealer = 'dealer',
  Seller = 'seller',
  Staff = 'staff'
}

export type UserRoleTypeNullableFilter = {
  equals?: InputMaybe<UserRoleType>;
  in?: InputMaybe<Array<UserRoleType>>;
  not?: InputMaybe<UserRoleTypeNullableFilter>;
  notIn?: InputMaybe<Array<UserRoleType>>;
};

export enum UserStatusType {
  Active = 'active',
  Blocked = 'blocked',
  Inactive = 'inactive',
  Pending = 'pending'
}

export type UserStatusTypeNullableFilter = {
  equals?: InputMaybe<UserStatusType>;
  in?: InputMaybe<Array<UserStatusType>>;
  not?: InputMaybe<UserStatusTypeNullableFilter>;
  notIn?: InputMaybe<Array<UserStatusType>>;
};

export type UserUpdateArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateInput = {
  activeBids?: InputMaybe<VehicleRelateToManyForUpdateInput>;
  bannedSellers?: InputMaybe<SellerRelateToManyForUpdateInput>;
  businessName?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<EventTypeRelateToManyForUpdateInput>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  coupenDetail?: InputMaybe<CoupenRelateToManyForUpdateInput>;
  dealerId?: InputMaybe<Scalars['String']>;
  dealership?: InputMaybe<ImageFieldInput>;
  email?: InputMaybe<Scalars['String']>;
  emdUpdates?: InputMaybe<EmdUpdateRelateToManyForUpdateInput>;
  emdUpdatesByAdmin?: InputMaybe<EmdUpdateRelateToManyForUpdateInput>;
  eventDetail?: InputMaybe<EventRelateToManyForUpdateInput>;
  firstName?: InputMaybe<Scalars['String']>;
  idNo?: InputMaybe<Scalars['Int']>;
  idProof?: InputMaybe<ImageFieldInput>;
  idProofBack?: InputMaybe<ImageFieldInput>;
  idProofNo?: InputMaybe<Scalars['String']>;
  idProofType?: InputMaybe<UserIdProofTypeType>;
  image?: InputMaybe<ImageFieldInput>;
  lastName?: InputMaybe<Scalars['String']>;
  magicAuthIssuedAt?: InputMaybe<Scalars['DateTime']>;
  magicAuthRedeemedAt?: InputMaybe<Scalars['DateTime']>;
  magicAuthToken?: InputMaybe<Scalars['String']>;
  mobile?: InputMaybe<Scalars['String']>;
  pancard?: InputMaybe<ImageFieldInput>;
  pancardNo?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  paymentByAdmin?: InputMaybe<PaymentRelateToOneForUpdateInput>;
  payments?: InputMaybe<PaymentRelateToManyForUpdateInput>;
  phone?: InputMaybe<Scalars['String']>;
  quotedBids?: InputMaybe<BidRelateToManyForUpdateInput>;
  role?: InputMaybe<UserRoleType>;
  specialVehicleBuyingLimit?: InputMaybe<Scalars['Int']>;
  state?: InputMaybe<Scalars['String']>;
  states?: InputMaybe<StateRelateToManyForUpdateInput>;
  status?: InputMaybe<UserStatusType>;
  username?: InputMaybe<Scalars['String']>;
  vehicleBuyingLimit?: InputMaybe<Scalars['Int']>;
  watchList?: InputMaybe<VehicleRelateToManyForUpdateInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  activeBids?: InputMaybe<VehicleManyRelationFilter>;
  bannedSellers?: InputMaybe<SellerManyRelationFilter>;
  businessName?: InputMaybe<StringFilter>;
  category?: InputMaybe<EventTypeManyRelationFilter>;
  city?: InputMaybe<StringFilter>;
  country?: InputMaybe<StringFilter>;
  coupenDetail?: InputMaybe<CoupenManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  dealerId?: InputMaybe<StringFilter>;
  email?: InputMaybe<StringFilter>;
  emdUpdates?: InputMaybe<EmdUpdateManyRelationFilter>;
  emdUpdatesByAdmin?: InputMaybe<EmdUpdateManyRelationFilter>;
  eventDetail?: InputMaybe<EventManyRelationFilter>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  idNo?: InputMaybe<IntFilter>;
  idProofNo?: InputMaybe<StringFilter>;
  idProofType?: InputMaybe<UserIdProofTypeTypeNullableFilter>;
  lastName?: InputMaybe<StringFilter>;
  magicAuthIssuedAt?: InputMaybe<DateTimeNullableFilter>;
  magicAuthRedeemedAt?: InputMaybe<DateTimeNullableFilter>;
  magicAuthToken?: InputMaybe<PasswordFilter>;
  mobile?: InputMaybe<StringFilter>;
  pancardNo?: InputMaybe<StringFilter>;
  password?: InputMaybe<PasswordFilter>;
  paymentByAdmin?: InputMaybe<PaymentWhereInput>;
  payments?: InputMaybe<PaymentManyRelationFilter>;
  phone?: InputMaybe<StringFilter>;
  quotedBids?: InputMaybe<BidManyRelationFilter>;
  role?: InputMaybe<UserRoleTypeNullableFilter>;
  specialVehicleBuyingLimit?: InputMaybe<IntNullableFilter>;
  state?: InputMaybe<StringFilter>;
  states?: InputMaybe<StateManyRelationFilter>;
  status?: InputMaybe<UserStatusTypeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  username?: InputMaybe<StringFilter>;
  vehicleBuyingLimit?: InputMaybe<IntNullableFilter>;
  watchList?: InputMaybe<VehicleManyRelationFilter>;
};

export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  idNo?: InputMaybe<Scalars['Int']>;
  mobile?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type Vehicle = {
  __typename?: 'Vehicle';
  ExcelFile?: Maybe<ExcelUpload>;
  additionalRemarks?: Maybe<Scalars['String']>;
  approxParkingCharges?: Maybe<Scalars['String']>;
  area?: Maybe<Scalars['String']>;
  auctionManager?: Maybe<Scalars['String']>;
  autobseContact?: Maybe<Scalars['String']>;
  autobse_contact_person?: Maybe<Scalars['String']>;
  backImage?: Maybe<Scalars['String']>;
  bidAmountUpdate?: Maybe<Scalars['Int']>;
  bidStartTime?: Maybe<Scalars['DateTime']>;
  bidStatus?: Maybe<VehicleBidStatusType>;
  bidTimeExpire?: Maybe<Scalars['DateTime']>;
  buyerFees?: Maybe<Scalars['String']>;
  categoty?: Maybe<Scalars['String']>;
  chassisNo?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  clientContactNo?: Maybe<Scalars['String']>;
  clientContactPerson?: Maybe<Scalars['String']>;
  climateControl?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  coupenDetail?: Maybe<Coupen>;
  createdAt?: Maybe<Scalars['DateTime']>;
  currentBidAmount?: Maybe<Scalars['Int']>;
  currentBidUser?: Maybe<User>;
  dateOfRegistration?: Maybe<Scalars['DateTime']>;
  doorCount?: Maybe<Scalars['Int']>;
  engineNo?: Maybe<Scalars['String']>;
  event?: Maybe<Event>;
  fitness?: Maybe<Scalars['String']>;
  fitnessPermit?: Maybe<Scalars['String']>;
  frontImage?: Maybe<Scalars['String']>;
  fuel?: Maybe<Scalars['String']>;
  gearBox?: Maybe<Scalars['String']>;
  hypothication?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image5?: Maybe<Scalars['String']>;
  image6?: Maybe<Scalars['String']>;
  inspectionLink?: Maybe<Scalars['String']>;
  insurance?: Maybe<Scalars['String']>;
  insuranceStatus?: Maybe<Scalars['String']>;
  insuranceValidTill?: Maybe<Scalars['DateTime']>;
  kmReading?: Maybe<Scalars['Int']>;
  leftImage?: Maybe<Scalars['String']>;
  loanAgreementNo?: Maybe<Scalars['String']>;
  make?: Maybe<Scalars['String']>;
  mileage?: Maybe<Scalars['Int']>;
  model?: Maybe<Scalars['String']>;
  myBidRank?: Maybe<Scalars['Int']>;
  ownership?: Maybe<Scalars['Int']>;
  parkingCharges?: Maybe<Scalars['String']>;
  parkingRate?: Maybe<Scalars['String']>;
  paymentTerms?: Maybe<Scalars['String']>;
  permit?: Maybe<Scalars['String']>;
  powerSteering?: Maybe<Scalars['String']>;
  quoteIncreament?: Maybe<Scalars['Int']>;
  rcStatus?: Maybe<Scalars['String']>;
  registeredOwnerName?: Maybe<Scalars['String']>;
  registrationNumber?: Maybe<Scalars['String']>;
  repoDt?: Maybe<Scalars['DateTime']>;
  reservePrice?: Maybe<Scalars['Float']>;
  rightImage?: Maybe<Scalars['String']>;
  rtoFine?: Maybe<Scalars['String']>;
  shape?: Maybe<Scalars['String']>;
  startBidAmount?: Maybe<Scalars['Float']>;
  startPrice?: Maybe<Scalars['Float']>;
  state?: Maybe<Scalars['String']>;
  tax?: Maybe<Scalars['String']>;
  taxValidityDate?: Maybe<Scalars['DateTime']>;
  totalBids?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userVehicleBids?: Maybe<Array<Bid>>;
  userVehicleBidsCount?: Maybe<Scalars['Int']>;
  varient?: Maybe<Scalars['String']>;
  vehicleCondition?: Maybe<Scalars['String']>;
  vehicleEventStatus?: Maybe<VehicleEventStatus>;
  vehicleIndexNo?: Maybe<Scalars['Int']>;
  vehicleRemarks?: Maybe<Scalars['String']>;
  veicleLocation?: Maybe<Scalars['String']>;
  watchedBy?: Maybe<Array<User>>;
  watchedByCount?: Maybe<Scalars['Int']>;
  yardLocation?: Maybe<Scalars['String']>;
  yearOfManufacture?: Maybe<Scalars['Int']>;
};


export type VehicleUserVehicleBidsArgs = {
  orderBy?: Array<BidOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: BidWhereInput;
};


export type VehicleUserVehicleBidsCountArgs = {
  where?: BidWhereInput;
};


export type VehicleWatchedByArgs = {
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: UserWhereInput;
};


export type VehicleWatchedByCountArgs = {
  where?: UserWhereInput;
};

export enum VehicleBidStatusType {
  Approved = 'approved',
  Declined = 'declined',
  Fulfilled = 'fulfilled',
  Pending = 'pending'
}

export type VehicleBidStatusTypeNullableFilter = {
  equals?: InputMaybe<VehicleBidStatusType>;
  in?: InputMaybe<Array<VehicleBidStatusType>>;
  not?: InputMaybe<VehicleBidStatusTypeNullableFilter>;
  notIn?: InputMaybe<Array<VehicleBidStatusType>>;
};

export type VehicleCreateInput = {
  ExcelFile?: InputMaybe<ExcelUploadRelateToOneForCreateInput>;
  additionalRemarks?: InputMaybe<Scalars['String']>;
  approxParkingCharges?: InputMaybe<Scalars['String']>;
  area?: InputMaybe<Scalars['String']>;
  auctionManager?: InputMaybe<Scalars['String']>;
  autobseContact?: InputMaybe<Scalars['String']>;
  autobse_contact_person?: InputMaybe<Scalars['String']>;
  backImage?: InputMaybe<Scalars['String']>;
  bidAmountUpdate?: InputMaybe<Scalars['Int']>;
  bidStartTime?: InputMaybe<Scalars['DateTime']>;
  bidStatus?: InputMaybe<VehicleBidStatusType>;
  bidTimeExpire?: InputMaybe<Scalars['DateTime']>;
  buyerFees?: InputMaybe<Scalars['String']>;
  categoty?: InputMaybe<Scalars['String']>;
  chassisNo?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  clientContactNo?: InputMaybe<Scalars['String']>;
  clientContactPerson?: InputMaybe<Scalars['String']>;
  climateControl?: InputMaybe<Scalars['String']>;
  color?: InputMaybe<Scalars['String']>;
  coupenDetail?: InputMaybe<CoupenRelateToOneForCreateInput>;
  currentBidAmount?: InputMaybe<Scalars['Int']>;
  currentBidUser?: InputMaybe<UserRelateToOneForCreateInput>;
  dateOfRegistration?: InputMaybe<Scalars['DateTime']>;
  doorCount?: InputMaybe<Scalars['Int']>;
  engineNo?: InputMaybe<Scalars['String']>;
  event?: InputMaybe<EventRelateToOneForCreateInput>;
  fitness?: InputMaybe<Scalars['String']>;
  fitnessPermit?: InputMaybe<Scalars['String']>;
  frontImage?: InputMaybe<Scalars['String']>;
  fuel?: InputMaybe<Scalars['String']>;
  gearBox?: InputMaybe<Scalars['String']>;
  hypothication?: InputMaybe<Scalars['String']>;
  image5?: InputMaybe<Scalars['String']>;
  image6?: InputMaybe<Scalars['String']>;
  inspectionLink?: InputMaybe<Scalars['String']>;
  insurance?: InputMaybe<Scalars['String']>;
  insuranceStatus?: InputMaybe<Scalars['String']>;
  insuranceValidTill?: InputMaybe<Scalars['DateTime']>;
  kmReading?: InputMaybe<Scalars['Int']>;
  leftImage?: InputMaybe<Scalars['String']>;
  loanAgreementNo?: InputMaybe<Scalars['String']>;
  make?: InputMaybe<Scalars['String']>;
  mileage?: InputMaybe<Scalars['Int']>;
  model?: InputMaybe<Scalars['String']>;
  ownership?: InputMaybe<Scalars['Int']>;
  parkingCharges?: InputMaybe<Scalars['String']>;
  parkingRate?: InputMaybe<Scalars['String']>;
  paymentTerms?: InputMaybe<Scalars['String']>;
  permit?: InputMaybe<Scalars['String']>;
  powerSteering?: InputMaybe<Scalars['String']>;
  quoteIncreament?: InputMaybe<Scalars['Int']>;
  rcStatus?: InputMaybe<Scalars['String']>;
  registeredOwnerName?: InputMaybe<Scalars['String']>;
  registrationNumber?: InputMaybe<Scalars['String']>;
  repoDt?: InputMaybe<Scalars['DateTime']>;
  reservePrice?: InputMaybe<Scalars['Float']>;
  rightImage?: InputMaybe<Scalars['String']>;
  rtoFine?: InputMaybe<Scalars['String']>;
  shape?: InputMaybe<Scalars['String']>;
  startBidAmount?: InputMaybe<Scalars['Float']>;
  startPrice?: InputMaybe<Scalars['Float']>;
  state?: InputMaybe<Scalars['String']>;
  tax?: InputMaybe<Scalars['String']>;
  taxValidityDate?: InputMaybe<Scalars['DateTime']>;
  type?: InputMaybe<Scalars['String']>;
  userVehicleBids?: InputMaybe<BidRelateToManyForCreateInput>;
  varient?: InputMaybe<Scalars['String']>;
  vehicleCondition?: InputMaybe<Scalars['String']>;
  vehicleIndexNo?: InputMaybe<Scalars['Int']>;
  vehicleRemarks?: InputMaybe<Scalars['String']>;
  veicleLocation?: InputMaybe<Scalars['String']>;
  watchedBy?: InputMaybe<UserRelateToManyForCreateInput>;
  yardLocation?: InputMaybe<Scalars['String']>;
  yearOfManufacture?: InputMaybe<Scalars['Int']>;
};

export type VehicleManyRelationFilter = {
  every?: InputMaybe<VehicleWhereInput>;
  none?: InputMaybe<VehicleWhereInput>;
  some?: InputMaybe<VehicleWhereInput>;
};

export type VehicleOrderByInput = {
  additionalRemarks?: InputMaybe<OrderDirection>;
  approxParkingCharges?: InputMaybe<OrderDirection>;
  area?: InputMaybe<OrderDirection>;
  auctionManager?: InputMaybe<OrderDirection>;
  autobseContact?: InputMaybe<OrderDirection>;
  autobse_contact_person?: InputMaybe<OrderDirection>;
  backImage?: InputMaybe<OrderDirection>;
  bidAmountUpdate?: InputMaybe<OrderDirection>;
  bidStartTime?: InputMaybe<OrderDirection>;
  bidStatus?: InputMaybe<OrderDirection>;
  bidTimeExpire?: InputMaybe<OrderDirection>;
  buyerFees?: InputMaybe<OrderDirection>;
  categoty?: InputMaybe<OrderDirection>;
  chassisNo?: InputMaybe<OrderDirection>;
  city?: InputMaybe<OrderDirection>;
  clientContactNo?: InputMaybe<OrderDirection>;
  clientContactPerson?: InputMaybe<OrderDirection>;
  climateControl?: InputMaybe<OrderDirection>;
  color?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  currentBidAmount?: InputMaybe<OrderDirection>;
  dateOfRegistration?: InputMaybe<OrderDirection>;
  doorCount?: InputMaybe<OrderDirection>;
  engineNo?: InputMaybe<OrderDirection>;
  fitness?: InputMaybe<OrderDirection>;
  fitnessPermit?: InputMaybe<OrderDirection>;
  frontImage?: InputMaybe<OrderDirection>;
  fuel?: InputMaybe<OrderDirection>;
  gearBox?: InputMaybe<OrderDirection>;
  hypothication?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  image5?: InputMaybe<OrderDirection>;
  image6?: InputMaybe<OrderDirection>;
  inspectionLink?: InputMaybe<OrderDirection>;
  insurance?: InputMaybe<OrderDirection>;
  insuranceStatus?: InputMaybe<OrderDirection>;
  insuranceValidTill?: InputMaybe<OrderDirection>;
  kmReading?: InputMaybe<OrderDirection>;
  leftImage?: InputMaybe<OrderDirection>;
  loanAgreementNo?: InputMaybe<OrderDirection>;
  make?: InputMaybe<OrderDirection>;
  mileage?: InputMaybe<OrderDirection>;
  model?: InputMaybe<OrderDirection>;
  ownership?: InputMaybe<OrderDirection>;
  parkingCharges?: InputMaybe<OrderDirection>;
  parkingRate?: InputMaybe<OrderDirection>;
  paymentTerms?: InputMaybe<OrderDirection>;
  permit?: InputMaybe<OrderDirection>;
  powerSteering?: InputMaybe<OrderDirection>;
  quoteIncreament?: InputMaybe<OrderDirection>;
  rcStatus?: InputMaybe<OrderDirection>;
  registeredOwnerName?: InputMaybe<OrderDirection>;
  registrationNumber?: InputMaybe<OrderDirection>;
  repoDt?: InputMaybe<OrderDirection>;
  reservePrice?: InputMaybe<OrderDirection>;
  rightImage?: InputMaybe<OrderDirection>;
  rtoFine?: InputMaybe<OrderDirection>;
  shape?: InputMaybe<OrderDirection>;
  startBidAmount?: InputMaybe<OrderDirection>;
  startPrice?: InputMaybe<OrderDirection>;
  state?: InputMaybe<OrderDirection>;
  tax?: InputMaybe<OrderDirection>;
  taxValidityDate?: InputMaybe<OrderDirection>;
  type?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
  varient?: InputMaybe<OrderDirection>;
  vehicleCondition?: InputMaybe<OrderDirection>;
  vehicleIndexNo?: InputMaybe<OrderDirection>;
  vehicleRemarks?: InputMaybe<OrderDirection>;
  veicleLocation?: InputMaybe<OrderDirection>;
  yardLocation?: InputMaybe<OrderDirection>;
  yearOfManufacture?: InputMaybe<OrderDirection>;
};

export type VehicleRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<VehicleWhereUniqueInput>>;
  create?: InputMaybe<Array<VehicleCreateInput>>;
};

export type VehicleRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<VehicleWhereUniqueInput>>;
  create?: InputMaybe<Array<VehicleCreateInput>>;
  disconnect?: InputMaybe<Array<VehicleWhereUniqueInput>>;
  set?: InputMaybe<Array<VehicleWhereUniqueInput>>;
};

export type VehicleRelateToOneForCreateInput = {
  connect?: InputMaybe<VehicleWhereUniqueInput>;
  create?: InputMaybe<VehicleCreateInput>;
};

export type VehicleRelateToOneForUpdateInput = {
  connect?: InputMaybe<VehicleWhereUniqueInput>;
  create?: InputMaybe<VehicleCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type VehicleUpdateArgs = {
  data: VehicleUpdateInput;
  where: VehicleWhereUniqueInput;
};

export type VehicleUpdateInput = {
  ExcelFile?: InputMaybe<ExcelUploadRelateToOneForUpdateInput>;
  additionalRemarks?: InputMaybe<Scalars['String']>;
  approxParkingCharges?: InputMaybe<Scalars['String']>;
  area?: InputMaybe<Scalars['String']>;
  auctionManager?: InputMaybe<Scalars['String']>;
  autobseContact?: InputMaybe<Scalars['String']>;
  autobse_contact_person?: InputMaybe<Scalars['String']>;
  backImage?: InputMaybe<Scalars['String']>;
  bidAmountUpdate?: InputMaybe<Scalars['Int']>;
  bidStartTime?: InputMaybe<Scalars['DateTime']>;
  bidStatus?: InputMaybe<VehicleBidStatusType>;
  bidTimeExpire?: InputMaybe<Scalars['DateTime']>;
  buyerFees?: InputMaybe<Scalars['String']>;
  categoty?: InputMaybe<Scalars['String']>;
  chassisNo?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  clientContactNo?: InputMaybe<Scalars['String']>;
  clientContactPerson?: InputMaybe<Scalars['String']>;
  climateControl?: InputMaybe<Scalars['String']>;
  color?: InputMaybe<Scalars['String']>;
  coupenDetail?: InputMaybe<CoupenRelateToOneForUpdateInput>;
  currentBidAmount?: InputMaybe<Scalars['Int']>;
  currentBidUser?: InputMaybe<UserRelateToOneForUpdateInput>;
  dateOfRegistration?: InputMaybe<Scalars['DateTime']>;
  doorCount?: InputMaybe<Scalars['Int']>;
  engineNo?: InputMaybe<Scalars['String']>;
  event?: InputMaybe<EventRelateToOneForUpdateInput>;
  fitness?: InputMaybe<Scalars['String']>;
  fitnessPermit?: InputMaybe<Scalars['String']>;
  frontImage?: InputMaybe<Scalars['String']>;
  fuel?: InputMaybe<Scalars['String']>;
  gearBox?: InputMaybe<Scalars['String']>;
  hypothication?: InputMaybe<Scalars['String']>;
  image5?: InputMaybe<Scalars['String']>;
  image6?: InputMaybe<Scalars['String']>;
  inspectionLink?: InputMaybe<Scalars['String']>;
  insurance?: InputMaybe<Scalars['String']>;
  insuranceStatus?: InputMaybe<Scalars['String']>;
  insuranceValidTill?: InputMaybe<Scalars['DateTime']>;
  kmReading?: InputMaybe<Scalars['Int']>;
  leftImage?: InputMaybe<Scalars['String']>;
  loanAgreementNo?: InputMaybe<Scalars['String']>;
  make?: InputMaybe<Scalars['String']>;
  mileage?: InputMaybe<Scalars['Int']>;
  model?: InputMaybe<Scalars['String']>;
  ownership?: InputMaybe<Scalars['Int']>;
  parkingCharges?: InputMaybe<Scalars['String']>;
  parkingRate?: InputMaybe<Scalars['String']>;
  paymentTerms?: InputMaybe<Scalars['String']>;
  permit?: InputMaybe<Scalars['String']>;
  powerSteering?: InputMaybe<Scalars['String']>;
  quoteIncreament?: InputMaybe<Scalars['Int']>;
  rcStatus?: InputMaybe<Scalars['String']>;
  registeredOwnerName?: InputMaybe<Scalars['String']>;
  registrationNumber?: InputMaybe<Scalars['String']>;
  repoDt?: InputMaybe<Scalars['DateTime']>;
  reservePrice?: InputMaybe<Scalars['Float']>;
  rightImage?: InputMaybe<Scalars['String']>;
  rtoFine?: InputMaybe<Scalars['String']>;
  shape?: InputMaybe<Scalars['String']>;
  startBidAmount?: InputMaybe<Scalars['Float']>;
  startPrice?: InputMaybe<Scalars['Float']>;
  state?: InputMaybe<Scalars['String']>;
  tax?: InputMaybe<Scalars['String']>;
  taxValidityDate?: InputMaybe<Scalars['DateTime']>;
  type?: InputMaybe<Scalars['String']>;
  userVehicleBids?: InputMaybe<BidRelateToManyForUpdateInput>;
  varient?: InputMaybe<Scalars['String']>;
  vehicleCondition?: InputMaybe<Scalars['String']>;
  vehicleIndexNo?: InputMaybe<Scalars['Int']>;
  vehicleRemarks?: InputMaybe<Scalars['String']>;
  veicleLocation?: InputMaybe<Scalars['String']>;
  watchedBy?: InputMaybe<UserRelateToManyForUpdateInput>;
  yardLocation?: InputMaybe<Scalars['String']>;
  yearOfManufacture?: InputMaybe<Scalars['Int']>;
};

export type VehicleWhereInput = {
  AND?: InputMaybe<Array<VehicleWhereInput>>;
  ExcelFile?: InputMaybe<ExcelUploadWhereInput>;
  NOT?: InputMaybe<Array<VehicleWhereInput>>;
  OR?: InputMaybe<Array<VehicleWhereInput>>;
  additionalRemarks?: InputMaybe<StringFilter>;
  approxParkingCharges?: InputMaybe<StringFilter>;
  area?: InputMaybe<StringFilter>;
  auctionManager?: InputMaybe<StringFilter>;
  autobseContact?: InputMaybe<StringFilter>;
  autobse_contact_person?: InputMaybe<StringFilter>;
  backImage?: InputMaybe<StringFilter>;
  bidAmountUpdate?: InputMaybe<IntNullableFilter>;
  bidStartTime?: InputMaybe<DateTimeFilter>;
  bidStatus?: InputMaybe<VehicleBidStatusTypeNullableFilter>;
  bidTimeExpire?: InputMaybe<DateTimeFilter>;
  buyerFees?: InputMaybe<StringFilter>;
  categoty?: InputMaybe<StringFilter>;
  chassisNo?: InputMaybe<StringFilter>;
  city?: InputMaybe<StringFilter>;
  clientContactNo?: InputMaybe<StringFilter>;
  clientContactPerson?: InputMaybe<StringFilter>;
  climateControl?: InputMaybe<StringFilter>;
  color?: InputMaybe<StringFilter>;
  coupenDetail?: InputMaybe<CoupenWhereInput>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  currentBidAmount?: InputMaybe<IntNullableFilter>;
  currentBidUser?: InputMaybe<UserWhereInput>;
  dateOfRegistration?: InputMaybe<DateTimeNullableFilter>;
  doorCount?: InputMaybe<IntNullableFilter>;
  engineNo?: InputMaybe<StringFilter>;
  event?: InputMaybe<EventWhereInput>;
  fitness?: InputMaybe<StringFilter>;
  fitnessPermit?: InputMaybe<StringFilter>;
  frontImage?: InputMaybe<StringFilter>;
  fuel?: InputMaybe<StringFilter>;
  gearBox?: InputMaybe<StringFilter>;
  hypothication?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  image5?: InputMaybe<StringFilter>;
  image6?: InputMaybe<StringFilter>;
  inspectionLink?: InputMaybe<StringFilter>;
  insurance?: InputMaybe<StringFilter>;
  insuranceStatus?: InputMaybe<StringFilter>;
  insuranceValidTill?: InputMaybe<DateTimeNullableFilter>;
  kmReading?: InputMaybe<IntNullableFilter>;
  leftImage?: InputMaybe<StringFilter>;
  loanAgreementNo?: InputMaybe<StringFilter>;
  make?: InputMaybe<StringFilter>;
  mileage?: InputMaybe<IntNullableFilter>;
  model?: InputMaybe<StringFilter>;
  ownership?: InputMaybe<IntNullableFilter>;
  parkingCharges?: InputMaybe<StringFilter>;
  parkingRate?: InputMaybe<StringFilter>;
  paymentTerms?: InputMaybe<StringFilter>;
  permit?: InputMaybe<StringFilter>;
  powerSteering?: InputMaybe<StringFilter>;
  quoteIncreament?: InputMaybe<IntNullableFilter>;
  rcStatus?: InputMaybe<StringFilter>;
  registeredOwnerName?: InputMaybe<StringFilter>;
  registrationNumber?: InputMaybe<StringFilter>;
  repoDt?: InputMaybe<DateTimeNullableFilter>;
  reservePrice?: InputMaybe<FloatNullableFilter>;
  rightImage?: InputMaybe<StringFilter>;
  rtoFine?: InputMaybe<StringFilter>;
  shape?: InputMaybe<StringFilter>;
  startBidAmount?: InputMaybe<FloatNullableFilter>;
  startPrice?: InputMaybe<FloatNullableFilter>;
  state?: InputMaybe<StringFilter>;
  tax?: InputMaybe<StringFilter>;
  taxValidityDate?: InputMaybe<DateTimeNullableFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  userVehicleBids?: InputMaybe<BidManyRelationFilter>;
  varient?: InputMaybe<StringFilter>;
  vehicleCondition?: InputMaybe<StringFilter>;
  vehicleIndexNo?: InputMaybe<IntFilter>;
  vehicleRemarks?: InputMaybe<StringFilter>;
  veicleLocation?: InputMaybe<StringFilter>;
  watchedBy?: InputMaybe<UserManyRelationFilter>;
  yardLocation?: InputMaybe<StringFilter>;
  yearOfManufacture?: InputMaybe<IntNullableFilter>;
};

export type VehicleWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type WorkSheet = {
  __typename?: 'WorkSheet';
  chassis?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  engineNo?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image1?: Maybe<Scalars['String']>;
  image2?: Maybe<Scalars['String']>;
  image3?: Maybe<Scalars['String']>;
  image4?: Maybe<Scalars['String']>;
  image5?: Maybe<Scalars['String']>;
  make?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  registrationNumber?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  varient?: Maybe<Scalars['String']>;
  vehicleCondition?: Maybe<Scalars['String']>;
  videoUrl?: Maybe<Scalars['String']>;
  voiceRecordUrl?: Maybe<Scalars['String']>;
};

export type WorkSheetCreateInput = {
  chassis?: InputMaybe<Scalars['String']>;
  engineNo?: InputMaybe<Scalars['String']>;
  image1?: InputMaybe<Scalars['String']>;
  image2?: InputMaybe<Scalars['String']>;
  image3?: InputMaybe<Scalars['String']>;
  image4?: InputMaybe<Scalars['String']>;
  image5?: InputMaybe<Scalars['String']>;
  make?: InputMaybe<Scalars['String']>;
  model?: InputMaybe<Scalars['String']>;
  registrationNumber?: InputMaybe<Scalars['String']>;
  varient?: InputMaybe<Scalars['String']>;
  vehicleCondition?: InputMaybe<Scalars['String']>;
  videoUrl?: InputMaybe<Scalars['String']>;
  voiceRecordUrl?: InputMaybe<Scalars['String']>;
};

export type WorkSheetOrderByInput = {
  chassis?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  engineNo?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  image1?: InputMaybe<OrderDirection>;
  image2?: InputMaybe<OrderDirection>;
  image3?: InputMaybe<OrderDirection>;
  image4?: InputMaybe<OrderDirection>;
  image5?: InputMaybe<OrderDirection>;
  make?: InputMaybe<OrderDirection>;
  model?: InputMaybe<OrderDirection>;
  registrationNumber?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
  varient?: InputMaybe<OrderDirection>;
  vehicleCondition?: InputMaybe<OrderDirection>;
  videoUrl?: InputMaybe<OrderDirection>;
  voiceRecordUrl?: InputMaybe<OrderDirection>;
};

export type WorkSheetUpdateArgs = {
  data: WorkSheetUpdateInput;
  where: WorkSheetWhereUniqueInput;
};

export type WorkSheetUpdateInput = {
  chassis?: InputMaybe<Scalars['String']>;
  engineNo?: InputMaybe<Scalars['String']>;
  image1?: InputMaybe<Scalars['String']>;
  image2?: InputMaybe<Scalars['String']>;
  image3?: InputMaybe<Scalars['String']>;
  image4?: InputMaybe<Scalars['String']>;
  image5?: InputMaybe<Scalars['String']>;
  make?: InputMaybe<Scalars['String']>;
  model?: InputMaybe<Scalars['String']>;
  registrationNumber?: InputMaybe<Scalars['String']>;
  varient?: InputMaybe<Scalars['String']>;
  vehicleCondition?: InputMaybe<Scalars['String']>;
  videoUrl?: InputMaybe<Scalars['String']>;
  voiceRecordUrl?: InputMaybe<Scalars['String']>;
};

export type WorkSheetWhereInput = {
  AND?: InputMaybe<Array<WorkSheetWhereInput>>;
  NOT?: InputMaybe<Array<WorkSheetWhereInput>>;
  OR?: InputMaybe<Array<WorkSheetWhereInput>>;
  chassis?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  engineNo?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  image1?: InputMaybe<StringFilter>;
  image2?: InputMaybe<StringFilter>;
  image3?: InputMaybe<StringFilter>;
  image4?: InputMaybe<StringFilter>;
  image5?: InputMaybe<StringFilter>;
  make?: InputMaybe<StringFilter>;
  model?: InputMaybe<StringFilter>;
  registrationNumber?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  varient?: InputMaybe<StringFilter>;
  vehicleCondition?: InputMaybe<StringFilter>;
  videoUrl?: InputMaybe<StringFilter>;
  voiceRecordUrl?: InputMaybe<StringFilter>;
};

export type WorkSheetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type VehicleBuyingLimits = {
  __typename?: 'vehicleBuyingLimits';
  specialVehicleBuyingLimit?: Maybe<Scalars['Int']>;
  vehicleBuyingLimit?: Maybe<Scalars['Int']>;
};

export enum VehicleEventStatus {
  Abnormal = 'abnormal',
  Completed = 'completed',
  Live = 'live',
  Upcoming = 'upcoming'
}

export type SendOtpMutationVariables = Exact<{
  mobile: Scalars['String'];
}>;


export type SendOtpMutation = { __typename?: 'Mutation', sendUserMagicAuthLink: boolean };

export type VerifyOtpMutationVariables = Exact<{
  mobile: Scalars['String'];
  token: Scalars['String'];
}>;


export type VerifyOtpMutation = { __typename?: 'Mutation', redeemUserMagicAuthToken: { __typename?: 'RedeemUserMagicAuthTokenFailure' } | { __typename?: 'RedeemUserMagicAuthTokenSuccess', token: string, item: { __typename?: 'User', firstName?: string | null, lastName?: string | null, id: string, mobile?: string | null, email?: string | null, status?: UserStatusType | null } } };

export type AuthenticateUserWithPasswordMutationVariables = Exact<{
  mobile: Scalars['String'];
  password: Scalars['String'];
}>;


export type AuthenticateUserWithPasswordMutation = { __typename?: 'Mutation', authenticateUserWithPassword?: { __typename?: 'UserAuthenticationWithPasswordFailure' } | { __typename?: 'UserAuthenticationWithPasswordSuccess', sessionToken: string, item: { __typename?: 'User', id: string, lastName?: string | null, email?: string | null, firstName?: string | null, username?: string | null, mobile?: string | null, status?: UserStatusType | null } } | null };

export type MyQuotesQueryVariables = Exact<{
  where: VehicleWhereInput;
  take?: InputMaybe<Scalars['Int']>;
  orderBy: Array<BidOrderByInput> | BidOrderByInput;
  vehiclesOrderBy2: Array<VehicleOrderByInput> | VehicleOrderByInput;
}>;


export type MyQuotesQuery = { __typename?: 'Query', vehicles?: Array<{ __typename?: 'Vehicle', registrationNumber?: string | null, type?: string | null, categoty?: string | null, fuel?: string | null, varient?: string | null, make?: string | null, registeredOwnerName?: string | null, model?: string | null, rcStatus?: string | null, yearOfManufacture?: number | null, ownership?: number | null, kmReading?: number | null, insuranceStatus?: string | null, yardLocation?: string | null, engineNo?: string | null, chassisNo?: string | null, currentBidAmount?: number | null, bidAmountUpdate?: number | null, bidStatus?: VehicleBidStatusType | null, id: string, bidTimeExpire?: any | null, vehicleEventStatus?: VehicleEventStatus | null, event?: { __typename?: 'Event', eventNo?: number | null, eventCategory?: string | null, startDate?: any | null, endDate?: any | null, seller?: { __typename?: 'Seller', name?: string | null } | null, eventType?: Array<{ __typename?: 'EventType', name?: string | null }> | null, location?: { __typename?: 'Location', state?: { __typename?: 'State', name?: string | null } | null } | null } | null, userVehicleBids?: Array<{ __typename?: 'Bid', amount?: number | null, bidVehicle?: { __typename?: 'Vehicle', currentBidUser?: { __typename?: 'User', id: string } | null } | null }> | null }> | null };

export type SudoBidsQueryVariables = Exact<{
  where?: InputMaybe<BidWhereInput>;
}>;


export type SudoBidsQuery = { __typename?: 'Query', sudoBids?: Array<{ __typename?: 'BidHistory', userId?: string | null, amount?: number | null, name?: string | null } | null> | null };

export type CreateContactUsMutationVariables = Exact<{
  data: ContactUsCreateInput;
}>;


export type CreateContactUsMutation = { __typename?: 'Mutation', createContactUs?: { __typename?: 'ContactUs', id: string } | null };

export type EventsQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']>;
  skip: Scalars['Int'];
}>;


export type EventsQuery = { __typename?: 'Query', events?: Array<{ __typename?: 'Event', id: string, eventNo?: number | null, eventCategory?: string | null, status?: EventStatusType | null, startDate?: any | null, endDate?: any | null, noOfBids?: number | null, termsAndConditions?: string | null, vehiclesCount?: number | null, seller?: { __typename?: 'Seller', name?: string | null } | null, eventType?: Array<{ __typename?: 'EventType', name?: string | null }> | null, location?: { __typename?: 'Location', name?: string | null, country?: string | null, state?: { __typename?: 'State', name?: string | null } | null } | null, ExcelFile?: { __typename?: 'ExcelUpload', file?: { __typename?: 'FileFieldOutput', url: string } | null } | null }> | null };

export type LiveEventsQueryVariables = Exact<{
  take: Scalars['Int'];
  skip: Scalars['Int'];
  where?: InputMaybe<EventWhereInput>;
}>;


export type LiveEventsQuery = { __typename?: 'Query', liveEvents?: Array<{ __typename?: 'Event', id: string, eventNo?: number | null, eventCategory?: string | null, startDate?: any | null, endDate?: any | null, noOfBids?: number | null, termsAndConditions?: string | null, vehiclesCount?: number | null, seller?: { __typename?: 'Seller', name?: string | null } | null, eventType?: Array<{ __typename?: 'EventType', name?: string | null }> | null, location?: { __typename?: 'Location', name?: string | null, country?: string | null, city?: string | null, state?: { __typename?: 'State', name?: string | null } | null } | null, ExcelFile?: { __typename?: 'ExcelUpload', file?: { __typename?: 'FileFieldOutput', url: string } | null } | null, downloadableFile?: { __typename?: 'FileFieldOutput', url: string } | null } | null> | null };

export type UpcomingEventsQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']>;
  skip: Scalars['Int'];
  where?: InputMaybe<EventWhereInput>;
}>;


export type UpcomingEventsQuery = { __typename?: 'Query', upcomingEvents?: Array<{ __typename?: 'Event', id: string, vehiclesCount?: number | null, eventNo?: number | null, eventCategory?: string | null, startDate?: any | null, noOfBids?: number | null, endDate?: any | null, termsAndConditions?: string | null, seller?: { __typename?: 'Seller', name?: string | null } | null, eventType?: Array<{ __typename?: 'EventType', name?: string | null }> | null, location?: { __typename?: 'Location', name?: string | null, country?: string | null, city?: string | null, state?: { __typename?: 'State', name?: string | null } | null } | null, downloadableFile?: { __typename?: 'FileFieldOutput', url: string } | null } | null> | null };

export type CompliedEventsQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']>;
  skip: Scalars['Int'];
  where?: InputMaybe<EventWhereInput>;
}>;


export type CompliedEventsQuery = { __typename?: 'Query', compliedEvents?: Array<{ __typename?: 'Event', id: string, eventNo?: number | null, eventCategory?: string | null, startDate?: any | null, noOfBids?: number | null, endDate?: any | null, termsAndConditions?: string | null, seller?: { __typename?: 'Seller', name?: string | null } | null, eventType?: Array<{ __typename?: 'EventType', name?: string | null }> | null, location?: { __typename?: 'Location', name?: string | null, country?: string | null, city?: string | null, state?: { __typename?: 'State', name?: string | null } | null } | null, downloadableFile?: { __typename?: 'FileFieldOutput', url: string } | null } | null> | null };

export type GetEventQueryVariables = Exact<{
  where: EventWhereUniqueInput;
  orderBy: Array<VehicleOrderByInput> | VehicleOrderByInput;
  take?: InputMaybe<Scalars['Int']>;
  skip: Scalars['Int'];
  userVehicleBidsOrderBy2: Array<BidOrderByInput> | BidOrderByInput;
}>;


export type GetEventQuery = { __typename?: 'Query', event?: { __typename?: 'Event', id: string, eventNo?: number | null, startDate?: any | null, endDate?: any | null, vehiclesCount?: number | null, noOfBids?: number | null, termsAndConditions?: string | null, bidLock?: EventBidLockType | null, seller?: { __typename?: 'Seller', name?: string | null } | null, eventType?: Array<{ __typename?: 'EventType', name?: string | null }> | null, location?: { __typename?: 'Location', name?: string | null, country?: string | null, city?: string | null, state?: { __typename?: 'State', name?: string | null } | null } | null, ExcelFile?: { __typename?: 'ExcelUpload', file?: { __typename?: 'FileFieldOutput', url: string } | null } | null, vehicles?: Array<{ __typename?: 'Vehicle', id: string, registrationNumber?: string | null, loanAgreementNo?: string | null, registeredOwnerName?: string | null, make?: string | null, model?: string | null, watchedByCount?: number | null, varient?: string | null, categoty?: string | null, fuel?: string | null, type?: string | null, rcStatus?: string | null, yearOfManufacture?: number | null, ownership?: number | null, kmReading?: number | null, startPrice?: number | null, reservePrice?: number | null, repoDt?: any | null, currentBidAmount?: number | null, veicleLocation?: string | null, yardLocation?: string | null, chassisNo?: string | null, engineNo?: string | null, frontImage?: string | null, backImage?: string | null, leftImage?: string | null, rightImage?: string | null, inspectionLink?: string | null, bidTimeExpire?: any | null, myBidRank?: number | null, userVehicleBidsCount?: number | null, totalBids?: number | null, quoteIncreament?: number | null, currentBidUser?: { __typename?: 'User', id: string } | null, userVehicleBids?: Array<{ __typename?: 'Bid', amount?: number | null }> | null, watchedBy?: Array<{ __typename?: 'User', id: string }> | null }> | null } | null };

export type CreateBidMutationVariables = Exact<{
  data: BidCreateInput;
}>;


export type CreateBidMutation = { __typename?: 'Mutation', createBid?: { __typename?: 'Bid', id: string } | null };

export type ActiveBidsQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']>;
  orderBy: Array<BidOrderByInput> | BidOrderByInput;
}>;


export type ActiveBidsQuery = { __typename?: 'Query', authenticatedItem?: { __typename?: 'User', activeBids?: Array<{ __typename?: 'Vehicle', registrationNumber?: string | null, type?: string | null, categoty?: string | null, fuel?: string | null, varient?: string | null, make?: string | null, registeredOwnerName?: string | null, model?: string | null, rcStatus?: string | null, yearOfManufacture?: number | null, ownership?: number | null, kmReading?: number | null, insuranceStatus?: string | null, yardLocation?: string | null, engineNo?: string | null, chassisNo?: string | null, currentBidAmount?: number | null, bidAmountUpdate?: number | null, bidStatus?: VehicleBidStatusType | null, id: string, bidTimeExpire?: any | null, event?: { __typename?: 'Event', eventNo?: number | null, eventCategory?: string | null, startDate?: any | null, endDate?: any | null, seller?: { __typename?: 'Seller', name?: string | null } | null, eventType?: Array<{ __typename?: 'EventType', name?: string | null }> | null, location?: { __typename?: 'Location', state?: { __typename?: 'State', name?: string | null } | null } | null } | null, userVehicleBids?: Array<{ __typename?: 'Bid', amount?: number | null }> | null, currentBidUser?: { __typename?: 'User', id: string, updatedAt?: any | null } | null }> | null } | null };

export type CreatePaymentMutationVariables = Exact<{
  data: PaymentCreateInput;
}>;


export type CreatePaymentMutation = { __typename?: 'Mutation', createPayment?: { __typename?: 'Payment', amount?: number | null, id: string } | null };

export type PaymentsQueryVariables = Exact<{
  orderBy: Array<PaymentOrderByInput> | PaymentOrderByInput;
  skip: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
}>;


export type PaymentsQuery = { __typename?: 'Query', payments?: Array<{ __typename?: 'Payment', amount?: number | null, createdAt?: any | null, paymentFor?: string | null, description?: string | null, image?: { __typename?: 'ImageFieldOutput', url: string, width: number, height: number } | null }> | null };

export type PaymentsDetailsQueryVariables = Exact<{
  orderBy: Array<PaymentOrderByInput> | PaymentOrderByInput;
  skip: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where: PaymentWhereInput;
}>;


export type PaymentsDetailsQuery = { __typename?: 'Query', payments?: Array<{ __typename?: 'Payment', amount?: number | null, createdAt?: any | null, paymentFor?: string | null, description?: string | null, image?: { __typename?: 'ImageFieldOutput', url: string, width: number, height: number } | null }> | null };

export type ReportQueryVariables = Exact<{
  where: VehicleWhereInput;
}>;


export type ReportQuery = { __typename?: 'Query', vehicles?: Array<{ __typename?: 'Vehicle', id: string, bidStatus?: VehicleBidStatusType | null, chassisNo?: string | null, registrationNumber?: string | null, make?: string | null, vehicleEventStatus?: VehicleEventStatus | null, startPrice?: number | null, currentBidAmount?: number | null, event?: { __typename?: 'Event', eventNo?: number | null, endDate?: any | null, seller?: { __typename?: 'Seller', name?: string | null, id: string } | null } | null }> | null };

export type UserPaymentsQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type UserPaymentsQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, payments?: Array<{ __typename?: 'Payment', amount?: number | null, createdAt?: any | null, description?: string | null, paymentFor?: string | null, refNo?: number | null, status?: string | null, updatedAt?: any | null, image?: { __typename?: 'ImageFieldOutput', url: string } | null }> | null } | null };

export type AuthenticatedUserQueryVariables = Exact<{ [key: string]: never; }>;


export type AuthenticatedUserQuery = { __typename?: 'Query', authenticatedItem?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, status?: UserStatusType | null, email?: string | null, mobile?: string | null } | null };

export type GetUserQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type GetUserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, email?: string | null, mobile?: string | null, status?: UserStatusType | null, idProofType?: UserIdProofTypeType | null, idProofNo?: string | null, country?: string | null, city?: string | null, state?: string | null, username?: string | null, pancardNo?: string | null, createdAt?: any | null, specialVehicleBuyingLimit?: number | null, vehicleBuyingLimit?: number | null, pancard?: { __typename?: 'ImageFieldOutput', id: string, filesize: number, width: number, height: number, extension: ImageExtension, url: string } | null, password?: { __typename?: 'PasswordState', isSet: boolean } | null, idProof?: { __typename?: 'ImageFieldOutput', id: string, filesize: number, height: number, width: number, extension: ImageExtension, url: string } | null, states?: Array<{ __typename?: 'State', name?: string | null }> | null, idProofBack?: { __typename?: 'ImageFieldOutput', url: string, filesize: number, width: number, height: number, extension: ImageExtension, id: string } | null, payments?: Array<{ __typename?: 'Payment', paymentFor?: string | null, status?: string | null, RegistrationExpire?: any | null }> | null, currentVehicleBuyingLimit?: { __typename?: 'vehicleBuyingLimits', vehicleBuyingLimit?: number | null, specialVehicleBuyingLimit?: number | null } | null } | null };

export type CreateUserWithNameMutationVariables = Exact<{
  data: UserCreateInput;
}>;


export type CreateUserWithNameMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, mobile?: string | null } | null };

export type CreateUserMutationVariables = Exact<{
  data: UserCreateInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'User', id: string, username?: string | null, mobile?: string | null } | null };

export type UpdateUserMutationVariables = Exact<{
  where: UserWhereUniqueInput;
  data: UserUpdateInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, email?: string | null, mobile?: string | null } | null };

export type ResetPasswordMutationVariables = Exact<{
  where: UserWhereUniqueInput;
  data: UserUpdateInput;
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'User', password?: { __typename?: 'PasswordState', isSet: boolean } | null } | null };

export type UsersQueryVariables = Exact<{
  where: UserWhereInput;
}>;


export type UsersQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'User', id: string }> | null };

export type QueryQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryQuery = { __typename?: 'Query', time?: string | null };

export type AddToWatchListMutationVariables = Exact<{
  data: Array<UserUpdateArgs> | UserUpdateArgs;
}>;


export type AddToWatchListMutation = { __typename?: 'Mutation', updateUsers?: Array<{ __typename?: 'User', id: string } | null> | null };

export type DuplicateDataCheckQueryVariables = Exact<{
  where?: InputMaybe<UserWhereInput>;
}>;


export type DuplicateDataCheckQuery = { __typename?: 'Query', sudoUsersCount?: number | null };

export type WatchListQueryVariables = Exact<{
  orderBy: Array<VehicleOrderByInput> | VehicleOrderByInput;
  take?: InputMaybe<Scalars['Int']>;
  skip: Scalars['Int'];
  userVehicleBidsOrderBy2: Array<BidOrderByInput> | BidOrderByInput;
  userVehicleBidsTake2?: InputMaybe<Scalars['Int']>;
  userVehicleBidsSkip2: Scalars['Int'];
}>;


export type WatchListQuery = { __typename?: 'Query', authenticatedItem?: { __typename?: 'User', watchList?: Array<{ __typename?: 'Vehicle', id: string, registrationNumber?: string | null, loanAgreementNo?: string | null, registeredOwnerName?: string | null, make?: string | null, model?: string | null, watchedByCount?: number | null, varient?: string | null, categoty?: string | null, fuel?: string | null, type?: string | null, rcStatus?: string | null, yearOfManufacture?: number | null, ownership?: number | null, kmReading?: number | null, startPrice?: number | null, reservePrice?: number | null, currentBidAmount?: number | null, veicleLocation?: string | null, yardLocation?: string | null, chassisNo?: string | null, engineNo?: string | null, frontImage?: string | null, bidTimeExpire?: any | null, myBidRank?: number | null, userVehicleBidsCount?: number | null, totalBids?: number | null, vehicleEventStatus?: VehicleEventStatus | null, quoteIncreament?: number | null, currentBidUser?: { __typename?: 'User', id: string } | null, event?: { __typename?: 'Event', noOfBids?: number | null, bidLock?: EventBidLockType | null, startDate?: any | null, seller?: { __typename?: 'Seller', name?: string | null } | null } | null, userVehicleBids?: Array<{ __typename?: 'Bid', amount?: number | null }> | null }> | null } | null };

export type UpdateVehicleMutationVariables = Exact<{
  where: VehicleWhereUniqueInput;
  data: VehicleUpdateInput;
}>;


export type UpdateVehicleMutation = { __typename?: 'Mutation', updateVehicle?: { __typename?: 'Vehicle', id: string } | null };

export type VehiclesQueryVariables = Exact<{
  where: VehicleWhereInput;
  take?: InputMaybe<Scalars['Int']>;
  skip: Scalars['Int'];
  userVehicleBidsOrderBy2: Array<BidOrderByInput> | BidOrderByInput;
}>;


export type VehiclesQuery = { __typename?: 'Query', vehicles?: Array<{ __typename?: 'Vehicle', vehicleEventStatus?: VehicleEventStatus | null, registrationNumber?: string | null, make?: string | null, model?: string | null, varient?: string | null, categoty?: string | null, fuel?: string | null, type?: string | null, rcStatus?: string | null, yearOfManufacture?: number | null, ownership?: number | null, kmReading?: number | null, insuranceStatus?: string | null, frontImage?: string | null, backImage?: string | null, leftImage?: string | null, rightImage?: string | null, currentBidAmount?: number | null, bidStartTime?: any | null, bidTimeExpire?: any | null, vehicleIndexNo?: number | null, myBidRank?: number | null, id: string, startPrice?: number | null, powerSteering?: string | null, shape?: string | null, color?: string | null, state?: string | null, city?: string | null, engineNo?: string | null, chassisNo?: string | null, permit?: string | null, fitness?: string | null, fitnessPermit?: string | null, tax?: string | null, insurance?: string | null, insuranceValidTill?: any | null, taxValidityDate?: any | null, yardLocation?: string | null, mileage?: number | null, gearBox?: string | null, paymentTerms?: string | null, dateOfRegistration?: any | null, hypothication?: string | null, climateControl?: string | null, doorCount?: number | null, area?: string | null, vehicleCondition?: string | null, inspectionLink?: string | null, userVehicleBidsCount?: number | null, totalBids?: number | null, quoteIncreament?: number | null, repoDt?: any | null, veicleLocation?: string | null, autobseContact?: string | null, autobse_contact_person?: string | null, clientContactPerson?: string | null, clientContactNo?: string | null, buyerFees?: string | null, vehicleRemarks?: string | null, registeredOwnerName?: string | null, loanAgreementNo?: string | null, parkingCharges?: string | null, additionalRemarks?: string | null, parkingRate?: string | null, event?: { __typename?: 'Event', startDate?: any | null, noOfBids?: number | null, bidLock?: EventBidLockType | null } | null, userVehicleBids?: Array<{ __typename?: 'Bid', amount?: number | null }> | null }> | null };

export type OpenAuctionVehiclesQueryVariables = Exact<{
  where: VehicleWhereInput;
}>;


export type OpenAuctionVehiclesQuery = { __typename?: 'Query', vehicles?: Array<{ __typename?: 'Vehicle', vehicleEventStatus?: VehicleEventStatus | null, registrationNumber?: string | null, make?: string | null, model?: string | null, varient?: string | null, categoty?: string | null, fuel?: string | null, type?: string | null, rcStatus?: string | null, yearOfManufacture?: number | null, ownership?: number | null, kmReading?: number | null, insuranceStatus?: string | null, loanAgreementNo?: string | null, mileage?: number | null, yardLocation?: string | null, veicleLocation?: string | null, vehicleRemarks?: string | null, engineNo?: string | null, chassisNo?: string | null, insuranceValidTill?: any | null, repoDt?: any | null, shape?: string | null, frontImage?: string | null, backImage?: string | null, leftImage?: string | null, rightImage?: string | null, currentBidAmount?: number | null, bidStartTime?: any | null, bidTimeExpire?: any | null, vehicleIndexNo?: number | null, myBidRank?: number | null, id: string, bidStatus?: VehicleBidStatusType | null, quoteIncreament?: number | null, startBidAmount?: number | null, startPrice?: number | null, event?: { __typename?: 'Event', gapInBetweenVehicles?: number | null, endDate?: any | null, status?: EventStatusType | null } | null }> | null };

export type LiveWatchListItemQueryVariables = Exact<{
  where: UserWhereUniqueInput;
  watchListWhere2: VehicleWhereInput;
}>;


export type LiveWatchListItemQuery = { __typename?: 'Query', user?: { __typename?: 'User', watchList?: Array<{ __typename?: 'Vehicle', id: string, registrationNumber?: string | null }> | null } | null };

export type AddWorkBookMutationVariables = Exact<{
  data: WorkSheetCreateInput;
}>;


export type AddWorkBookMutation = { __typename?: 'Mutation', createWorkSheet?: { __typename?: 'WorkSheet', id: string } | null };

export type UserWorkSheetsQueryVariables = Exact<{ [key: string]: never; }>;


export type UserWorkSheetsQuery = { __typename?: 'Query', workSheets?: Array<{ __typename?: 'WorkSheet', id: string, registrationNumber?: string | null, model?: string | null, make?: string | null, engineNo?: string | null, chassis?: string | null }> | null };


export const SendOtpDocument = `
    mutation SendOTP($mobile: String!) {
  sendUserMagicAuthLink(mobile: $mobile)
}
    `;
export const useSendOtpMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<SendOtpMutation, TError, SendOtpMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<SendOtpMutation, TError, SendOtpMutationVariables, TContext>(
      ['SendOTP'],
      (variables?: SendOtpMutationVariables) => fetcher<SendOtpMutation, SendOtpMutationVariables>(client, SendOtpDocument, variables, headers)(),
      options
    );
export const VerifyOtpDocument = `
    mutation VerifyOTP($mobile: String!, $token: String!) {
  redeemUserMagicAuthToken(mobile: $mobile, token: $token) {
    ... on RedeemUserMagicAuthTokenSuccess {
      token
      item {
        firstName
        lastName
        id
        mobile
        email
        status
      }
    }
  }
}
    `;
export const useVerifyOtpMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<VerifyOtpMutation, TError, VerifyOtpMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<VerifyOtpMutation, TError, VerifyOtpMutationVariables, TContext>(
      ['VerifyOTP'],
      (variables?: VerifyOtpMutationVariables) => fetcher<VerifyOtpMutation, VerifyOtpMutationVariables>(client, VerifyOtpDocument, variables, headers)(),
      options
    );
export const AuthenticateUserWithPasswordDocument = `
    mutation AuthenticateUserWithPassword($mobile: String!, $password: String!) {
  authenticateUserWithPassword(mobile: $mobile, password: $password) {
    ... on UserAuthenticationWithPasswordSuccess {
      sessionToken
      item {
        id
        lastName
        email
        firstName
        username
        mobile
        status
      }
    }
  }
}
    `;
export const useAuthenticateUserWithPasswordMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<AuthenticateUserWithPasswordMutation, TError, AuthenticateUserWithPasswordMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<AuthenticateUserWithPasswordMutation, TError, AuthenticateUserWithPasswordMutationVariables, TContext>(
      ['AuthenticateUserWithPassword'],
      (variables?: AuthenticateUserWithPasswordMutationVariables) => fetcher<AuthenticateUserWithPasswordMutation, AuthenticateUserWithPasswordMutationVariables>(client, AuthenticateUserWithPasswordDocument, variables, headers)(),
      options
    );
export const MyQuotesDocument = `
    query MyQuotes($where: VehicleWhereInput!, $take: Int, $orderBy: [BidOrderByInput!]!, $vehiclesOrderBy2: [VehicleOrderByInput!]!) {
  vehicles(where: $where, orderBy: $vehiclesOrderBy2) {
    registrationNumber
    event {
      eventNo
      seller {
        name
      }
      eventType {
        name
      }
      eventCategory
      startDate
      endDate
      location {
        state {
          name
        }
      }
    }
    type
    categoty
    fuel
    varient
    make
    registeredOwnerName
    model
    rcStatus
    yearOfManufacture
    ownership
    kmReading
    insuranceStatus
    yardLocation
    engineNo
    chassisNo
    userVehicleBids(take: $take, orderBy: $orderBy) {
      amount
      bidVehicle {
        currentBidUser {
          id
        }
      }
    }
    currentBidAmount
    bidAmountUpdate
    bidStatus
    id
    bidTimeExpire
    vehicleEventStatus
  }
}
    `;
export const useMyQuotesQuery = <
      TData = MyQuotesQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: MyQuotesQueryVariables,
      options?: UseQueryOptions<MyQuotesQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<MyQuotesQuery, TError, TData>(
      ['MyQuotes', variables],
      fetcher<MyQuotesQuery, MyQuotesQueryVariables>(client, MyQuotesDocument, variables, headers),
      options
    );
export const SudoBidsDocument = `
    query SudoBids($where: BidWhereInput) {
  sudoBids(where: $where) {
    userId
    amount
    name
  }
}
    `;
export const useSudoBidsQuery = <
      TData = SudoBidsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: SudoBidsQueryVariables,
      options?: UseQueryOptions<SudoBidsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<SudoBidsQuery, TError, TData>(
      variables === undefined ? ['SudoBids'] : ['SudoBids', variables],
      fetcher<SudoBidsQuery, SudoBidsQueryVariables>(client, SudoBidsDocument, variables, headers),
      options
    );
export const CreateContactUsDocument = `
    mutation CreateContactUs($data: ContactUsCreateInput!) {
  createContactUs(data: $data) {
    id
  }
}
    `;
export const useCreateContactUsMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateContactUsMutation, TError, CreateContactUsMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateContactUsMutation, TError, CreateContactUsMutationVariables, TContext>(
      ['CreateContactUs'],
      (variables?: CreateContactUsMutationVariables) => fetcher<CreateContactUsMutation, CreateContactUsMutationVariables>(client, CreateContactUsDocument, variables, headers)(),
      options
    );
export const EventsDocument = `
    query Events($take: Int, $skip: Int!) {
  events(take: $take, skip: $skip) {
    id
    eventNo
    seller {
      name
    }
    eventType {
      name
    }
    eventCategory
    status
    startDate
    endDate
    noOfBids
    location {
      name
      state {
        name
      }
      country
    }
    ExcelFile {
      file {
        url
      }
    }
    termsAndConditions
    vehiclesCount
  }
}
    `;
export const useEventsQuery = <
      TData = EventsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: EventsQueryVariables,
      options?: UseQueryOptions<EventsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<EventsQuery, TError, TData>(
      ['Events', variables],
      fetcher<EventsQuery, EventsQueryVariables>(client, EventsDocument, variables, headers),
      options
    );
export const LiveEventsDocument = `
    query LiveEvents($take: Int!, $skip: Int!, $where: EventWhereInput) {
  liveEvents(take: $take, skip: $skip, where: $where) {
    id
    eventNo
    seller {
      name
    }
    eventType {
      name
    }
    eventCategory
    startDate
    endDate
    noOfBids
    location {
      name
      country
      state {
        name
      }
      city
    }
    ExcelFile {
      file {
        url
      }
    }
    downloadableFile {
      url
    }
    termsAndConditions
    vehiclesCount
  }
}
    `;
export const useLiveEventsQuery = <
      TData = LiveEventsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: LiveEventsQueryVariables,
      options?: UseQueryOptions<LiveEventsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<LiveEventsQuery, TError, TData>(
      ['LiveEvents', variables],
      fetcher<LiveEventsQuery, LiveEventsQueryVariables>(client, LiveEventsDocument, variables, headers),
      options
    );
export const UpcomingEventsDocument = `
    query UpcomingEvents($take: Int, $skip: Int!, $where: EventWhereInput) {
  upcomingEvents(take: $take, skip: $skip, where: $where) {
    id
    vehiclesCount
    eventNo
    seller {
      name
    }
    eventType {
      name
    }
    eventCategory
    startDate
    noOfBids
    endDate
    location {
      name
      country
      state {
        name
      }
      city
    }
    downloadableFile {
      url
    }
    termsAndConditions
  }
}
    `;
export const useUpcomingEventsQuery = <
      TData = UpcomingEventsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: UpcomingEventsQueryVariables,
      options?: UseQueryOptions<UpcomingEventsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<UpcomingEventsQuery, TError, TData>(
      ['UpcomingEvents', variables],
      fetcher<UpcomingEventsQuery, UpcomingEventsQueryVariables>(client, UpcomingEventsDocument, variables, headers),
      options
    );
export const CompliedEventsDocument = `
    query CompliedEvents($take: Int, $skip: Int!, $where: EventWhereInput) {
  compliedEvents(take: $take, skip: $skip, where: $where) {
    id
    eventNo
    seller {
      name
    }
    eventType {
      name
    }
    eventCategory
    startDate
    noOfBids
    endDate
    location {
      name
      country
      state {
        name
      }
      city
    }
    downloadableFile {
      url
    }
    termsAndConditions
  }
}
    `;
export const useCompliedEventsQuery = <
      TData = CompliedEventsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: CompliedEventsQueryVariables,
      options?: UseQueryOptions<CompliedEventsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<CompliedEventsQuery, TError, TData>(
      ['CompliedEvents', variables],
      fetcher<CompliedEventsQuery, CompliedEventsQueryVariables>(client, CompliedEventsDocument, variables, headers),
      options
    );
export const GetEventDocument = `
    query GetEvent($where: EventWhereUniqueInput!, $orderBy: [VehicleOrderByInput!]!, $take: Int, $skip: Int!, $userVehicleBidsOrderBy2: [BidOrderByInput!]!) {
  event(where: $where) {
    id
    eventNo
    startDate
    endDate
    vehiclesCount
    seller {
      name
    }
    eventType {
      name
    }
    noOfBids
    location {
      name
      country
      state {
        name
      }
      city
    }
    ExcelFile {
      file {
        url
      }
    }
    termsAndConditions
    vehicles(orderBy: $orderBy) {
      id
      registrationNumber
      loanAgreementNo
      registeredOwnerName
      make
      model
      watchedByCount
      varient
      categoty
      fuel
      type
      rcStatus
      yearOfManufacture
      ownership
      kmReading
      startPrice
      reservePrice
      repoDt
      currentBidAmount
      veicleLocation
      yardLocation
      chassisNo
      engineNo
      frontImage
      backImage
      leftImage
      rightImage
      inspectionLink
      currentBidUser {
        id
      }
      bidTimeExpire
      myBidRank
      userVehicleBidsCount
      userVehicleBids(take: $take, skip: $skip, orderBy: $userVehicleBidsOrderBy2) {
        amount
      }
      totalBids
      quoteIncreament
      watchedBy {
        id
      }
    }
    bidLock
  }
}
    `;
export const useGetEventQuery = <
      TData = GetEventQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetEventQueryVariables,
      options?: UseQueryOptions<GetEventQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetEventQuery, TError, TData>(
      ['GetEvent', variables],
      fetcher<GetEventQuery, GetEventQueryVariables>(client, GetEventDocument, variables, headers),
      options
    );
export const CreateBidDocument = `
    mutation CreateBid($data: BidCreateInput!) {
  createBid(data: $data) {
    id
  }
}
    `;
export const useCreateBidMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateBidMutation, TError, CreateBidMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateBidMutation, TError, CreateBidMutationVariables, TContext>(
      ['CreateBid'],
      (variables?: CreateBidMutationVariables) => fetcher<CreateBidMutation, CreateBidMutationVariables>(client, CreateBidDocument, variables, headers)(),
      options
    );
export const ActiveBidsDocument = `
    query ActiveBids($take: Int, $orderBy: [BidOrderByInput!]!) {
  authenticatedItem {
    ... on User {
      activeBids {
        registrationNumber
        event {
          eventNo
          seller {
            name
          }
          eventType {
            name
          }
          eventCategory
          startDate
          endDate
          location {
            state {
              name
            }
          }
        }
        type
        categoty
        fuel
        varient
        make
        registeredOwnerName
        model
        rcStatus
        yearOfManufacture
        ownership
        kmReading
        insuranceStatus
        yardLocation
        engineNo
        chassisNo
        userVehicleBids(take: $take, orderBy: $orderBy) {
          amount
        }
        currentBidUser {
          id
          updatedAt
        }
        currentBidAmount
        bidAmountUpdate
        bidStatus
        id
        bidTimeExpire
      }
    }
  }
}
    `;
export const useActiveBidsQuery = <
      TData = ActiveBidsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: ActiveBidsQueryVariables,
      options?: UseQueryOptions<ActiveBidsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<ActiveBidsQuery, TError, TData>(
      ['ActiveBids', variables],
      fetcher<ActiveBidsQuery, ActiveBidsQueryVariables>(client, ActiveBidsDocument, variables, headers),
      options
    );
export const CreatePaymentDocument = `
    mutation CreatePayment($data: PaymentCreateInput!) {
  createPayment(data: $data) {
    amount
    id
  }
}
    `;
export const useCreatePaymentMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreatePaymentMutation, TError, CreatePaymentMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreatePaymentMutation, TError, CreatePaymentMutationVariables, TContext>(
      ['CreatePayment'],
      (variables?: CreatePaymentMutationVariables) => fetcher<CreatePaymentMutation, CreatePaymentMutationVariables>(client, CreatePaymentDocument, variables, headers)(),
      options
    );
export const PaymentsDocument = `
    query Payments($orderBy: [PaymentOrderByInput!]!, $skip: Int!, $take: Int) {
  payments(orderBy: $orderBy, skip: $skip, take: $take) {
    amount
    image {
      url
      width
      height
    }
    createdAt
    paymentFor
    description
  }
}
    `;
export const usePaymentsQuery = <
      TData = PaymentsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: PaymentsQueryVariables,
      options?: UseQueryOptions<PaymentsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<PaymentsQuery, TError, TData>(
      ['Payments', variables],
      fetcher<PaymentsQuery, PaymentsQueryVariables>(client, PaymentsDocument, variables, headers),
      options
    );
export const PaymentsDetailsDocument = `
    query PaymentsDetails($orderBy: [PaymentOrderByInput!]!, $skip: Int!, $take: Int, $where: PaymentWhereInput!) {
  payments(orderBy: $orderBy, skip: $skip, take: $take, where: $where) {
    amount
    image {
      url
      width
      height
    }
    createdAt
    paymentFor
    description
  }
}
    `;
export const usePaymentsDetailsQuery = <
      TData = PaymentsDetailsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: PaymentsDetailsQueryVariables,
      options?: UseQueryOptions<PaymentsDetailsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<PaymentsDetailsQuery, TError, TData>(
      ['PaymentsDetails', variables],
      fetcher<PaymentsDetailsQuery, PaymentsDetailsQueryVariables>(client, PaymentsDetailsDocument, variables, headers),
      options
    );
export const ReportDocument = `
    query Report($where: VehicleWhereInput!) {
  vehicles(where: $where) {
    id
    bidStatus
    chassisNo
    registrationNumber
    make
    vehicleEventStatus
    startPrice
    currentBidAmount
    event {
      seller {
        name
        id
      }
      eventNo
      endDate
    }
  }
}
    `;
export const useReportQuery = <
      TData = ReportQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: ReportQueryVariables,
      options?: UseQueryOptions<ReportQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<ReportQuery, TError, TData>(
      ['Report', variables],
      fetcher<ReportQuery, ReportQueryVariables>(client, ReportDocument, variables, headers),
      options
    );
export const UserPaymentsDocument = `
    query UserPayments($where: UserWhereUniqueInput!) {
  user(where: $where) {
    id
    payments {
      amount
      createdAt
      description
      image {
        url
      }
      paymentFor
      refNo
      status
      updatedAt
    }
  }
}
    `;
export const useUserPaymentsQuery = <
      TData = UserPaymentsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: UserPaymentsQueryVariables,
      options?: UseQueryOptions<UserPaymentsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<UserPaymentsQuery, TError, TData>(
      ['UserPayments', variables],
      fetcher<UserPaymentsQuery, UserPaymentsQueryVariables>(client, UserPaymentsDocument, variables, headers),
      options
    );
export const AuthenticatedUserDocument = `
    query AuthenticatedUser {
  authenticatedItem {
    ... on User {
      id
      firstName
      lastName
      status
      email
      mobile
    }
  }
}
    `;
export const useAuthenticatedUserQuery = <
      TData = AuthenticatedUserQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: AuthenticatedUserQueryVariables,
      options?: UseQueryOptions<AuthenticatedUserQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<AuthenticatedUserQuery, TError, TData>(
      variables === undefined ? ['AuthenticatedUser'] : ['AuthenticatedUser', variables],
      fetcher<AuthenticatedUserQuery, AuthenticatedUserQueryVariables>(client, AuthenticatedUserDocument, variables, headers),
      options
    );
export const GetUserDocument = `
    query getUser($where: UserWhereUniqueInput!) {
  user(where: $where) {
    id
    firstName
    lastName
    email
    mobile
    status
    pancard {
      id
      filesize
      width
      height
      extension
      url
    }
    password {
      isSet
    }
    idProof {
      id
      filesize
      height
      width
      extension
      url
    }
    idProofType
    idProofNo
    country
    states {
      name
    }
    city
    state
    username
    pancardNo
    createdAt
    idProofBack {
      url
      filesize
      width
      height
      extension
      id
    }
    payments {
      paymentFor
      status
      RegistrationExpire
    }
    currentVehicleBuyingLimit {
      vehicleBuyingLimit
      specialVehicleBuyingLimit
    }
    specialVehicleBuyingLimit
    vehicleBuyingLimit
  }
}
    `;
export const useGetUserQuery = <
      TData = GetUserQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetUserQueryVariables,
      options?: UseQueryOptions<GetUserQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetUserQuery, TError, TData>(
      ['getUser', variables],
      fetcher<GetUserQuery, GetUserQueryVariables>(client, GetUserDocument, variables, headers),
      options
    );
export const CreateUserWithNameDocument = `
    mutation CreateUserWithName($data: UserCreateInput!) {
  createUser(data: $data) {
    id
    firstName
    lastName
    mobile
  }
}
    `;
export const useCreateUserWithNameMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateUserWithNameMutation, TError, CreateUserWithNameMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateUserWithNameMutation, TError, CreateUserWithNameMutationVariables, TContext>(
      ['CreateUserWithName'],
      (variables?: CreateUserWithNameMutationVariables) => fetcher<CreateUserWithNameMutation, CreateUserWithNameMutationVariables>(client, CreateUserWithNameDocument, variables, headers)(),
      options
    );
export const CreateUserDocument = `
    mutation CreateUser($data: UserCreateInput!) {
  createUser(data: $data) {
    id
    username
    mobile
  }
}
    `;
export const useCreateUserMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateUserMutation, TError, CreateUserMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateUserMutation, TError, CreateUserMutationVariables, TContext>(
      ['CreateUser'],
      (variables?: CreateUserMutationVariables) => fetcher<CreateUserMutation, CreateUserMutationVariables>(client, CreateUserDocument, variables, headers)(),
      options
    );
export const UpdateUserDocument = `
    mutation UpdateUser($where: UserWhereUniqueInput!, $data: UserUpdateInput!) {
  updateUser(where: $where, data: $data) {
    id
    firstName
    lastName
    email
    mobile
  }
}
    `;
export const useUpdateUserMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<UpdateUserMutation, TError, UpdateUserMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<UpdateUserMutation, TError, UpdateUserMutationVariables, TContext>(
      ['UpdateUser'],
      (variables?: UpdateUserMutationVariables) => fetcher<UpdateUserMutation, UpdateUserMutationVariables>(client, UpdateUserDocument, variables, headers)(),
      options
    );
export const ResetPasswordDocument = `
    mutation ResetPassword($where: UserWhereUniqueInput!, $data: UserUpdateInput!) {
  updateUser(where: $where, data: $data) {
    password {
      isSet
    }
  }
}
    `;
export const useResetPasswordMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<ResetPasswordMutation, TError, ResetPasswordMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<ResetPasswordMutation, TError, ResetPasswordMutationVariables, TContext>(
      ['ResetPassword'],
      (variables?: ResetPasswordMutationVariables) => fetcher<ResetPasswordMutation, ResetPasswordMutationVariables>(client, ResetPasswordDocument, variables, headers)(),
      options
    );
export const UsersDocument = `
    query Users($where: UserWhereInput!) {
  users(where: $where) {
    id
  }
}
    `;
export const useUsersQuery = <
      TData = UsersQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: UsersQueryVariables,
      options?: UseQueryOptions<UsersQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<UsersQuery, TError, TData>(
      ['Users', variables],
      fetcher<UsersQuery, UsersQueryVariables>(client, UsersDocument, variables, headers),
      options
    );
export const QueryDocument = `
    query Query {
  time
}
    `;
export const useQueryQuery = <
      TData = QueryQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: QueryQueryVariables,
      options?: UseQueryOptions<QueryQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<QueryQuery, TError, TData>(
      variables === undefined ? ['Query'] : ['Query', variables],
      fetcher<QueryQuery, QueryQueryVariables>(client, QueryDocument, variables, headers),
      options
    );
export const AddToWatchListDocument = `
    mutation addToWatchList($data: [UserUpdateArgs!]!) {
  updateUsers(data: $data) {
    id
  }
}
    `;
export const useAddToWatchListMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<AddToWatchListMutation, TError, AddToWatchListMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<AddToWatchListMutation, TError, AddToWatchListMutationVariables, TContext>(
      ['addToWatchList'],
      (variables?: AddToWatchListMutationVariables) => fetcher<AddToWatchListMutation, AddToWatchListMutationVariables>(client, AddToWatchListDocument, variables, headers)(),
      options
    );
export const DuplicateDataCheckDocument = `
    query duplicateDataCheck($where: UserWhereInput) {
  sudoUsersCount(where: $where)
}
    `;
export const useDuplicateDataCheckQuery = <
      TData = DuplicateDataCheckQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: DuplicateDataCheckQueryVariables,
      options?: UseQueryOptions<DuplicateDataCheckQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<DuplicateDataCheckQuery, TError, TData>(
      variables === undefined ? ['duplicateDataCheck'] : ['duplicateDataCheck', variables],
      fetcher<DuplicateDataCheckQuery, DuplicateDataCheckQueryVariables>(client, DuplicateDataCheckDocument, variables, headers),
      options
    );
export const WatchListDocument = `
    query WatchList($orderBy: [VehicleOrderByInput!]!, $take: Int, $skip: Int!, $userVehicleBidsOrderBy2: [BidOrderByInput!]!, $userVehicleBidsTake2: Int, $userVehicleBidsSkip2: Int!) {
  authenticatedItem {
    ... on User {
      watchList(orderBy: $orderBy, take: $take, skip: $skip) {
        id
        registrationNumber
        loanAgreementNo
        registeredOwnerName
        make
        model
        watchedByCount
        varient
        categoty
        fuel
        type
        rcStatus
        yearOfManufacture
        ownership
        kmReading
        startPrice
        reservePrice
        currentBidAmount
        veicleLocation
        yardLocation
        chassisNo
        engineNo
        frontImage
        currentBidUser {
          id
        }
        bidTimeExpire
        myBidRank
        userVehicleBidsCount
        event {
          seller {
            name
          }
          noOfBids
          bidLock
          startDate
        }
        userVehicleBids(
          orderBy: $userVehicleBidsOrderBy2
          take: $userVehicleBidsTake2
          skip: $userVehicleBidsSkip2
        ) {
          amount
        }
        totalBids
        vehicleEventStatus
        quoteIncreament
      }
    }
  }
}
    `;
export const useWatchListQuery = <
      TData = WatchListQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: WatchListQueryVariables,
      options?: UseQueryOptions<WatchListQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<WatchListQuery, TError, TData>(
      ['WatchList', variables],
      fetcher<WatchListQuery, WatchListQueryVariables>(client, WatchListDocument, variables, headers),
      options
    );
export const UpdateVehicleDocument = `
    mutation UpdateVehicle($where: VehicleWhereUniqueInput!, $data: VehicleUpdateInput!) {
  updateVehicle(where: $where, data: $data) {
    id
  }
}
    `;
export const useUpdateVehicleMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<UpdateVehicleMutation, TError, UpdateVehicleMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<UpdateVehicleMutation, TError, UpdateVehicleMutationVariables, TContext>(
      ['UpdateVehicle'],
      (variables?: UpdateVehicleMutationVariables) => fetcher<UpdateVehicleMutation, UpdateVehicleMutationVariables>(client, UpdateVehicleDocument, variables, headers)(),
      options
    );
export const VehiclesDocument = `
    query Vehicles($where: VehicleWhereInput!, $take: Int, $skip: Int!, $userVehicleBidsOrderBy2: [BidOrderByInput!]!) {
  vehicles(where: $where) {
    vehicleEventStatus
    registrationNumber
    make
    model
    varient
    categoty
    fuel
    type
    rcStatus
    yearOfManufacture
    ownership
    kmReading
    insuranceStatus
    frontImage
    backImage
    leftImage
    rightImage
    currentBidAmount
    bidStartTime
    bidTimeExpire
    vehicleIndexNo
    myBidRank
    id
    startPrice
    powerSteering
    shape
    color
    state
    city
    engineNo
    chassisNo
    permit
    fitness
    fitnessPermit
    tax
    insurance
    insuranceValidTill
    taxValidityDate
    yardLocation
    mileage
    gearBox
    paymentTerms
    dateOfRegistration
    hypothication
    climateControl
    doorCount
    area
    vehicleCondition
    inspectionLink
    event {
      startDate
      noOfBids
      bidLock
    }
    userVehicleBidsCount
    totalBids
    myBidRank
    quoteIncreament
    userVehicleBids(take: $take, skip: $skip, orderBy: $userVehicleBidsOrderBy2) {
      amount
    }
    repoDt
    veicleLocation
    autobseContact
    autobse_contact_person
    clientContactPerson
    clientContactNo
    buyerFees
    vehicleRemarks
    registeredOwnerName
    loanAgreementNo
    parkingCharges
    additionalRemarks
    parkingRate
  }
}
    `;
export const useVehiclesQuery = <
      TData = VehiclesQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: VehiclesQueryVariables,
      options?: UseQueryOptions<VehiclesQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<VehiclesQuery, TError, TData>(
      ['Vehicles', variables],
      fetcher<VehiclesQuery, VehiclesQueryVariables>(client, VehiclesDocument, variables, headers),
      options
    );
export const OpenAuctionVehiclesDocument = `
    query OpenAuctionVehicles($where: VehicleWhereInput!) {
  vehicles(where: $where) {
    vehicleEventStatus
    registrationNumber
    make
    model
    varient
    categoty
    fuel
    type
    rcStatus
    yearOfManufacture
    ownership
    kmReading
    insuranceStatus
    loanAgreementNo
    mileage
    yardLocation
    veicleLocation
    vehicleRemarks
    engineNo
    chassisNo
    insuranceValidTill
    repoDt
    shape
    frontImage
    backImage
    leftImage
    rightImage
    currentBidAmount
    bidStartTime
    bidTimeExpire
    vehicleIndexNo
    myBidRank
    id
    bidStatus
    quoteIncreament
    startBidAmount
    startPrice
    event {
      gapInBetweenVehicles
      endDate
      status
    }
  }
}
    `;
export const useOpenAuctionVehiclesQuery = <
      TData = OpenAuctionVehiclesQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: OpenAuctionVehiclesQueryVariables,
      options?: UseQueryOptions<OpenAuctionVehiclesQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<OpenAuctionVehiclesQuery, TError, TData>(
      ['OpenAuctionVehicles', variables],
      fetcher<OpenAuctionVehiclesQuery, OpenAuctionVehiclesQueryVariables>(client, OpenAuctionVehiclesDocument, variables, headers),
      options
    );
export const LiveWatchListItemDocument = `
    query LiveWatchListItem($where: UserWhereUniqueInput!, $watchListWhere2: VehicleWhereInput!) {
  user(where: $where) {
    watchList(where: $watchListWhere2) {
      id
      registrationNumber
    }
  }
}
    `;
export const useLiveWatchListItemQuery = <
      TData = LiveWatchListItemQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: LiveWatchListItemQueryVariables,
      options?: UseQueryOptions<LiveWatchListItemQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<LiveWatchListItemQuery, TError, TData>(
      ['LiveWatchListItem', variables],
      fetcher<LiveWatchListItemQuery, LiveWatchListItemQueryVariables>(client, LiveWatchListItemDocument, variables, headers),
      options
    );
export const AddWorkBookDocument = `
    mutation addWorkBook($data: WorkSheetCreateInput!) {
  createWorkSheet(data: $data) {
    id
  }
}
    `;
export const useAddWorkBookMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<AddWorkBookMutation, TError, AddWorkBookMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<AddWorkBookMutation, TError, AddWorkBookMutationVariables, TContext>(
      ['addWorkBook'],
      (variables?: AddWorkBookMutationVariables) => fetcher<AddWorkBookMutation, AddWorkBookMutationVariables>(client, AddWorkBookDocument, variables, headers)(),
      options
    );
export const UserWorkSheetsDocument = `
    query userWorkSheets {
  workSheets {
    id
    registrationNumber
    model
    make
    engineNo
    chassis
  }
}
    `;
export const useUserWorkSheetsQuery = <
      TData = UserWorkSheetsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: UserWorkSheetsQueryVariables,
      options?: UseQueryOptions<UserWorkSheetsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<UserWorkSheetsQuery, TError, TData>(
      variables === undefined ? ['userWorkSheets'] : ['userWorkSheets', variables],
      fetcher<UserWorkSheetsQuery, UserWorkSheetsQueryVariables>(client, UserWorkSheetsDocument, variables, headers),
      options
    );