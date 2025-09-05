"use client";

import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const categories = [
  "Mobile",
  "Laptop",
  "Headphones",
  "Watches",
  "Electronic",
  "Fashion",
  "Men",
  "Women",
  "Kids",
  "Footwear",
  "Home appliance",
  "Sports",
  "Jewellery",
  "Kitchen",
  "Home decor",
  "Study",
  "Others",
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <nav className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Brand + Tagline */}
          <div className="flex flex-col">
            <span className="text-2xl font-extrabold tracking-wide">
              Deal<span className="text-yellow-300">Hunt</span>
            </span>
            <span className="text-xs italic">Best Deals Everyday!</span>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 px-6">
            <input
              type="text"
              placeholder="Search deals, products..."
              className="w-full px-3 py-2 rounded-lg text-black text-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <FaUserCircle size={26} className="cursor-pointer" />
            <button
              className="md:hidden text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <HiX /> : <HiOutlineMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="px-4 pb-3 md:hidden">
          <input
            type="text"
            placeholder="Search deals..."
            className="w-full px-3 py-2 rounded-lg text-black text-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="bg-white text-black px-4 py-3 md:hidden">
            <ul className="space-y-2">
              <li className="hover:text-blue-600 cursor-pointer">Home</li>
              <li className="hover:text-blue-600 cursor-pointer">Deals</li>
              <li className="hover:text-blue-600 cursor-pointer">Categories</li>
              <li className="hover:text-blue-600 cursor-pointer">About Us</li>
              <li className="hover:text-blue-600 cursor-pointer">Contact</li>
            </ul>
          </div>
        )}
      </nav>

      {/* Shop by Category */}
      <div className="w-full overflow-x-auto bg-gray-100 py-3 shadow-inner">
        <div className="flex space-x-4 px-4 min-w-max">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-xs text-gray-700 cursor-pointer hover:text-blue-600"
            >
              <div className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center mb-1">
                <span className="text-sm font-bold">{cat[0]}</span>
              </div>
              {cat}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
