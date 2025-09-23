"use client";

import Link from "next/link";
import {
  FiHeart,
  FiUser,
  FiShoppingCart,
  FiMenu,
  FiX,
  FiMoreHorizontal,
} from "react-icons/fi";
import { useState } from "react";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 w-full">
        {/* TOP ROW */}
        <div className="flex items-center justify-between">
          {/* Logo + Tagline */}
          <div className="flex flex-col">
            <Link href="/" className="text-2xl font-bold tracking-wide">
              <span className="text-yellow-500">Deal</span>Hunt
            </Link>
            <span className="mt-1 text-sm font-semibold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-pulse">
              Cart to Heart
            </span>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex flex-1 justify-center px-4">
            <div className="w-full max-w-md">
              <input
                type="text"
                placeholder="Search products..."
                aria-label="Search products"
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-sm"
              />
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center gap-3">
            {/* Desktop Icons */}
            <div className="hidden md:flex items-center gap-4 text-gray-700 text-lg">
              <FiHeart className="hover:text-yellow-500 cursor-pointer" />
              <FiShoppingCart className="hover:text-yellow-500 cursor-pointer" />
              <FiUser className="hover:text-yellow-500 cursor-pointer" />
            </div>

            {/* Desktop 3-dot */}
            <button
              className="hidden md:inline-flex items-center justify-center p-2 rounded hover:bg-gray-100"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
            >
              <FiMoreHorizontal className="text-lg text-gray-700 hover:text-yellow-500" />
            </button>

            {/* Mobile: profile + hamburger */}
            <div className="md:hidden flex items-center gap-3">
              <FiUser className="text-lg text-gray-700 hover:text-yellow-500 cursor-pointer" />
              <button
                className="text-2xl p-1"
                onClick={() => setDrawerOpen(true)}
                aria-label="Open menu"
              >
                <FiMenu />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden mt-3">
          <input
            type="text"
            placeholder="Search products..."
            aria-label="Search products"
            className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-sm"
          />
        </div>
      </div>

      {/* SIDE DRAWER */}
      {drawerOpen && (
        <div className="fixed inset-0 z-[9999] flex">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 transition-opacity duration-300"
            onClick={() => setDrawerOpen(false)}
          />

          {/* Drawer */}
          <aside
            className="relative z-50 w-72 max-w-xs bg-white shadow-2xl p-6 rounded-r-2xl h-auto overflow-y-auto transform transition-transform duration-300 -translate-x-full animate-slide-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-black"
              onClick={() => setDrawerOpen(false)}
              aria-label="Close menu"
            >
              <FiX />
            </button>

            {/* Menu Links */}
            <nav className="mt-8 flex flex-col gap-4">
              <Link href="/" className="text-yellow-500 font-semibold">
                Home
              </Link>
              <Link href="/products" className="text-yellow-500 font-semibold">
                Products
              </Link>
              <Link href="/about" className="text-yellow-500 font-semibold">
                About
              </Link>
              <Link href="/contact" className="text-yellow-500 font-semibold">
                Contact
              </Link>

              <hr className="my-2 border-gray-200" />

              <button className="text-yellow-500 text-left font-semibold">
                Filter
              </button>
              <button className="text-yellow-500 text-left font-semibold">
                Donate Your Savings
              </button>
              <button className="text-yellow-500 text-left font-semibold">
                Refer & Earn
              </button>
              <button className="text-yellow-500 text-left font-semibold">
                Wallet
              </button>
              <button className="text-yellow-500 text-left font-semibold">
                Settings
              </button>

              <div className="flex items-center gap-4 mt-6 text-yellow-500 text-lg">
                <FiHeart className="cursor-pointer" />
                <FiShoppingCart className="cursor-pointer" />
              </div>
            </nav>
          </aside>
        </div>
      )}

      {/* Tailwind Animations */}
      <style jsx>{`
        @keyframes slide-in {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out forwards;
        }
      `}</style>
    </header>
  );
}
