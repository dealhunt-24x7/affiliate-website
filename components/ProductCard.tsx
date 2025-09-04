"use client";

import React from "react";

export interface Product {
  id?: number;
  name: string;
  description: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border rounded-lg p-3 w-48 flex-shrink-0 bg-white shadow hover:shadow-md transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-32 object-cover rounded"
      />
      <h3 className="text-sm font-semibold mt-2">{product.name}</h3>
      <p className="text-xs text-gray-500">{product.description}</p>
      <button className="mt-2 w-full bg-blue-500 text-white text-sm py-1 rounded hover:bg-blue-600">
        Compare
      </button>
    </div>
  );
};

export default ProductCard;
