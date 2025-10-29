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
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">
          Shop by Category
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products?category=${encodeURIComponent(cat.slug)}`}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              {/* wrapper with relative so Image fill works and golden aura sits behind */}
              <div className="relative">
                {/* Golden aura behind image */}
                <div className="absolute inset-0 rounded-full bg-yellow-400/20 blur-md scale-110 opacity-60 group-hover:opacity-90 transition-all duration-500"></div>

                <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-yellow-400/60 shadow-lg group-hover:shadow-[0_0_18px_rgba(255,215,0,0.7)] transition-all duration-300">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes="96px"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>

              <span className="mt-3 text-sm font-medium text-gray-700 group-hover:text-yellow-600">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>

        {/* ✅ Fixed “See All Categories” button */}
        <div className="text-center mt-8">
          <Link
            href="/categories"
            className="inline-block px-6 py-2 rounded-full bg-yellow-500 text-white font-semibold hover:bg-yellow-600 transition"
          >
            See All Categories
          </Link>
        </div>
      </div>
    </section>
  );
}
