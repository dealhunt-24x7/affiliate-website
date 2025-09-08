
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Product = {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  site: string;
};

export default function SubcategoryPage({
  params,
}: {
  params: { category: string; subcategory: string };
}) {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      const newProducts: Product[] = Array.from({ length: 10 }).map((_, i) => ({
        id: i + page * 10,
        name: `${params.subcategory} Product ${i + 1}`,
        price: Math.floor(Math.random() * 50000),
        rating: (Math.random() * 5).toFixed(1) as unknown as number,
        image: "/placeholder.png",
        site: ["Amazon", "Flipkart", "Myntra"][i % 3],
      }));
      setProducts((prev) => [...prev, ...newProducts]);
    };
    fetchProducts();
  }, [page, params.subcategory]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 300
      ) {
        setPage((p) => p + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4 capitalize">
        {params.category} / {params.subcategory}
      </h1>

      {/* 🔹 Horizontal Comparison Strip */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Compare Prices</h2>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {["Amazon", "Flipkart", "Myntra"].map((site, i) => (
            <div
              key={i}
              className="min-w-[200px] border rounded-lg p-3 flex-shrink-0 bg-white shadow"
            >
              <Image
                src="/placeholder.png"
                alt={site}
                width={150}
                height={100}
                className="rounded mb-2"
              />
              <p className="text-sm font-medium">{params.subcategory} on {site}</p>
              <p className="text-xs text-gray-600">Price from API</p>
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 Infinite Scroll Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {products.map((p) => (
          <div
            key={p.id}
            className="border rounded-lg p-3 flex flex-col bg-white shadow hover:shadow-md transition"
          >
            <Image
              src={p.image}
              alt={p.name}
              width={200}
              height={150}
              className="rounded mb-2"
            />
            <p className="text-sm font-medium">{p.name}</p>
            <p className="text-xs text-gray-600">₹{p.price}</p>
            <p className="text-xs text-yellow-600">⭐ {p.rating}</p>
            <p className="text-xs text-blue-600 mt-1">{p.site}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
