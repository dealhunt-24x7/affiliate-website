// app/layout.tsx
import type { Metadata } from "next";
import "./../styles/globals.css"; // ✅ FIXED PATH (relative to app/ folder)

export const metadata: Metadata = {
  title: "DealHunt - Best Deals Everyday",
  description: "Find the best deals, discounts, and offers across top e-commerce sites.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#B9BBB6] text-gray-800">
        {children}
      </body>
    </html>
  );
}
