"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, User, Search } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const categories = [
    "Mobiles", "Laptops", "Fashion", "Home", "Electronics",
    "Beauty", "Sports", "Toys", "Books", "Grocery",
  ];

  return (
    <header className="bg-gradient-to-r from-cyan-400 to-blue-500 shadow-md">
      {/* Top Navbar */}
      <div className="flex items-center justify-between px-4 py-3">
        {/* Left: Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
          <Menu size={26} />
        </button>

        {/* Brand & Tagline */}
        <div className="text-center">
          <h1 className="text-2xl font-extrabold text-white tracking-wide">
            Deal<span className="text-yellow-300">Hunt</span>
          </h1>
          <p className="text-sm text-white/80 italic">Best Deals Everyday!</p>
        </div>

        {/* Right: Profile */}
        <Link href="/profile" className="text-white">
          <User size={26} />
        </Link>
      </div>

      {/* Search Bar */}
      <div className="px-4 pb-3">
        <div className="flex items-center bg-white rounded-full shadow px-3 py-2">
          <Search className="text-gray-500" size={20} />
          <input
            type="text"
            placeholder="Search products..."
            className="flex-1 ml-2 outline-none"
          />
        </div>
      </div>

      {/* Shop by Category */}
      <div className="flex gap-4 overflow-x-auto px-4 pb-3 no-scrollbar">
        {categories.map((cat) => (
          <div
            key={cat}
            className="flex flex-col items-center min-w-[60px]"
          >
            <div className="w-12 h-12 rounded-full bg-white shadow-md" />
            <span className="text-xs mt-1 text-white">{cat}</span>
          </div>
        ))}
      </div>

      {/* Side Menu */}
      {menuOpen && (
        <aside className="absolute top-0 left-0 w-64 h-full bg-white shadow-lg p-5 z-50">
          <h2 className="text-lg font-bold mb-4">Menu</h2>
          <nav className="flex flex-col gap-3">
            <Link href="/">Home</Link>
            <Link href="/deals">Deals</Link>
            <Link href="/categories">Categories</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </aside>
      )}
    </header>
  );
}
