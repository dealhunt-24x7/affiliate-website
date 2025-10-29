"use client";

type Mode = "luxury" | "general";

export default function MoodToggle({
  mode,
  onToggle,
}: {
  mode: Mode;
  onToggle: (mode: Mode) => void;
}) {
  const toggleMode = () => {
    const newMode: Mode = mode === "luxury" ? "general" : "luxury";
    onToggle(newMode);
  };

  return (
    <div className="flex justify-center">
      <button
        onClick={toggleMode}
        className={`relative w-64 h-14 rounded-full border-2 transition-all duration-500 overflow-hidden
          ${
            mode === "luxury"
              ? "border-yellow-400"
              : "border-blue-500"
          }`}
      >
        {/* 🟢 Background slider */}
        <div
          className={`absolute top-0 left-0 h-full w-1/2 rounded-full transition-all duration-500
            ${
              mode === "luxury"
                ? "bg-gradient-to-r from-black to-red-700 translate-x-0"
                : "bg-gradient-to-r from-blue-500 to-cyan-400 translate-x-full"
            }`}
        ></div>

        {/* 🔤 Text */}
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
