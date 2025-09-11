"use client";
export const dynamic = "force-dynamic";

import React from "react";
import CategoryRow from "@/components/CategoryRow";
import { categories } from "@/data/categoriesList"; // ✅ centralized categories import

export default function ProductsPage() {
  return (
    <div className="p-4 space-y-10">
      {categories.map((cat, idx) => (
        <CategoryRow key={idx} category={cat} />
      ))}
    </div>
  );
}
