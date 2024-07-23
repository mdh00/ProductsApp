import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import React from "react";

interface TableData {
  ComplainId: string;
  orderId: string;
  customerMail: string;
  complainType: string;
  complainStatus: string;
  complainDetails: string;
}

interface Props {
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  tableData: TableData[];
}

const UpdateForm: React.FC<Props> = ({ setShowForm, tableData }) => {
  const validateComplainId = (complainId: string) => {
    return tableData.some((data) => data.ComplainId === complainId);
  };

  return (
    <div className="bg-fuchsia-800 hover:bg-fuchsia-800 text-black hover:text-white font-bold py-2 px-4 mt-[25px] mr-[20px] rounded">
      <Formik
        initialValues={{
          complainId: "",
          selectedOption: "",
        }}
        validationSchema={Yup.object({
          complainId: Yup.string()
            .required("Complain ID cannot be empty.")
            .test(
              "validate-complain-id",
              "Complain ID not found in the table.",
              validateComplainId
            ),
          selectedOption: Yup.string().required("Please choose a status."),
        })}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
          setShowForm(false);
        }}
      >
        {(formikProps) => (
          <Form className="max-w-sm mx-auto">
            <div>
              <label
                htmlFor="complainId"
                className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Complain ID
              </label>
              <Field
                type="text"
                id="complainId"
                name="complainId"
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {formikProps.errors.complainId ? (
                <div className="relative p-4 mb-4 text-sm font-medium text-red-800 rounded-lg bg-red-50 border border-red-300">
                  <ErrorMessage name="complainId" />
                </div>
              ) : null}
            </div>
            <div>
              <label
                htmlFor="selectedOption"
                className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select Status
              </label>
              <Field
                as="select"
                id="selectedOption"
                name="selectedOption"
                className="block w-full p-4 mt-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">Select Status</option>
                <option value="Processing">Processing</option>
                <option value="Done">Resolved</option>
              </Field>
              {formikProps.errors.selectedOption ? (
                <div className="relative p-4 mb-4 text-sm font-medium text-red-800 rounded-lg bg-red-50 border border-red-300">
                  <ErrorMessage name="selectedOption" />
                </div>
              ) : null}
            </div>
            <button
              type="submit"
              className="mt-4 mb-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            >
              Update
            </button>
            <button
              className="ml-2 mb-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
              onClick={() => setShowForm(false)}
            >
              Close Form
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UpdateForm;
