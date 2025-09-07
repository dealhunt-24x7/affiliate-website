"use client";

import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

type Props = {
  category: {
    name: string;
    image: string;
  };
};

export default function CategoryRow({ category }: Props) {
  const products: Product[] = Array.from({ length: 25 }).map((_, i) => ({
    id: i + 1,
    name: `${category.name} Product ${i + 1}`,
    description: `Top ${category.name} deal you can grab today!`,
    image: "/images/placeholder.png",
    slug: `${category.name.toLowerCase().replace(/\s+/g, "-")}-${i + 1}`,
    price: 39.99 + i,
    rating: 4,
    specs: { Warranty: "1 Year" },
    affiliateLink: "#",
  }));

  return (
    <section className="mb-10">
      <div className="flex items-center gap-3 mb-3">
        <img
          src={category.image}
          alt={category.name}
          className="w-10 h-10 object-cover rounded-full border border-yellow-400"
        />
        <h2 className="text-lg font-bold text-yellow-400">{category.name}</h2>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {products.map((p) => (
          <div key={p.id} className="min-w-[160px] sm:min-w-[200px]">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </section>
  );
}
