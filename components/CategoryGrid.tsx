"use client";

import { useEffect, useState } from "react";

type Category = {
  name: string;
  slug: string;
  image: string;
};

export default function CategoryGrid() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch("/api/categories");
      const data = await res.json();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  return (
    <section className="px-4">
      <h2 className="text-xl font-bold mb-6 text-center">Shop by Category</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
        {categories.map((cat, idx) => (
          <a key={idx} href={`/products/${cat.slug}`} className="flex flex-col items-center">
            <img
              src={cat.image}
              alt={cat.name}
              className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full shadow-md"
            />
            <span className="mt-2 text-sm font-medium text-gray-700">{cat.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
