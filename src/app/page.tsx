"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Swal from 'sweetalert2';

import { fetchReviews } from "@/api/review";

interface Product {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Fetch reviews from backend using fetchReviews function
    fetchReviews()
      .then((reviews) => {
        setProducts(products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const handleAddProduct = () => {
    // Redirect to add review page
    router.push("/add-product");
  };

  return (
    <div className="p-4">
      <div className="p-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Products</h1>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={handleAddProduct}
        >
          Add Product
        </button>
      </div>

    </div>
  );
};

export default Products;
