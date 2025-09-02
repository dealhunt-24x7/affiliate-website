import { getProducts } from "@/lib/products";
import { SearchBar } from "@/components/SearchBar";
import { CategoryPills } from "@/components/CategoryPills";
import { FiltersSidebar } from "@/components/FiltersSidebar";
import { SortBar } from "@/components/SortBar";
import { ProductCard } from "@/components/ProductCard";

export default function ProductsPage() {
  const products = getProducts();

  return (
    <main className="container mx-auto px-4 py-8 flex gap-6">
      {/* Sidebar */}
      <FiltersSidebar />

      {/* Main content */}
      <div className="flex-1">
        <SearchBar />
        <CategoryPills />
        <SortBar />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
