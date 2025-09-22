"use client";

import Link from "next/link";
import { FiHeart, FiUser, FiShoppingCart, FiMenu } from "react-icons/fi";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
      {/* Mobile Search Bar */}
      <div className="md:hidden w-full bg-gray-50 px-4 py-2">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-md"
        />
      </div>

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 w-full">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide">
          <span className="text-yellow-500">Deal</span>Hunt
        </Link>

        {/* Desktop Search Bar */}
        <div className="hidden md:flex items-center ml-4">
          <input
            type="text"
            placeholder="Search products..."
            className="px-3 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        {/* Desktop Links + Icons */}
        <div className="hidden md:flex items-center gap-4">
          <nav className="flex gap-6 text-gray-700 font-medium">
            <Link href="/" className="hover:text-yellow-500 transition">
              Home
            </Link>
            <Link href="/products" className="hover:text-yellow-500 transition">
              Products
            </Link>
            <Link href="/about" className="hover:text-yellow-500 transition">
              About
            </Link>
            <Link href="/contact" className="hover:text-yellow-500 transition">
              Contact
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4 text-gray-700 text-lg">
            <FiHeart className="hover:text-yellow-500 cursor-pointer" />
            <FiShoppingCart className="hover:text-yellow-500 cursor-pointer" />
            <FiUser className="hover:text-yellow-500 cursor-pointer" />
          </div>
        </div>

        {/* Mobile Profile Icon + Menu Button */}
        <div className="md:hidden flex items-center gap-4 text-gray-700 text-lg">
          <FiUser className="hover:text-yellow-500 cursor-pointer" />
          <button
            className="text-2xl"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <FiMenu />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col gap-4 px-6 py-4">
            <Link href="/" className="hover:text-yellow-500 transition">
              Home
            </Link>
            <Link href="/products" className="hover:text-yellow-500 transition">
              Products
            </Link>
            <Link href="/about" className="hover:text-yellow-500 transition">
              About
            </Link>
            <Link href="/contact" className="hover:text-yellow-500 transition">
              Contact
            </Link>
            <div className="flex items-center gap-4 mt-2 text-gray-700 text-lg">
              <FiHeart className="hover:text-yellow-500 cursor-pointer" />
              <FiShoppingCart className="hover:text-yellow-500 cursor-pointer" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
