"use client";

import Link from "next/link";
import { FiHeart, FiUser, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-3">
        {/* Top Row (Logo + Icons) */}
        <div className="flex justify-between items-center w-full md:w-auto">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-wide">
            <span className="text-yellow-500">Deal</span>Hunt
          </Link>

          {/* Animated Tagline Desktop */}
          <span className="hidden md:inline ml-3 text-sm font-semibold bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent animate-pulse hover:scale-105 transition-transform">
            Cart to Heart
          </span>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center gap-4 text-gray-700 text-lg ml-auto">
            <FiHeart className="hover:text-yellow-500 cursor-pointer" />
            <FiShoppingCart className="hover:text-yellow-500 cursor-pointer" />
            <FiUser className="hover:text-yellow-500 cursor-pointer" />
            {/* 3 Dots Menu (Desktop) */}
            <button
              className="hover:text-yellow-500 cursor-pointer"
              onClick={() => setMobileOpen(true)}
            >
              <FiMenu />
            </button>
          </div>

          {/* Mobile Right Section */}
          <div className="md:hidden flex items-center gap-4 text-gray-700 text-lg">
            <FiUser className="hover:text-yellow-500 cursor-pointer" />
            <button className="text-2xl" onClick={() => setMobileOpen(true)}>
              <FiMenu />
            </button>
          </div>
        </div>

        {/* Search Bar (Below Logo on Mobile) */}
        <div className="mt-3 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full md:w-64 px-3 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
      </div>

      {/* Side Drawer Menu */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-50"
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="absolute top-0 left-0 h-full w-72 bg-white shadow-xl p-6 animate-slideIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-black"
              onClick={() => setMobileOpen(false)}
            >
              <FiX />
            </button>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-4 mt-8">
              <Link href="/" className="hover:text-yellow-500">Home</Link>
              <Link href="/products" className="hover:text-yellow-500">Products</Link>
              <Link href="/about" className="hover:text-yellow-500">About</Link>
              <Link href="/contact" className="hover:text-yellow-500">Contact</Link>
              <hr className="my-2" />
              <button className="hover:text-yellow-500">Filter</button>
              <button className="hover:text-yellow-500">Donate Your Savings</button>
              <button className="hover:text-yellow-500">Refer & Earn</button>
              <button className="hover:text-yellow-500">Wallet</button>
              <button className="hover:text-yellow-500">Settings</button>
              <div className="flex items-center gap-4 mt-4 text-gray-700 text-lg">
                <FiHeart className="hover:text-yellow-500 cursor-pointer" />
                <FiShoppingCart className="hover:text-yellow-500 cursor-pointer" />
              </div>
            </nav>
          </div>
          <style jsx>{`
            @keyframes slideIn {
              from {
                transform: translateX(-100%);
              }
              to {
                transform: translateX(0);
              }
            }
            .animate-slideIn {
              animation: slideIn 0.3s ease-out forwards;
            }
          `}</style>
        </div>
      )}
    </header>
  );
}
