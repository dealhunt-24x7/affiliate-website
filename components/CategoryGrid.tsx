"use client";

import Image from "next/image";
import Link from "next/link";

interface SubCategory {
  name: string;
  slug: string;
  image: string;
}

interface Category {
  name: string;
  slug: string;
  image: string;
  subcategories?: SubCategory[];
}

// Sample categories (expandable)
const categories: Category[] = [
  {
    name: "Watches",
    slug: "watches",
    image: "/images/categories/watches.jpg",
    subcategories: [
      { name: "Men's Watches", slug: "mens-watches", image: "/images/categories/mens-watches.jpg" },
      { name: "Smart Watches", slug: "smart-watches", image: "/images/categories/smart-watches.jpg" },
    ],
  },
  { name: "Perfumes", slug: "perfumes", image: "/images/categories/perfumes.jpg" },
  { name: "Jewelry", slug: "jewelry", image: "/images/categories/jewelry.jpg" },
  { name: "Bags", slug: "bags", image: "/images/categories/bags.jpg" },
  { name: "Sunglasses", slug: "sunglasses", image: "/images/categories/sunglasses.jpg" },
  { name: "Footwear", slug: "footwear", image: "/images/categories/footwear.jpg" },
  { name: "Fashion", slug: "fashion", image: "/images/categories/fashion.jpg" },
  { name: "Electronics", slug: "electronics", image: "/images/categories/electronics.jpg" },
  { name: "Home & Kitchen", slug: "home-kitchen", image: "/images/categories/home-kitchen.jpg" },
  { name: "Beauty", slug: "beauty", image: "/images/categories/beauty.jpg" },
  { name: "Toys", slug: "toys", image: "/images/categories/toys.jpg" },
];

interface Props {
  mode: "luxury" | "general";
}

export default function CategoryGrid({ mode }: Props) {
  const isLuxury = mode === "luxury";

  return (
    <section className={`py-12 ${isLuxury ? "bg-gray-900 text-white" : "bg-blue-50 text-gray-900"}`}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className={`text-2xl font-bold text-center mb-10 ${isLuxury ? "text-yellow-400" : "text-blue-800"}`}>
          Shop by Category
        </h2>

        {/* Horizontal scrollable strip */}
        <div className="flex space-x-6 overflow-x-auto scrollbar-hide py-4">
          {categories.map((cat, idx) => (
            <Link
              key={cat.slug}
              href={`/products?category=${encodeURIComponent(cat.slug)}`}
              className="flex-shrink-0 flex flex-col items-center text-center group cursor-pointer w-24"
            >
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 shadow-lg transition-all duration-300">
                {/* Background aura */}
                <div
                  className={`absolute inset-0 rounded-full ${
                    isLuxury
                      ? "bg-yellow-400/20 blur-md scale-110 opacity-60 group-hover:opacity-90"
                      : "bg-blue-300/20 blur-md scale-110 opacity-60 group-hover:opacity-90"
                  }`}
                />
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="96px"
                  className="object-cover group-hover:scale-110 transition-transform duration-300 relative"
                />
              </div>
              <span
                className={`mt-3 text-sm font-medium group-hover:font-semibold transition-colors ${
                  isLuxury ? "text-yellow-300 group-hover:text-yellow-400" : "text-blue-800 group-hover:text-blue-600"
                }`}
              >
                {cat.name}
              </span>
            </Link>
          ))}
        </div>

        {/* See All Categories */}
        <div className="text-center mt-8">
          <Link
            href="/categories"
            className={`inline-block px-6 py-2 rounded-full font-semibold transition ${
              isLuxury
                ? "bg-yellow-500 text-white hover:bg-yellow-600"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            See All Categories
          </Link>
        </div>
      </div>
    </section>
  );
}
