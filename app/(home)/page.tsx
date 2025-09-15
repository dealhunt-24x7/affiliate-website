"use client";

import HeroBanner from "@/components/HeroBanner";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedDeals from "@/components/FeaturedDeals";

export default function HomePage() {
  return (
    <main className="space-y-12">
      <HeroBanner />
      <section className="px-4">
        <CategoryGrid />
      </section>
      <section className="px-4">
        <FeaturedDeals />
      </section>
    </main>
  );
}
