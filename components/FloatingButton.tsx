"use client";

import { ArrowUp, MessageCircle } from "lucide-react";

export default function FloatingButton() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/0000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-green-500 shadow flex items-center justify-center text-white"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={22} />
      </a>
      <button
        onClick={scrollTop}
        className="w-12 h-12 rounded-full bg-blue-600 shadow flex items-center justify-center text-white"
        aria-label="Scroll to top"
      >
        <ArrowUp size={22} />
      </button>
    </div>
  );
}
