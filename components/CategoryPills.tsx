"use client";

import { useEffect, useState } from "react";

interface CategoryPillsProps {
  categories: { name: string; slug: string }[];
}

export default function CategoryPills({ categories }: CategoryPillsProps) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const calculateOffset = () => {
      const header = document.querySelector("header");
      const pillsBar = document.querySelector(".category-pills");
      const headerHeight = header ? header.getBoundingClientRect().height : 0;
      const pillsHeight = pillsBar ? pillsBar.getBoundingClientRect().height : 0;
      setOffset(headerHeight + pillsHeight);
    };

    calculateOffset();
    window.addEventListener("resize", calculateOffset);
    return () => window.removeEventListener("resize", calculateOffset);
  }, []);

  const handleScrollToCategory = (slug: string) => {
    const target = document.getElementById(slug);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: top - offset - 8, // ✅ now dynamic, will work even if header height changes
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="category-pills sticky top-[var(--header-height,0px)] z-40 bg-white shadow-sm overflow-x-auto">
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
