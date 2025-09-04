import Image from "next/image";
import React from "react";

type BaseProduct = {
  id?: number;
  name?: string;
  description?: string;
  image?: string;
  rating?: number;
  price?: number;
};

export type ProductCardProps = BaseProduct & { product?: BaseProduct };

export default function ProductCard(props: ProductCardProps) {
  const data: BaseProduct =
    props.product ?? {
      id: props.id,
      name: props.name,
      description: props.description,
      image: props.image,
      rating: props.rating,
      price: props.price,
    };

  const name = data.name ?? "Product";
  const description = data.description ?? "";
  const image = data.image ?? "/placeholder.png";

  return (
    <div className="min-w-[180px] w-48 border rounded-xl p-3 bg-white shadow-sm">
      <div className="relative w-full h-28 rounded-lg overflow-hidden mb-2 bg-gray-100">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <h3 className="text-sm font-semibold line-clamp-2">{name}</h3>
      {description && (
        <p className="text-xs text-gray-500 mt-1 line-clamp-2">{description}</p>
      )}
      <button className="mt-3 w-full rounded-lg border px-3 py-1.5 text-sm font-medium hover:bg-gray-50">
        Compare
      </button>
    </div>
  );
}
