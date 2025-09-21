
"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-3 flex flex-col">
      <Link href={`/products/${product.id}`} className="flex flex-col h-full">
        {/* Product Image */}
        <div className="relative w-full h-40 sm:h-48 mb-3">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain rounded-xl"
            sizes="(max-width: 768px) 100vw, 200px"
            priority={false}
          />
        </div>

        {/* Product Info */}
        <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-lg font-bold text-red-600 mt-1">
          ${product.price.toFixed(2)}
        </p>

        {/* Buy Button */}
        <button className="mt-auto bg-red-600 text-white rounded-xl py-2 px-3 text-sm hover:bg-red-700">
          View Deal
        </button>
      </Link>
    </div>
  );
}
