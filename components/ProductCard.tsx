"use client";

import React from "react";

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  image,
}) => {
  return (
    <div className="bg-white shadow rounded-lg p-3 w-44 flex-shrink-0">
      <img
        src={image}
        alt={name}
        className="w-full h-28 object-cover rounded-md mb-2"
      />
      <h3 className="text-sm font-bold truncate">{name}</h3>
      <p className="text-xs text-gray-500 truncate">{description}</p>
      <button className="mt-2 w-full text-xs font-semibold bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded">
        Compare
      </button>
    </div>
  );
};

export default ProductCard;
