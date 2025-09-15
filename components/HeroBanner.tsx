"use client";

export default function HeroBanner() {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden rounded-2xl shadow-lg">
      <img
        src="/images/banners/main-banner.jpg"
        alt="Main Hero Banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl sm:text-5xl font-bold text-white drop-shadow-lg">
          Best Deals, Just for You
        </h1>
        <p className="text-white text-lg mt-2 max-w-xl">
          Discover trending products & exclusive discounts across all categories.
        </p>
        <button className="mt-4 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl shadow-md">
          Shop Now
        </button>
      </div>
    </div>
  );
}
