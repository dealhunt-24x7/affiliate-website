"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Search, User } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const categories = [
    "Mobiles", "Laptops", "Electronics", "Fashion", "Home",
    "Beauty", "Toys", "Sports", "Furniture", "Grocery",
    "Books", "Stationery", "Appliances", "Watches",
    "Footwear", "Travel", "Gaming"
  ];

  return (
    <header className="bg-black shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setOpen(!open)}
            className="text-white focus:outline-none"
            aria-label="Open menu"
          >
            <Menu size={26} />
          </button>
          <div className="flex flex-col">
            <Link href="/" className="text-2xl font-extrabold">
              <span className="text-red-600">Deal</span>
              <span className="text-yellow-400">Hunt</span>
            </Link>
            <span className="text-xs italic -mt-1 text-yellow-400">
              Best Deals Everyday!
            </span>
          </div>
        </div>
        <Link href="/profile" aria-label="Profile" className="text-white">
          <User size={26} />
        </Link>
      </div>

      {/* Search Bar */}
      <div className="px-4 pb-2 md:pb-3">
        <div className="flex items-center bg-white rounded-md shadow px-3 py-2 w-full md:w-[60%] md:mx-auto">
          <Search className="text-gray-500" size={18} />
          <input
            type="text"
            placeholder="Search for Products, Brands and More"
            className="flex-1 ml-2 outline-none text-sm text-black"
          />
        </div>
      </div>

      {/* Categories with Round Placeholders */}
      <div className="overflow-x-auto bg-black scrollbar-hide">
        <div className="flex gap-4 px-4 py-2">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="flex flex-col items-center min-w-[70px] cursor-pointer text-white"
            >
              <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center mb-1 text-sm font-medium text-white">
                {cat.charAt(0)}
              </div>
              <span className="text-xs whitespace-nowrap">{cat}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
