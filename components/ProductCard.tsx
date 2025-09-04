"use client";

import React from "react";

export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="min-w-[180px] max-w-[200px] rounded-xl border p-3 shadow-md bg-white">
      <img
        src={product.image}
        alt={product.name}
        className="h-32 w-full rounded-lg object-cover"
      />
      <h3 className="mt-2 text-sm font-semibold truncate">{product.name}</h3>
      <p className="text-xs text-gray-500 truncate">{product.description}</p>

      <button className="mt-2 w-full rounded-lg bg-blue-600 px-2 py-1 text-white text-xs hover:bg-blue-700">
        Compare
      </button>
    </div>
  );
};

export default ProductCard;
