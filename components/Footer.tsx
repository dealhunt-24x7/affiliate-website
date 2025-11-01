"use client";

import { useState } from "react";
import Link from "next/link";
import { FaInstagram, FaTelegram, FaYoutube, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const [showContact, setShowContact] = useState(false);

  return (
    <footer className="w-full bg-gray-900 text-gray-300 mt-12">
      <div className="w-full bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* 🟡 Logo + Info */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">DealHunt</h2>
            <p className="text-sm">
              Your one-stop destination for luxury & general deals — from premium watches to smart daily essentials.
            </p>
          </div>

          {/* 🟦 Quick Links (with FAQ added) */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>

              {/* 📞 Contact Section */}
              <li id="contact-section">
                <button
                  onClick={() => setShowContact(!showContact)}
                  className="hover:text-white focus:outline-none transition-colors"
                >
                  Contact Us
                </button>
                {showContact && (
                  <div className="mt-2 text-sm text-gray-400 space-y-1">
                    <p>
                      📱 WhatsApp:{" "}
                      <a
                        href="https://wa.me/918279521992"
                        target="_blank"
                        className="hover:text-yellow-500 transition-colors"
                      >
                        +91 82795 21992
                      </a>
                    </p>
                    <p>
                      📧 Email:{" "}
                      <a
                        href="mailto:dealhunt24x7@gmail.com"
                        className="hover:text-yellow-500 transition-colors"
                      >
                        dealhunt24x7@gmail.com
                      </a>
                    </p>
                  </div>
                )}
              </li>
            </ul>
          </div>

          {/* ✉️ Newsletter + Socials */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-white mb-3">Stay Updated</h3>
            <form className="flex flex-col sm:flex-row gap-2 max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 rounded-md text-black w-full sm:flex-1 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>

            {/* 🌐 Social Icons */}
            <div className="flex gap-4 mt-4 text-2xl text-gray-400">
              <a href="https://youtube.com" target="_blank" className="hover:text-red-500 transition-colors"><FaYoutube /></a>
              <a href="https://x.com" target="_blank" className="hover:text-gray-200 transition-colors"><FaXTwitter /></a>
              <a href="https://instagram.com" target="_blank" className="hover:text-pink-500 transition-colors"><FaInstagram /></a>
              <a href="https://t.me" target="_blank" className="hover:text-blue-400 transition-colors"><FaTelegram /></a>
            </div>
          </div>
        </div>

        {/* 📄 Copyright */}
        <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} DealHunt. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
