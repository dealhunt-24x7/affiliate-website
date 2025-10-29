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
        className={`relative w-64 h-14 rounded-full border-2 overflow-hidden transition-all duration-500 ${
          mode === "luxury"
            ? "border-yellow-400"
            : "border-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.5)]"
        }`}
      >
        {/* 🟢 Background slider */}
        <div
          className={`absolute top-0 left-0 h-full w-1/2 rounded-full transition-all duration-500 ${
            mode === "luxury"
              ? "bg-gradient-to-r from-black to-red-700"
              : "bg-gradient-to-r from-blue-500 to-blue-700"
          } ${mode === "luxury" ? "translate-x-0" : "translate-x-full"}`}
        ></div>

        {/* Text Layers */}
        <div className="absolute inset-0 flex text-lg font-semibold">
          <span
            className={`w-1/2 flex items-center justify-center transition-all duration-500 ${
              mode === "luxury" ? "text-white" : "text-gray-700"
            }`}
          >
            Luxury
          </span>
          <span
            className={`w-1/2 flex items-center justify-center transition-all duration-500 ${
              mode === "general" ? "text-white" : "text-gray-700"
            }`}
          >
            General
          </span>
        </div>
      </button>
    </div>
  );
}
