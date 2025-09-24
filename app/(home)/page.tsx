"use client";

import HeroBanner from "@/components/HeroBanner";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedDeals from "@/components/FeaturedDeals";
import DealOfTheDay from "@/components/DealOfTheDay";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Banner */}
      <HeroBanner />

      {/* Deal of the Day - Auto Scroll */}
      <DealOfTheDay />

      {/* Categories */}
      <CategoryGrid />

      {/* Featured Deals */}
      <FeaturedDeals />

      {/* Blogs Section */}
      <BlogSection />

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
}
