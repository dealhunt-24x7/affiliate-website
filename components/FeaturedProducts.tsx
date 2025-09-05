import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/products";

export default function FeaturedProducts() {
  const products = getProducts().slice(0, 4); // Example: first 4 products

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
