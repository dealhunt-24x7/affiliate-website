import { getProductById } from "@/lib/products";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProductGallery } from "@/components/ProductGallery";
import { SpecsTable } from "@/components/SpecsTable";
import { formatCurrency, formatRating } from "@/lib/utils";

interface ProductPageProps {
  params: { id: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  const productId = parseInt(params.id, 10);
  const product = getProductById(productId);

  if (!product) {
    return notFound();
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <Breadcrumbs />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <ProductGallery images={[product.image]} />

        {/* Product Info */}
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>

          <p className="text-xl font-semibold text-blue-600 mb-2">
            {formatCurrency(product.price)}
          </p>
          <p className="mb-4">{formatRating(product.rating)}</p>

          <a
            href={product.affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Buy Now
          </a>
        </div>
      </div>

      {/* Specifications */}
      {product.specs && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Specifications</h2>
          <SpecsTable specs={product.specs} />
        </div>
      )}
    </main>
  );
}
