"use client";
import React from "react";

interface SearchBarProps {
  onSearch?: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <div className="w-full flex">
      <input
        type="text"
        placeholder="Search products..."
        className="flex-1 border px-4 py-2 rounded-l-lg"
        onChange={(e) => onSearch && onSearch(e.target.value)}
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
