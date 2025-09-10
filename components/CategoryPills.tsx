"use client";

interface CategoryPillsProps {
  categories: { name: string; slug: string }[];
}

export default function CategoryPills({ categories }: CategoryPillsProps) {
  const handleScrollToCategory = (slug: string) => {
    const target = document.getElementById(slug);
    if (target) {
      const header = document.querySelector("header");
      const headerHeight = header ? header.getBoundingClientRect().height : 0;
      const pills = document.querySelector(".category-pills"); // sticky pills height
      const pillsHeight = pills ? pills.getBoundingClientRect().height : 0;

      const top = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: top - headerHeight - pillsHeight - 10, // ✅ perfect offset
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="category-pills sticky top-[var(--header-height)] z-40 bg-white shadow-sm overflow-x-auto">
      <div className="flex space-x-3 px-4 py-2">
        {categories.map((c) => (
          <button
            key={c.slug}
            onClick={() => handleScrollToCategory(c.slug)}
            className="px-3 py-1 text-sm rounded-full bg-gray-100 hover:bg-gray-200 whitespace-nowrap"
          >
            {c.name}
          </button>
        ))}
      </div>
    </div>
  );
}
