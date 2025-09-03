"use client";

import { useState } from "react";
import { Menu, Search, User } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Brand */}
        <div className="flex flex-col">
          <Link href="/" className="text-xl font-bold text-blue-600">
            Dealhunt
          </Link>
          <span className="text-xs text-gray-500">Best Deals, Every Day</span>
        </div>

        {/* Center: Search bar */}
        <div className="flex-1 mx-6 hidden md:flex">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full border rounded-full px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Right: Profile + Hamburger */}
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <User className="h-6 w-6 text-gray-700" />
          </button>
          <button
            className="p-2 rounded-full hover:bg-gray-100 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Mobile search bar */}
      <div className="px-4 pb-3 md:hidden">
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full border rounded-full px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* Sidebar Menu (mobile) */}
      {isMenuOpen && (
        <div className="bg-white border-t md:hidden">
          <nav className="flex flex-col p-4 space-y-2">
            <Link href="/">Home</Link>
            <Link href="/filters">Filters</Link>
            <Link href="/orders">Orders</Link>
            <Link href="/returns">Return & Exchange</Link>
            <Link href="/refer">Refer & Earn</Link>
            <Link href="/wallet">Wallet</Link>
            <Link href="/categories">All Categories</Link>
            <Link href="/notifications">Notifications</Link>
            <Link href="/settings">Settings</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
