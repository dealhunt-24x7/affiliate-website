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
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-yellow-400/50 shadow-lg group-hover:shadow-[0_0_15px_rgba(255,215,0,0.6)] transition-all">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="mt-3 text-sm font-medium text-gray-700 group-hover:text-yellow-600">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
