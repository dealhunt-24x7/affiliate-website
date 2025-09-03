import { getProductById } from "@/lib/products";
import { notFound } from "next/navigation";
import Image from "next/image";
import { SpecsTable } from "@/components/SpecsTable";

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(Number(params.id));
  if (!product) notFound();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <Image
        src={product.image || "/placeholder.png"}
        alt={product.name}
        width={600}
        height={400}
        className="rounded-md mb-4 w-full h-auto"
      />
      <p className="mb-4">{product.description}</p>
      <p className="mb-4 font-semibold">${product.price}</p>
      <a
        href={product.affiliateLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded"
      >
        Buy Now
      </a>
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-2">Specifications</h2>
        <SpecsTable specs={product.specs} />
      </div>
    </div>
  );
}
