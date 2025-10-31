import Link from "next/link";

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto py-10 px-4 space-y-6">
      <h1 className="text-3xl font-bold text-yellow-600">Coming Soon</h1>
      <p className="text-gray-600 font-semibold">
        ❤️ Cart to Heart Program
      </p>
      <p className="text-gray-600">
        This unique program allows you to donate, support, or get crowdfunding 
        for education, health, and other social causes. Enjoy exclusive rewards 
        while making a positive impact through your purchases.
      </p>

      <div className="mt-8">
        <Link href="/" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
