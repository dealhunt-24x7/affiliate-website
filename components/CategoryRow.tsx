"use client";

import Link from "next/link";
import { Product } from "@/types/product";
import ProductCard from "@/components/ProductCard";
import PlaceholderCard from "@/components/PlaceholderCard";

type Category = {
  name: string;
  slug: string;
  image: string;
};

type Props = {
  category: Category;
};

export default function CategoryRow({ category }: Props) {
  // Sirf 10 dummy products for placeholder
  const products: Product[] = Array.from({ length: 10 }).map((_, i) => ({
    id: i + 1,
    name: `${category.name} Product ${i + 1}`,
    description: `Top ${category.name} deal you can grab today!`,
    image: "/images/placeholder.png",
    slug: `${category.slug}-${i + 1}`,
    price: 39.99 + i,
    rating: 4,
    specs: { Warranty: "1 Year" },
    affiliateLink: "#",
  }));

  return (
    <section className="mb-10">
      {/* Category Heading */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <img
            src={category.image}
            alt={category.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <h2 className="text-lg font-bold text-red-600 truncate max-w-[180px]">
            {category.name}
          </h2>
        </div>

        {/* View All Button */}
        <Link
          href={`/products/${category.slug}`}
          className="text-sm text-blue-600 hover:underline"
        >
          View All →
        </Link>
      </div>

      {/* Products Row */}
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {products.map((p) => (
          <div key={p.id} className="min-w-[160px] sm:min-w-[200px]">
            <PlaceholderCard />
          </div>
        ))}
      </div>
    </section>
  );
}
