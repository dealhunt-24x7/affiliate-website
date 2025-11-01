export const revalidate = 0;
export const dynamic = "force-dynamic";

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

export default function ProductsPage() {
  let searchQuery = "";
  try {
    const searchParams = useSearchParams();
    searchQuery = searchParams?.get("search") || "";
  } catch {
    searchQuery = "";
  }

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // Filters
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
      {
        id: 3,
        name: "Omega Seamaster",
        price: "₹5,90,000",
        img: "https://via.placeholder.com/400x300",
        brand: "Omega",
        rating: 4.6,
        comparison: [
          { site: "Amazon", price: "₹5,85,000", rating: 4.7 },
          { site: "Flipkart", price: "₹5,95,000", rating: 4.5 },
        ],
      },
    ];

    const timeout = setTimeout(() => {
      setProducts(mockProducts);

      // Dynamic partners
      const allPartners = [
        ...new Set(mockProducts.flatMap((p) => p.comparison.map((c) => c.site))),
      ];
      setPartners(allPartners);

      // Dynamic price range
      const allPrices = mockProducts.map((p) =>
        Number(p.price.replace(/[^0-9]/g, ""))
      );
      const min = Math.min(...allPrices);
      const max = Math.max(...allPrices);
      setPriceRange([min, max]);

      setLoading(false);
    }, 800);

    return () => clearTimeout(timeout);
  }, [searchQuery]);

  // Apply filters
  let filteredProducts = products.filter((p) => {
    const numericPrice = Number(p.price.replace(/[^0-9]/g, ""));
    return (
      (selectedBrand === "all" || p.brand === selectedBrand) &&
      p.rating >= minRating &&
      numericPrice >= priceRange[0] &&
      numericPrice <= priceRange[1] &&
      (selectedPartners.length === 0 ||
        selectedPartners.some((partner) =>
          p.comparison.some((c) => c.site === partner)
        ))
    );
  });

  // Apply sorting
  if (priceSort === "high")
    filteredProducts.sort(
      (a, b) =>
        Number(b.price.replace(/[^0-9]/g, "")) -
        Number(a.price.replace(/[^0-9]/g, ""))
    );
  else if (priceSort === "low")
    filteredProducts.sort(
      (a, b) =>
        Number(a.price.replace(/[^0-9]/g, "")) -
        Number(b.price.replace(/[^0-9]/g, ""))
    );

  const togglePartner = (partner: string) => {
    setSelectedPartners((prev) =>
      prev.includes(partner)
        ? prev.filter((p) => p !== partner)
        : [...prev, partner]
    );
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      {/* 🔙 Back Button */}
      <Link
        href="/"
        className="inline-block mb-6 text-yellow-600 font-medium hover:underline"
      >
        ← Back to Home
      </Link>

      <h1 className="text-2xl md:text-3xl font-bold mb-6">
        Showing results for:{" "}
        <span className="text-yellow-600">{searchQuery}</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar Filters */}
        <aside className="bg-white rounded-xl shadow-md p-4 h-fit flex flex-col gap-4 sticky top-4 md:col-span-1">
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
              {[...new Set(products.map((p) => p.brand))].map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </label>

          {/* Rating Filter */}
          <div className="mb-3">
            <span className="text-sm font-medium text-gray-700">
              Minimum Rating
            </span>
            <div className="flex gap-1 mt-2 flex-wrap">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setMinRating(star)}
                  className={`px-2 py-1 rounded text-sm ${
                    minRating >= star
                      ? "bg-yellow-500 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {star}⭐
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="mb-3">
            <span className="text-sm font-medium text-gray-700">
              Price Range
            </span>
            <div className="flex items-center gap-2 mt-2">
              <input
                type="number"
                value={priceRange[0]}
                min={0}
                onChange={(e) =>
                  setPriceRange([Number(e.target.value), priceRange[1]])
                }
                className="w-20 border rounded px-2 py-1 text-sm"
              />
              <span>-</span>
              <input
                type="number"
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([priceRange[0], Number(e.target.value)])
                }
                className="w-20 border rounded px-2 py-1 text-sm"
              />
            </div>
          </div>

          {/* Partners Filter */}
          <div className="mb-3">
            <span className="text-sm font-medium text-gray-700">Partners</span>
            <div className="flex flex-col gap-1 mt-2 max-h-32 overflow-y-auto">
              {partners.map((partner) => (
                <label key={partner} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedPartners.includes(partner)}
                    onChange={() => togglePartner(partner)}
                  />
                  {partner}
                </label>
              ))}
            </div>
          </div>

          {/* Price Sort */}
          <label className="block">
            <span className="text-sm font-medium text-gray-700">
              Sort by Price
            </span>
            <select
              value={priceSort}
              onChange={(e) => setPriceSort(e.target.value as any)}
              className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2"
            >
              <option value="none">None</option>
              <option value="high">High to Low</option>
              <option value="low">Low to High</option>
            </select>
          </label>
        </aside>

        {/* Products List */}
        <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {loading ? (
            Array.from({ length: 6 }).map((_, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md p-4 animate-pulse"
              >
                <div className="w-full h-36 bg-gray-200 rounded-lg"></div>
                <div className="mt-3 h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="mt-2 h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))
          ) : filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md p-3 hover:shadow-lg transition"
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-36 object-cover rounded-lg"
                />

                <h2 className="text-base font-semibold mt-2">
                  {product.name}
                </h2>
                <p className="text-lg font-bold text-green-600">
                  {product.price}
                </p>

                <div className="mt-2 bg-gray-50 rounded-lg p-2 border border-gray-200 text-sm">
                  <h3 className="font-semibold text-gray-700 mb-1">
                    Compare Prices:
                  </h3>
                  <div className="flex flex-col gap-1">
                    {product.comparison.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between items-center bg-white px-2 py-1 rounded-md shadow-sm text-xs"
                      >
                        <span>{item.site}</span>
                        <span className="text-yellow-600 font-bold">
                          {item.price}
                        </span>
                        <span className="text-gray-500">⭐{item.rating}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="mt-3 w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-1.5 rounded-lg text-sm">
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
    </main>
  );
}
