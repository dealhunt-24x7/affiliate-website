"use client";

import { useState } from "react";

export default function ModeToggle() {
  const [mode, setMode] = useState<"luxury" | "general">("luxury");

  return (
    <div className="flex justify-center items-center gap-4 mt-4">
      <button
        onClick={() => setMode("luxury")}
        className={`px-4 py-2 rounded-full font-semibold ${
          mode === "luxury"
            ? "bg-yellow-500 text-white"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        Luxury Mode
      </button>

      <button
        onClick={() => setMode("general")}
        className={`px-4 py-2 rounded-full font-semibold ${
          mode === "general"
            ? "bg-yellow-500 text-white"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        General Mode
      </button>
    </div>
  );
}
