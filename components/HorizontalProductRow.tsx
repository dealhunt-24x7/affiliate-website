import ProductCard from "@/components/ProductCard";
import { Product } from "@/lib/types";

export default function HorizontalProductRow({ title, products }: { title: string; products: Product[] }) {
  return (
    <section className="my-6">
      <div className="mb-2 px-3 text-lg font-semibold">{title}</div>
      <div className="no-scrollbar flex gap-3 overflow-x-auto px-3">
        {products.slice(0, 25).map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
