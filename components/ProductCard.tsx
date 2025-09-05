"use client";

import React from "react";
import { Product } from "@/types/product";

type Props = {
  product: Product;
};

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="border rounded-lg p-3 bg-white shadow-sm hover:shadow-md transition flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-32 object-cover rounded mb-2"
      />
      <h3 className="font-semibold text-sm truncate">{product.name}</h3>
      <p className="text-xs text-gray-500 line-clamp-2">{product.description}</p>
    </div>
  );
};

export default ProductCard;
