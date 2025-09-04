"use client";
import ProductCard from "./ProductCard";

interface Props {
  title: string;
}

export default function HorizontalProductRow({ title }: Props) {
  const products = Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    name: `${title} Product ${i + 1}`,
    description: "High quality placeholder",
    image: "/placeholder.png",
  }));

  return (
    <section className="p-4">
      <h2 className="text-xl font-bold mb-3">{title}</h2>
      <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            name={p.name}
            description={p.description}
            image={p.image}
          />
        ))}
      </div>
    </section>
  );
}
