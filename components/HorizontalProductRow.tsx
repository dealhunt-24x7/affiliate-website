"use client";
import React, { useEffect, useRef } from "react";
import ProductCard from "@/components/ProductCard"; // Assuming this exists

const HorizontalProductRow = ({ products }) => {
  const rowRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (rowRef.current) {
        rowRef.current.scrollLeft += 200; // Scroll distance
      }
    }, 3000); // Scroll interval

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div className="no-scrollbar flex gap-3 overflow-x-auto px-3" ref={rowRef}>
        {products.slice(0, 25).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default HorizontalProductRow;
