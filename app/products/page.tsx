import { getProducts } from "@/lib/products";
import { SearchBar } from "@/components/SearchBar";
import CategoryPills from "@/components/CategoryPills";
import { FiltersSidebar } from "@/components/FiltersSidebar";
import { SortBar } from "@/components/SortBar";
import ProductCard from "@/components/ProductCard";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="p-4 md:p-6 lg:p-8">
      {/* Search bar */}
      <div className="mb-4">
        <SearchBar />
      </div>

      {/* Categories + Filters */}
      <div className="flex flex-col md:flex-row md:gap-6">
        {/* Sidebar (filters) */}
        <aside className="w-full md:w-64 mb-4 md:mb-0">
          <FiltersSidebar />
        </aside>

        {/* Main content */}
        <section className="flex-1">
          {/* Category Pills */}
          <CategoryPills />

          {/* Sort bar */}
          <div className="my-4">
            <SortBar />
          </div>

          {/* Products grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
