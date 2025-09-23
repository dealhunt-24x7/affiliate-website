"use client";

import Link from "next/link";
import {
  FiHeart,
  FiUser,
  FiShoppingCart,
  FiMenu,
  FiMoreHorizontal,
  FiFilter,
  FiGift,
  FiDollarSign,
  FiSettings,
  FiHome,
  FiBox,
  FiInfo,
  FiPhone,
  FiCreditCard,
} from "react-icons/fi";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 w-full">
        {/* Logo + Tagline */}
        <div className="flex flex-col md:flex-row md:items-center items-center">
          <Link href="/" className="text-2xl font-bold tracking-wide">
            <span className="text-yellow-500">Deal</span>Hunt
          </Link>
          {/* Desktop tagline */}
          <span className="hidden md:inline ml-3 text-sm font-semibold bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent animate-pulse hover:animate-none">
            Cart to Heart
          </span>
          {/* Mobile tagline */}
          <span className="md:hidden text-xs font-semibold bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent mt-1 animate-bounce">
            Cart to Heart
          </span>
        </div>

        {/* Desktop Search Bar */}
        <div className="hidden md:flex items-center ml-4">
          <input
            type="text"
            placeholder="Search products..."
            className="px-3 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        {/* Desktop Icons + 3-dot Menu */}
        <div className="hidden md:flex items-center gap-4">
          {/* 3-dot dropdown menu */}
          <div className="relative">
            <FiMoreHorizontal
              className="text-xl cursor-pointer hover:text-yellow-500"
              onClick={() => setMenuOpen(!menuOpen)}
            />
            {menuOpen && (
              <div className="absolute right-0 mt-3 w-56 bg-white shadow-lg rounded-xl border border-gray-200 p-3 z-50">
                <nav className="flex flex-col gap-3 text-gray-700">
                  <Link href="/" className="flex items-center gap-2 hover:text-yellow-500">
                    <FiHome /> Home
                  </Link>
                  <Link href="/products" className="flex items-center gap-2 hover:text-yellow-500">
                    <FiBox /> Products
                  </Link>
                  <Link href="/about" className="flex items-center gap-2 hover:text-yellow-500">
                    <FiInfo /> About
                  </Link>
                  <Link href="/contact" className="flex items-center gap-2 hover:text-yellow-500">
                    <FiPhone /> Contact
                  </Link>
                  <hr />
                  <button className="flex items-center gap-2 hover:text-yellow-500">
                    <FiFilter /> Filter
                  </button>
                  <button className="flex items-center gap-2 hover:text-yellow-500">
                    <FiGift /> Donate Your Savings
                  </button>
                  <button className="flex items-center gap-2 hover:text-yellow-500">
                    <FiDollarSign /> Refer & Earn
                  </button>
                  <button className="flex items-center gap-2 hover:text-yellow-500">
                    <FiCreditCard /> Wallet
                  </button>
                  <button className="flex items-center gap-2 hover:text-yellow-500">
                    <FiSettings /> Settings
                  </button>
                </nav>
              </div>
            )}
          </div>

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

      {/* Mobile Search Bar */}
      <div className="md:hidden w-full px-4 mt-1">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-md"
        />
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-md mt-2">
          <nav className="flex flex-col gap-4 px-6 py-4">
            <Link href="/" className="flex items-center gap-2 hover:text-yellow-500">
              <FiHome /> Home
            </Link>
            <Link href="/products" className="flex items-center gap-2 hover:text-yellow-500">
              <FiBox /> Products
            </Link>
            <Link href="/about" className="flex items-center gap-2 hover:text-yellow-500">
              <FiInfo /> About
            </Link>
            <Link href="/contact" className="flex items-center gap-2 hover:text-yellow-500">
              <FiPhone /> Contact
            </Link>
            <hr />
            <button className="flex items-center gap-2 hover:text-yellow-500">
              <FiFilter /> Filter
            </button>
            <button className="flex items-center gap-2 hover:text-yellow-500">
              <FiGift /> Donate Your Savings
            </button>
            <button className="flex items-center gap-2 hover:text-yellow-500">
              <FiDollarSign /> Refer & Earn
            </button>
            <button className="flex items-center gap-2 hover:text-yellow-500">
              <FiCreditCard /> Wallet
            </button>
            <button className="flex items-center gap-2 hover:text-yellow-500">
              <FiSettings /> Settings
            </button>
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
