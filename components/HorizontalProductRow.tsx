"use client";
import React from "react";
import ProductCard from "./ProductCard";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  rating: number;
}

interface HorizontalProductRowProps {
  title: string;
  products: Product[];
}

const HorizontalProductRow: React.FC<HorizontalProductRowProps> = ({
  title,
  products,
}) => {
  return (
    <section className="mb-8">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <div className="no-scrollbar flex gap-3 overflow-x-auto px-3">
        {products.slice(0, 25).map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
    </section>
  );
};

export default HorizontalProductRow;
