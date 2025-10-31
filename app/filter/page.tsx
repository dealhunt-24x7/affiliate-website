export default function FilterPage() {
  return (
    <main className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-yellow-600">Filters</h1>
      <p className="mt-4 text-gray-600">Select filters to refine your product search.</p>

      <div className="mt-8">
        <a
          href="/"
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}
