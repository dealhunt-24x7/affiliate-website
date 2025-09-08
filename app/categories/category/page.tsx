export const dynamic = "force-dynamic";

import { notFound } from "next/navigation";
import { getProducts } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function CategoryPage({ params }: { params: { category: string } }) {
  const products = getProducts().filter((p) =>
    p.slug.toLowerCase().includes(params.category.toLowerCase())
  );

  if (products.length === 0) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold mb-4">No products found</h1>
        <p>We couldn’t find products for "{params.category}".</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 capitalize">{params.category}</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
