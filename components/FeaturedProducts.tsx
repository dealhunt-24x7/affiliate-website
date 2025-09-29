"use client";

import Link from "next/link";
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
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Featured Products</h2>

          {/* ✅ Redirect to your existing products page */}
          <Link
            href="/products"
            className="text-yellow-500 font-semibold hover:underline"
          >
            View More Products
          </Link>
        </div>

        <div className="space-y-8">
          {products.slice(0, 2).map((prod, index) => (
            <div
              key={prod.id}
              className={`flex flex-col md:flex-row gap-6 items-stretch ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              } bg-white rounded-xl shadow-lg overflow-hidden`}
            >
              <div className="flex-1">
                <img
                  src={prod.image}
                  alt={prod.title}
                  className="w-full h-56 object-cover md:h-full"
                />
              </div>

              <div className="flex-1 flex flex-col justify-between p-4">
                <div>
                  <h3 className="text-lg font-semibold">{prod.title}</h3>
                  <p className="text-yellow-600 font-bold">{prod.price}</p>
                  <p className="text-gray-600 mt-2">
                    {expanded === prod.id
                      ? prod.blog
                      : prod.blog.slice(0, 70) + "..."}
                  </p>
                </div>

                <button
                  onClick={() =>
                    setExpanded(expanded === prod.id ? null : prod.id)
                  }
                  className="text-yellow-500 font-medium mt-3 hover:underline self-start"
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
