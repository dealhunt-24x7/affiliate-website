// app/layout.tsx
import type { Metadata } from "next";
import "./../styles/globals.css"; // ✅ Correct path

import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
      <body className="bg-[#B9BBB6] text-gray-800 flex flex-col min-h-screen">
        {/* ✅ Header at top */}
        <Header />

        {/* ✅ Main Content */}
        <main className="flex-1">{children}</main>

        {/* ✅ Footer at bottom */}
        <Footer />
      </body>
    </html>
  );
}
