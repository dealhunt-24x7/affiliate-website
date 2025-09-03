export function FiltersSidebar() {
  return (
    <aside className="w-64 p-4 border-r border-gray-300">
      <h2 className="text-lg font-bold mb-4">Filters</h2>
      <div>
        <h3 className="font-semibold">Category</h3>
        <ul>
          <li>
            <input type="checkbox" id="electronics" />
            <label htmlFor="electronics"> Electronics</label>
          </li>
          <li>
            <input type="checkbox" id="books" />
            <label htmlFor="books"> Books</label>
          </li>
          <li>
            <input type="checkbox" id="fashion" />
            <label htmlFor="fashion"> Fashion</label>
          </li>
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold">Price Range</h3>
        <input type="range" min="0" max="1000" className="w-full" />
      </div>
    </aside>
  );
}
