const categories = ["Electronics", "Books", "Fashion", "Home", "Sports"];

export function CategoryPills() {
  return (
    <div className="flex space-x-2 mb-4">
      {categories.map((category) => (
        <button
          key={category}
          className="bg-gray-200 rounded-full px-4 py-2 hover:bg-gray-300 transition"
        >
          {category}
        </button>
      ))}
    </div>
  );
}
