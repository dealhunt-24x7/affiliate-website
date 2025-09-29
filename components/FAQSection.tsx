"use client";

import Link from "next/link";

const faqs = [
  { id: 1, question: "How do I buy a deal?", answer: "Click on the deal and follow the link to purchase." },
  { id: 2, question: "Are these deals real?", answer: "Yes, we only show verified affiliate deals." },
  { id: 3, question: "Can I return a product?", answer: "Return policies depend on the merchant site." },
];

export default function FAQSection() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">FAQs</h2>

      {/* Show only first 3 FAQs */}
      <div className="space-y-4">
        {faqs.map((faq) => (
          <div key={faq.id} className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-semibold">{faq.question}</h3>
            <p className="mt-1 text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>

      {/* ✅ View All FAQs Button */}
      <div className="text-center mt-6">
        <Link
          href="/faqs"
          className="inline-block text-yellow-500 font-semibold hover:underline"
        >
          View All FAQs
        </Link>
      </div>
    </section>
  );
}
