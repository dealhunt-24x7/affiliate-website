"use client";

import BannerAdSection from "@/components/BannerAdSection";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedDeals from "@/components/FeaturedDeals";
import FeaturedProducts from "@/components/FeaturedProducts";
import CartToHeartSection from "@/components/CartToHeartSection";
import FloatingAIButtons from "@/components/FloatingAIButtons";
import HeroBannerGeneral from "@/components/HeroBannerGeneral";

export default function HomePage() {
  return (
    <main className="space-y-12 relative bg-gradient-to-b from-blue-50 to-white text-gray-900 transition-all duration-700">
      
      {/* General Hero */}
      <HeroBannerGeneral />

      {/* Banner Ads */}
      <BannerAdSection />

      {/* Featured Deals */}
      <FeaturedDeals />

      {/* Category Grid */}
      <CategoryGrid mode="general" />

      {/* Cart To Heart Section */}
      <CartToHeartSection />

      {/* Featured Products */}
      <FeaturedProducts mode="general" />

      {/* AI Buttons */}
      <FloatingAIButtons />
    </main>
  );
}
