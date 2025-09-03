import SearchBar from "@/components/SearchBar";
import FiltersSidebar from "@/components/FiltersSidebar";
import SortBar from "@/components/SortBar";
import ProductCard from "@/components/ProductCard";

const products = [
  { name: "Laptop", description: "Powerful gaming laptop", image: "/images/laptop.jpg", rating: 5 },
  { name: "Headphones", description: "Noise-cancelling", image: "/images/headphones.jpg", rating: 4 },
  { name: "Wrist Watch", description: "Stylish and modern", image: "/images/watch.jpg", rating: 5 },
];

export default function ProductsPage() {
  return (
    <main className="p-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Sidebar */}
      <FiltersSidebar filters={["Under ₹1000", "Brand A", "Brand B"]} />

      {/* Products Section */}
      <div className="lg:col-span-3">
        <div className="flex flex-col gap-4">
          <SearchBar />
          <SortBar />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
          {products.map((p, idx) => (
            <ProductCard key={idx} name={p.name} description={p.description} image={p.image} rating={p.rating} />
          ))}
        </div>
      </div>
    </main>
  );
}
