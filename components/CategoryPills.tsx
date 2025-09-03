"use client";

const categories = [
  "Mobiles",
  "Laptops",
  "Fashion",
  "Home Appliances",
  "Beauty",
  "Sports",
  "Books",
  "Toys",
  "Furniture",
  "Groceries",
  "Cameras",
  "Watches",
  "Shoes",
  "Gaming",
  "Accessories",
];

export default function CategoryPills() {
  return (
    <div className="overflow-x-auto whitespace-nowrap px-4 py-3 bg-gray-50 border-b">
      <div className="flex space-x-3">
        {categories.map((cat, i) => (
          <button
            key={i}
            className="px-4 py-2 text-sm rounded-full bg-white border hover:bg-blue-100 transition"
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
