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
    const fetchProducts = async () => {
      try {
        console.log("Fetching products for:", category.slug);
        // ✅ Best practice: API route se fetch karna (direct JSON se nahi)
        const res = await fetch("/api/categories");
        if (!res.ok) throw new Error("Failed to fetch categories");
        const data = await res.json();

        console.log("Fetched data:", data);

        // Find products for this category
        const categoryData = data.find((item: any) => item.category === category.slug);
        if (categoryData) {
          setProducts(categoryData.products.slice(0, 6)); // ✅ Sirf 6 show karo
        } else {
          setProducts([]);
        }
      } catch (error) {
        console.error("Error loading products:", error);
        setProducts([]);
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
          // ✅ Placeholder while loading
          Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="min-w-[160px] sm:min-w-[200px]">
              <PlaceholderCard />
            </div>
          ))
        ) : products.length === 0 ? (
          // ✅ Empty state
          <p className="text-gray-500 text-sm italic">No products available</p>
        ) : (
          products.map((p) => (
            <div key={p.id} className="min-w-[160px] sm:min-w-[200px]">
              <ProductCard product={p} />
            </div>
          ))
        )}
      </div>
    </section>
  );
}
