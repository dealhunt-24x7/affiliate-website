"use client";
export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import CategoryRow from "@/components/CategoryRow";

type Category = {
  name: string;
  slug: string;
  image: string;
};

export default function ProductsPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("/api/categories");
        const data = await res.json();
        console.log("✅ Fetched categories:", data); // 🔍 Debugging ke liye log
        setCategories(data);
      } catch (error) {
        console.error("❌ Error loading categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <div className="p-4 text-center text-gray-500">
        Loading categories...
      </div>
    );
  }

  return (
    <div className="p-4 space-y-10">
      {categories.map((cat, idx) => (
        <CategoryRow key={idx} category={cat} />
      ))}
    </div>
  );
}
