"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Swal from "sweetalert2";

interface FormData {
  name: string;
  description: string;
  price: number;
  imageUrl: string; // Update the type of images to string[]
}

const AddReview: React.FC = () => {
  const router = useRouter(); // Initialize useNavigate
  const [formData, setFormData] = useState<FormData>({
    name: "",
    description: "",
    price: 0,
    imageUrl: "",
  });
 

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    
    // Send new review data to backend
    axios
      .post("http://localhost:8080/review", formData)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Review added successfully!",
        }).then(() => {
          // Redirect to reviews page after successful submission
          router.push("/review-management/review");
        });
      })
      .catch((error) => {
        console.error("Error adding review:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Error adding review. Please try again later.",
        });
      });
  };


  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Add Product</h1>
      <br />
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-6 rounded-lg space-y-4"
      >
        <div className="flex flex-col">
          <label htmlFor="name" className="font-semibold">
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border rounded px-3 py-2 mt-1"
          />
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="description" className="font-semibold">
          Description:
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="border rounded px-3 py-2 mt-1"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="price" className="font-semibold">
            Price:
          </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="border rounded px-3 py-2 mt-1"
          />
        </div>
        <div className="flex flex-col"><label htmlFor="imageUrl" className="font-semibold">
          Image Url:
          </label>
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            className="border rounded px-3 py-2 mt-1"
          />
          </div>
        

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddReview;
