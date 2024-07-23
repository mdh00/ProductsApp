import React, { useState } from "react";

interface ComplainDetails {
  ComplainId: string;
  customerMail: string;
  complainDetails: string;
}

interface AssignFormProps {
  setShowAssignForm: React.Dispatch<React.SetStateAction<boolean>>;

  complainDetails: ComplainDetails | null;
}

const AssignForm: React.FC<AssignFormProps> = ({
  setShowAssignForm,
  complainDetails,
}) => {
  const [formData, setFormData] = useState<ComplainDetails>({
    ComplainId: "",
    customerMail: "",
    complainDetails: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
    setShowAssignForm(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-gray-800 bg-opacity-50">
      <div className="bg-white p-4 rounded-md shadow-md w-96">
        <h2 className="text-lg font-semibold mb-4">Assign Complain</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="complainId"
              className="block text-sm font-medium text-gray-700"
            >
              Complain ID
            </label>
            <input
              type="text"
              id="complainId"
              name="ComplainId"
              value={complainDetails?.ComplainId || ""}
              onChange={handleInputChange}
              className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              readOnly
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="customerMail"
              className="block text-sm font-medium text-gray-700"
            >
              Customer Mail
            </label>
            <input
              type="text"
              id="customerMail"
              name="customerMail"
              value={complainDetails?.customerMail || ""}
              onChange={handleInputChange}
              className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              readOnly
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="complainDetails"
              className="block text-sm font-medium text-gray-700"
            >
              Complain Details
            </label>
            <textarea
              id="complainDetails"
              name="complainDetails"
              value={formData.complainDetails}
              onChange={handleInputChange}
              className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              rows={4}
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setShowAssignForm(false)}
              className="mr-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AssignForm;
