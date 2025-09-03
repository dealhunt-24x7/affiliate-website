"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6"
        >
          Welcome to <span className="text-blue-600">DealHunt</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8"
        >
          Find the best product deals, comparisons, and reviews – all in one place.
        </motion.p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/products"
            className="inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-2xl shadow-md hover:bg-blue-700 transition"
          >
            Explore Products
          </Link>
        </motion.div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center"
        >
          Featured Products
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {["Smartphone", "Laptop", "Headphones"].map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="h-40 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {product}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Best deals and detailed comparison available.
              </p>
              <Link
                href="/products"
                className="text-blue-600 hover:underline font-medium"
              >
                View Details →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-4"
        >
          Stay Ahead with Deal Alerts
        </motion.h2>
        <p className="mb-6 max-w-xl mx-auto text-lg">
          Subscribe to our newsletter and never miss a great deal.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl shadow-md hover:bg-gray-100"
        >
          Subscribe Now
        </motion.button>
      </section>
    </div>
  );
}
