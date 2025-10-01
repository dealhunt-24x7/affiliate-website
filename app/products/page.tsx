"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, useMemo } from "react";
import Link from "next/link";

interface ComparisonItem {
  site: string;
  price: number;
  rating: number;
}

interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  comparison: ComparisonItem[];
  brand: string;
  rating: number;
  partner: string;
}

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams?.get("search") || "";

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // Filters
  const [selectedBrand, setSelectedBrand] = useState<string>("all");
  const [selectedPartner, setSelectedPartner] = useState<string>("all");
  const [minRating, setMinRating] = useState<number>(0);
  const [priceSort, setPriceSort] = useState<string>("none");
  const [maxPrice, setMaxPrice] = useState<number>(0);

  useEffect(() => {
    setLoading(true);

    const mockProducts: Product[] = [
      {
        id: 1,
        name: "Rolex Submariner",
        price: 750000,
        img: "https://via.placeholder.com/400x300",
        brand: "Rolex",
        rating: 4.7,
        partner: "Amazon",
        comparison: [
          { site: "Amazon", price: 745000, rating: 4.7 },
          { site: "Flipkart", price: 752000, rating: 4.5 },
        ],
      },
      {
        id: 2,
        name: "Casio G-Shock",
        price: 8999,
        img: "https://via.placeholder.com/400x300",
        brand: "Casio",
        rating: 4.3,
        partner: "Myntra",
        comparison: [
          { site: "Amazon", price: 8799, rating: 4.4 },
          { site: "Myntra", price: 9099, rating: 4.2 },
        ],
      },
    ];

    const timeout = setTimeout(() => {
      setProducts(mockProducts);
      setMaxPrice(Math.max(...mockProducts.map(p => p.price)));
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timeout);
  }, [searchQuery]);

  // ✅ Filtered + sorted products
  const filteredProducts = useMemo(() => {
    let filtered = products.filter(p => 
      (selectedBrand === "all" || p.brand === selectedBrand) &&
      (selectedPartner === "all" || p.partner === selectedPartner) &&
      p.rating >= minRating
    );

    if (priceSort === "high") filtered.sort((a, b) => b.price - a.price);
    else if (priceSort === "low") filtered.sort((a, b) => a.price - b.price);

    return filtered;
  }, [products, selectedBrand, selectedPartner, minRating, priceSort]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* 🔙 Back Button */}
      <div className="mb-4">
        <Link
          href="/"
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md shadow-md"
        >
          ← Back to Home
        </Link>
      </div>

      <h1 className="text-2xl md:text-3xl font-bold mb-6">
        Showing results for: <span className="text-yellow-600">{searchQuery}</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar Filters */}
        <aside className="bg-white rounded-xl shadow-md p-4 h-fit">
          <h2 className="text-lg font-semibold mb-3">Filters</h2>

          {/* Brand */}
          <label className="block mb-3">
            <span className="text-sm font-medium text-gray-700">Brand</span>
            <select
              value={selectedBrand}
              onChange={e => setSelectedBrand(e.target.value)}
              className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2"
            >
              <option value="all">All</option>
              <option value="Rolex">Rolex</option>
              <option value="Casio">Casio</option>
            </select>
          </label>

          {/* Partner */}
          <label className="block mb-3">
            <span className="text-sm font-medium text-gray-700">Partner</span>
            <select
              value={selectedPartner}
              onChange={e => setSelectedPartner(e.target.value)}
              className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2"
            >
              <option value="all">All</option>
              <option value="Amazon">Amazon</option>
              <option value="Flipkart">Flipkart</option>
              <option value="Myntra">Myntra</option>
            </select>
          </label>

          {/* Rating */}
          <label className="block mb-3">
            <span className="text-sm font-medium text-gray-700">Minimum Rating</span>
            <input
              type="number"
              min={0} max={5} step={0.1}
              value={minRating}
              onChange={e => setMinRating(Number(e.target.value))}
              className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2"
            />
          </label>

          {/* Price Sort */}
          <label className="block mb-3">
            <span className="text-sm font-medium text-gray-700">Price Sort</span>
            <select
              value={priceSort}
              onChange={e => setPriceSort(e.target.value)}
              className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2"
            >
              <option value="none">None</option>
              <option value="low">Low to High</option>
              <option value="high">High to Low</option>
            </select>
          </label>

          {/* Price Slider */}
          <label className="block mb-3">
            <span className="text-sm font-medium text-gray-700">Max Price: ₹{maxPrice}</span>
            <input
              type="range"
              min={0} max={maxPrice} step={100}
              value={maxPrice}
              onChange={e => setMaxPrice(Number(e.target.value))}
              className="w-full mt-1"
            />
          </label>
        </aside>

        {/* Products List */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            Array.from({ length: 6 }).map((_, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md p-4 animate-pulse">
                <div className="w-full h-48 bg-gray-200 rounded-lg"></div>
                <div className="mt-3 h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="mt-2 h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="mt-3 h-20 bg-gray-100 rounded"></div>
              </div>
            ))
          ) : filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
                <img src={product.img} alt={product.name} className="w-full h-48 object-cover rounded-lg" />
                <h2 className="text-lg font-semibold mt-3">{product.name}</h2>
                <p className="text-xl font-bold text-green-600">₹{product.price}</p>

                <div className="mt-3 bg-gray-50 rounded-lg p-3 border border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">Compare Prices:</h3>
                  <div className="flex flex-col gap-2">
                    {product.comparison.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center bg-white px-3 py-2 rounded-md shadow-sm">
                        <span className="font-medium">{item.site}</span>
                        <span className="text-yellow-600 font-bold">₹{item.price}</span>
                        <span className="text-gray-500 text-sm">⭐ {item.rating}</span>
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
