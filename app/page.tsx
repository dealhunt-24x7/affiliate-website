import CategoryPills from "@/components/CategoryPills";
import ProductCard from "@/components/ProductCard";

const sampleProducts = [
  {
    name: "iPhone 15",
    description: "Latest Apple smartphone with A16 chip",
    image: "https://via.placeholder.com/400x300",
    rating: 5,
  },
  {
    name: "Samsung Galaxy S23",
    description: "High-end Android flagship with powerful performance",
    image: "https://via.placeholder.com/400x300",
    rating: 4,
  },
  {
    name: "Dell XPS 15",
    description: "Premium laptop with sleek design",
    image: "https://via.placeholder.com/400x300",
    rating: 5,
  },
  {
    name: "Nike Air Max",
    description: "Stylish and comfortable sneakers",
    image: "https://via.placeholder.com/400x300",
    rating: 4,
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Category Pills */}
      <CategoryPills />

      {/* Deal of the Day / Hero Section */}
      <section className="px-4 py-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center">
        <h1 className="text-2xl md:text-4xl font-bold">Deal of the Day</h1>
        <p className="mt-2 text-sm md:text-base">
          Grab the best offers before they expire!
        </p>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-xl font-semibold mb-4">Trending Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {sampleProducts.map((product, idx) => (
            <ProductCard
              key={idx}
              name={product.name}
              description={product.description}
              image={product.image}
              rating={product.rating}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
