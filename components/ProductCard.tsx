"use client";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-md" />
      <h2 className="text-xl mt-3">{product.name}</h2>
      <p className="text-gray-600">{product.description}</p>
      <button className="w-full py-2 mt-3 bg-blue-500 text-white rounded-lg">Compare</button>
    </div>
  );
};

export default ProductCard;
