"use client";

import { MessageCircle, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingButton() {
  return (
    <div className="fixed bottom-5 right-5 flex flex-col gap-3 z-50">
      {/* WhatsApp/Chat Button */}
      <motion.a
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        href="#"
        className="w-14 h-14 flex items-center justify-center rounded-full shadow-xl bg-green-500 hover:bg-green-600 text-white transition-all duration-300"
      >
        <MessageCircle size={24} />
      </motion.a>

      {/* Cart Button */}
      <motion.a
        whileHover={{ scale: 1.1, rotate: -5 }}
        whileTap={{ scale: 0.9 }}
        href="#"
        className="w-14 h-14 flex items-center justify-center rounded-full shadow-xl bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300"
      >
        <ShoppingCart size={24} />
      </motion.a>
    </div>
  );
}
