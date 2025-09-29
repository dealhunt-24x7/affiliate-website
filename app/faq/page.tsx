"use client";

import Link from "next/link";

const faqs = [
  { q: "What is DealHunt?", a: "DealHunt is a platform for comparing prices and finding best deals." },
  { q: "How does Cart to Heart work?", a: "You shop through our links and we donate a part of our earnings to charity." },
  { q: "Is there a membership fee?", a: "No, DealHunt is completely free to use." },
];

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={() => window.history.back()}
          className="px-4 py-2 rounded-lg bg-yellow-100 hover:bg-yellow-200 text-yellow-800 font-semibold shadow"
        >
          ⬅ Back
        </button>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Frequently Asked Questions
        </h1>
      </div>

      {/* FAQ List */}
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="p-4 bg-white rounded-xl shadow hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold text-gray-900">{faq.q}</h2>
            <p className="mt-2 text-gray-700">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
