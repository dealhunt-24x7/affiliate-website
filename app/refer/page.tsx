import Link from "next/link";

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-yellow-600">Refer & Earn</h1>
      <p className="mt-4 text-gray-600">
        Invite friends and earn exciting rewards when they shop.
      </p>

      <div className="mt-8">
        <Link href="/" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
