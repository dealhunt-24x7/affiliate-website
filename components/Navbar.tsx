"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import {
  FiUser,
  FiMoreVertical,
  FiX,
  FiCamera,
  FiMic,
  FiSearch,
} from "react-icons/fi";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const sampleSuggestions = [
  "Rolex Daytona",
  "Omega Seamaster",
  "Apple Watch Ultra",
  "Tag Heuer Carrera",
  "Cartier Tank",
];

export default function Navbar() {
  const { data: session } = useSession();
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [listening, setListening] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const handleSelect = (item: string) => {
    setSearchQuery(item);
    setSuggestions([]);
    setDrawerOpen(false);
    router.push(`/products?search=${encodeURIComponent(item)}`);
  };

  const handleCameraClick = () => fileInputRef.current?.click();
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      alert(`📷 Image selected: ${e.target.files[0].name}`);
    }
  };

  const handleMicClick = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Voice recognition not supported");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    setListening(true);

    recognition.onresult = (e: any) => {
      setSearchQuery(e.results[0][0].transcript);
      setListening(false);
    };
    recognition.onend = () => setListening(false);
    recognition.start();
  };

  const handleNavigate = (href: string) => {
    setDrawerOpen(false);
    setTimeout(() => router.push(href), 300);
  };

  const handleCartToHeartClick = () => {
    setDrawerOpen(false);
    router.push("/cart-to-heart-coming-soon");
  };

  // truncate user name to max 2 words
  const displayName = session?.user?.name
    ? session.user.name.split(" ").slice(0, 2).join(" ")
    : "Guest";

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-md">
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileSelect}
        className="hidden"
      />

      <div className="max-w-7xl mx-auto px-6 py-3 w-full">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          {/* Logo + Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="text-2xl font-bold tracking-wide">
              <span className="text-yellow-500">Deal</span>Hunt
            </Link>
            <p className="text-sm font-semibold bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
              Saving you money with verified deals
            </p>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 justify-center px-4 mt-3 md:mt-0">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                value={searchQuery}
                onChange={handleChange}
                placeholder="Search products..."
                className="w-full px-4 pr-28 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-sm"
              />
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

              {/* Desktop buttons */}
              <div className="absolute inset-y-0 right-3 flex items-center gap-2">
                <button
                  onClick={handleCameraClick}
                  className="p-2 bg-white hover:bg-yellow-100 shadow-md rounded-full text-gray-600 hover:text-yellow-500 transition transform hover:scale-110"
                  title="Search by image"
                >
                  <FiCamera className="w-5 h-5" />
                </button>

                <button
                  onClick={handleMicClick}
                  className={`p-2 bg-white shadow-md rounded-full transition transform hover:scale-110 ${
                    listening
                      ? "text-red-500 animate-pulse"
                      : "text-gray-600 hover:text-yellow-500"
                  }`}
                  title="Search by voice"
                >
                  <FiMic className="w-5 h-5" />
                </button>

                {searchQuery && (
                  <button
                    onClick={() => handleSelect(searchQuery)}
                    className="p-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full shadow-md transition transform hover:scale-110"
                    title="Search"
                  >
                    <FiSearch className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Right Icons + Hi, Guest (Desktop only) */}
          <div className="hidden md:flex items-center gap-3 mt-3 md:mt-0">
            <button
              onClick={() => router.push("/signin")}
              className="text-gray-700 hover:text-yellow-500 transition"
              title="Profile"
            >
              <FiUser className="text-xl" />
            </button>
            <span className="text-gray-700 font-medium text-sm">
              Hi, {displayName}
            </span>
            <button
              onClick={() => setDrawerOpen(true)}
              className="text-gray-700 hover:text-yellow-500 transition"
              title="Menu"
            >
              <FiMoreVertical className="text-xl" />
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-3 relative">
          <input
            type="text"
            value={searchQuery}
            onChange={handleChange}
            placeholder="Search products..."
            className="w-full px-4 pr-28 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-sm bg-white"
          />
          <div className="absolute inset-y-0 right-3 flex items-center gap-2">
            <button
              onClick={handleCameraClick}
              className="p-2 bg-white hover:bg-yellow-100 shadow-md rounded-full text-gray-600 hover:text-yellow-500 transition transform hover:scale-110"
              title="Search by image"
            >
              <FiCamera className="w-5 h-5" />
            </button>

            <button
              onClick={handleMicClick}
              className={`p-2 bg-white shadow-md rounded-full transition transform hover:scale-110 ${
                listening
                  ? "text-red-500 animate-pulse"
                  : "text-gray-600 hover:text-yellow-500"
              }`}
              title="Search by voice"
            >
              <FiMic className="w-5 h-5" />
            </button>

            {searchQuery && (
              <button
                onClick={() => handleSelect(searchQuery)}
                className="p-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full shadow-md transition transform hover:scale-110"
                title="Search"
              >
                <FiSearch className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* ✅ Mobile Hi, Guest + Profile + Menu */}
        <div className="flex justify-end items-center gap-2 mt-2 md:hidden">
          <span className="text-gray-700 text-sm font-medium">
            Hi, {displayName}
          </span>
          <button
            onClick={() => router.push("/signin")}
            className="text-gray-700 hover:text-yellow-500 transition"
          >
            <FiUser className="text-lg" />
          </button>
          <button
            onClick={() => setDrawerOpen(true)}
            className="text-gray-700 hover:text-yellow-500 transition"
          >
            <FiMoreVertical className="text-lg" />
          </button>
        </div>
      </div>

      {/* Drawer */}
      {drawerOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-[9998]"
            onClick={() => setDrawerOpen(false)}
          />
          <aside
            className={`fixed top-0 right-0 z-[9999] w-72 max-w-xs bg-white shadow-2xl p-6 rounded-l-2xl max-h-[90vh] overflow-y-auto transition-transform duration-300 ${
              drawerOpen ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-black"
              onClick={() => setDrawerOpen(false)}
            >
              <FiX />
            </button>

            <nav className="mt-8 flex flex-col gap-4">
              <button onClick={() => handleNavigate("/")} className="text-yellow-500 font-semibold text-left">Home</button>
              <button onClick={() => handleNavigate("/products")} className="text-yellow-500 font-semibold text-left">Products</button>
              <button onClick={() => handleNavigate("/refer")} className="text-yellow-500 font-semibold text-left">Refer & Earn</button>
              <button onClick={() => handleNavigate("/wallet")} className="text-yellow-500 font-semibold text-left">Wallet</button>
              <button onClick={() => handleNavigate("/settings")} className="text-yellow-500 font-semibold text-left">Settings</button>

              <div
                onClick={handleCartToHeartClick}
                className="p-3 bg-gradient-to-r from-yellow-100 via-orange-100 to-pink-100 rounded-xl shadow-md text-yellow-700 text-center font-bold cursor-pointer hover:scale-[1.02] transition"
              >
                ❤️ Join Cart to Heart
              </div>
            </nav>
          </aside>
        </>
      )}
    </header>
  );
}
