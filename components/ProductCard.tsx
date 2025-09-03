"use client";
import React from "react";

export interface Product {
  id?: number;
  name: string;
  description: string;
  image: string;
  rating: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border rounded-lg shadow-sm p-4 flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-md mb-3"
      />
      <h4 className="font-semibold text-lg mb-1">{product.name}</h4>
      <p className="text-sm text-gray-600 mb-2">{product.description}</p>
      <div className="flex items-center text-yellow-500">
        {"⭐".repeat(product.rating)}
      </div>
    </div>
  );
};

export default ProductCard;
