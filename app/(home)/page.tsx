"use client";

import { useState, useEffect } from "react";
import HeroBanner from "@/components/HeroBanner";
import HeroBannerGeneral from "@/components/HeroBannerGeneral";
import BannerAdSection from "@/components/BannerAdSection";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedDeals from "@/components/FeaturedDeals";
import FeaturedProducts from "@/components/FeaturedProducts";
import CartToHeartSection from "@/components/CartToHeartSection";
import FloatingAIButtons from "@/components/FloatingAIButtons";
import MoodToggle from "@/components/MoodToggle";

export default function HomePage() {
  const [mode, setMode] = useState<"luxury" | "general">("luxury");

  // 🧭 Load mode from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("dealhunt-mode") as
      | "luxury"
      | "general"
      | null;
    const activeMode = savedMode || "luxury";
    setMode(activeMode);
    document.body.classList.toggle("general-mode", activeMode === "general");
  }, []);

  // 💾 Save mode on toggle
  const handleModeChange = (newMode: "luxury" | "general") => {
    setMode(newMode);
    localStorage.setItem("dealhunt-mode", newMode);
    document.body.classList.toggle("general-mode", newMode === "general");
  };

  return (
    <main
      className={`space-y-12 relative transition-all duration-700 ${
        mode === "luxury"
          ? "bg-cream text-gray-900" // Luxury mood creamy bg
          : "bg-gradient-to-b from-blue-50 to-white text-gray-900" // General
      }`}
    >
      {/* 🟡 Mood Toggle */}
      <div className="flex justify-center w-full mt-4">
        <MoodToggle mode={mode} onToggle={handleModeChange} />
      </div>

      {/* Hero Banner */}
      {mode === "luxury" ? <HeroBanner /> : <HeroBannerGeneral />}

      {/* Banner Ads */}
      <BannerAdSection />

      {/* Featured Deals */}
      <FeaturedDeals />

      {/* Categories */}
      <CategoryGrid mode={mode} />

      {/* Cart To Heart Section */}
      <CartToHeartSection />

      {/* Featured Products */}
      <FeaturedProducts mode={mode} />

      {/* Floating AI Buttons */}
      <FloatingAIButtons />
    </main>
  );
    }
