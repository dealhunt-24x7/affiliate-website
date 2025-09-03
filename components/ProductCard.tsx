"use client";
import React from "react";

export interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  rating: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  image,
  rating,
}) => {
  return (
    <div className="border rounded-lg shadow-sm p-4 flex flex-col bg-white">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded-md mb-3"
      />
      <h4 className="font-semibold text-lg mb-1">{name}</h4>
      <p className="text-sm text-gray-600 mb-2">{description}</p>
      <div className="flex items-center text-yellow-500">
        {"⭐".repeat(rating)}
      </div>
    </div>
  );
};

export default ProductCard;
