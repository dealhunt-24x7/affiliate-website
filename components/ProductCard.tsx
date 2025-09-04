"use client";

import React from "react";
import { BaseProduct } from "@/types/product";

// 👇 Bas id ko hata diya (Omit)
type Props = Omit<BaseProduct, "id">;

const ProductCard: React.FC<Props> = ({ name, description, image }) => {
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
