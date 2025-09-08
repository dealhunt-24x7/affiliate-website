"use client";

import React from "react";

const PlaceholderCard: React.FC = () => {
  return (
    <div className="border rounded-lg p-3 bg-white shadow-md flex flex-col items-center justify-center h-48">
      {/* Dummy image box */}
      <div className="w-20 h-20 bg-gray-300 rounded mb-3"></div>

      {/* Dummy text line */}
      <div className="w-24 h-3 bg-gray-200 rounded mb-2"></div>

      {/* View Deal button only */}
      <button className="mt-2 text-center bg-blue-500 text-white text-xs px-3 py-1 rounded hover:bg-blue-600 transition">
        View Deal
      </button>
    </div>
  );
};

export default PlaceholderCard;
