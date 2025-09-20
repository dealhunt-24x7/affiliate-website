"use client";

import HeroBanner from "@/components/HeroBanner";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedDeals from "@/components/FeaturedDeals";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <HeroBanner />
      <CategoryGrid />
      <FeaturedDeals />
    </div>
  );
}
