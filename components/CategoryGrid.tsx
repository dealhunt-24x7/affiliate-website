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

// Categories with Luxury + General support
const categories: Category[] = [
  { name: "Watches", slug: "watches", image: "/images/categories/watches.jpg" },
  { name: "Perfumes", slug: "perfumes", image: "/images/categories/perfumes.jpg" },
  { name: "Jewelry", slug: "jewelry", image: "/images/categories/jewelry.jpg" },
  { name: "Bags", slug: "bags", image: "/images/categories/bags.jpg" },
  { name: "Sunglasses", slug: "sunglasses", image: "/images/categories/sunglasses.jpg" },
  { name: "Footwear", slug: "footwear", image: "/images/categories/footwear.jpg" },

  // Extra Categories
  { name: "Men", slug: "men", image: "/images/categories/men.jpg" },
  { name: "Women", slug: "women", image: "/images/categories/women.jpg" },
  { name: "Boys", slug: "boys", image: "/images/categories/boys.jpg" },
  { name: "Girls", slug: "girls", image: "/images/categories/girls.jpg" },
  { name: "Kids", slug: "kids", image: "/images/categories/kids.jpg" },
  { name: "Furniture", slug: "furniture", image: "/images/categories/furniture.jpg" },
  { name: "Music", slug: "music", image: "/images/categories/music.jpg" },
  { name: "Education", slug: "education", image: "/images/categories/education.jpg" },
];

interface Props {
  mode: "luxury" | "general";
}

export default function CategoryGrid({ mode }: Props) {
  const isLuxury = mode === "luxury";

  // Filter categories for Luxury (only merchant-available)
  const displayCategories = isLuxury
    ? categories.filter((cat) =>
        ["Watches", "Perfumes", "Jewelry", "Bags", "Sunglasses", "Footwear"].includes(cat.name)
      )
    : categories;

  return (
    <section className={`py-12 ${isLuxury ? "bg-yellow-50 text-gray-800" : "bg-blue-50 text-gray-900"}`}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className={`text-2xl font-bold text-center mb-10 ${isLuxury ? "text-yellow-700" : "text-blue-800"}`}>
          Shop by Category
        </h2>

        {/* Horizontal scrollable strip */}
        <div className="flex space-x-6 overflow-x-auto scrollbar-hide py-4">
          {displayCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products?category=${encodeURIComponent(cat.slug)}`}
              className="flex-shrink-0 flex flex-col items-center text-center group cursor-pointer w-24 sm:w-28 md:w-32"
            >
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 shadow-lg transition-all duration-300">
                {/* Background aura */}
                <div
                  className={`absolute inset-0 rounded-full ${
                    isLuxury
                      ? "bg-yellow-200/30 blur-md scale-110 opacity-60 group-hover:opacity-90"
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
                  isLuxury ? "text-yellow-800 group-hover:text-yellow-700" : "text-blue-800 group-hover:text-blue-600"
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
