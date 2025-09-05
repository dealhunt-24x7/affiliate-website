"use client";

import React from "react";
import CategoryRow from "@/components/CategoryRow";

const categories = ["Mobile", "Laptop", "Headphones", "Fashion"];

export default function ShopByCategory() {
  return (
    <div className="space-y-10">
      {categories.map((cat, idx) => (
        <CategoryRow key={idx} category={cat} />
      ))}
    </div>
  );
}
