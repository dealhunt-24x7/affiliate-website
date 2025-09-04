import { getProducts } from "@/lib/products";
import CategoryPills from "@/components/CategoryPills";
import FiltersSidebar from "@/components/FiltersSidebar";
import SortBar from "@/components/SortBar";
import SearchBar from "@/components/SearchBar";
import ProductCard from "@/components/ProductCard";

export default async function ProductsPage() {
  const products: any[] = await getProducts();
  const categories = [
    "Mobile","Laptop","Headphones","Watches","Electronic","Fashion","Men","Women","Kids",
    "Footwear","Home appliance","Sports","Jwellery","Kitchen","Home decor","Study","Others"
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="mb-6">
        <SearchBar />
      </div>

      <div className="mb-8">
        <CategoryPills categories={categories} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6">
        <FiltersSidebar />
        <div>
          <SortBar />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
            {products.map((p: any, idx: number) => (
              <ProductCard key={p.id ?? idx} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
