import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-10 border-t bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="text-lg font-bold">Dealhunt</div>
          <p className="mt-2 text-sm text-gray-600">Best deals. Smart savings.</p>
        </div>
        <div>
          <div className="font-semibold">Company</div>
          <ul className="mt-2 space-y-2 text-sm">
            <li><Link href="/about" className="hover:underline">About us</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact us</Link></li>
            <li><Link href="/help" className="hover:underline">Help center</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Social</div>
          <div className="mt-2 flex gap-3">
            <Link href="#" aria-label="Facebook"><Facebook /></Link>
            <Link href="#" aria-label="Instagram"><Instagram /></Link>
            <Link href="#" aria-label="Twitter"><Twitter /></Link>
          </div>
        </div>
      </div>
      <div className="border-t py-3 text-center text-xs text-gray-500">© {new Date().getFullYear()} Dealhunt</div>
    </footer>
  );
}
