import CategoryRow from "@/components/CategoryRow";

const categories = [
  { name: "Mobile", image: "/images/categories/mobile.png" },
  { name: "Laptop", image: "/images/categories/laptop.png" },
  { name: "Headphones", image: "/images/categories/headphones.png" },
  { name: "Watches", image: "/images/categories/watch.png" },
  { name: "Electronics", image: "/images/categories/electronics.png" },
  { name: "Men", image: "/images/categories/men.png" },
  { name: "Women", image: "/images/categories/women.png" },
  { name: "Kids", image: "/images/categories/kids.png" },
  { name: "Fashion", image: "/images/categories/fashion.png" },
  { name: "Footwear", image: "/images/categories/footwear.png" },
  { name: "Home appliances", image: "/images/categories/home-appliances.png" },
  { name: "Sports", image: "/images/categories/sports.png" },
  { name: "Jwellery", image: "/images/categories/jwellery.png" },
  { name: "Kitchen", image: "/images/categories/kitchen.png" },
  { name: "Home decor", image: "/images/categories/home-decor.png" },
  { name: "Study", image: "/images/categories/study.png" },
  { name: "Others", image: "/images/categories/others.png" },
];

export default function ProductsPage() {
  return (
    <div className="p-4">
      {categories.map((cat, idx) => (
        <CategoryRow key={idx} category={cat} />
      ))}
    </div>
  );
}
