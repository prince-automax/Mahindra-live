import * as Yup from "yup";
import { Formik, Form,Field, ErrorMessage } from "formik";
import FormField from "../components/ui/FormField";
import ButtonLoading from "../components/ui/ButtonLoading";
import {
  useAddWorkBookMutation,
  AddWorkBookMutationVariables
} from "@utils/graphql";
import graphQLClient from "@utils/useGQLQuery";
import withPrivateRoute from "../utils/withPrivateRoute";
import Loader from "@components/ui/Loader";

import Router from "next/router";
import toast from "react-hot-toast";

import { useState, useEffect,useRef } from "react";
import { ResizeImage } from "../components/image-Resizing/imageProfile";
import DashboardTemplate from "../components/templates/DashboardTemplate";
// import {welcomeMessage} from "../components/alerts/welcomeMessage"
import Swal from "sweetalert2";


function AddWorkBook() {
  const formikRef = useRef(null);
  const [accessToken, setAccessToken] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      setAccessToken(token);
    }
  }, []);

  const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

  const AddWorkBookMutation = useAddWorkBookMutation<AddWorkBookMutationVariables>(
    graphQLClient({ Authorization: `Bearer ${accessToken}` })
  );

  const validationSchema = Yup.object().shape({
    RegistrationNo: Yup.string().required('Registration Number is required and must'),
    // make: Yup.string().required('Make is required'),
    // model: Yup.string().required('Model is required'),
    // ChaissNo: Yup.string().required('Chaiss No is required'),
    // EngineNo: Yup.string().required('Engine No is required'),
    // Varient: Yup.string().required('Varient is required'),
    // VehicleConditon: Yup.string().required('Vehicle Condition is required'),
    // image1: Yup.mixed().required('Image 1 is required').nullable(),
    // image2: Yup.mixed().required('Image 2 is required').nullable(),
    // image3: Yup.mixed().required('Image 3 is required').nullable(),
    // image4: Yup.mixed().required('Image 4 is required').nullable(),
    // image5: Yup.mixed().required('Image 5 is required').nullable(),
  });
  
  const onSubmit = async (values,{ resetForm }) => {
    console.log("reached here",values);
    
  //  console.log("workbook",values);
  //  const result=AddWorkBookMutation.mutateAsync({
  //   data:{
  //     registrationNumber:values.RegistrationNo,
  //     make:values.make,
  //     model:values.model-,
  //     chassis:values.ChaissNo,
  //     engineNo:values.EngineNo,
  //      varient:'values.Varient' ,
  //     vehicleCondition:values.VehicleConditon
  //   }
  //  })
  resetForm();
  };

  return (
    <DashboardTemplate>
    <div className="max-w-full mx-auto my-8 px-4">
      {/* {data && ( */}
        <div className="space-y-8">
        

          <Formik
           initialValues={{ RegistrationNo:'',make:'',model:'',ChaissNo:'',EngineNo:'',Varient:'' ,VehicleConditon:''}} 
           validationSchema={validationSchema}
            onSubmit={onSubmit}
            innerRef={formikRef}
          >
            {(props) => (
             
              (
                <Form encType="multipart/form-data">
                  <div className="space-y-3 mt-4 pb-4">
                    <div className="mt-6 grid grid-cols-6 gap-6">
                      <div className="space-y-1 col-span-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                          Work Book
                        </h3>
                        <p className="max-w-2xl text-sm text-gray-500">
                          Enter the Vehicle Details .
                        </p>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <Field
                          type="input"
                          
                          name="RegistrationNo"
                          label="Registration Number"
                          width="w-full"
                          placeholder="Registration Number"
                          className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 outline-none rounded-md"
                          onChange={(event) => {
                            const newValue = event.target.value.toUpperCase().replace(/\s/g, '');
                            props.handleChange(event); // Update the Formik state with the transformed value
                            props.setFieldValue('RegistrationNo', newValue); // Manually set the transformed value in the Formik state
                          }}
                        />
                         <div className="mt-2 text-sm text-red-600">
                         <ErrorMessage name="RegistrationNo" component="div" />
                         </div>
                              
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <Field
                          type="input"
                          name="make"
                          
                          label="Make"
                          width="w-full"
                          placeholder="Make"
                          className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 outline-none border border-gray-300 rounded-md"

                        />
                        
                      </div>

                      <div className="col-span-6  sm:col-span-3">
                        <Field
                          type="input"
                          
                          name="model"
                          label="Model"
                          width="w-full"
                          placeholder="model"
                         
                    
                        className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 outline-none border  border-gray-300 rounded-md"

                        />
                        
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <Field
                          type="input"
                          name="ChaissNo"
                          
                          label="Chaiss No"
                          width="w-full"
                          placeholder="Chaiss No"
                          className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 outline-none  border border-gray-300 rounded-md"

                        />
                        
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <Field
                          type="input"
                          name="EngineNo"
                          
                          label="Engine No"
                          width="w-full"
                          placeholder="Engine No"
                          className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 outline-none  border border-gray-300 rounded-md"

                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <Field
                          type="input"
                          name="Varient"
                          
                          label="Varient"
                          width="w-full"
                          placeholder="Varient"
                          className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 outline-none border border-gray-300 rounded-md"

                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <Field
                             as="textarea"
                          name="VehicleConditon"
                          
                          label="VehicleCondition"
                          width="w-full"
                          placeholder="Vehiclle condition"
                          className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 outline-none border border-gray-300 rounded-md"
                          aria-describedby="message-max"
                          rows={4}
                        />
                      </div>
                      {/* IMAGES */}
                      <div className="space-y-1 col-span-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                         IMAGES
                        </h3>
                      
                      </div>
                      
                      <div className="col-span-6 sm:col-span-3">
                      <p className="text-md leading-6 font-medium text-gray-900">
                          Image 1
                        </p>
                        <Field
                          type="file"
                          name="image1"
                          
                          label="image1"
                          width="w-full"
                          placeholder="Front image"
                          className="py-2 px-2 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 outline-none border border-gray-300 rounded-md"

                        />
                        
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                      <p className="text-md leading-6 font-medium text-gray-900">
                          Image 2
                        </p>
                        <Field
                          type="file"
                          name="image2"
                          
                          label="image2"
                          width="w-full"
                          placeholder="Back image"
                          className="py-2 px-2 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 outline-none border border-gray-300 rounded-md"

                        />
                        
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                      <p className="text-md leading-6 font-medium text-gray-900">
                         Image 3
                        </p>
                        <Field
                          type="file"
                          name="image3"
                          
                          label="image3"
                          width="w-full"
                          placeholder="Left image"
                          className="py-2 px-2 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 outline-none border border-gray-300 rounded-md"

                        />
                        
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                      <p className="text-md leading-6 font-medium text-gray-900">
                          Image 4
                        </p>
                          <Field
                            type="file"
                          
                            name="image4"
                            
                            label="image4"
                            width="w-full"
                            placeholder="Select an image to upload"
                            className="py-2 px-2 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 outline-none border border-gray-300 rounded-md"

                          />
                        
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                      <p className="text-md leading-6 font-medium text-gray-900">
                          Image 5
                        </p>
                          <Field
                            type="file"
                          
                            name="image5"
                            
                            label="image4"
                            width="w-full"
                            placeholder="Select an image to upload"
                            className="py-2 px-2 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 outline-none border border-gray-300 rounded-md"

                          />
                        
                      </div>
                     {/* <div className="col-span-6 sm:col-span-3"></div> */}
                     </div>

                    <div className="my-8 flex justify-between">
                    <button
                        type="submit"
                        className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:w-auto"
                        disabled={props.isSubmitting}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </Form>
              )
            )}
          </Formik>
        </div>
    
    </div>
    </DashboardTemplate>
  );
}

export default withPrivateRoute(AddWorkBook);