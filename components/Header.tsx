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
    <header className="bg-blue-600 shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setOpen(!open)}
            className="text-white"
            aria-label="Open menu"
          >
            <Menu size={26} />
          </button>
          <div className="flex flex-col text-white">
            <Link href="/" className="text-2xl font-extrabold">
              Deal<span className="text-yellow-300">Hunt</span>
            </Link>
            <span className="text-xs italic -mt-1 text-white">
              Best Deals Everyday!
            </span>
          </div>
        </div>
        <Link href="/profile" aria-label="Profile" className="text-white">
          <User size={26} />
        </Link>
      </div>

      <div className="px-4 pb-2 md:pb-3">
        <div className="flex items-center bg-white rounded-md shadow px-3 py-2 w-full md:w-[60%] md:mx-auto">
          <Search className="text-gray-500" size={18} />
          <input
            type="text"
            placeholder="Search for Products, Brands and More"
            className="flex-1 ml-2 outline-none text-sm"
          />
        </div>
      </div>

      <div className="overflow-x-auto bg-blue-600 scrollbar-hide">
        <div className="flex gap-4 px-4 py-2">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="flex flex-col items-center min-w-[60px] cursor-pointer text-white"
            >
              <span className="text-xs whitespace-nowrap">{cat}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
