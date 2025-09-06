"use client";

import React from "react";
import CategoryRow from "@/components/CategoryRow";

const categories = [
  "Mobile",
  "Laptop",
  "Headphones",
  "Watches",
  "Electronics",
  "Men",
  "Women",
  "Kids",
  "Fashion",
  "Footwear",
  "Home appliances",
  "Sports",
  "Jwellery",
  "Kitchen",
  "Home decor",
  "Study",
  "Others"
];

export default function ShopByCategory() {
  return (
    <div className="space-y-10">
      {categories.map((cat, idx) => (
        <CategoryRow key={idx} category={cat} />
      ))}
    </div>
  );
}
