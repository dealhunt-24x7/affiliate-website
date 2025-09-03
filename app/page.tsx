"use client";

import CategoryPills from "@/components/CategoryPills";
import HorizontalProductRow from "@/components/HorizontalProductRow";

const categories = [
  "Mobile",
  "Laptop",
  "Headphones",
  "Watches",
  "Electronic",
  "Fashion",
  "Men",
  "Women",
  "Kids",
  "Footwear",
  "Home appliance",
  "Sports",
  "Jwellery",
  "Kitchen",
  "Home decor",
  "Study",
  "Others",
];

function generateProducts(category: string) {
  return Array.from({ length: 25 }).map((_, idx) => ({
    id: idx + 1,
    name: `${category} Product ${idx + 1}`,
    description: `This is a sample ${category} product.`,
    image: "/placeholder.png",
  }));
}

export default function HomePage() {
  const dealOfTheDay = generateProducts("Deal of the Day");

  return (
    <div className="px-4">
      <section className="mb-8">
        <CategoryPills categories={categories} />
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-bold text-blue-600">Deal of the Day</h2>
        <HorizontalProductRow products={dealOfTheDay} />
      </section>

      {categories.map((cat, idx) => (
        <section key={idx} className="mb-8">
          <h2 className="mb-3 text-lg font-semibold text-gray-700">{cat}</h2>
          <HorizontalProductRow products={generateProducts(cat)} />
        </section>
      ))}
    </div>
  );
}
