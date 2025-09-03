export function SortBar() {
  return (
    <div className="flex justify-end mb-4">
      <select className="border border-gray-300 rounded-md p-2">
        <option value="relevance">Sort by Relevance</option>
        <option value="priceLow">Price: Low to High</option>
        <option value="priceHigh">Price: High to Low</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
}
