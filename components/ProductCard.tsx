import Link from "next/link";
import { Star } from "lucide-react";
import { Product } from "@/lib/types";

export default function ProductCard({ product }: { product: Product }) {
  const ratingStars = Array.from({ length: 5 }).map((_, i) => i < Math.round(product.rating));

  return (
    <div className="w-56 shrink-0 rounded-xl border bg-white shadow-sm hover:shadow-md">
      <img
        src={product.images[0] || "/images/sample-1.jpg"}
        alt={product.name}
        className="h-40 w-full rounded-t-xl object-cover"
      />
      <div className="p-3">
        <div className="line-clamp-2 text-sm font-medium">{product.name}</div>
        <div className="mt-1 flex items-center gap-1">
          {ratingStars.map((filled, i) => (
            <Star key={i} size={14} className={filled ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} />
          ))}
          <span className="ml-1 text-xs text-gray-500">({product.reviewsCount})</span>
        </div>
        <div className="mt-3">
          <Link
            href={`/compare?ids=${product.id}`}
            className="inline-flex w-full items-center justify-center rounded-md border px-3 py-1.5 text-sm hover:bg-gray-50"
          >
            Compare
          </Link>
        </div>
      </div>
    </div>
  );
}
