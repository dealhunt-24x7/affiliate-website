"use client";
import React from "react";

interface FiltersSidebarProps {
  filters?: string[];
  onFilterChange?: (filter: string) => void;
}

const FiltersSidebar: React.FC<FiltersSidebarProps> = ({ filters = [], onFilterChange }) => {
  return (
    <aside className="p-4 border rounded-lg w-full sm:w-64">
      <h3 className="font-semibold mb-2">Filters</h3>
      <ul className="space-y-2">
        {filters.map((filter, idx) => (
          <li key={idx}>
            <button
              className="w-full text-left px-3 py-1 rounded hover:bg-gray-100"
              onClick={() => onFilterChange && onFilterChange(filter)}
            >
              {filter}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default FiltersSidebar;
