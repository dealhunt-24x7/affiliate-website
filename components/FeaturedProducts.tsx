"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const luxuryProducts = [
  { id: 1, title: "Omega Seamaster", price: "$2499", store: "Amazon", image: "/images/deals/deal1.jpg" },
  { id: 2, title: "Rolex Daytona", price: "$12999", store: "Flipkart", image: "/images/deals/deal2.jpg" },
  { id: 3, title: "Tag Heuer Carrera", price: "$3499", store: "TataCliq", image: "/images/deals/deal4.jpg" },
  { id: 4, title: "Apple Watch Ultra", price: "$799", store: "Amazon", image: "/images/deals/deal3.jpg" },
];

const generalProducts = [
  { id: 1, title: "Samsung Earbuds", price: "$99", store: "Amazon", image: "/images/general/item1.jpg" },
  { id: 2, title: "Nike Air Sneakers", price: "$149", store: "Flipkart", image: "/images/general/item2.jpg" },
  { id: 3, title: "Philips Hair Dryer", price: "$49", store: "Amazon", image: "/images/general/item3.jpg" },
  { id: 4, title: "Fastrack Smartwatch", price: "$79", store: "TataCliq", image: "/images/general/item4.jpg" },
];

export default function FeaturedProducts() {
  const [mode, setMode] = useState<"luxury" | "general">("luxury");
  const [visible, setVisible] = useState(4);
  const [allProducts, setAllProducts] = useState(luxuryProducts);

  useEffect(() => {
    setAllProducts(mode === "luxury" ? luxuryProducts : generalProducts);
    setVisible(4);
  }, [mode]);

  const loadMore = () => {
    setVisible((prev) => prev + 4);
  };

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Featured Products</h2>

          <div className="flex gap-2">
            <button
              onClick={() => setMode("luxury")}
              className={`px-4 py-2 rounded-full font-medium ${
                mode === "luxury"
                  ? "bg-yellow-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              Luxury
            </button>
            <button
              onClick={() => setMode("general")}
              className={`px-4 py-2 rounded-full font-medium ${
                mode === "general"
                  ? "bg-yellow-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              General
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {allProducts.slice(0, visible).map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 truncate">
                  {product.title}
                </h3>
                <p className="text-yellow-600 font-bold">{product.price}</p>
                <p className="text-sm text-gray-500">via {product.store}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {visible < allProducts.length && (
          <div className="text-center mt-8">
            <button
              onClick={loadMore}
              className="px-6 py-2 bg-yellow-500 text-white rounded-full font-semibold hover:bg-yellow-600 transition"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
