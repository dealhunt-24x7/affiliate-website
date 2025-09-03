"use client";
import React from "react";
import ProductCard from "@/components/ProductCard";
import HorizontalProductRow from "@/components/HorizontalProductRow";
import CategoryPills from "@/components/CategoryPills";

const categories = ["Mobiles", "Laptops", "Headphones", "Watches", "Shoes"];

const products = [
  {
    id: 1,
    name: "iPhone 15",
    description: "Latest Apple iPhone with A17 chip",
    image: "/iphone.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "MacBook Pro",
    description: "Apple M3 Pro chip, 14-inch Retina Display",
    image: "/macbook.jpg",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <main className="p-6">
      {/* Category Pills */}
      <section className="mb-8">
        <CategoryPills categories={categories} />
      </section>

      {/* Featured Row */}
      <HorizontalProductRow title="Featured Deals" products={products} />

      {/* Example of Single ProductCard */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
    </main>
  );
}
