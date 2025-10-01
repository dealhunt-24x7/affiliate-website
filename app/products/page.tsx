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
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000]);

  // Fetch products (mock)
  useEffect(() => {
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
          { site: "Amazon", price: "₹7,45,000", rating: 4.7 },
          { site: "Flipkart", price: "₹7,52,000", rating: 4.5 },
          { site: "Myntra", price: "₹7,60,000", rating: 4.3 },
        ],
      },
      {
        id: 2,
        name: "Casio G-Shock",
        price: 8999,
        img: "https://via.placeholder.com/400x300",
        brand: "Casio",
        rating: 4.3,
        partner: "Flipkart",
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

  // Generate unique brands & partners dynamically
  const brands = Array.from(new Set(products.map((p) => p.brand)));
  const partners = Array.from(new Set(products.map((p) => p.partner)));

  // Filter products
  let filteredProducts = products.filter(
    (p) =>
      (selectedBrand === "all" || p.brand === selectedBrand) &&
      (selectedPartner === "all" || p.partner === selectedPartner) &&
      p.rating >= minRating &&
      p.price >= priceRange[0] &&
      p.price <= priceRange[1]
  );

  // Sort by price
  if (priceSort === "high") filteredProducts.sort((a, b) => b.price - a.price);
  else if (priceSort === "low") filteredProducts.sort((a, b) => a.price - b.price);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Back Button */}
      <div className="mb-4">
        <Link
          href="/"
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md shadow-md"
        >
          ← Back to Home
        </Link>
      </div>

      <h1 className="text-2xl md:text-3xl font-bold mb-6">
        Showing results for:{" "}
        <span className="text-yellow-600">{searchQuery}</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar Filters */}
        <aside className="bg-white rounded-xl shadow-md p-4 h-fit space-y-4">
          <h2 className="text-lg font-semibold mb-3">Filters</h2>

          {/* Price Sort */}
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Sort by Price</span>
            <select
              value={priceSort}
              onChange={(e) => setPriceSort(e.target.value)}
              className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2"
            >
              <option value="none">None</option>
              <option value="high">High to Low</option>
              <option value="low">Low to High</option>
            </select>
          </label>

          {/* Price Range Slider */}
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Price Range</span>
            <input
              type="range"
              min={0}
              max={1000000}
              value={priceRange[1]}
              onChange={(e) =>
                setPriceRange([0, Number(e.target.value)])
              }
              className="w-full mt-1"
            />
            <div className="text-sm text-gray-500 mt-1">0 - ₹{priceRange[1]}</div>
          </label>

          {/* Brand Filter */}
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Brand</span>
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2"
            >
              <option value="all">All</option>
              {brands.map((b, idx) => (
                <option key={idx} value={b}>{b}</option>
              ))}
            </select>
          </label>

          {/* Partner Filter */}
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Partner</span>
            <select
              value={selectedPartner}
              onChange={(e) => setSelectedPartner(e.target.value)}
              className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2"
            >
              <option value="all">All</option>
              {partners.map((p, idx) => (
                <option key={idx} value={p}>{p}</option>
              ))}
            </select>
          </label>

          {/* Rating Filter */}
          <label className
