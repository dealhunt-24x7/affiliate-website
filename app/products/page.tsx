"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    // 🔧 Mock API call - baad me real API integrate karenge
    const mockProducts = [
      {
        id: 1,
        name: "Rolex Submariner",
        price: "₹7,50,000",
        img: "https://via.placeholder.com/400x300",
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
        comparison: [
          { site: "Amazon", price: "₹8,799", rating: 4.4 },
          { site: "Flipkart", price: "₹8,950", rating: 4.3 },
          { site: "Myntra", price: "₹9,099", rating: 4.2 },
        ],
      },
    ];

    setProducts(mockProducts);
  }, [searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Search Results Heading */}
      <h1 className="text-2xl md:text-3xl font-bold mb-6">
        Showing results for: <span className="text-yellow-600">{searchQuery}</span>
      </h1>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
          >
            {/* Product Image */}
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg"
            />

            {/* Product Details */}
            <h2 className="text-lg font-semibold mt-3">{product.name}</h2>
            <p className="text-xl font-bold text-green-600">{product.price}</p>

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
                    <span className="text-yellow-600 font-bold">{item.price}</span>
                    <span className="text-gray-500 text-sm">
                      ⭐ {item.rating}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-lg">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
