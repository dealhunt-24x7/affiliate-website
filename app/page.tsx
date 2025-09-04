"use client";

import React from "react";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import CategoryPills from "@/components/CategoryPills";
import DealsCarousel from "@/components/DealsCarousel";
import HorizontalProductRow from "@/components/HorizontalProductRow";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const categories = [
  "Mobile",
  "Laptop",
  "Headphones",
  "Watches",
  "Electronic",
  "Fashion",
  "Men",
  "Women",
  "Kids",
  "Footwear",
  "Home appliance",
  "Sports",
  "Jwellery",
  "Kitchen",
  "Home decor",
  "Study",
  "Others",
];

export default function Page() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Search Bar */}
      <div className="px-4 mt-3">
        <SearchBar />
      </div>

      {/* Categories Pills */}
      <section className="px-4 mt-4">
        <CategoryPills categories={categories} />
      </section>

      {/* Deal of the Day */}
      <section className="mt-6 px-4">
        <h2 className="text-2xl font-bold mb-3">Deal of the Day</h2>
        <DealsCarousel />
      </section>

      {/* Category Rows */}
      <section className="mt-10 px-4 space-y-8">
        {categories.map((cat, idx) => (
          <div key={idx}>
            <h3 className="text-xl font-semibold mb-3">{cat}</h3>
            <HorizontalProductRow category={cat} />
          </div>
        ))}
      </section>

      {/* Footer */}
      <Footer />

      {/* Floating Cart & Home */}
      <FloatingButtons />
    </div>
  );
}
