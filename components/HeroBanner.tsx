"use client";

import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="relative bg-gradient-to-r from-black via-gray-900 to-black text-white mt-6 animate-banner">
      {/* Background Image */}
      <Image
        src="/images/banners/hero.jpg"
        alt="Luxury Deals"
        fill
        priority
        className="object-cover opacity-40"
      />

      {/* Overlay Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center py-24 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg animate-slideDown">
          Luxury Deals at Your Fingertips
        </h1>
        {/* Animated Tagline (Visible on Mobile Too) */}
        <p className="text-lg font-bold mb-4 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
          Cart to Heart ❤️
        </p>
        <p className="text-lg md:text-xl mb-6 opacity-90 animate-fadeIn">
          Shop exclusive watches, jewelry, and more – only the best handpicked deals.
        </p>
        <a
          href="/products"
          className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-3 rounded-full shadow-lg transition transform hover:scale-105 animate-fadeIn delay-300"
        >
          Shop Now
        </a>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-banner {
          animation: fadeIn 0.8s ease-in-out;
        }
        .animate-slideDown {
          animation: slideDown 0.8s ease-out forwards;
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </section>
  );
}
