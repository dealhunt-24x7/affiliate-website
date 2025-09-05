export const dynamic = "force-dynamic";

import { getProducts } from "@/lib/products";
import { CompareTable } from "@/components/CompareTable";

export default function ComparisonPage() {
  const products = getProducts().slice(0, 3); // Example: show first 3 products

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Compare Products</h1>
      <CompareTable products={products} />
    </main>
  );
}
