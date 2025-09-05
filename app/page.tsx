export const dynamic = "force-dynamic";

import DealOfTheDay from "@/components/DealOfTheDay";
import ShopByCategory from "@/components/ShopByCategory";
import FeaturedProducts from "@/components/FeaturedProducts"; 
import BlogHighlights from "@/components/BlogHighlights";

export default function HomePage() {
  return (
    <main className="px-4 md:px-8 py-6 bg-gray-50">
      {/* Hero / Brand Intro */}
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-600">DealHunt</h1>
        <p className="text-gray-600 italic">Best Deals Everyday!</p>
      </section>

      {/* Deal of the Day */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Deal of the Day</h2>
        <DealOfTheDay />
      </section>

      {/* Shop by Category */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Shop by Category</h2>
        <ShopByCategory />
      </section>

      {/* Featured Products */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Featured Products</h2>
        <FeaturedProducts />
      </section>

      {/* Blog Highlights */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">From Our Blog</h2>
        <BlogHighlights />
      </section>
    </main>
  );
}
