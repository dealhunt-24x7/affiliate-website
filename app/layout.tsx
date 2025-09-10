import "@/styles/globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "DealHunt",
  description: "Find the best affiliate deals in one place",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#B9BBB6] text-gray-800">
        {/* Global Header */}
        <Header />

        {/* Main Content */}
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
