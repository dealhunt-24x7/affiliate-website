"use client";

import Link from "next/link";

export default function FAQPage() {
  const faqs = [
    { id: 1, question: "How do I buy a deal?", answer: "Click on the deal and follow the link to purchase." },
    { id: 2, question: "Are these deals real?", answer: "Yes, we only show verified affiliate deals." },
    { id: 3, question: "Can I return a product?", answer: "Return policies depend on the merchant site." },
    { id: 4, question: "Do I earn cashback?", answer: "Some deals provide cashback via our affiliate programs." },
    { id: 5, question: "How often are deals updated?", answer: "We update our deals daily." },
  ];

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      {/* ✅ Back Button */}
      <Link
        href="/"
        className="inline-block mb-6 text-yellow-600 font-medium hover:underline"
      >
        ← Back to Home
      </Link>

      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h1>

      <div className="space-y-4">
        {faqs.map((faq) => (
          <div key={faq.id} className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-semibold">{faq.question}</h3>
            <p className="mt-1 text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
