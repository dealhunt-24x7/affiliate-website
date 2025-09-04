"use client";

import React from "react";

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, description, image }) => {
  return (
    <div className="w-48 flex-shrink-0 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img src={image} alt={name} className="w-full h-32 object-cover" />
      <div className="p-3">
        <h3 className="font-semibold text-sm truncate">{name}</h3>
        <p className="text-xs text-gray-600 line-clamp-2">{description}</p>
        <button className="mt-2 w-full bg-blue-600 text-white text-sm py-1 px-2 rounded-lg hover:bg-blue-700 transition-colors">
          Compare
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
