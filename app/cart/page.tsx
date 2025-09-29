"use client";
import { useState, useEffect } from "react";

interface CartItem {
  id: number;
  title: string;
  price: string;
  link: string;
}

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("affiliateCart");
    if (saved) setCart(JSON.parse(saved));
  }, []);

  const removeItem = (id: number) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
    localStorage.setItem("affiliateCart", JSON.stringify(newCart));
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">No items in cart.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-white p-4 rounded-lg shadow"
            >
              <div>
                <h2 className="font-semibold">{item.title}</h2>
                <p className="text-yellow-600 font-bold">{item.price}</p>
              </div>
              <div className="flex gap-2">
                <a
                  href={item.link}
                  target="_blank"
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                >
                  Go to Deal
                </a>
                <button
                  onClick={() => removeItem(item.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
