"use client";

import { useState } from "react";
import HeroBanner from "@/components/HeroBanner";
import BannerAdSection from "@/components/BannerAdSection";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedDeals from "@/components/FeaturedDeals";
import FeaturedProducts from "@/components/FeaturedProducts";
import CartToHeartSection from "@/components/CartToHeartSection";
import FloatingAIButtons from "@/components/FloatingAIButtons";
import MoodToggle from "@/components/MoodToggle";

export default function HomePage() {
  const [mode, setMode] = useState<"luxury" | "general">("luxury");

  return (
    <main className="space-y-12">
      {/* 🟡 Mood Toggle */}
      <MoodToggle onToggle={(newMode) => setMode(newMode as any)} />

      {/* Hero Banner */}
      <HeroBanner />

      {/* Banner Ad Section */}
      <BannerAdSection />

      {/* Featured Deals */}
      <FeaturedDeals />

      {/* Shop by Category (now above Featured Products) */}
      <CategoryGrid />

      {/* Cart to Heart Section */}
      <CartToHeartSection />

      {/* Featured Products (infinite scroll + mood switch) */}
      <FeaturedProducts mode={mode} />

      {/* Floating AI Buttons */}
      <FloatingAIButtons />
    </main>
  );
}
