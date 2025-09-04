"use client";

import React from "react";
import CategoryPills from "@/components/CategoryPills";
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
      <section className="mb-6">
        <CategoryPills categories={categories} />
      </section>
      {categories.map((cat, idx) => (
        <CategoryRow key={idx} category={cat} />
      ))}
    </div>
  );
}
