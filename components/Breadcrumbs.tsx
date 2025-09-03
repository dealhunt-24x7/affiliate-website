import Link from "next/link";

export function Breadcrumbs({ paths }: { paths: { name: string; href: string }[] }) {
  return (
    <nav className="text-sm text-gray-600 mb-4">
      {paths.map((path, idx) => (
        <span key={idx}>
          <Link href={path.href} className="hover:underline">{path.name}</Link>
          {idx < paths.length - 1 && " > "}
        </span>
      ))}
    </nav>
  );
}
