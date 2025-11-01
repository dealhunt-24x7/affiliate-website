"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

interface ComparisonItem {
  site: string;
  price: string;
  rating: number;
}

interface Product {
  id: number;
  name: string;
  price: string;
  img: string;
  comparison: ComparisonItem[];
  brand: string;
  rating: number;
}

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams?.get("search") || "";

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading products...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar for mobile filter toggle */}
      <div className="flex justify-between items-center p-4 md:hidden">
        <h1 className="text-xl font-semibold">Products</h1>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="bg-gray-800 text-white px-3 py-2 rounded-lg"
        >
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row">
        {/* Sidebar Filters */}
        <div
          className={`${
            showFilters
              ? "block absolute top-0 left-0 w-full bg-white z-50 p-4 md:static md:w-64 md:block"
              : "hidden md:block md:w-64"
          } border-r border-gray-200`}
        >
          <h2 className="text-lg font-semibold mb-4">Filters</h2>

          {/* Example Filter Section */}
          <div className="space-y-3">
            <div>
              <h3 className="font-medium mb-2">Brand</h3>
              <div className="space-y-1">
                <label className="block">
                  <input type="checkbox" className="mr-2" /> Rolex
                </label>
                <label className="block">
                  <input type="checkbox" className="mr-2" /> Titan
                </label>
                <label className="block">
                  <input type="checkbox" className="mr-2" /> Casio
                </label>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Price Range</h3>
              <input type="range" min="0" max="100000" className="w-full" />
            </div>
          </div>

          {/* Hide Filter Button (Mobile Only) */}
          <button
            onClick={() => setShowFilters(false)}
            className="mt-4 w-full bg-gray-800 text-white py-2 rounded-lg md:hidden"
          >
            Apply Filters
          </button>
        </div>

        {/* Product Grid */}
        <div className="flex-1 p-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition p-3 flex flex-col"
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-md mb-2"
                />
                <h3 className="text-sm font-semibold line-clamp-2 mb-1">
                  {product.name}
                </h3>
                <p className="text-gray-700 font-medium">{product.price}</p>
                <p className="text-xs text-gray-500 mb-2">
                  ⭐ {product.rating} / 5
                </p>
                <Link
                  href={`/comparison/${product.id}`}
                  className="text-center mt-auto bg-gray-800 text-white text-sm py-2 rounded-md"
                >
                  Compare Prices
                </Link>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-600">
              No products found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
      }
