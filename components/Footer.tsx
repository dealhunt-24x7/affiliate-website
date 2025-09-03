import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h3 className="text-white font-semibold mb-2">About Us</h3>
          <p className="text-sm">
            Dealhunt brings you the best deals, offers, and product comparisons
            across multiple platforms.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/help">Help Center</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-2">Contact</h3>
          <p className="text-sm">support@dealhunt.in</p>
          <p className="text-sm">+91 98765 43210</p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="#"><Facebook className="h-5 w-5" /></Link>
            <Link href="#"><Instagram className="h-5 w-5" /></Link>
            <Link href="#"><Twitter className="h-5 w-5" /></Link>
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 mt-6">
        © {new Date().getFullYear()} Dealhunt. All rights reserved.
      </div>
    </footer>
  );
}
