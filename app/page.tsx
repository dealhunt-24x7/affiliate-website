import Header from "@/components/Header";
import CategoryPills from "@/components/CategoryPills";
import DealsCarousel from "@/components/DealsCarousel";
import HorizontalProductRow from "@/components/HorizontalProductRow";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { getProducts } from "@/lib/products";
import { Product } from "@/lib/types";

export default async function HomePage() {
  const products = await getProducts();
  const categories = Array.from(new Set(products.map((p) => p.category))).slice(0, 15);

  const deals = products.slice(0, 10).map((p) => ({
    id: p.id,
    title: p.name,
    image: p.images[0] || "/images/sample-1.jpg",
  }));

  const byCategory: Record<string, Product[]> = {};
  categories.forEach((c) => {
    byCategory[c] = products.filter((p) => p.category === c).slice(0, 25);
  });

  return (
    <main>
      <Header />
      <CategoryPills />
      <section className="mt-2">
        <DealsCarousel items={deals} />
      </section>
      {categories.map((c) => (
        <HorizontalProductRow key={c} title={c} products={byCategory[c]} />
      ))}
      <Footer />
      <FloatingButtons />
    </main>
  );
}
