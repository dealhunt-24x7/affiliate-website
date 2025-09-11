"use client";

import Link from "next/link";

type Category = {
  name: string;
  image: string;
  slug: string;
  subcategories?: string[];
};

type Props = { category: Category };

export default function CategoryRow({ category }: Props) {
  const subcategories = category.subcategories || [];

  return (
    <section className="mb-10">
      {/* ✅ Category Heading */}
      <div className="flex items-center gap-3 mb-3">
        <img
          src={category.image}
          alt={category.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <h2 className="text-lg font-bold text-red-600">{category.name}</h2>
      </div>

      {/* ✅ Subcategories Row */}
      {subcategories.length > 0 ? (
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {subcategories.map((sub, i) => (
            <Link
              key={i}
              href={`/category/${category.slug}?sub=${encodeURIComponent(sub)}`}
              className="min-w-[150px] sm:min-w-[180px] bg-white rounded-xl shadow-md px-3 py-2 text-center text-sm font-medium hover:bg-yellow-100 transition whitespace-nowrap"
            >
              {sub}
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-sm italic">No subcategories found</p>
      )}
    </section>
  );
}
