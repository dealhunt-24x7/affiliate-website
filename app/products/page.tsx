"use client";
export const dynamic = "force-dynamic";

import React from "react";
import CategoryRow from "@/components/CategoryRow";
import { categories } from "@/data/categoriesList";

export default function ProductsPage() {
  return (
    <div className="p-4 space-y-10">
      {/* ✅ Show all categories with their subcategories */}
      {categories.map((cat) => (
        <CategoryRow key={cat.slug} category={cat} />
      ))}
    </div>
  );
}
