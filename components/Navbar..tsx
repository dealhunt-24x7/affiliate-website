"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, User, Search } from "lucide-react";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const categories = [
    "Mobiles", "Laptops", "Fashion", "Home", "Electronics",
    "Beauty", "Sports", "Toys", "Books", "Grocery",
  ];

  return (
    <header className="bg-gradient-to-r from-cyan-400 to-blue-500 shadow-md relative">
      <div className="flex items-center justify-between px-4 py-3">
        <button onClick={() => setMenuOpen(true)} className="text-white">
          <Menu size={26} />
        </button>

        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-yellow-300 via-white to-yellow-200 bg-clip-text text-transparent drop-shadow-sm">
            Deal<span className="text-white">Hunt</span>
          </h1>
          <p className="text-sm italic text-yellow-100 drop-shadow-md">
            Best Deals Everyday!
          </p>
        </div>

        <Link href="/profile" className="text-white">
          <User size={26} />
        </Link>
      </div>

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

      <div className="flex gap-4 overflow-x-auto px-4 pb-3 no-scrollbar">
        {categories.map((cat) => (
          <div key={cat} className="flex flex-col items-center min-w-[60px]">
            <div className="w-12 h-12 rounded-full bg-white shadow-md" />
            <span className="text-xs mt-1 text-white">{cat}</span>
          </div>
        ))}
      </div>

      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
