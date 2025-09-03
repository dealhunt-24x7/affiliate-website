"use client";
import React from "react";

interface CategoryPillsProps {
  categories: string[];
}

const CategoryPills: React.FC<CategoryPillsProps> = ({ categories }) => {
  return (
    <div className="flex gap-2 overflow-x-auto no-scrollbar">
      {categories.map((cat, i) => (
        <button
          key={i}
          className="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 whitespace-nowrap"
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryPills;
