import CategoryPills from "@/components/CategoryPills";
import ProductCard from "@/components/ProductCard";

const categories = ["Electronics", "Fashion", "Home", "Sports", "Books"];

const featuredProducts = [
  { name: "Smartphone", description: "Latest 5G phone", image: "/images/phone.jpg", rating: 5 },
  { name: "Running Shoes", description: "Comfortable & durable", image: "/images/shoes.jpg", rating: 4 },
];

export default function HomePage() {
  return (
    <main className="p-6">
      {/* Category Pills */}
      <section className="mb-8">
        <CategoryPills categories={categories} />
      </section>

      {/* Featured Products */}
      <section>
        <h2 className="text-xl font-bold mb-4">Featured Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {featuredProducts.map((p, idx) => (
            <ProductCard key={idx} name={p.name} description={p.description} image={p.image} rating={p.rating} />
          ))}
        </div>
      </section>
    </main>
  );
}
