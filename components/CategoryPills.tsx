"use client";

import React from "react";

interface Props {
  categories: string[];
}

const CategoryPills: React.FC<Props> = ({ categories }) => {
  return (
    <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
      {categories.map((cat, idx) => (
        <button
          key={idx}
          className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition"
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryPills;
