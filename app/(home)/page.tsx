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

  // Load mode on mount
  useEffect(() => {
    const savedMode = localStorage.getItem("dealhunt-mode") as
      | "luxury"
      | "general"
      | null;
    const activeMode = savedMode || "luxury";
    setMode(activeMode);
    document.body.classList.toggle("general-mode", activeMode === "general");
  }, []);

  // Save mode when user switches
  const handleModeChange = (newMode: "luxury" | "general") => {
    setMode(newMode);
    localStorage.setItem("dealhunt-mode", newMode);
    document.body.classList.toggle("general-mode", newMode === "general");
  };

  const isLuxury = mode === "luxury";

  return (
    <main
      className={`relative transition-all duration-700 space-y-12 ${
        isLuxury ? "bg-yellow-50 text-gray-800" : "bg-gradient-to-b from-blue-50 to-white text-gray-900"
      }`}
    >
      {/* Mood Toggle */}
      <div className="flex justify-center w-full mt-4">
        <MoodToggle mode={mode} onToggle={handleModeChange} />
      </div>

      {/* Hero Banner */}
      {isLuxury ? <HeroBanner /> : <HeroBannerGeneral />}

      {/* Banner Ad */}
      <div className="py-12">
        <BannerAdSection />
      </div>

      {/* Featured Deals */}
      <div className="py-12">
        <FeaturedDeals />
      </div>

      {/* Categories */}
      <CategoryGrid mode={mode} />

      {/* Cart To Heart Section */}
      <div className="py-12">
        <CartToHeartSection />
      </div>

      {/* Featured Products */}
      <div className="py-12">
        <FeaturedProducts mode={mode} />
      </div>

      {/* Floating AI Buttons */}
      <FloatingAIButtons />
    </main>
  );
            }
