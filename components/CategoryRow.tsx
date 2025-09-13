"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Product } from "@/types/product";
import ProductCard from "@/components/ProductCard";
import PlaceholderCard from "@/components/PlaceholderCard";

export type Category = {
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
    const fetchProducts = async () => {
      try {
        const res = await fetch("/data/products.json");

        if (!res.ok) {
          throw new Error(`Failed to fetch products.json: ${res.status}`);
        }

        const data: { category: string; products: Product[] }[] = await res.json();

        // Find products for this category
        const categoryData = data.find((item) => item.category === category.slug);
        if (categoryData) {
          setProducts(categoryData.products.slice(0, 6)); // ✅ sirf 6 products show karo
        } else {
          setProducts([]); // ✅ agar category ke products na mile
        }
      } catch (error) {
        console.error("Error loading products:", error);
        setProducts([]); // ✅ UI ko crash hone se bacha lo
      }
    };

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
        {products === null ? (
          // Placeholder while loading
          Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="min-w-[160px] sm:min-w-[200px]">
              <PlaceholderCard />
            </div>
          ))
        ) : products.length > 0 ? (
          // Show products
          products.map((p) => (
            <div key={p.id} className="min-w-[160px] sm:min-w-[200px]">
              <ProductCard product={p} />
            </div>
          ))
        ) : (
          // Fallback if no products found
          <p className="text-gray-500 text-sm">No products available in this category.</p>
        )}
      </div>
    </section>
  );
}
