"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import Button from "@/components/button";

interface FormData {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const AddProduct: React.FC = () => {
  const router = useRouter();
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

  const handleAddProduct = async () => {
    try {
      const response = await axios.post('/api/addProduct', formData);
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Product added successfully!",
      }).then(() => {
        router.push("/products");
      });
    } catch (error) {
      console.error("Error adding product:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error adding product. Please try again later.",
      });
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Add Product</h1>
      <br />
      <div className="bg-gray-100 p-6 rounded-lg space-y-4">
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
        

        <Button label="Submit" onClick={handleAddProduct} />
      </div>
    </div>
  );
};

export default AddProduct;
