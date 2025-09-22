import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 mt-12">
      <div className="w-full bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo + Info */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">DealHunt</h2>
            <p className="text-sm">
              Your one-stop destination for luxury watches, jewelry, and exclusive deals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/products" className="hover:text-white">Products</Link></li>
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-white mb-3">Stay Updated</h3>
            <form className="flex flex-col sm:flex-row gap-2 max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 rounded-md text-black w-full sm:flex-1"
              />
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} DealHunt. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
