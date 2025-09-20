"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";

type ProductGroup = {
  category: string;
  products: any[];
};

export default function FeaturedDeals() {
  const [featured, setFeatured] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/api/products");
      const data: ProductGroup[] = await res.json();

      // pick first 3 products from first 2 categories
      const selected = data.flatMap((grp) => grp.products).slice(0, 3);
      setFeatured(selected);
    };

    fetchProducts();
  }, []);

  return (
    <section className="px-4">
      <h2 className="text-xl font-bold mb-6 text-center">Featured Deals</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {featured.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
