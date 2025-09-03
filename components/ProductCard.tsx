"use client";

type Product = {
  id?: number | string;
  name: string;
  description?: string;
  image: string;
  rating?: number;
  price?: number;
};

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="rounded-lg border p-3 bg-white shadow-sm hover:shadow-md transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="mt-2 text-sm font-semibold line-clamp-1">{product.name}</h3>
      {product.description ? (
        <p className="text-xs text-gray-600 line-clamp-2">{product.description}</p>
      ) : null}
      <button className="mt-3 w-full rounded-md bg-blue-600 text-white text-sm py-2">
        Compare
      </button>
    </div>
  );
}
