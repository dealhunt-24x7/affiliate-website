"use client";

import Image from "next/image";
import Link from "next/link";

const categories = [
  { name: "Watches", slug: "watches", image: "/images/categories/watches.jpg" },
  { name: "Perfumes", slug: "perfumes", image: "/images/categories/perfumes.jpg" },
  { name: "Jewelry", slug: "jewelry", image: "/images/categories/jewelry.jpg" },
  { name: "Bags", slug: "bags", image: "/images/categories/bags.jpg" },
  { name: "Sunglasses", slug: "sunglasses", image: "/images/categories/sunglasses.jpg" },
  { name: "Footwear", slug: "footwear", image: "/images/categories/footwear.jpg" },
];

export default function CategoryGrid() {
  return (
    <section className="py-14 bg-gradient-to-b from-white via-[#fef8e7] to-[#fff4d1] relative overflow-hidden">
      {/* Gold shimmer overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,215,0,0.15),transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10 tracking-wide drop-shadow-[0_0_10px_rgba(255,215,0,0.3)]">
          Shop by Category
        </h2>

        {/* Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products?category=${encodeURIComponent(cat.slug)}`}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-[2.5px] border-yellow-400/70 bg-white/20 backdrop-blur-md shadow-[0_0_15px_rgba(255,215,0,0.4)] group-hover:shadow-[0_0_25px_rgba(255,215,0,0.7)] transition-all duration-300">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <span className="mt-3 text-sm font-semibold text-gray-800 group-hover:text-yellow-600 transition-colors">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Always-visible “See All” Button */}
        <div className="text-center mt-12">
          <Link
            href="/categories"
            className="inline-block px-6 py-2.5 text-sm font-semibold rounded-full text-white bg-gradient-to-r from-yellow-500 to-red-600 shadow-lg hover:opacity-90 hover:shadow-[0_0_20px_rgba(255,215,0,0.7)] transition-all"
          >
            See All Categories →
          </Link>
        </div>
      </div>
    </section>
  );
}
