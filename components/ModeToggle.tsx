"use client";

import { useState } from "react";

export default function MoodToggle({ onToggle }: { onToggle: (mode: string) => void }) {
  const [mode, setMode] = useState<"luxury" | "general">("luxury");

  const toggleMode = () => {
    const newMode = mode === "luxury" ? "general" : "luxury";
    setMode(newMode);
    onToggle(newMode);
  };

  return (
    <div className="w-full flex justify-center py-4 bg-transparent">
      <div
        onClick={toggleMode}
        className={`relative flex items-center w-56 h-12 rounded-full p-1 cursor-pointer transition-all duration-500 backdrop-blur-md ${
          mode === "luxury"
            ? "bg-gradient-to-r from-yellow-400/70 to-yellow-600/70 shadow-[0_0_15px_rgba(255,215,0,0.4)]"
            : "bg-gradient-to-r from-gray-300/70 to-gray-500/70 shadow-[0_0_15px_rgba(200,200,200,0.3)]"
        }`}
      >
        <div
          className={`absolute top-1 left-1 w-[calc(50%-4px)] h-10 rounded-full bg-white/30 backdrop-blur-md shadow-md transform transition-transform duration-500 ${
            mode === "general" ? "translate-x-[calc(100%+4px)]" : ""
          }`}
        ></div>

        <span
          className={`flex-1 text-center z-10 font-semibold transition-colors ${
            mode === "luxury" ? "text-gray-900" : "text-white/80"
          }`}
        >
          💎 Luxury
        </span>
        <span
          className={`flex-1 text-center z-10 font-semibold transition-colors ${
            mode === "general" ? "text-gray-900" : "text-white/80"
          }`}
        >
          🛍️ General
        </span>
      </div>
    </div>
  );
}
