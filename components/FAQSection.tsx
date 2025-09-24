"use client";
import { useState } from "react";

const faqs = [
  { q: "How do I place an order?", a: "Browse products, add to cart, and checkout securely." },
  { q: "Do you offer free shipping?", a: "Yes, on all orders above $50." },
  { q: "How can I track my order?", a: "You will receive a tracking link via email." },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="bg-white shadow rounded-xl p-4 cursor-pointer"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <h3 className="font-semibold text-lg">{faq.q}</h3>
            {open === i && <p className="mt-2 text-gray-600">{faq.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
