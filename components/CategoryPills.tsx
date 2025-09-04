"use client";

import React from "react";

type Props = {
  categories: string[];
};

const CategoryPills: React.FC<Props> = ({ categories }) => {
  return (
    <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
      {categories.map((cat, idx) => (
        <span
          key={idx}
          className="px-4 py-2 text-sm bg-blue-100 text-blue-600 rounded-full cursor-pointer hover:bg-blue-200 whitespace-nowrap"
        >
          {cat}
        </span>
      ))}
    </div>
  );
};

export default CategoryPills;
