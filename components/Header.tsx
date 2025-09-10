"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, Search, User } from "lucide-react";
import Sidebar from "./Sidebar";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [profilePic, setProfilePic] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const profileRef = useRef<HTMLDivElement | null>(null);

  const categories = [
    { name: "Mobiles", slug: "mobile", image: "/images/categories/mobile.png" },
    { name: "Laptops", slug: "laptop", image: "/images/categories/laptop.png" },
    { name: "Headphones", slug: "headphones", image: "/images/categories/headphones.png" },
    { name: "Watches", slug: "watches", image: "/images/categories/watch.png" },
    { name: "Electronics", slug: "electronics", image: "/images/categories/electronics.png" },
    { name: "Men", slug: "men", image: "/images/categories/men.png" },
    { name: "Women", slug: "women", image: "/images/categories/women.png" },
    { name: "Kids", slug: "kids", image: "/images/categories/kids.png" },
    { name: "Fashion", slug: "fashion", image: "/images/categories/fashion.png" },
    { name: "Footwear", slug: "footwear", image: "/images/categories/footwear.png" },
    { name: "Home appliances", slug: "home-appliances", image: "/images/categories/home-appliances.png" },
    { name: "Sports", slug: "sports", image: "/images/categories/sports.png" },
    { name: "Jwellery", slug: "jwellery", image: "/images/categories/jwellery.png" },
    { name: "Kitchen", slug: "kitchen", image: "/images/categories/kitchen.png" },
    { name: "Home decor", slug: "home-decor", image: "/images/categories/home-decor.png" },
    { name: "Study", slug: "study", image: "/images/categories/study.png" },
    { name: "Others", slug: "others", image: "/images/categories/others.png" },
  ];

  const handleCategoryClick = (slug: string) => {
    const target = document.getElementById(slug);
    const header = document.querySelector("header");
    const headerHeight = header ? header.getBoundingClientRect().height : 64;
    if (target) {
      const y = target.getBoundingClientRect().top + window.scrollY - headerHeight - 8;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // ✅ Profile dropdown close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ Dummy search suggestions
  useEffect(() => {
    if (searchQuery.length > 1) {
      const allProducts = ["iPhone 14", "Samsung S23", "Macbook Air", "Nike Shoes", "Kitchen Mixer"];
      const matches = allProducts.filter((p) =>
        p.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSuggestions(matches);
    } else {
      setSuggestions([]);
    }
  }, [searchQuery]);

  const handleSearch = (query: string) => {
    if (query.trim() === "") return;
    if (suggestions.length > 0) {
      console.log("Navigate to results page with:", query);
      // Yaha aap API search results page open karwa sakte ho
    } else {
      // Redirect to Amazon if no match
      window.open(`https://www.amazon.in/s?k=${encodeURIComponent(query)}`, "_blank");
    }
    setSearchQuery("");
    setSuggestions([]);
  };

  return (
    <header className="bg-black shadow-md sticky top-0 z-50">
      {/* Top row */}
      <div className="flex items-center justify-between px-4 py-2 relative">
        {/* Left: Menu + Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-white focus:outline-none"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
          <div className="flex flex-col">
            <Link href="/" className="text-xl font-extrabold">
              <span className="text-red-600">Deal</span>
              <span className="text-yellow-400">Hunt</span>
            </Link>
            <span className="text-[10px] italic -mt-1 text-yellow-400">
              Best Deals Everyday!
            </span>
          </div>
        </div>

        {/* Right: Profile */}
        <div className="relative" ref={profileRef}>
          <button onClick={() => setProfileOpen((prev) => !prev)} className="focus:outline-none">
            {profilePic ? (
              <img
                src={profilePic}
                alt="Profile"
                className="w-8 h-8 rounded-full border-2 border-yellow-400 object-cover"
              />
            ) : (
              <User size={24} className="text-white" />
            )}
          </button>

          {profileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-50">
              <Link href="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Login / Signup
              </Link>
              <Link href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Profile Settings
              </Link>
              <button
                onClick={() => setProfilePic(null)}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Remove Profile Picture
              </button>
              <button
                onClick={() => {
                  console.log("Logout clicked");
                  setProfileOpen(false);
                  // Future: clear user session here
                }}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-4 pb-1.5 md:pb-2.5 relative">
        <div className="flex items-center bg-white rounded-md shadow px-3 py-1.5 w-full md:w-[60%] md:mx-auto">
          <Search className="text-gray-500" size={16} />
          <input
            type="text"
            placeholder="Search for Products, Brands and More"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch(searchQuery)}
            className="flex-1 ml-2 outline-none text-sm text-black"
          />
        </div>

        {/* Suggestions dropdown */}
        {suggestions.length > 0 && (
          <div className="absolute bg-white shadow-md rounded-md mt-1 w-full md:w-[60%] md:mx-auto max-h-56 overflow-y-auto">
            {suggestions.map((s, i) => (
              <button
                key={i}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                onClick={() => handleSearch(s)}
              >
                {s}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Categories strip */}
      <div className="overflow-x-auto bg-black scrollbar-hide">
        <div className="flex gap-3 px-4 py-1.5">
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => handleCategoryClick(cat.slug)}
              className="flex flex-col items-center min-w-[65px] cursor-pointer text-white"
            >
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mb-1 overflow-hidden">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
              </div>
              <span className="text-[11px] whitespace-nowrap">{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </header>
  );
}
