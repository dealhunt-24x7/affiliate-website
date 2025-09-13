"use client";
export const dynamic = "force-dynamic";

import React from "react";
import CategoryRow from "@/components/CategoryRow";
import { categories } from "@/data/categoriesList";

type Category = {
  name: string;
  slug: string;
  image: string;
};

export default function ProductsPage() {
  return (
    <div className="p-4 space-y-10">
      {(categories as Category[]).map((cat, idx) => (
        <CategoryRow key={idx} category={cat} />
      ))}
    </div>
  );
}
