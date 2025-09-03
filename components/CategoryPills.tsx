"use client";

const categories = [
  "Mobiles",
  "Laptops",
  "TVs",
  "Headphones",
  "Cameras",
  "Watches",
  "Appliances",
  "Fashion",
  "Beauty",
  "Toys",
  "Gaming",
  "Grocery",
  "Books",
  "Fitness",
  "Furniture",
];

export default function CategoryPills() {
  return (
    <div className="no-scrollbar flex gap-2 overflow-x-auto px-3 py-2">
      {categories.map((c) => (
        <button
          key={c}
          className="whitespace-nowrap rounded-full border px-4 py-2 text-sm hover:bg-gray-50"
        >
          {c}
        </button>
      ))}
    </div>
  );
}
