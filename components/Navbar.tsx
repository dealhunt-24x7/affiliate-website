"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FiHeart,
  FiUser,
  FiShoppingCart,
  FiMenu,
  FiX,
  FiMoreHorizontal,
  FiSearch,
} from "react-icons/fi";
import { useState } from "react";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const router = useRouter();

  // Mock suggestions - baad me API se la sakte ho
  const mockSuggestions = [
    "Rolex Submariner",
    "Casio G-Shock",
    "Omega Speedmaster",
    "Cartier Bracelet",
    "Luxury Handbags",
    "Apple Watch Series 10",
  ];

  // Filter suggestions
  const filteredSuggestions = mockSuggestions.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  // Handle search submit
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/products?search=${encodeURIComponent(query.trim())}`);
      setShowSuggestions(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 w-full">
        {/* TOP ROW */}
        <div className="flex items-center justify-between">
          {/* Logo + Tagline */}
          <div className="flex flex-col">
            <Link href="/" className="text-2xl font-bold tracking-wide">
              <span className="text-yellow-500">Deal</span>Hunt
            </Link>
            <span className="mt-1 text-sm font-semibold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-pulse">
              Cart to Heart
            </span>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex flex-1 justify-center px-4 relative">
            <form onSubmit={handleSearch} className="w-full max-w-md">
              <input
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setShowSuggestions(true);
                }}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                placeholder="Search products..."
                aria-label="Search products"
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-sm"
              />
              {showSuggestions && query.length > 0 && (
                <ul className="absolute bg-white border border-gray-200 rounded-md shadow-lg mt-1 w-full max-w-md z-50">
                  {filteredSuggestions.length > 0 ? (
                    filteredSuggestions.map((item, idx) => (
                      <li
                        key={idx}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onMouseDown={() => {
                          router.push(`/products?search=${encodeURIComponent(item)}`);
                          setShowSuggestions(false);
                        }}
                      >
                        {item}
                      </li>
                    ))
                  ) : (
                    <li className="px-4 py-2 text-gray-400">No results found</li>
                  )}
                </ul>
              )}
            </form>
          </div>

          {/* Right side icons */}
          <div className="flex items-center gap-3">
            {/* Desktop Icons */}
            <div className="hidden md:flex items-center gap-4 text-gray-700 text-lg">
              <FiHeart className="hover:text-yellow-500 cursor-pointer" />
              <FiShoppingCart className="hover:text-yellow-500 cursor-pointer" />
              <FiUser className="hover:text-yellow-500 cursor-pointer" />
            </div>

            {/* Desktop 3-dot */}
            <button
              className="hidden md:inline-flex items-center justify-center p-2 rounded hover:bg-gray-100"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
            >
              <FiMoreHorizontal className="text-lg text-gray-700 hover:text-yellow-500" />
            </button>

            {/* Mobile: profile + hamburger */}
            <div className="md:hidden flex items-center gap-3">
              <FiUser className="text-lg text-gray-700 hover:text-yellow-500 cursor-pointer" />
              <button
                className="text-2xl p-1"
                onClick={() => setDrawerOpen(true)}
                aria-label="Open menu"
              >
                <FiMenu />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden mt-3 relative">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setShowSuggestions(true);
              }}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              placeholder="Search products..."
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-sm"
            />
            {showSuggestions && query.length > 0 && (
              <ul className="absolute bg-white border border-gray-200 rounded-md shadow-lg mt-1 w-full z-50">
                {filteredSuggestions.length > 0 ? (
                  filteredSuggestions.map((item, idx) => (
                    <li
                      key={idx}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onMouseDown={() => {
                        router.push(`/products?search=${encodeURIComponent(item)}`);
                        setShowSuggestions(false);
                      }}
                    >
                      {item}
                    </li>
                  ))
                ) : (
                  <li className="px-4 py-2 text-gray-400">No results found</li>
                )}
              </ul>
            )}
          </form>
        </div>
      </div>
    </header>
  );
}
