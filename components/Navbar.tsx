"use client";

import Link from "next/link";
import {
  FiHeart,
  FiUser,
  FiShoppingCart,
  FiMenu,
  FiX,
  FiMoreHorizontal,
  FiCamera,
  FiMic,
  FiSearch,
} from "react-icons/fi";
import { useState } from "react";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleScrollToContact = () => {
    setDrawerOpen(false);
    setTimeout(() => {
      const section = document.getElementById("contact-section");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

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

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 justify-center px-4">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                aria-label="Search products"
                className="w-full px-4 pr-20 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-sm"
              />

              {/* Icons - Positioned inside input */}
              <div className="absolute inset-y-0 right-3 flex items-center gap-3 text-gray-400">
                <FiCamera className="cursor-pointer hover:text-gray-700" />
                <FiMic className="cursor-pointer hover:text-gray-700" />
                {searchQuery.length > 0 && (
                  <FiSearch className="cursor-pointer hover:text-gray-700" />
                )}
              </div>
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-3">
            {/* Desktop Icons */}
            <div className="hidden md:flex items-center gap-4 text-gray-700 text-lg">
              <FiHeart className="hover:text-yellow-500 cursor-pointer" />
              <FiShoppingCart className="hover:text-yellow-500 cursor-pointer" />
              <FiUser className="hover:text-yellow-500 cursor-pointer" />
            </div>

            {/* 3-dot menu */}
            <button
              className="hidden md:inline-flex items-center justify-center p-2 rounded hover:bg-gray-100"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
            >
              <FiMoreHorizontal className="text-lg text-gray-700 hover:text-yellow-500" />
            </button>

            {/* Mobile profile + hamburger */}
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
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full px-4 pr-20 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-sm bg-white"
            />
            <div className="absolute inset-y-0 right-3 flex items-center gap-3 text-gray-400">
              <FiCamera className="cursor-pointer hover:text-gray-700" />
              <FiMic className="cursor-pointer hover:text-gray-700" />
              {searchQuery.length > 0 && (
                <FiSearch className="cursor-pointer hover:text-gray-700" />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* SIDE DRAWER */}
      {drawerOpen && (
        <>
          <div
            className="fixed inset-0 z-[9998] bg-black/50 transition-opacity duration-300"
            onClick={() => setDrawerOpen(false)}
          />
          <aside
            className={`fixed top-0 left-0 z-[9999] w-72 max-w-xs bg-white shadow-2xl p-6 rounded-r-2xl h-auto max-h-[90vh] overflow-y-auto transition-transform duration-300 ${
              drawerOpen ? "translate-x-0" : "-translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
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
              <button
                onClick={handleScrollToContact}
                className="text-yellow-500 text-left font-semibold"
              >
                Contact
              </button>

              <hr className="my-2 border-gray-200" />

              <button className="text-yellow-500 text-left font-semibold">
                Join Our Cart to Heart Program
              </button>
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
        </>
      )}
    </header>
  );
}
