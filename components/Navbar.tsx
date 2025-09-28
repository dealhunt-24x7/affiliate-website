"use client";

import Link from "next/link";
import {
  FiHeart,
  FiUser,
  FiShoppingCart,
  FiMenu,
  FiX,
  FiMoreHorizontal,
} from "react-icons/fi";
import { useState } from "react";

// Sample suggestions
const sampleSuggestions = [
  "Rolex Daytona",
  "Omega Seamaster",
  "Apple Watch Ultra",
  "Tag Heuer Carrera",
  "Cartier Tank",
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    if (value.length > 0) {
      const filtered = sampleSuggestions.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (item: string) => {
    if (!item.trim()) return;
    setQuery(item);
    setSuggestions([]);
    window.location.href = `/products?search=${encodeURIComponent(item)}`;
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      alert(`Image selected: ${e.target.files[0].name}`);
    }
  };

  const startVoiceSearch = () => {
    alert("🎤 Voice search starting... (Demo)");
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
            <div className="w-full max-w-md relative">
              <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search products..."
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-sm pr-20"
              />
              {/* Right-side Icons */}
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-2 text-gray-500">
                <button onClick={() => document.getElementById("imageInput")?.click()} aria-label="Search by image">📷</button>
                <button onClick={startVoiceSearch} aria-label="Voice search">🎤</button>
                <button onClick={() => handleSelect(query)} aria-label="Search">🔍</button>
                <input type="file" id="imageInput" accept="image/*" className="hidden" onChange={handleImageUpload} />
              </div>
              {suggestions.length > 0 && (
                <ul className="absolute w-full bg-white shadow-md rounded-b-md mt-1 max-h-60 overflow-y-auto z-50">
                  {suggestions.map((item, idx) => (
                    <li
                      key={idx}
                      className="px-4 py-2 hover:bg-yellow-100 cursor-pointer"
                      onClick={() => handleSelect(item)}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-4 text-gray-700 text-lg">
              <FiHeart className="hover:text-yellow-500 cursor-pointer" />
              <FiShoppingCart className="hover:text-yellow-500 cursor-pointer" />
              <FiUser className="hover:text-yellow-500 cursor-pointer" />
            </div>

            <button
              className="hidden md:inline-flex items-center justify-center p-2 rounded hover:bg-gray-100"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
            >
              <FiMoreHorizontal className="text-lg text-gray-700 hover:text-yellow-500" />
            </button>

            {/* Mobile menu */}
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
      </div>

      {/* Drawer */}
      {drawerOpen && (
        <>
          <div
            className="fixed inset-0 z-[9998] bg-black/50 transition-opacity duration-300"
            onClick={() => setDrawerOpen(false)}
          />
          <aside
            className={`fixed top-0 left-0 z-[9999] w-72 bg-white shadow-2xl p-6 rounded-r-2xl h-auto max-h-[90vh] overflow-y-auto transition-transform duration-300 ${
              drawerOpen ? "translate-x-0" : "-translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-black"
              onClick={() => setDrawerOpen(false)}
            >
              <FiX />
            </button>

            <nav className="mt-8 flex flex-col gap-4">
              <Link href="/" className="text-yellow-500 font-semibold">Home</Link>
              <Link href="/products" className="text-yellow-500 font-semibold">Products</Link>
              <Link href="/about" className="text-yellow-500 font-semibold">About</Link>
              <button
                className="text-yellow-500 text-left font-semibold"
                onClick={() => {
                  setDrawerOpen(false);
                  setTimeout(() => {
                    document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" });
                  }, 300);
                }}
              >
                Contact
              </button>
            </nav>
          </aside>
        </>
      )}
    </header>
  );
}
