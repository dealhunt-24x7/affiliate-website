"use client";
const categories = [
  "Mobiles", "Laptops", "Fashion", "Home", "Electronics",
  "Beauty", "Sports", "Toys", "Books", "Grocery",
];

export default function ShopByCategory() {
  return (
    <div className="flex gap-4 overflow-x-auto px-4 pb-3 no-scrollbar">
      {categories.map((cat) => (
        <div key={cat} className="flex flex-col items-center min-w-[60px]">
          <div className="w-14 h-14 rounded-full bg-white shadow-md" />
          <span className="text-xs mt-1">{cat}</span>
        </div>
      ))}
    </div>
  );
}
