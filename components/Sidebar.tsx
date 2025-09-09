"use client";

import Link from "next/link";
import { X } from "lucide-react";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      ></div>

      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full w-72 bg-white shadow-lg z-50 transform transition-transform duration-300">
        {/* Header with close */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        {/* Menu items */}
        <nav className="p-4 space-y-3">
          <Link href="/" className="block text-gray-700 hover:text-black">
            Home
          </Link>

          {/* Filters */}
          <div>
            <p className="font-semibold text-gray-800">Filters</p>
            <ul className="ml-3 space-y-1 text-gray-600">
              <li>Price High to Low</li>
              <li>Price Low to High</li>
              <li>Newest First</li>
              <li>By Partner:</li>
              <ul className="ml-3 list-disc text-sm">
                <li>Amazon</li>
                <li>Flipkart</li>
                <li>Myntra</li>
                <li>Meesho</li>
                <li>Nykaa</li>
                <li>Ajio</li>
              </ul>
            </ul>
          </div>

          {/* Orders */}
          <div>
            <p className="font-semibold text-gray-800">Orders</p>
            <ul className="ml-3 space-y-1 text-gray-600">
              <li>My Orders</li>
              <li>Track Order</li>
            </ul>
          </div>

          <Link href="/refer" className="block text-gray-700 hover:text-black">
            Refer & Earn
          </Link>
          <Link href="/wallet" className="block text-gray-700 hover:text-black">
            Wallet
          </Link>
          <Link
            href="/notifications"
            className="block text-gray-700 hover:text-black"
          >
            Notifications
          </Link>
          <Link href="/settings" className="block text-gray-700 hover:text-black">
            Settings
          </Link>
          <Link href="/donate" className="block text-gray-700 hover:text-black">
            Donate Your Savings
          </Link>
        </nav>
      </div>
    </>
  );
}
