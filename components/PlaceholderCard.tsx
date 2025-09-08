"use client";

import React from "react";

const PlaceholderCard: React.FC = () => {
  return (
    <div className="border border-red-600 rounded-lg p-3 bg-black shadow-md flex flex-col items-center justify-center h-48 hover:shadow-lg transition">
      <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-700 rounded-full mb-3 shadow-md"></div>
      <div className="w-24 h-3 bg-red-500 rounded mb-2"></div>
      <button className="mt-2 text-center bg-red-600 text-white text-xs px-3 py-1 rounded-full hover:bg-red-700 transition">
        View Deal
      </button>
    </div>
  );
};

export default PlaceholderCard;
