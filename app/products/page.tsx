import { getProducts } from "@/lib/products";
import SearchBar from "@/components/SearchBar";
import CategoryPills from "@/components/CategoryPills";
import FiltersSidebar from "@/components/FiltersSidebar";
import SortBar from "@/components/SortBar";
import ProductCard from "@/components/ProductCard";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="container mx-auto p-4">
      <SearchBar />
      <CategoryPills />
      <FiltersSidebar />
      <SortBar />

      <section className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">All Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
