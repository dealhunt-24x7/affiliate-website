"use client";
import React from "react";

interface CategoryPillsProps {
  categories: string[];
  onSelect?: (category: string) => void;
}

const CategoryPills: React.FC<CategoryPillsProps> = ({ categories, onSelect }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat, idx) => (
        <button
          key={idx}
          onClick={() => onSelect && onSelect(cat)}
          className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-sm"
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryPills;
