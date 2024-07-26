"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { fetchProducts } from "../lib/products";
import Button from "@/components/button";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetchProducts()
      .then((products) => {
        setProducts(products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const handleAddProduct = () => {
    router.push("/add-product");
  };

  const handleProductClick = (id: string) => {
    router.push(`/products/${id}`);
  };

  return (
    <div className="p-4">

      <div className="p-4 flex justify-between flex items-center">
        <h1 className="text-3xl font-bold">Products List</h1>
        <Button label="Add Product" onClick={handleAddProduct} /></div>
      <div className="p-4 flex justify-between items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product, index) => (
            <div key={index} className="border rounded-lg p-4"
              onClick={() => handleProductClick(product._id)}>
              {product.imageUrl && (
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-2h object-cover mb-4 rounded cursor-pointer"
                />
              )}
              <h2 className="text-2xl font-semibold">{product.name}</h2>
              <p className="text-xl font-bold mt-2">{product.price.toFixed(2)} LKR</p>
            </div>
          ))
          }
        </div>
      </div>

    </div>

  );
};

export default Products;
