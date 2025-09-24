"use client";
import { useState } from "react";

// Sample products + related blogs
const products = [
  {
    id: 1,
    title: "Rolex Daytona",
    price: "$12,999",
    image: "/images/deals/deal2.jpg",
    blog: {
      title: "How to Care for Your Rolex",
      points: [
        "Avoid exposure to water unless waterproof.",
        "Regularly clean with soft cloth.",
        "Store in a safe, dry place.",
        "Check authenticity periodically.",
        "Regular servicing recommended.",
      ],
    },
  },
  {
    id: 2,
    title: "Omega Seamaster",
    price: "$2,499",
    image: "/images/deals/deal1.jpg",
    blog: {
      title: "Top Tips for Omega Watches",
      points: [
        "Keep away from magnetic fields.",
        "Clean with a microfiber cloth.",
        "Avoid extreme temperatures.",
        "Use original Omega straps.",
        "Regularly check water resistance.",
      ],
    },
  },
  // Add more products...
];

export default function FeaturedProducts() {
  const [visible, setVisible] = useState(2);

  return (
    <section className="py-12 bg-gray-50">
      <div className="flex justify-between items-center px-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Featured Products</h2>
        <button className="text-yellow-500 font-semibold hover:underline">
          View More Deals
        </button>
      </div>

      <div className="flex flex-col gap-8 px-6">
        {products.slice(0, visible).map((prod) => (
          <div
            key={prod.id}
            className="flex flex-col md:flex-row gap-6 items-start bg-white rounded-xl shadow p-4"
          >
            {/* Product */}
            <div className="w-full md:w-1/2">
              <img
                src={prod.image}
                alt={prod.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              <h3 className="text-lg font-semibold mt-3">{prod.title}</h3>
              <p className="text-yellow-600 font-bold">{prod.price}</p>
            </div>

            {/* Related Blog */}
            <div className="w-full md:w-1/2 bg-gray-100 rounded-lg p-4">
              <h4 className="font-semibold text-gray-700 mb-2">{prod.blog.title}</h4>
              <ul className="list-disc list-inside text-gray-600">
                {prod.blog.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        {visible < products.length && (
          <button
            className="mt-4 bg-yellow-500 text-black font-semibold px-6 py-2 rounded hover:bg-yellow-400 transition"
            onClick={() => setVisible((prev) => prev + 2)}
          >
            See More
          </button>
        )}
      </div>
    </section>
  );
}
