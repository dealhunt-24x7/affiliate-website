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
    <div className="flex justify-center">
      <button
        onClick={toggleMode}
        className="relative w-64 h-14 rounded-full border-2 border-yellow-400 overflow-hidden transition-all duration-500"
      >
        {/* 🟡 Background slider */}
        <div
          className={`absolute top-0 left-0 h-full w-1/2 rounded-full bg-gradient-to-r from-black to-red-700 transition-all duration-500
            ${mode === "luxury" ? "translate-x-0" : "translate-x-full"}
          `}
        ></div>

        {/* 🔤 Text layers */}
        <div className="absolute inset-0 flex text-lg font-semibold">
          <span
            className={`w-1/2 flex items-center justify-center transition-all duration-500 ${
              mode === "luxury" ? "text-white" : "text-gray-800"
            }`}
          >
            Luxury
          </span>
          <span
            className={`w-1/2 flex items-center justify-center transition-all duration-500 ${
              mode === "general" ? "text-white" : "text-gray-800"
            }`}
          >
            General
          </span>
        </div>
      </button>
    </div>
  );
              }
