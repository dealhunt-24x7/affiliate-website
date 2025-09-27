"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

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

export default function ProductsPage() {
  let searchQuery = "";
  try {
    const searchParams = useSearchParams();
    searchQuery = searchParams?.get("search") || "";
  } catch (err) {
    // agar prerender ke time pe error aaye to ignore
    searchQuery = "";
  }

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // Filters
  const [selectedBrand, setSelectedBrand] = useState<string>("all");
  const [minRating, setMinRating] = useState<number>(0);

  useEffect(() => {
    setLoading(true);

    const mockProducts: Product[] = [
      {
        id: 1,
        name: "Rolex Submariner",
        price: "₹7,50,000",
        img: "https://via.placeholder.com/400x300",
        brand: "Rolex",
        rating: 4.7,
        comparison: [
          { site: "Amazon", price: "₹7,45,000", rating: 4.7 },
          { site: "Flipkart", price: "₹7,52,000", rating: 4.5 },
          { site: "TataCliq", price: "₹7,60,000", rating: 4.3 },
        ],
      },
      {
        id: 2,
        name: "Casio G-Shock",
        price: "₹8,999",
        img: "https://via.placeholder.com/400x300",
        brand: "Casio",
        rating: 4.3,
        comparison: [
          { site: "Amazon", price: "₹8,799", rating: 4.4 },
          { site: "Flipkart", price: "₹8,950", rating: 4.3 },
          { site: "Myntra", price: "₹9,099", rating: 4.2 },
        ],
      },
    ];

    const timeout = setTimeout(() => {
      setProducts(mockProducts);
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timeout);
  }, [searchQuery]);

  const filteredProducts = products.filter(
    (p) =>
      (selectedBrand === "all" || p.brand === selectedBrand) &&
      p.rating >= minRating
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">
        Showing results for:{" "}
        <span className="text-yellow-600">{searchQuery}</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar Filters */}
        <aside className="bg-white rounded-xl shadow-md p-4 h-fit">
          <h2 className="text-lg font-semibold mb-3">Filters</h2>

          {/* Brand Filter */}
          <label className="block mb-3">
            <span className="text-sm font-medium text-gray-700">Brand</span>
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2"
            >
              <option value="all">All</option>
              <option value="Rolex">Rolex</option>
              <option value="Casio">Casio</option>
            </select>
          </label>

          {/* Rating Filter */}
          <label className="block">
            <span className="text-sm font-medium text-gray-700">
              Minimum Rating
            </span>
            <input
              type="number"
              value={minRating}
              min={0}
              max={5}
              step={0.1}
              onChange={(e) => setMinRating(Number(e.target.value))}
              className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2"
            />
          </label>
        </aside>

        {/* Products List */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            Array.from({ length: 6 }).map((_, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md p-4 animate-pulse"
              >
                <div className="w-full h-48 bg-gray-200 rounded-lg"></div>
                <div className="mt-3 h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="mt-2 h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="mt-3 h-20 bg-gray-100 rounded"></div>
              </div>
            ))
          ) : filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg"
                />

                <h2 className="text-lg font-semibold mt-3">{product.name}</h2>
                <p className="text-xl font-bold text-green-600">
                  {product.price}
                </p>

                {/* Comparison Strip */}
                <div className="mt-3 bg-gray-50 rounded-lg p-3 border border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">
                    Compare Prices:
                  </h3>
                  <div className="flex flex-col gap-2">
                    {product.comparison.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between items-center bg-white px-3 py-2 rounded-md shadow-sm"
                      >
                        <span className="font-medium">{item.site}</span>
                        <span className="text-yellow-600 font-bold">
                          {item.price}
                        </span>
                        <span className="text-gray-500 text-sm">
                          ⭐ {item.rating}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-lg">
                  View Details
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-600 col-span-full text-center">
              No products found matching your filters.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
