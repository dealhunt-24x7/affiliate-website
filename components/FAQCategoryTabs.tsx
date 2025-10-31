// /components/FAQCategoryTabs.tsx
"use client";

import React from "react";

type Props = {
  categories: string[];
  active: string;
  onChange: (cat: string) => void;
};

export default function FAQCategoryTabs({ categories, active, onChange }: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-6">
      {categories.map((c) => (
        <button
          key={c}
          onClick={() => onChange(c)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition ${
            active === c ? "bg-yellow-500 text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-yellow-50"
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
