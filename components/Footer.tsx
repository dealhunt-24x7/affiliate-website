import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 mt-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* Column 1 */}
        <div>
          <h3 className="font-bold mb-3">About</h3>
          <p className="text-sm text-gray-300">
            DealHunt brings you the latest and best deals online.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/deals">Deals</Link></li>
            <li><Link href="/categories">Categories</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-bold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-bold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="#">🌐</a>
            <a href="#">📘</a>
            <a href="#">🐦</a>
            <a href="#">📸</a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-6">
        © {new Date().getFullYear()} DealHunt. All Rights Reserved.
      </div>
    </footer>
  );
}
