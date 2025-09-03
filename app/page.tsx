import CategoryPills from "@/components/CategoryPills";
import ProductCard from "@/components/ProductCard";

export default function HomePage() {
  const trendingProducts = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    name: `Trending Product ${i + 1}`,
    description: "This is a sample trending product",
    image: "/placeholder.png",
    rating: 4.5,
  }));

  const categories = [
    "Electronics",
    "Fashion",
    "Home",
    "Beauty",
    "Sports",
    "Books",
    "Toys",
    "Groceries",
    "Automotive",
    "Health",
  ];

  return (
    <main className="px-4 sm:px-6 lg:px-8 py-6">
      {/* Category Pills */}
      <section className="mb-8">
        <CategoryPills categories={categories} />
      </section>

      {/* Deal of the Day */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Deal of the Day</h2>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {trendingProducts.map((product) => (
            <div key={product.id} className="min-w-[250px]">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      {/* Category Wise Products */}
      {categories.map((category, idx) => (
        <section key={idx} className="mb-12">
          <h2 className="text-xl font-semibold mb-4">{category}</h2>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {Array.from({ length: 10 }, (_, i) => ({
              id: i + 1,
              name: `${category} Product ${i + 1}`,
              description: "Sample description",
              image: "/placeholder.png",
              rating: 4,
            })).map((product) => (
              <div key={product.id} className="min-w-[250px]">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
