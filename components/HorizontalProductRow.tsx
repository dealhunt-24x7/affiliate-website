"use client";
import ProductCard from "./ProductCard";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

const products: Product[] = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  description: `This is product ${i + 1}`,
  image: "https://via.placeholder.com/150",
}));

export default function HorizontalProductRow({ title }: { title: string }) {
  return (
    <section className="my-6">
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            id={p.id}
            name={p.name}
            description={p.description}
            image={p.image}
          />
        ))}
      </div>
    </section>
  );
}
