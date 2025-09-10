"use client";

interface Category {
  name: string;
  slug: string;
  image: string;
}

interface Props {
  categories: Category[];
}

export default function CategoryPills({ categories }: Props) {
  const scrollToCategory = (id: string) => {
    const el = document.getElementById(id);
    const header = document.querySelector("header");
    if (el) {
      const headerHeight = header ? header.clientHeight : 0;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight - 10;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="overflow-x-auto bg-black scrollbar-hide">
      <div className="flex gap-3 px-4 py-1.5">
        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => scrollToCategory(cat.slug)}
            className="flex flex-col items-center min-w-[65px] cursor-pointer text-white"
          >
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mb-1 overflow-hidden">
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
            </div>
            <span className="text-[11px] whitespace-nowrap">{cat.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
