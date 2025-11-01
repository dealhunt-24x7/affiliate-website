"use client";

import Image from "next/image";
import Link from "next/link";

interface Category {
  name: string;
  slug: string;
  image: string;
}

// All categories including new extra ones
const allCategories: Category[] = [
  { name: "Watches", slug: "watches", image: "/images/categories/watches.jpg" },
  { name: "Perfumes", slug: "perfumes", image: "/images/categories/perfumes.jpg" },
  { name: "Jewelry", slug: "jewelry", image: "/images/categories/jewelry.jpg" },
  { name: "Bags", slug: "bags", image: "/images/categories/bags.jpg" },
  { name: "Sunglasses", slug: "sunglasses", image: "/images/categories/sunglasses.jpg" },
  { name: "Footwear", slug: "footwear", image: "/images/categories/footwear.jpg" },
  { name: "Men", slug: "men", image: "/images/categories/men.jpg" },
  { name: "Women", slug: "women", image: "/images/categories/women.jpg" },
  { name: "Boys", slug: "boys", image: "/images/categories/boys.jpg" },
  { name: "Girls", slug: "girls", image: "/images/categories/girls.jpg" },
  { name: "Kids", slug: "kids", image: "/images/categories/kids.jpg" },
  { name: "Furniture", slug: "furniture", image: "/images/categories/furniture.jpg" },
  { name: "Music", slug: "music", image: "/images/categories/music.jpg" },
  { name: "Education", slug: "education", image: "/images/categories/education.jpg" },
  { name: "Home & Kitchen", slug: "home-kitchen", image: "/images/categories/home-kitchen.jpg" },
  { name: "Electronics", slug: "electronics", image: "/images/categories/electronics.jpg" },
  { name: "Beauty", slug: "beauty", image: "/images/categories/beauty.jpg" },
  { name: "Toys", slug: "toys", image: "/images/categories/toys.jpg" },
  // New extra categories
  { name: "Mobile/Smartphones", slug: "mobile-smartphones", image: "/images/categories/mobile.jpg" },
  { name: "Laptop", slug: "laptop", image: "/images/categories/laptop.jpg" },
  { name: "Undergarments", slug: "undergarments", image: "/images/categories/undergarments.jpg" },
  { name: "Others", slug: "others", image: "/images/categories/others.jpg" },
];

interface Props {
  mode: "luxury" | "general";
}

export default function CategoryGrid({ mode }: Props) {
  const isLuxury = mode === "luxury";

  // Luxury: only merchant-available premium categories
  const displayCategories = isLuxury
    ? allCategories.filter((cat) =>
        ["Watches", "Perfumes", "Jewelry", "Bags", "Sunglasses", "Footwear"].includes(cat.name)
      )
    : allCategories;

  return (
    <section className={`py-12 ${isLuxury ? "bg-yellow-50 text-gray-800" : "bg-blue-50 text-gray-900"}`}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className={`text-2xl font-bold text-center mb-10 ${isLuxury ? "text-yellow-700" : "text-blue-800"}`}>
          Shop by Category
        </h2>

        {/* Horizontal scrollable strip */}
        <div className="flex space-x-3 overflow-x-auto scrollbar-hide py-4">
          {displayCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products?category=${encodeURIComponent(cat.slug)}`}
              className="flex-shrink-0 w-[14%] sm:w-[12%] md:w-32 flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="relative w-full aspect-square rounded-full overflow-hidden border-2 shadow-lg transition-all duration-300">
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
                  className="object-cover group-hover:scale-110 transition-transform duration-300 relative"
                />
              </div>
              <span
                className={`mt-2 text-xs sm:text-sm font-medium group-hover:font-semibold transition-colors ${
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
