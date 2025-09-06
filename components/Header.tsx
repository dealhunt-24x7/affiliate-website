"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, User, Search } from "lucide-react";

const CATEGORIES = [
  "Mobiles",
  "Laptops",
  "Electronics",
  "Fashion",
  "Home",
  "Beauty",
  "Toys",
  "Sports",
  "Furniture",
  "Grocery",
  "Books",
  "Stationery",
  "Watches",
  "Shoes",
  "Appliances",
  "Jewellery",
  "Others",
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-blue-600 shadow">
      {/* Top Navbar */}
      <div className="flex items-center gap-3 px-4 py-3">
        {/* Menu (mobile only) */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
          aria-label="Open menu"
        >
          <Menu size={26} />
        </button>

        {/* Brand + tagline */}
        <div className="flex flex-col text-white">
          <Link href="/" className="text-2xl font-extrabold">
            Deal<span className="text-yellow-300">Hunt</span>
          </Link>
          <span className="text-xs italic -mt-1">Best Deals Everyday!</span>
        </div>

        {/* Searchbar */}
        <div className="flex flex-1 items-center bg-white rounded-md shadow px-3 py-2 mx-3">
          <Search className="text-gray-500" size={18} />
          <input
            type="text"
            placeholder="Search for Products, Brands and More"
            className="flex-1 ml-2 outline-none text-sm"
          />
        </div>

        {/* Profile */}
        <Link href="/profile" aria-label="Profile" className="text-white">
          <User size={26} />
        </Link>
      </div>

      {/* Categories strip */}
      <div className="flex gap-4 overflow-x-auto px-4 py-2 scrollbar-hide bg-blue-700">
        {CATEGORIES.map((c) => (
          <Link
            key={c}
            href={`/products?category=${encodeURIComponent(c)}`}
            className="flex flex-col items-center min-w-[64px]"
          >
            <div className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center text-sm font-semibold text-gray-700">
              {c[0]}
            </div>
            <span className="text-[11px] mt-1 text-white whitespace-nowrap">
              {c}
            </span>
          </Link>
        ))}
      </div>

      {/* Sidebar Menu */}
      {open && (
        <aside className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-72 max-w-[85%] bg-white shadow-2xl p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="text-lg font-bold">Menu</div>
              <button
                onClick={() => setOpen(false)}
                className="rounded-md border px-3 py-1.5 text-sm"
              >
                Close
              </button>
            </div>
            <nav className="flex flex-col gap-3">
              <Link href="/" onClick={() => setOpen(false)}>Home</Link>
              <Link href="/products?openFilters=true" onClick={() => setOpen(false)}>Filter</Link>
              <Link href="/products" onClick={() => setOpen(false)}>All Categories</Link>
              <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>
              <Link href="/comparison" onClick={() => setOpen(false)}>Comparison</Link>
              <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
              <Link href="/settings" onClick={() => setOpen(false)}>Settings</Link>
            </nav>
          </div>
        </aside>
      )}
    </header>
  );
}
