
"use client";

import { categories } from "@/data/categories";

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
      {categories.map((cat, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border shadow hover:scale-105 transition">
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="mt-2 text-sm font-medium text-gray-700 text-center">
            {cat.name}
          </span>
        </div>
      ))}
    </div>
  );
}
