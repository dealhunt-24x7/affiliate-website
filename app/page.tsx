export const dynamic = "force-dynamic";

import DealOfTheDay from "@/components/DealOfTheDay";
import CategoryRow from "@/components/CategoryRow";
import BlogHighlights from "@/components/BlogHighlights";
import FloatingButton from "@/components/FloatingButton";

const CATEGORIES = [
  "Mobile",
  "Laptop",
  "Headphones",
  "Watches",
  "Electronics",
  "Men",
  "Women",
  "Kids",
  "Fashion",
  "Footwear",
  "Home appliances",
  "Sports",
  "Jwellery",
  "Kitchen",
  "Home decor",
  "Study",
  "Others",
];

export default function HomePage() {
  return (
    <main className="px-4 md:px-8 py-6 bg-gray-50">
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Deal of the Day</h2>
        <DealOfTheDay />
      </section>

      {CATEGORIES.map((c) => (
        <CategoryRow key={c} category={c} />
      ))}

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">From Our Blog</h2>
        <BlogHighlights />
      </section>

      <FloatingButton />
    </main>
  );
}
