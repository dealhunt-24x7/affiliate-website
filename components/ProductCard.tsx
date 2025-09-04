"use client";

import React from "react";
import { Product } from "@/types/product";

type Props = Product;

const ProductCard: React.FC<Props> = ({ id, name, description, image }) => {
  return (
    <div className="border rounded-lg p-4 bg-white shadow hover:shadow-lg transition">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded mb-3"
      />
      <h3 className="font-bold text-sm">{name}</h3>
      <p className="text-xs text-gray-500">{description}</p>
    </div>
  );
};

export default ProductCard;
