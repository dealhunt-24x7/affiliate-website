"use client";
import { useState } from "react";

const faqs = [
  { id: 1, question: "How do I buy a deal?", answer: "Click on the deal and follow the link to purchase." },
  { id: 2, question: "Are these deals real?", answer: "Yes, we only show verified affiliate deals." },
  { id: 3, question: "Can I return a product?", answer: "Return policies depend on the merchant site." },
  { id: 4, question: "Do I earn cashback?", answer: "Some deals provide cashback via our affiliate programs." },
  { id: 5, question: "How often are deals updated?", answer: "We update our deals daily." },
];

export default function FAQSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedFAQs = showAll ? faqs : faqs.slice(0, 3);

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">FAQs</h2>
      <div className="space-y-4">
        {displayedFAQs.map((faq) => (
          <div key={faq.id} className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-semibold">{faq.question}</h3>
            <p className="mt-1 text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <button
          className="text-yellow-500 font-semibold hover:underline"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "View Less FAQs" : "View All FAQs"}
        </button>
      </div>
    </section>
  );
}
