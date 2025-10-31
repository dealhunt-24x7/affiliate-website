// /components/FAQSearch.tsx
"use client";

import React from "react";
import { FiSearch, FiX } from "react-icons/fi";

type Props = {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
};

export default function FAQSearch({ value, onChange, placeholder }: Props) {
  return (
    <div className="w-full md:w-3/4 flex items-center gap-2">
      <div className="relative w-full">
        <FiSearch className="absolute left-3 top-3 text-gray-400" />
        <input
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder || "Search FAQs..."}
          className="w-full pl-10 pr-10 py-3 rounded-full border border-gray-200 shadow-sm focus:ring-2 focus:ring-yellow-400 outline-none"
        />
        {value && (
          <button
            aria-label="Clear search"
            onClick={() => onChange("")}
            className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
          >
            <FiX />
          </button>
        )}
      </div>
    </div>
  );
      }
