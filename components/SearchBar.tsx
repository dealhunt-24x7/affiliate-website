import { useState } from "react";

export function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", query);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
        className="border border-gray-300 rounded-l-md p-2 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white rounded-r-md p-2">
        Search
      </button>
    </form>
  );
}
