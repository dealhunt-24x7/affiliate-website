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

  // 🧭 Load mode on mount
  useEffect(() => {
    const savedMode = localStorage.getItem("dealhunt-mode") as
      | "luxury"
      | "general"
      | null;
    const activeMode = savedMode || "luxury";
    setMode(activeMode);
    document.body.classList.toggle("general-mode", activeMode === "general");
  }, []);

  // 💾 Save mode when user switches
  const handleModeChange = (newMode: "luxury" | "general") => {
    setMode(newMode);
    localStorage.setItem("dealhunt-mode", newMode);
    document.body.classList.toggle("general-mode", newMode === "general");
  };

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
        <MoodToggle mode={mode} onToggle={handleModeChange} />
      </div>

      {mode === "luxury" ? <HeroBanner /> : <HeroBannerGeneral />}
      <BannerAdSection />
      <FeaturedDeals />
      <CategoryGrid />
      <CartToHeartSection />
      <FeaturedProducts mode={mode} />
      <FloatingAIButtons />
    </main>
  );
        }
