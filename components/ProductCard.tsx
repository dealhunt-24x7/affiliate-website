"use client";

import React from "react";

const ProductCard: React.FC = () => {
  return (
    <div className="border rounded-lg p-3 bg-white shadow-md hover:shadow-lg transition flex flex-col items-center justify-center h-[220px]">
      {/* Placeholder Image Box */}
      <div className="w-full h-24 bg-gray-300 rounded mb-3"></div>

      {/* View Deal Button */}
      <button className="px-4 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500 transition">
        View Deal
      </button>
    </div>
  );
};

export default ProductCard;
