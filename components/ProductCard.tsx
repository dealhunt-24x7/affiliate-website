"use client";

import React from "react";
import { Product } from "@/types/product";

type Props = {
  product: Product;
};

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="border rounded-lg p-3 bg-black shadow-md hover:shadow-lg transition flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-32 object-cover rounded mb-2"
      />
      <h3 className="font-semibold text-sm truncate text-yellow-500">
        {product.name}
      </h3>
      <p className="text-xs text-gray-300 line-clamp-2">
        {product.description}
      </p>
      <div className="mt-2 text-sm font-medium text-yellow-500">
        ${product.price.toFixed(2)}
      </div>
      <a
        href={product.affiliateLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 text-center bg-yellow-500 text-black text-xs px-3 py-1 rounded hover:bg-yellow-600 transition"
      >
        View Deal
      </a>
    </div>
  );
};

export default ProductCard;
