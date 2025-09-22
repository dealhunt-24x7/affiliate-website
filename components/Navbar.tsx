"use client";

import Link from "next/link";
import { FiSearch, FiHeart, FiUser, FiShoppingCart, FiMenu } from "react-icons/fi";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-900 tracking-wide">
          <span className="text-yellow-500">Luxury</span> Deals
        </Link>

        {/* Desktop Links + Icons */}
        <div className="hidden md:flex items-center gap-6">
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
            <FiSearch className="hover:text-yellow-500 cursor-pointer" />
            <FiHeart className="hover:text-yellow-500 cursor-pointer" />
            <FiShoppingCart className="hover:text-yellow-500 cursor-pointer" />
            <FiUser className="hover:text-yellow-500 cursor-pointer" />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <FiMenu />
        </button>
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
              <FiSearch className="hover:text-yellow-500 cursor-pointer" />
              <FiHeart className="hover:text-yellow-500 cursor-pointer" />
              <FiShoppingCart className="hover:text-yellow-500 cursor-pointer" />
              <FiUser className="hover:text-yellow-500 cursor-pointer" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
