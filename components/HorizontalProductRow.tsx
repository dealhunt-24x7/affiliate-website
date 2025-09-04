"use client";

import ProductCard from "@/components/ProductCard";

type Product = {
  id?: number | string;
  name: string;
  image: string;
  description?: string;
  rating?: number;
  price?: number;
};

type Props = {
  title: string;
  products: Product[];
};

export default function HorizontalProductRow({ title, products }: Props) {
  return (
    <section className="mb-8">
      <h3 className="text-base font-semibold mb-3">{title}</h3>
      <div className="no-scrollbar flex gap-3 overflow-x-auto px-1">
        {products.slice(0, 25).map((p, idx) => (
          <div key={p.id ?? idx} className="min-w-[220px]">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </section>
  );
}
