// PaymentForm.tsx
"use client";

import React, { useState } from "react";
import axios from "axios";

const PaymentForm: React.FC = () => {
  const [payment, setPayment] = useState({
    name: "",
    paymentType: "",
    completed: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPayment((prevPayment) => ({
      ...prevPayment,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("/payment", payment);
      setPayment({
        name: "",
        paymentType: "",
        completed: false,
      });
      alert("Payment created successfully!");
    } catch (error) {
      console.error("Error creating payment:", error);
      alert("Failed to create payment. Please try again.");
    }
  };

  return (
    <div className="mt-4">
      <h2 className="text-lg font-bold mb-2">Create Payment</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Name:</label>
          <input
            type="text"
            name="name"
            value={payment.name}
            onChange={handleChange}
            className="border rounded-md p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Payment Type:</label>
          <input
            type="text"
            name="paymentType"
            value={payment.paymentType}
            onChange={handleChange}
            className="border rounded-md p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">
            Completed:
          </label>
          <input
            type="checkbox"
            name="completed"
            checked={payment.completed}
            onChange={() =>
              setPayment((prevPayment) => ({
                ...prevPayment,
                completed: !prevPayment.completed,
              }))
            }
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
