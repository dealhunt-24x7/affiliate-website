import Link from "next/link";
import { SearchBar } from "./SearchBar";

export function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold text-blue-600">DealHunt</Link>
      <SearchBar />
      <nav className="space-x-4">
        <Link href="/products" className="hover:underline">Products</Link>
        <Link href="/comparison" className="hover:underline">Comparison</Link>
        <Link href="/blog" className="hover:underline">Blog</Link>
      </nav>
    </header>
  );
}
