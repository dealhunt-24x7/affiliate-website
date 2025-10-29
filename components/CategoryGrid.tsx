"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function MoodToggle() {
  const [luxuryMode, setLuxuryMode] = useState(true);

  return (
    <div className="flex justify-center items-center mt-6">
      <button
        onClick={() => setLuxuryMode(!luxuryMode)}
        className={`relative w-48 h-14 flex items-center justify-between px-4 rounded-full border-2 
        ${luxuryMode ? "border-yellow-400 bg-gradient-to-r from-yellow-300/80 to-yellow-600/60" : "border-gray-400 bg-gradient-to-r from-gray-200 to-gray-400"}
        shadow-[0_0_20px_rgba(255,215,0,0.3)] backdrop-blur-md transition-all duration-500`}
      >
        <span
          className={`z-10 font-semibold text-sm sm:text-base transition-colors duration-300 ${
            luxuryMode ? "text-black" : "text-gray-700"
          }`}
        >
          General
        </span>

        <span
          className={`z-10 font-semibold text-sm sm:text-base transition-colors duration-300 ${
            luxuryMode ? "text-yellow-900" : "text-black"
          }`}
        >
          Luxury
        </span>

        {/* Sliding Indicator */}
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className={`absolute top-1 left-1 w-[calc(50%-4px)] h-[calc(100%-8px)] rounded-full shadow-lg ${
            luxuryMode
              ? "translate-x-[calc(100%+4px)] bg-gradient-to-r from-yellow-500 to-yellow-700"
              : "translate-x-0 bg-gradient-to-r from-gray-400 to-gray-600"
          }`}
        ></motion.div>
      </button>
    </div>
  );
}
