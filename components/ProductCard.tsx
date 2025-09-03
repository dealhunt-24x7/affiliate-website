import Link from "next/link";
import { Product } from "@/lib/types";
import { formatCurrency, formatRating } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded-lg shadow hover:shadow-lg transition p-4">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p className="text-gray-600">{formatCurrency(product.price)}</p>
      <p className="text-sm text-yellow-600">{formatRating(product.rating)}</p>
      <Link href={`/products/${product.id}`} className="text-blue-600 hover:underline mt-2 block">
        View Details →
      </Link>
    </div>
  );
}
