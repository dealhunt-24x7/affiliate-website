"use client";

import HeroBanner from "@/components/HeroBanner";
import FeaturedDeals from "@/components/FeaturedDeals"; // ✅ Previously DealOfTheDay
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedProducts from "@/components/FeaturedProducts"; // ✅ Merged with blogs
import FAQSection from "@/components/FAQSection";

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Banner */}
      <HeroBanner />

      {/* Featured Deals (formerly Deal of the Day) */}
      <FeaturedDeals />

      {/* Categories */}
      <CategoryGrid />

      {/* Featured Products + Blogs */}
      <FeaturedProducts />

      {/* FAQ */}
      <FAQSection />
    </div>
  );
}
