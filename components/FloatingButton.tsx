"use client";

import { Home, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingButton() {
  return (
    <div className="fixed bottom-5 right-5 flex flex-col gap-3 z-50">
      {/* Home Button */}
      <motion.a
        whileHover={{ scale: 1.1, rotate: -5 }}
        whileTap={{ scale: 0.9 }}
        href="/"
        className="w-14 h-14 flex items-center justify-center rounded-full shadow-xl bg-yellow-500 hover:bg-yellow-600 text-black transition-all duration-300"
      >
        <Home size={24} />
      </motion.a>

      {/* Cart Button */}
      <motion.a
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        href="/cart"
        className="w-14 h-14 flex items-center justify-center rounded-full shadow-xl bg-yellow-500 hover:bg-yellow-600 text-black transition-all duration-300"
      >
        <ShoppingCart size={24} />
      </motion.a>
    </div>
  );
}
