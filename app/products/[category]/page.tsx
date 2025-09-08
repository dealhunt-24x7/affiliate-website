
"use client";

import Link from "next/link";

const subcategories = Array.from({ length: 25 }).map((_, i) => ({
  name: `Subcategory ${i + 1}`,
  slug: `subcategory-${i + 1}`,
}));

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4 capitalize">
        {params.category} - Choose a Subcategory
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {subcategories.map((sub) => (
          <Link
            key={sub.slug}
            href={`/products/${params.category}/${sub.slug}`}
            className="border rounded-lg p-4 flex items-center justify-center text-sm font-medium hover:bg-gray-50"
          >
            {sub.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
