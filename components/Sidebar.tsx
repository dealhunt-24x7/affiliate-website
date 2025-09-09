"use client";

import { X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  const [filterOpen, setFilterOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);

  return (
    <div
      className={`fixed inset-0 z-50 transition-transform duration-300 ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>

      {/* Sidebar content */}
      <div className="absolute left-0 top-0 h-full w-72 bg-white shadow-lg p-4 overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={onClose} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>

        <nav className="space-y-2">
          {/* Home */}
          <Link
            href="/"
            className="block px-3 py-2 rounded hover:bg-gray-100 font-medium"
            onClick={onClose}
          >
            Home
          </Link>

          {/* Filters */}
          <div>
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="w-full flex justify-between items-center px-3 py-2 rounded hover:bg-gray-100 font-medium"
            >
              Filters
              <span>{filterOpen ? "−" : "+"}</span>
            </button>
            {filterOpen && (
              <div className="ml-4 space-y-1 mt-1">
                <button className="block w-full text-left px-2 py-1 rounded hover:bg-gray-100 text-sm">
                  Price High to Low
                </button>
                <button className="block w-full text-left px-2 py-1 rounded hover:bg-gray-100 text-sm">
                  Price Low to High
                </button>
                <button className="block w-full text-left px-2 py-1 rounded hover:bg-gray-100 text-sm">
                  Newest First
                </button>
                <div className="mt-1">
                  <span className="block px-2 py-1 text-xs font-semibold text-gray-600">
                    Sort by Partners
                  </span>
                  {["Amazon", "Flipkart", "Myntra", "Meesho", "Nykaa", "Ajio"].map(
                    (partner, i) => (
                      <button
                        key={i}
                        className="block w-full text-left px-4 py-1 rounded hover:bg-gray-100 text-sm"
                      >
                        {partner}
                      </button>
                    )
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Orders */}
          <div>
            <button
              onClick={() => setOrderOpen(!orderOpen)}
              className="w-full flex justify-between items-center px-3 py-2 rounded hover:bg-gray-100 font-medium"
            >
              Orders
              <span>{orderOpen ? "−" : "+"}</span>
            </button>
            {orderOpen && (
              <div className="ml-4 space-y-1 mt-1">
                <Link
                  href="/orders"
                  className="block px-2 py-1 rounded hover:bg-gray-100 text-sm"
                  onClick={onClose}
                >
                  My Orders
                </Link>
                <Link
                  href="/orders/track"
                  className="block px-2 py-1 rounded hover:bg-gray-100 text-sm"
                  onClick={onClose}
                >
                  Order Tracking
                </Link>
              </div>
            )}
          </div>

          {/* Other menu items */}
          <Link
            href="/refer"
            className="block px-3 py-2 rounded hover:bg-gray-100 font-medium"
            onClick={onClose}
          >
            Refer & Earn
          </Link>

          <Link
            href="/wallet"
            className="block px-3 py-2 rounded hover:bg-gray-100 font-medium"
            onClick={onClose}
          >
            Wallet
          </Link>

          <Link
            href="/categories"
            className="block px-3 py-2 rounded hover:bg-gray-100 font-medium"
            onClick={onClose}
          >
            All Categories
          </Link>

          <Link
            href="/notifications"
            className="block px-3 py-2 rounded hover:bg-gray-100 font-medium"
            onClick={onClose}
          >
            Notifications
          </Link>

          <Link
            href="/settings"
            className="block px-3 py-2 rounded hover:bg-gray-100 font-medium"
            onClick={onClose}
          >
            Settings
          </Link>

          <Link
            href="/donate"
            className="block px-3 py-2 rounded hover:bg-gray-100 font-medium"
            onClick={onClose}
          >
            Donate Your Savings
          </Link>
        </nav>
      </div>
    </div>
  );
}
