"use client";

import Link from "next/link";
import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-blue-600 shadow">
      {/* Brand + Tagline */}
      <div className="text-center py-3">
        <Link href="/" className="block">
          <span className="text-3xl font-extrabold text-white">
            Deal<span className="text-yellow-300">Hunt</span>
          </span>
        </Link>
        <span className="text-sm italic text-yellow-100 block -mt-1">
          Best Deals Everyday!
        </span>
      </div>

      {/* Searchbar */}
      <div className="px-4 pb-3">
        <div className="flex items-center bg-white rounded-full shadow px-3 py-2">
          <Search className="text-gray-500" size={18} />
          <input
            type="text"
            placeholder="Search products..."
            className="flex-1 ml-2 outline-none text-sm text-gray-700"
          />
        </div>
      </div>
    </header>
  );
}
