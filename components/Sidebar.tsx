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
  const [ordersOpen, setOrdersOpen] = useState(false);

  return (
    <div
      className={`fixed inset-0 z-50 transition-transform duration-300 ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      ></div>

      {/* Sidebar panel */}
      <div className="relative w-72 h-full bg-white shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={onClose} className="p-1 rounded hover:bg-gray-100">
            <X size={22} />
          </button>
        </div>

        {/* Menu */}
        <nav className="flex-1 overflow-y-auto">
          <ul className="space-y-1 px-3 py-2 text-gray-800">
            <li>
              <Link href="/" className="block px-3 py-2 rounded hover:bg-gray-100">
                Home
              </Link>
            </li>

            {/* Filters */}
            <li>
              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className="w-full flex justify-between items-center px-3 py-2 rounded hover:bg-gray-100"
              >
                <span>Filters</span>
                <span>{filterOpen ? "−" : "+"}</span>
              </button>
              {filterOpen && (
                <ul className="pl-6 space-y-1 text-sm text-gray-700">
                  <li>
                    <Link href="?sort=high-to-low" className="block py-1 hover:underline">
                      Price High → Low
                    </Link>
                  </li>
                  <li>
                    <Link href="?sort=low-to-high" className="block py-1 hover:underline">
                      Price Low → High
                    </Link>
                  </li>
                  <li className="py-1 font-semibold">By Partners</li>
                  {["Amazon", "Flipkart", "Myntra", "Meesho", "Nykaa", "Ajio"].map((p) => (
                    <li key={p}>
                      <Link href={`/partner/${p.toLowerCase()}`} className="block py-1 hover:underline">
                        {p}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link href="?sort=newest" className="block py-1 hover:underline">
                      Newest First
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Orders */}
            <li>
              <button
                onClick={() => setOrdersOpen(!ordersOpen)}
                className="w-full flex justify-between items-center px-3 py-2 rounded hover:bg-gray-100"
              >
                <span>Orders</span>
                <span>{ordersOpen ? "−" : "+"}</span>
              </button>
              {ordersOpen && (
                <ul className="pl-6 space-y-1 text-sm text-gray-700">
                  <li>
                    <Link href="/orders" className="block py-1 hover:underline">
                      My Orders
                    </Link>
                  </li>
                  <li>
                    <Link href="/order-tracking" className="block py-1 hover:underline">
                      Order Tracking
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link href="/refer" className="block px-3 py-2 rounded hover:bg-gray-100">
                Refer & Earn
              </Link>
            </li>
            <li>
              <Link href="/wallet" className="block px-3 py-2 rounded hover:bg-gray-100">
                Wallet
              </Link>
            </li>
            <li>
              <Link href="/categories" className="block px-3 py-2 rounded hover:bg-gray-100">
                All Categories
              </Link>
            </li>
            <li>
              <Link href="/notifications" className="block px-3 py-2 rounded hover:bg-gray-100">
                Notifications
              </Link>
            </li>
            <li>
              <Link href="/settings" className="block px-3 py-2 rounded hover:bg-gray-100">
                Settings
              </Link>
            </li>
            <li>
              <Link href="/donate" className="block px-3 py-2 rounded hover:bg-gray-100">
                Donate Your Savings
              </Link>
            </li>
          </ul>
        </nav>

        {/* Footer */}
        <div className="px-4 py-3 border-t text-xs text-gray-500">
          © {new Date().getFullYear()} DealHunt
        </div>
      </div>
    </div>
  );
}
