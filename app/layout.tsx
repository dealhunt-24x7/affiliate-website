import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useRef } from "react";

export const metadata = {
  title: "Dealhunt - Best Deals, Every Day",
  description: "Find trending deals, compare products, and save more with Dealhunt.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#B9BBB6] text-gray-800">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
