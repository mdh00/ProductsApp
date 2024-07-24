"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { fetchProducts } from "./lib/products"; 

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
    fetchProducts()
      .then((products) => {
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
      
        <div className="p-4 flex justify-between">
        <h1 className="text-3xl font-bold">Products</h1>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded"
          onClick={handleAddProduct}
        >
          Add Product
        </button></div>
        <div className="p-4 flex justify-between items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.length === 0 ? (
          <p>No products available.</p>
        ) : (
          products.map((product, index) => (
            <div key={index} className="border rounded-lg p-4">
              {product.imageUrl && (
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-2h object-cover mb-4 rounded"
                />
              )}
              <h2 className="text-2xl font-semibold">{product.name}</h2>
              <p className="text-gray-700">{product.description}</p>
              <p className="text-xl font-bold mt-2">{product.price.toFixed(2)} LKR</p>
            </div>
          ))
        )}
      </div>
    </div>

      </div>

  );
};

export default Products;
