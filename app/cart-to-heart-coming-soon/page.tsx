import Link from "next/link";

export default function CartToHeartComingSoon() {
  return (
    <main className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-yellow-600">Coming Soon</h1>
      <p className="mt-4 text-gray-600">
        ❤️ Cart to Heart Program
      </p>
      <p className="mt-2 text-gray-700">
        Our unique program allows you to donate, support, and contribute to social causes while shopping.
        You can benefit from exclusive rewards and make a positive impact in areas like education, health,
        and community development. Stay tuned for full launch soon!
      </p>

      <div className="mt-8">
        <Link
          href="/"
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
