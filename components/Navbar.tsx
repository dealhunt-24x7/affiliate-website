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
import { useRouter } from "next/navigation";

// Sample suggestions (API connect later)
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
  const router = useRouter();

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
    setQuery(item);
    setSuggestions([]);
    router.push(`/products?search=${encodeURIComponent(item)}`);
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
            <div className="w-full max-w-md">
              <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search products..."
                aria-label="Search products"
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-sm"
              />
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
            {/* Desktop Icons */}
            <div className="hidden md:flex items-center gap-4 text-gray-700 text-lg">
              <FiHeart
                onClick={() => router.push("/wishlist")}
                className="hover:text-yellow-500 cursor-pointer"
              />
              <FiShoppingCart
                onClick={() => router.push("/cart")}
                className="hover:text-yellow-500 cursor-pointer"
              />
              <FiUser
                onClick={() => router.push("/profile")}
                className="hover:text-yellow-500 cursor-pointer"
              />
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
            <div className="md:hidden flex items-center gap-3 relative">
              <FiUser
                className="text-lg text-gray-700 hover:text-yellow-500 cursor-pointer"
                onClick={() => router.push("/profile")}
              />
              <button
                className="text-2xl p-1"
                onClick={() => setDrawerOpen(true)}
                aria-label="Open menu"
              >
                <FiMenu />
              </button>

              {/* Mobile Search Bar */}
              <div className="absolute top-12 left-0 w-full px-0">
                <input
                  type="text"
                  value={query}
                  onChange={handleChange}
                  placeholder="Search products..."
                  aria-label="Search products"
                  className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-sm"
                />
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
          </div>
        </div>
      </div>

      {/* SIDE DRAWER */}
      {drawerOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-[9998] bg-black/50 transition-opacity duration-300"
            onClick={() => setDrawerOpen(false)}
          />

          {/* Drawer */}
          <aside
            className={`fixed top-0 left-0 z-[9999] w-72 max-w-xs bg-white shadow-2xl p-6 rounded-r-2xl h-auto max-h-[90vh] overflow-y-auto transition-transform duration-300 ${
              drawerOpen ? "translate-x-0" : "-translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-black"
              onClick={() => setDrawerOpen(false)}
              aria-label="Close menu"
            >
              <FiX />
            </button>

            {/* Menu Links */}
            <nav className="mt-8 flex flex-col gap-4">
              <Link href="/">Home</Link>
              <Link href="/products">Products</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>

              <hr className="my-2 border-gray-200" />

              <button onClick={() => router.push("/cart-to-heart")}>
                Join Our Cart to Heart Program
              </button>
              <button onClick={() => router.push("/filter")}>Filter</button>
              <button onClick={() => router.push("/donate")}>
                Donate Your Savings
              </button>
              <button onClick={() => router.push("/refer-earn")}>
                Refer & Earn
              </button>
              <button onClick={() => router.push("/wallet")}>Wallet</button>
              <button onClick={() => router.push("/settings")}>Settings</button>
            </nav>
          </aside>
        </>
      )}
    </header>
  );
}
