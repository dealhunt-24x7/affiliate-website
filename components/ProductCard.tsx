"use client";

import React from "react";
import { Product } from "@/types/product";
import { Star } from "lucide-react";

type Props = {
  product: Product;
};

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded mb-3"
      />

      <h3 className="font-semibold text-base truncate">{product.name}</h3>
      <p className="text-sm text-gray-500 line-clamp-2 mb-2">
        {product.description}
      </p>

      <div className="flex items-center mb-2">
        <span className="font-bold text-lg text-blue-600">
          ${product.price.toFixed(2)}
        </span>
        <div className="flex items-center ml-3 text-yellow-500 text-sm">
          <Star size={16} fill="currentColor" className="mr-1" />
          {product.rating}
        </div>
      </div>

      <a
        href={product.affiliateLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded-lg text-center hover:bg-blue-700 transition"
      >
        Buy Now
      </a>
    </div>
  );
};

export default ProductCard;
