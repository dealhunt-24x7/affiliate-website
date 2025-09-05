"use client";

import React from "react";
import { getProducts } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function DealOfTheDay() {
  const product = getProducts()[0]; // फिलहाल पहला product को deal मान लेते हैं

  return (
    <div className="max-w-md mx-auto">
      <ProductCard product={product} />
    </div>
  );
}
