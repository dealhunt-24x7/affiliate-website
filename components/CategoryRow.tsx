"use client";

type Category = {
  name: string;
  image: string;
};

type Props = { category: Category };

export default function CategoryRow({ category }: Props) {
  // Sirf 25 placeholders generate kar rahe hain
  const placeholders = Array.from({ length: 25 });

  return (
    <section className="mb-10">
      {/* Category Heading */}
      <div className="flex items-center gap-3 mb-3">
        <img
          src={category.image}
          alt={category.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <h2 className="text-lg font-bold text-red-600">{category.name}</h2>
      </div>

      {/* Placeholder Grid */}
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {placeholders.map((_, i) => (
          <div
            key={i}
            className="min-w-[160px] sm:min-w-[200px] h-[220px] bg-white rounded-lg shadow flex items-center justify-center"
          >
            <button className="px-4 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500 transition">
              View Deal
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
