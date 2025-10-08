import "../styles/globals.css";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react"; // ✅ Added
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "DealHunt",
  description: "Luxury deals at your fingertips",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-gray-50">
      <body className="min-h-screen flex flex-col text-gray-900 w-full">
        <SessionProvider> {/* ✅ NextAuth session wrapper */}
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
