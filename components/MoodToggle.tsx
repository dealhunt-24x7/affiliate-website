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
        className={`relative w-60 h-14 rounded-full border-2 border-yellow-400 text-lg font-semibold transition-all duration-500
          ${mode === "luxury" ? "bg-gradient-to-r from-black to-red-700 text-white" : "bg-gradient-to-r from-gray-200 to-white text-gray-800"}
        `}
      >
        <span className="absolute inset-0 flex items-center justify-center font-semibold tracking-wide">
          {mode === "luxury" ? "Luxury Mood" : "General Mood"}
        </span>
      </button>
    </div>
  );
}
