import HeroBanner from "@/components/HeroBanner";
import FeaturedDeals from "@/components/FeaturedDeals";
import FeaturedProducts from "@/components/FeaturedProducts";
import CategoryGrid from "@/components/CategoryGrid";
import ModeToggle from "@/components/ModeToggle";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-10">
      <HeroBanner />
      <FeaturedDeals />
      <ModeToggle />
      <FeaturedProducts />
      <CategoryGrid />
    </div>
  );
}
