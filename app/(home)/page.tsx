"use client";

import { useState } from "react";
import HeroBanner from "@/components/HeroBanner";
import HeroBannerGeneral from "@/components/HeroBannerGeneral"; // ✅ new hero for general
import BannerAdSection from "@/components/BannerAdSection";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedDeals from "@/components/FeaturedDeals";
import FeaturedProducts from "@/components/FeaturedProducts";
import CartToHeartSection from "@/components/CartToHeartSection";
import FloatingAIButtons from "@/components/FloatingAIButtons";
import MoodToggle from "@/components/MoodToggle";
import Footer from "@/components/Footer";

export default function HomePage() {
  const [mode, setMode] = useState<"luxury" | "general">("luxury");

  return (
    <main
      className={`space-y-12 relative transition-all duration-700 ${
        mode === "luxury"
          ? "bg-white text-gray-900"
          : "bg-gradient-to-b from-blue-50 to-white text-gray-900"
      }`}
    >
      {/* 🟡 Mood Toggle */}
      <div className="flex justify-center w-full mt-4">
        <MoodToggle onToggle={(newMode) => setMode(newMode as any)} />
      </div>

      {/* 🎯 Dynamic Hero Section */}
      {mode === "luxury" ? <HeroBanner /> : <HeroBannerGeneral />}

      <BannerAdSection />
      <FeaturedDeals />
      <CategoryGrid />
      <CartToHeartSection />

      {/* 🌟 Featured Products */}
      <FeaturedProducts mode={mode} />

      <FloatingAIButtons />

      {/* 🧭 Updated Footer */}
      <Footer />
    </main>
  );
}
