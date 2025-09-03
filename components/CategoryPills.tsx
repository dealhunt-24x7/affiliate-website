"use client";

type CategoryPillsProps = {
  categories: string[];
};

const CategoryPills = ({ categories }: CategoryPillsProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat, idx) => (
        <span
          key={idx}
          className="cursor-pointer rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-200"
        >
          {cat}
        </span>
      ))}
    </div>
  );
};

export default CategoryPills;
