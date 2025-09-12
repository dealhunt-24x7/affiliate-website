"use client";
export const dynamic = "force-dynamic";

import React, { useEffect, useState } from "react";
import CategoryRow from "@/components/CategoryRow";
import { categories as staticCategories } from "@/data/categoriesList";

export default function ProductsPage() {
  const [categories, setCategories] = useState(staticCategories);

  useEffect(() => {
    // Future me agar categories ko bhi json se laana ho to yaha fetch kar sakte ho
    setCategories(staticCategories);
  }, []);

  return (
    <div className="p-4 space-y-10">
      {categories.map((cat, idx) => (
        <CategoryRow key={idx} category={cat} />
      ))}
    </div>
  );
}
