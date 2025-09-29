"use client";
import { useState, useEffect } from "react";

interface WishlistItem {
  id: number;
  title: string;
  price: string;
  link: string;
}

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("affiliateWishlist");
    if (saved) setWishlist(JSON.parse(saved));
  }, []);

  const removeItem = (id: number) => {
    const newList = wishlist.filter((item) => item.id !== id);
    setWishlist(newList);
    localStorage.setItem("affiliateWishlist", JSON.stringify(newList));
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>

      {wishlist.length === 0 ? (
        <p className="text-gray-600">No items in wishlist.</p>
      ) : (
        <div className="space-y-4">
          {wishlist.map((item) => (
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
