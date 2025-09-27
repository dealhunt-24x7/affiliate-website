"use client";

import HeroBanner from "@/components/HeroBanner";
import BannerAdSection from "@/components/BannerAdSection";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedDeals from "@/components/FeaturedDeals";
import FeaturedProducts from "@/components/FeaturedProducts";
import FAQSection from "@/components/FAQSection";
import CartToHeartSection from "@/components/CartToHeartSection";
import FloatingAIButtons from "@/components/FloatingAIButtons";

export default function HomePage() {
  return (
    <main className="space-y-12">
      {/* Hero Banner */}
      <HeroBanner />

      {/* Banner Ad Section */}
      <BannerAdSection />

      {/* Featured Deals */}
      <FeaturedDeals />

      {/* Categories */}
      <CategoryGrid />

      {/* Cart to Heart Section */}
      <CartToHeartSection />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* FAQ Section */}
      <FAQSection />

      {/* Floating AI Buttons */}
      <FloatingAIButtons />
    </main>
  );
}
