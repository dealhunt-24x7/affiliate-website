"use client";

import React from "react";

type Props = {
  categories: string[];
};

const CategoryPills: React.FC<Props> = ({ categories }) => {
  return (
    <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
      {categories.map((cat, idx) => (
        <button
          key={idx}
          className="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 text-sm font-medium"
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryPills;
