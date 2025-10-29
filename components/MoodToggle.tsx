"use client";
import { useState } from "react";

export default function MoodToggle({ onToggle }: { onToggle: (mode: "luxury" | "general") => void }) {
  const [mode, setMode] = useState<"luxury" | "general">("luxury");

  const toggleMode = () => {
    const newMode = mode === "luxury" ? "general" : "luxury";
    setMode(newMode);
    onToggle(newMode);
  };

  return (
    <div className="flex justify-center py-2">
      <button
        onClick={toggleMode}
        className={`relative w-24 h-10 rounded-full transition-all duration-500 shadow-md border-2 ${
          mode === "luxury"
            ? "bg-black border-red-500"
            : "bg-red-600 border-black"
        }`}
      >
        <span
          className={`absolute top-1 left-1 w-8 h-8 rounded-full bg-white shadow-md transform transition-transform duration-500 ${
            mode === "luxury" ? "translate-x-0" : "translate-x-14"
          }`}
        ></span>
        <span
          className={`absolute inset-0 flex items-center justify-center text-xs font-semibold text-white ${
            mode === "luxury" ? "opacity-100" : "opacity-0"
          } transition-opacity`}
        >
          LUXURY
        </span>
        <span
          className={`absolute inset-0 flex items-center justify-center text-xs font-semibold text-white ${
            mode === "general" ? "opacity-100" : "opacity-0"
          } transition-opacity`}
        >
          GENERAL
        </span>
      </button>
    </div>
  );
}
