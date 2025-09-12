"use client";

import { useEffect, useState } from "react";
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
  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(`/api/products?category=${category.slug}`);
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data.slice(0, 6)); // ✅ sirf 6 show karo
      } catch (err) {
        console.error("Error loading products:", err);
        setProducts([]); // fallback to empty array
      }
    }
    fetchProducts();
  }, [category.slug]);

  return (
    <section className="mb-10" id={category.slug}>
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
        {products === null
          ? Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="min-w-[160px] sm:min-w-[200px]">
                <PlaceholderCard />
              </div>
            ))
          : products.map((p) => (
              <div key={p.id} className="min-w-[160px] sm:min-w-[200px]">
                <ProductCard product={p} />
              </div>
            ))}
      </div>
    </section>
  );
}
