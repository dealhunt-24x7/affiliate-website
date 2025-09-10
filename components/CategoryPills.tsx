"use client";

interface CategoryPillsProps {
  onCategorySelect: (slug: string) => void;
}

export default function CategoryPills({ onCategorySelect }: CategoryPillsProps) {
  const categories = [
    { name: "Mobiles", slug: "mobile", image: "/images/categories/mobile.png" },
    { name: "Laptops", slug: "laptop", image: "/images/categories/laptop.png" },
    { name: "Headphones", slug: "headphones", image: "/images/categories/headphones.png" },
    { name: "Watches", slug: "watches", image: "/images/categories/watch.png" },
    { name: "Electronics", slug: "electronics", image: "/images/categories/electronics.png" },
    { name: "Men", slug: "men", image: "/images/categories/men.png" },
    { name: "Women", slug: "women", image: "/images/categories/women.png" },
    { name: "Kids", slug: "kids", image: "/images/categories/kids.png" },
    { name: "Fashion", slug: "fashion", image: "/images/categories/fashion.png" },
    { name: "Footwear", slug: "footwear", image: "/images/categories/footwear.png" },
    { name: "Home appliances", slug: "home-appliances", image: "/images/categories/home-appliances.png" },
    { name: "Sports", slug: "sports", image: "/images/categories/sports.png" },
    { name: "Jwellery", slug: "jwellery", image: "/images/categories/jwellery.png" },
    { name: "Kitchen", slug: "kitchen", image: "/images/categories/kitchen.png" },
    { name: "Home decor", slug: "home-decor", image: "/images/categories/home-decor.png" },
    { name: "Study", slug: "study", image: "/images/categories/study.png" },
    { name: "Others", slug: "others", image: "/images/categories/others.png" },
  ];

  return (
    <div className="overflow-x-auto bg-black scrollbar-hide">
      <div className="flex gap-3 px-4 py-1.5">
        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => onCategorySelect(cat.slug)}
            className="flex flex-col items-center min-w-[65px] cursor-pointer text-white"
          >
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mb-1 overflow-hidden">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-[11px] whitespace-nowrap">{cat.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
