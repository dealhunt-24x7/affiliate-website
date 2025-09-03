"use client";

import Link from "next/link";
import { Home, ShoppingCart } from "lucide-react";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-3">
      <Link
        href="/cart"
        className="flex h-12 w-12 items-center justify-center rounded-full border bg-white shadow-md"
        aria-label="Cart"
      >
        <ShoppingCart />
      </Link>
      <Link
        href="/"
        className="flex h-12 w-12 items-center justify-center rounded-full border bg-white shadow-md"
        aria-label="Home"
      >
        <Home />
      </Link>
    </div>
  );
}
