"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQPage() {
  const allFaqs = {
    General: [
      { q: "How do I buy a deal?", a: "Click on the deal and follow the link to purchase." },
      { q: "Are these deals real?", a: "Yes, we only show verified affiliate deals." },
      { q: "How often are deals updated?", a: "We update our deals daily." },
    ],
    Orders: [
      { q: "Can I return a product?", a: "Return policies depend on the merchant site." },
      { q: "Do I earn cashback?", a: "Some deals provide cashback via our affiliate programs." },
      { q: "Where can I track my order?", a: "You can track it directly on the merchant's website." },
    ],
    Account: [
      { q: "How do I create an account?", a: "Click on 'Sign Up' and fill in your details to create an account." },
      { q: "How do I change my password?", a: "Go to Settings → Security → Change Password." },
      { q: "Can I delete my account?", a: "Yes, contact support and we’ll help you remove your account." },
    ],
  };

  const categories = Object.keys(allFaqs);
  const [activeCategory, setActiveCategory] = useState("General");
  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFaqs = allFaqs[activeCategory].filter((faq) =>
    faq.q.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      {/* 🔙 Back Button */}
      <Link
        href="/"
        className="inline-block mb-6 text-yellow-600 font-medium hover:underline"
      >
        ← Back to Home
      </Link>

      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        🧠 Frequently Asked Questions
      </h1>

      {/* 🔍 Search Bar */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for an answer..."
          className="w-full md:w-2/3 px-4 py-3 rounded-full border focus:ring-2 focus:ring-yellow-400 outline-none shadow-sm"
        />
      </div>

      {/* 🏷️ Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setSearch("");
              setOpenIndex(null);
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              activeCategory === cat
                ? "bg-yellow-500 text-white shadow-md"
                : "bg-gray-100 hover:bg-yellow-100 text-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 💬 FAQ List */}
      <div className="space-y-4">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-2xl shadow-md border border-gray-100 transition hover:shadow-lg"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center font-semibold text-left text-gray-800"
              >
                <span>{faq.q}</span>
                <span className="text-yellow-500 text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-3 text-gray-600 leading-relaxed"
                  >
                    {faq.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 mt-6">
            No matching results found.
          </p>
        )}
      </div>
    </main>
  );
                }
