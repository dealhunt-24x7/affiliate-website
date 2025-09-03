import React from "react";
import CategoryPills from "@/components/CategoryPills";
import HorizontalProductRow from "@/components/HorizontalProductRow";
import FloatingButtons from "@/components/FloatingButtons";
import { getProducts } from "@/lib/products";

const Page = async () => {
  const products = await getProducts();

  return (
    <div>
      {/* Category Pills */}
      <section className="mb-8">
        <CategoryPills />
      </section>

      {/* Deal of the Day */}
      <HorizontalProductRow products={products} />

      {/* Category-wise Products
