"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function MoodToggle() {
  const [luxuryMode, setLuxuryMode] = useState(true);

  return (
    <div className="flex justify-center items-center mt-8">
      <button
        onClick={() => setLuxuryMode(!luxuryMode)}
        className={`relative w-56 h-16 flex items-center justify-between px-6 rounded-full border-2 
        ${luxuryMode
          ? "border-red-600 bg-gradient-to-r from-black to-red-800"
          : "border-black bg-gradient-to-r from-gray-200 to-gray-400"}
        shadow-[0_0_20px_rgba(255,0,0,0.4)] backdrop-blur-md transition-all duration-500`}
      >
        <span
          className={`z-10 font-semibold text-base transition-colors duration-300 ${
            luxuryMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          General
        </span>

        <span
          className={`z-10 font-semibold text-base transition-colors duration-300 ${
            luxuryMode ? "text-red-300" : "text-black"
          }`}
        >
          Luxury
        </span>

        {/* Sliding Circle */}
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className={`absolute top-1 left-1 w-[calc(50%-6px)] h-[calc(100%-8px)] rounded-full shadow-lg ${
            luxuryMode
              ? "translate-x-[calc(100%+4px)] bg-gradient-to-r from-red-500 to-red-700"
              : "translate-x-0 bg-gradient-to-r from-gray-300 to-gray-500"
          }`}
        ></motion.div>
      </button>
    </div>
  );
}
