"use client";
export const dynamic = "force-dynamic";

import React from "react";
import CategoryRow from "@/components/CategoryRow";

const categories = [
  "Mobile",
  "Laptop",
  "Headphones",
  "Watches",
  "Electronic",
  "Fashion",
  "Men",
  "Women",
  "Kids",
  "Footwear",
  "Home appliance",
  "Sports",
  "Jewellery",
  "Kitchen",
  "Home decor",
  "Study",
  "Others",
];

export default function ProductsPage() {
  return (
    <div className="p-4">
      {categories.map((cat, idx) => (
        <CategoryRow key={idx} category={cat} />
      ))}
    </div>
  );
}
