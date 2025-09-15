"use client";

import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import ProductCard from "@/components/ProductCard";

export default function FeaturedDeals() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        // Filter / Pick top products (first 6 for now)
        const featured = data.flatMap((c: any) => c.products).slice(0, 6);
        setProducts(featured);
      } catch (error) {
        console.error("Error loading deals:", error);
      }
    };

    fetchDeals();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-gray-900">
        Featured Deals
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {products.length > 0 ? (
          products.map((p) => <ProductCard key={p.id} product={p} />)
        ) : (
          <p className="col-span-full text-gray-500">No deals available right now.</p>
        )}
      </div>
    </div>
  );
}
