import CategoryPills from "@/components/CategoryPills";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/products";

export default async function HomePage() {
  const products: any[] = await getProducts();
  const categories = [
    "Mobile","Laptop","Headphones","Watches","Electronic","Fashion","Men","Women","Kids",
    "Footwear","Home appliance","Sports","Jwellery","Kitchen","Home decor","Study","Others"
  ];

  return (
    <div className="container mx-auto p-4">
      <section className="mb-8">
        <CategoryPills categories={categories} />
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-3">Deal of the Day</h2>
        <div className="no-scrollbar flex gap-3 overflow-x-auto px-1">
          {products.slice(0, 10).map((p: any, idx: number) => (
            <div key={p.id ?? idx} className="min-w-[220px]">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-3">All Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((p: any, idx: number) => (
            <ProductCard key={p.id ?? idx} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
