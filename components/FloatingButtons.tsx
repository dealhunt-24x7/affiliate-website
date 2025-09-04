"use client";
import { ShoppingCart, Home } from "lucide-react";
import Link from "next/link";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4">
      <Link
        href="/"
        className="fab flex items-center justify-center w-14 h-14 rounded-full bg-cyan-500 text-white shadow-lg"
      >
        <Home size={24} />
      </Link>
      <Link
        href="/cart"
        className="fab flex items-center justify-center w-14 h-14 rounded-full bg-blue-500 text-white shadow-lg"
      >
        <ShoppingCart size={24} />
      </Link>
    </div>
  );
}
