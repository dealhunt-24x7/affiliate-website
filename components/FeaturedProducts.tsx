"use client";
import { useState } from "react";

const products = [
  { id: 1, title: "Omega Seamaster", price: "$2499", image: "/images/deals/deal1.jpg", blog: "Omega watches are timeless. Care tips & style advice..." },
  { id: 2, title: "Rolex Daytona", price: "$12999", image: "/images/deals/deal2.jpg", blog: "Rolex Daytona overview, maintenance, and styling guide..." },
  { id: 3, title: "Apple Watch Ultra", price: "$799", image: "/images/deals/deal3.jpg", blog: "Apple Watch Ultra tips, features, and usage guide..." },
  { id: 4, title: "Tag Heuer Carrera", price: "$3499", image: "/images/deals/deal4.jpg", blog: "Tag Heuer Carrera luxury guide, care tips & styling..." },
];

export default function FeaturedProducts() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Featured Products</h2>

        <div className="space-y-12">
          {products.map((prod, index) => (
            <div
              key={prod.id}
              className={`flex flex-col md:flex-row gap-6 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Product Card */}
              <div className="flex-1 bg-white rounded-xl shadow-lg overflow-hidden">
                <img
                  src={prod.image}
                  alt={prod.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{prod.title}</h3>
                  <p className="text-yellow-600 font-bold">{prod.price}</p>
                </div>
              </div>

              {/* Blog / Description */}
              <div className="flex-1 bg-white rounded-xl shadow p-4">
                <h4 className="font-semibold text-lg mb-2">About this product</h4>
                <p className="text-gray-600">
                  {expanded === prod.id
                    ? prod.blog
                    : prod.blog.slice(0, 70) + "..."}
                </p>
                <button
                  onClick={() => setExpanded(expanded === prod.id ? null : prod.id)}
                  className="text-yellow-500 font-medium mt-2 hover:underline"
                >
                  {expanded === prod.id ? "View Less" : "View More"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
