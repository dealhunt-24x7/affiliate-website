import Header from "@/components/Header";
import CategoryPills from "@/components/CategoryPills";
import "./globals.css";

const categories = [
  { name: "Mobile", slug: "mobile" },
  { name: "Laptop", slug: "laptop" },
  { name: "Headphones", slug: "headphones" },
  // ...baaki categories yaha bhi list honi chahiye
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <CategoryPills categories={categories} />
        {children}
      </body>
    </html>
  );
}
