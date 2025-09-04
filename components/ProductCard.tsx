"use client";

import React from "react";

export interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  image: string;
  rating?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  description,
  image,
  rating = 4,
}) => {
  return (
    <div
      key={id}
      className="w-48 bg-white shadow rounded-lg p-3 flex-shrink-0 hover:shadow-lg transition"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-32 object-cover rounded"
      />
      <h3 className="mt-2 text-sm font-semibold truncate">{name}</h3>
      <p className="text-xs text-gray-500 truncate">{description}</p>
      <p className="text-yellow-500 text-xs mt-1">⭐ {rating}</p>
    </div>
  );
};

export default ProductCard;
