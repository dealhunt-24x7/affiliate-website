"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Search, User } from "lucide-react";
import Sidebar from "./Sidebar";

interface HeaderProps {
  onCategorySelect?: (slug: string) => void;
}

export default function Header({ onCategorySelect }: HeaderProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [profilePic, setProfilePic] = useState<string | null>(null);

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

  return (
    <header className="bg-black shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 py-2 relative">
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

        {/* Profile dropdown */}
        <div className="relative">
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="focus:outline-none"
          >
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
              <Link href="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Login / Signup</Link>
              <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Edit Profile</Link>
              <Link href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile Settings</Link>
              <button
                onClick={() => setProfilePic(null)}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Remove Profile Picture
              </button>
              <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</button>
            </div>
          )}
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-4 pb-1.5 md:pb-2.5">
        <div className="flex items-center bg-white rounded-md shadow px-3 py-1.5 w-full md:w-[60%] md:mx-auto">
          <Search className="text-gray-500" size={16} />
          <input
            type="text"
            placeholder="Search for Products, Brands and More"
            className="flex-1 ml-2 outline-none text-sm text-black"
          />
        </div>
      </div>

      {/* Categories strip */}
      <div className="overflow-x-auto bg-black scrollbar-hide">
        <div className="flex gap-3 px-4 py-1.5">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => onCategorySelect?.(cat.slug)}
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
