"use client";
export const dynamic = "force-dynamic";

import React, { useEffect, useState } from "react";
import CategoryRow from "@/components/CategoryRow";

type Category = {
  name: string;
  slug: string;
  subcategories: string[];
};

export default function ProductsPage() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch("/api/categories");
        const data = await res.json();
        setCategories(data.categories); // ✅ JSON ke andar "categories" key h
      } catch (error) {
        console.error("Error loading categories:", error);
      }
    }
    fetchCategories();
  }, []);

  return (
    <div className="p-4 space-y-10">
      {categories.map((cat, idx) => (
        <CategoryRow key={idx} category={cat} />
      ))}
    </div>
  );
}
