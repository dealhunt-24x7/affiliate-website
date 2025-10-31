"use client";

import Link from "next/link";

const faqs = [
  { id: 1, question: "How do I buy a deal?", answer: "Click on the deal and follow the link to purchase." },
  { id: 2, question: "Are these deals real?", answer: "Yes, we only show verified affiliate deals." },
  { id: 3, question: "Do I earn cashback?", answer: "Some deals provide cashback via our affiliate programs." },
];

export default function FAQSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">💬 FAQs</h2>

      <div className="grid gap-6 md:grid-cols-3">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-gray-800">{faq.question}</h3>
            <p className="mt-2 text-gray-600 text-sm">{faq.answer}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Link
          href="/faqs"
          className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full font-semibold shadow-lg transition"
        >
          View All FAQs
        </Link>
      </div>
    </section>
  );
}
