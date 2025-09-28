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
import { useState, useRef } from "react";

// Suggestions (Later API se fetch karenge)
const sampleSuggestions = [
  "Rolex Daytona",
  "Omega Seamaster",
  "Apple Watch Ultra",
  "Tag Heuer Carrera",
  "Cartier Tank",
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle search input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value.trim().length > 0) {
      const filtered = sampleSuggestions.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  // Handle camera click → file input trigger
  const handleCameraClick = () => {
    fileInputRef.current?.click();
  };

  // Handle file selection
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      alert(`📷 Image selected: ${file.name}`);
      // Later: send file to API for image search
    }
  };

  // Handle mic click → voice recognition
  const handleMicClick = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Voice recognition not supported in this browser");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;

    recognition.onstart = () => console.log("🎤 Listening...");
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setSearchQuery(transcript);
    };
    recognition.onerror = (err: any) => console.error("Voice error:", err);
    recognition.start();
  };

  // Handle suggestion select
  const handleSelect = (item: string) => {
    setSearchQuery(item);
    setSuggestions([]);
    window.location.href = `/products?search=${encodeURIComponent(item)}`;
  };

  // Scroll to sections
  const scrollToSection = (id: string) => {
    setDrawerOpen(false);
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-md">
      {/* Hidden file input for camera */}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileSelect}
        className="hidden"
      />

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
                onChange={handleChange}
                placeholder="Search products..."
                aria-label="Search products"
                className="w-full px-4 pr-20 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-sm"
              />

              {/* Suggestions */}
              {suggestions.length > 0 && (
                <ul className="absolute w-full bg-white shadow-md rounded-b-md mt-1 max-h-60 overflow-y-auto z-50">
                  {suggestions.map((item, idx) => (
                    <li
                      key={idx}
                      className="px-4 py-2 hover:bg-yellow-100 cursor-pointer"
                      onClick={() => handleSelect(item)}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {/* Icons */}
              <div className="absolute inset-y-0 right-3 flex items-center gap-3 text-gray-400">
                <FiCamera
                  onClick={handleCameraClick}
                  className="cursor-pointer hover:text-gray-700"
                />
                <FiMic
                  onClick={handleMicClick}
                  className="cursor-pointer hover:text-gray-700"
                />
                {searchQuery.length > 0 && (
                  <FiSearch
                    onClick={() => handleSelect(searchQuery)}
                    className="cursor-pointer hover:text-gray-700"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-3">
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

        {/* Mobile Search */}
        <div className="md:hidden mt-3 relative">
          <input
            type="text"
            value={searchQuery}
            onChange={handleChange}
            placeholder="Search products..."
            className="w-full px-4 pr-20 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-sm bg-white"
          />
          <div className="absolute inset-y-0 right-3 flex items-center gap-3 text-gray-400">
            <FiCamera onClick={handleCameraClick} className="cursor-pointer" />
            <FiMic onClick={handleMicClick} className="cursor-pointer" />
            {searchQuery.length > 0 && (
              <FiSearch
                onClick={() => handleSelect(searchQuery)}
                className="cursor-pointer"
              />
            )}
          </div>

          {suggestions.length > 0 && (
            <ul className="absolute w-full bg-white shadow-md rounded-b-md mt-1 max-h-60 overflow-y-auto z-50">
              {suggestions.map((item, idx) => (
                <li
                  key={idx}
                  className="px-4 py-2 hover:bg-yellow-100 cursor-pointer"
                  onClick={() => handleSelect(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Drawer Menu */}
      {drawerOpen && (
        <>
          <div
            className="fixed inset-0 z-[9998] bg-black/50"
            onClick={() => setDrawerOpen(false)}
          />
          <aside
            className={`fixed top-0 left-0 z-[9999] w-72 max-w-xs bg-white shadow-2xl p-6 rounded-r-2xl max-h-[90vh] overflow-y-auto transition-transform duration-300 ${
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
                onClick={() => scrollToSection("contact-section")}
                className="text-yellow-500 text-left font-semibold"
              >
                Contact
              </button>

              <div
                onClick={() => scrollToSection("cart-to-heart")}
                className="p-3 bg-gradient-to-r from-yellow-100 via-orange-100 to-pink-100 rounded-xl shadow-md text-yellow-700 text-center font-bold cursor-pointer hover:scale-[1.02] transition"
              >
                ❤️ Join Cart to Heart Program
              </div>

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
            </nav>
          </aside>
        </>
      )}
    </header>
  );
}
