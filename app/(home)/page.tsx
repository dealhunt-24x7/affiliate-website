import HeroBanner from "@/components/HeroBanner";
import CategoriesSection from "@/components/CategoriesSection";
import FeaturedDeals from "@/components/FeaturedDeals";
import DealOfTheDay from "@/components/DealOfTheDay";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <DealOfTheDay />
      <CategoriesSection />
      <FeaturedDeals />
      <BlogSection />
      <FAQSection />
    </>
  );
}
