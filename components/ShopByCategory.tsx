"use client";

import React from "react";
import CategoryRow from "@/components/CategoryRow";
import { categories } from "@/data/categoriesList"; // ✅ centralized categories import

export default function ShopByCategory() {
  return (
    <div className="space-y-10">
      {categories.map((cat, idx) => (
        <CategoryRow key={idx} category={cat} />
      ))}
    </div>
  );
}
