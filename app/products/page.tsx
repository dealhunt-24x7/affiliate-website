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

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams?.get("search") || "";

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedBrand, setSelectedBrand] = useState("all");
  const [minRating, setMinRating] = useState(0);
  const [priceSort, setPriceSort] = useState<"high" | "low" | "none">("none");
  const [partners, setPartners] = useState<string[]>([]);
  const [selectedPartners, setSelectedPartners] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 0]);

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
          { site: "Myntra", price: "₹9,099", rating: 4.2 },
        ],
      },
    ];

    const timeout = setTimeout(() => {
      setProducts(mockProducts);
      const allPartners = [
        ...new Set(mockProducts.flatMap((p) => p.comparison.map((c) => c.site))),
      ];
      setPartners(allPartners);

      const allPrices = mockProducts.map((p) =>
        Number(p.price.replace(/[^0-9]/g, ""))
      );
      setPriceRange([Math.min(...allPrices), Math.max(...allPrices)]);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [searchQuery]);

  let filtered = products
    .filter((p) => {
      const numPrice = Number(p.price.replace(/[^0-9]/g, ""));
      return (
        (selectedBrand === "all" || p.brand === selectedBrand) &&
        p.rating >= minRating &&
        numPrice >= priceRange[0] &&
        numPrice <= priceRange[1] &&
        (selectedPartners.length === 0 ||
          selectedPartners.some((sp) => p.comparison.some((c) => c.site === sp)))
      );
    })
    .sort((a, b) => {
      if (priceSort === "high")
        return (
          Number(b.price.replace(/[^0-9]/g, "")) -
          Number(a.price.replace(/[^0-9]/g, ""))
        );
      if (priceSort === "low")
        return (
          Number(a.price.replace(/[^0-9]/g, "")) -
          Number(b.price.replace(/[^0-9]/g, ""))
        );
      return 0;
    });

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 py-6">
      <Link
        href="/"
        className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md shadow-md mb-5"
      >
        ← Back to Home
      </Link>

      <h1 className="text-xl sm:text-2xl font-bold mb-4">
        Showing results for{" "}
        <span className="text-yellow-600">{searchQuery}</span>
      </h1>

      {/* Filters + Products */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar Filters */}
        <aside className="bg-white rounded-xl shadow-md p-4 w-full md:w-1/4 md:sticky md:top-20 md:h-fit overflow-y-auto max-h-[70vh]">
          <h2 className="text-lg font-semibold mb-3">Filters</h2>

          {/* Brand */}
          <div className="mb-4">
            <label className="text-sm font-medium">Brand</label>
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm"
            >
              <option value="all">All</option>
              {[...new Set(products.map((p) => p.brand))].map((b) => (
                <option key={b}>{b}</option>
              ))}
            </select>
          </div>

          {/* Rating */}
          <div className="mb-4">
            <label className="text-sm font-medium">Min Rating</label>
            <div className="flex flex-wrap gap-1 mt-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setMinRating(star)}
                  className={`px-2 py-1 rounded text-sm ${
                    minRating >= star
                      ? "bg-yellow-500 text-white"
                      : "bg-gray-100"
                  }`}
                >
                  {star}⭐
                </button>
              ))}
            </div>
          </div>

          {/* Partners */}
          <div className="mb-4">
            <label className="text-sm font-medium">Partners</label>
            <div className="flex flex-wrap gap-2 mt-1">
              {partners.map((p) => (
                <label key={p} className="text-sm">
                  <input
                    type="checkbox"
                    checked={selectedPartners.includes(p)}
                    onChange={() =>
                      setSelectedPartners((prev) =>
                        prev.includes(p)
                          ? prev.filter((x) => x !== p)
                          : [...prev, p]
                      )
                    }
                  />{" "}
                  {p}
                </label>
              ))}
            </div>
          </div>

          {/* Sort */}
          <div className="mb-4">
            <label className="text-sm font-medium">Sort by Price</label>
            <select
              value={priceSort}
              onChange={(e) =>
                setPriceSort(e.target.value as "high" | "low" | "none")
              }
              className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm"
            >
              <option value="none">None</option>
              <option value="high">High → Low</option>
              <option value="low">Low → High</option>
            </select>
          </div>
        </aside>

        {/* Product Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-white p-3 rounded-lg shadow animate-pulse"
                >
                  <div className="w-full h-36 bg-gray-200 rounded"></div>
                  <div className="mt-2 h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="mt-1 h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              ))
            : filtered.map((p) => (
                <div
                  key={p.id}
                  className="bg-white rounded-lg shadow-md p-3 hover:shadow-lg transition"
                >
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-36 object-cover rounded"
                  />
                  <h3 className="text-sm font-semibold mt-2">{p.name}</h3>
                  <p className="text-yellow-600 font-bold">{p.price}</p>
                  <button className="mt-2 w-full bg-yellow-500 hover:bg-yellow-600 text-white text-sm py-1.5 rounded">
                    View Details
                  </button>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
