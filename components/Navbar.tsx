"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, User, Search } from "lucide-react";

const CATEGORIES = [
  "Mobile",
  "Laptop",
  "Headphones",
  "Watches",
  "Electronics",
  "Men",
  "Women",
  "Kids",
  "Fashion",
  "Footwear",
  "Home appliances",
  "Sports",
  "Jwellery",
  "Kitchen",
  "Home decor",
  "Study",
  "Others",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-cyan-500 to-blue-600 shadow">
      <div className="flex items-center justify-between px-4 py-3">
        <button onClick={() => setOpen(!open)} aria-label="Open menu" className="text-white">
          <Menu size={26} />
        </button>

        <div className="text-center">
          <Link href="/" className="block">
            <span className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-yellow-300 via-white to-yellow-200 bg-clip-text text-transparent drop-shadow-sm">
              Deal<span className="text-white">Hunt</span>
            </span>
          </Link>
          <span className="text-sm italic text-yellow-100 block -mt-1">Best Deals Everyday!</span>
        </div>

        <Link href="/profile" aria-label="Profile" className="text-white">
          <User size={26} />
        </Link>
      </div>

      <div className="px-4 pb-3">
        <div className="flex items-center bg-white rounded-full shadow px-3 py-2">
          <Search className="text-gray-500" size={18} />
          <input
            type="text"
            placeholder="Search products..."
            className="flex-1 ml-2 outline-none text-sm"
          />
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto px-4 pb-3 scrollbar-hide">
        {CATEGORIES.map((c) => (
          <Link key={c} href={`/products?category=${encodeURIComponent(c)}`} className="flex flex-col items-center min-w-[64px]">
            <div className="w-12 h-12 rounded-full bg-white shadow-md" />
            <span className="text-[11px] mt-1 text-white whitespace-nowrap">{c}</span>
          </Link>
        ))}
      </div>

      {open && (
        <aside className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-72 max-w-[85%] bg-white shadow-2xl p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="text-lg font-bold">Menu</div>
              <button className="rounded-md border px-3 py-1.5 text-sm" onClick={() => setOpen(false)}>
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
