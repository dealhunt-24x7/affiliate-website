"use client";

import HeroBanner from "@/components/HeroBanner";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedProducts from "@/components/FeaturedProducts"; // Updated component
import FAQSection from "@/components/FAQSection";

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Banner */}
      <HeroBanner />

      {/* Categories */}
      <CategoryGrid />

      {/* Featured Products (infinite scroll + related blogs) */}
      <FeaturedProducts />

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
}
