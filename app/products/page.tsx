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

      const allPartners = [
        ...new Set(mockProducts.flatMap((p) => p.comparison.map((c) => c.site))),
      ];
      setPartners(allPartners);

      const allPrices = mockProducts.map((p) =>
        Number(p.price.replace(/[^0-9]/g, ""))
      );
      const min = Math.min(...allPrices);
      const max = Math.max(...allPrices);
      setPriceRange([min, max]);

      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchQuery]);

  // FILTERS
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

  // SORT
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
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
      <Link
        href="/"
        className="text-blue-600 hover:underline text-sm md:text-base mb-4 inline-block"
      >
        ← Back to Home
      </Link>

      <h1 className="text-2xl md:text-3xl font-bold mb-6">
        Showing results for:{" "}
        <span className="text-yellow-600">{searchQuery || "All Products"}</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar Filters */}
        <aside className="bg-white rounded-xl shadow-md p-4 h-fit flex flex-col gap-4 sticky top-4">
          <h2 className="text-lg font-semibold mb-2">Filters</h2>

          {/* Brand */}
          <label className="block">
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

          {/* Rating */}
          <div>
            <span className="text-sm font-medium text-gray-700">
              Minimum Rating
            </span>
            <div className="flex gap-1 mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setMinRating(star)}
                  className={`px-2 py-1 rounded ${
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

          {/* Partners */}
          <div>
            <span className="text-sm font-medium text-gray-700">Partners</span>
            <div className="flex flex-col gap-1 mt-2">
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

          {/* Sort */}
          <label className="block">
            <span className="text-sm font-medium text-gray-700">
              Sort by Price
            </span>
            <select
              value={priceSort}
              onChange={(e) =>
                setPriceSort(e.target.value as "high" | "low" | "none")
              }
              className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2"
            >
              <option value="none">None</option>
              <option value="high">High to Low</option>
              <option value="low">Low to High</option>
            </select>
          </label>
        </aside>

        {/* Products */}
        <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {loading ? (
            Array.from({ length: 6 }).map((_, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md p-4 animate-pulse"
              >
                <div className="w-full h-40 bg-gray-200 rounded-lg"></div>
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
                  className="w-full h-40 object-cover rounded-lg"
                />
                <h2 className="text-base font-semibold mt-3">
                  {product.name}
                </h2>
                <p className="text-lg font-bold text-green-600">
                  {product.price}
                </p>
                <p className="text-sm text-gray-500">⭐ {product.rating}</p>
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
