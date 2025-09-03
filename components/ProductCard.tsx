import Image from "next/image";

export interface Product {
  id: number;
  name: string;
  description?: string;
  image: string;
  price?: number;
  rating?: number;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={200}
        className="w-full h-40 object-cover rounded-md mb-3"
      />
      <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
      {product.description && (
        <p className="text-sm text-gray-500 mb-2">{product.description}</p>
      )}
      {product.price && (
        <p className="text-primary font-bold mb-2">₹{product.price}</p>
      )}
      {product.rating && (
        <p className="text-yellow-500">⭐ {product.rating}/5</p>
      )}
      <button className="mt-2 bg-blue-600 text-white px-3 py-1 rounded-lg">
        Compare
      </button>
    </div>
  );
}
