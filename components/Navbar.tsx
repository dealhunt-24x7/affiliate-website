"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-900 tracking-wide">
          <span className="text-yellow-500">Deal</span>Hunt
        </Link>

        {/* Links */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
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
      </div>
    </header>
  );
}
