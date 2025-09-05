"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  const items = [
    { label: "Home", href: "/" },
    { label: "Filter", href: "/products?openFilters=true" },
    { label: "Order", href: "#" },
    { label: "Return & Exchange", href: "#" },
    { label: "Refer & Earn", href: "#" },
    { label: "Wallet", href: "#" },
    { label: "All Categories", href: "/products" },
    { label: "Notifications", href: "#" },
    { label: "Settings", href: "#" },
  ];

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            className="fixed left-0 top-0 z-50 h-full w-80 max-w-[85%] bg-white shadow-2xl"
            initial={{ x: -320 }}
            animate={{ x: 0 }}
            exit={{ x: -320 }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
          >
            <div className="flex items-center justify-between border-b px-4 py-3">
              <div className="text-lg font-bold">Menu</div>
              <button onClick={onClose} className="rounded-md border px-3 py-1.5 text-sm">
                Close
              </button>
            </div>
            <nav className="p-2">
              {items.map((it) => (
                <Link
                  key={it.label}
                  href={it.href}
                  className="block rounded-md px-3 py-2 text-sm hover:bg-gray-50"
                  onClick={onClose}
                >
                  {it.label}
                </Link>
              ))}
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
