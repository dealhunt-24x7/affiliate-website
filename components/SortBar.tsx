"use client";
import React from "react";

interface SortBarProps {
  options?: string[];
  onSortChange?: (option: string) => void;
}

const SortBar: React.FC<SortBarProps> = ({ options = ["Price: Low to High", "Price: High to Low"], onSortChange }) => {
  return (
    <div className="flex justify-end mb-4">
      <select
        className="border px-3 py-2 rounded-lg"
        onChange={(e) => onSortChange && onSortChange(e.target.value)}
      >
        {options.map((opt, idx) => (
          <option key={idx} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortBar;
