"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Search, User } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Ab categories me image bhi add kiya
  const categories = [
    { name: "Mobiles", image: "/images/categories/mobile.png" },
    { name: "Laptops", image: "/images/categories/laptop.png" },
    { name: "Electronics", image: "/images/categories/electronics.png" },
    { name: "Fashion", image: "/images/categories/fashion.png" },
    { name: "Home", image: "/images/categories/home.png" },
    { name: "Beauty", image: "/images/categories/beauty.png" },
    { name: "Toys", image: "/images/categories/toys.png" },
    { name: "Sports", image: "/images/categories/sports.png" },
    { name: "Watches", image: "/images/categories/watch.png" },
    { name: "Footwear", image: "/images/categories/footwear.png" },
  ];

  return (
    <header className="bg-black shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setOpen(!open)}
            className="text-white focus:outline-none"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
          <div className="flex flex-col">
            <Link href="/" className="text-xl font-extrabold">
              <span className="text-red-600">Deal</span>
              <span className="text-yellow-400">Hunt</span>
            </Link>
            <span className="text-[10px] italic -mt-1 text-yellow-400">
              Best Deals Everyday!
            </span>
          </div>
        </div>
        <Link href="/profile" aria-label="Profile" className="text-white">
          <User size={24} />
        </Link>
      </div>

      {/* Search Bar */}
      <div className="px-4 pb-1.5 md:pb-2.5">
        <div className="flex items-center bg-white rounded-md shadow px-3 py-1.5 w-full md:w-[60%] md:mx-auto">
          <Search className="text-gray-500" size={16} />
          <input
            type="text"
            placeholder="Search for Products, Brands and More"
            className="flex-1 ml-2 outline-none text-sm text-black"
          />
        </div>
      </div>

      {/* Categories strip with images */}
      <div className="overflow-x-auto bg-black scrollbar-hide">
        <div className="flex gap-3 px-4 py-1.5">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="flex flex-col items-center min-w-[65px] cursor-pointer text-white"
            >
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mb-1 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-[11px] whitespace-nowrap">{cat.name}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
