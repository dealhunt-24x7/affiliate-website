"use client";

import React from "react";

interface Props {
  categories?: string[];
}

const CategoryPills: React.FC<Props> = ({ categories = [] }) => {
  const defaultCategories = [
    "Electronics",
    "Fashion",
    "Home",
    "Beauty",
    "Toys",
    "Sports",
    "Books",
    "Grocery",
  ];

  const allCategories = categories.length > 0 ? categories : defaultCategories;

  return (
    <div className="flex gap-3 overflow-x-auto no-scrollbar pb-3">
      {allCategories.map((cat, idx) => (
        <span
          key={idx}
          className="px-4 py-2 text-sm bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 whitespace-nowrap"
        >
          {cat}
        </span>
      ))}
    </div>
  );
};

export default CategoryPills;
