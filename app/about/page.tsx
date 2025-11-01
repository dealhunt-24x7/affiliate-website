"use client";

import Link from "next/link";
import React from "react";

export default function AboutPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12 space-y-12">
      {/* 🟡 Hero Section */}
      <section className="text-center bg-gradient-to-r from-yellow-400 via-orange-300 to-red-400 p-12 rounded-xl text-white">
        <h1 className="text-4xl font-bold mb-4">About DealHunt</h1>
        <p className="text-lg">
          Saving you money with verified deals from top brands across India.
        </p>
      </section>

      {/* 🟠 Our Story */}
      <section className="flex flex-col md:flex-row items-center gap-8">
        <img
          src="/images/about-our-story.jpg"
          alt="Our Story"
          className="w-full md:w-1/2 rounded-xl shadow-md"
        />
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-2xl font-bold">Our Story</h2>
          <p>
            DealHunt started with a simple mission: to bring users the best
            deals in one place, whether it's luxury products or daily
            essentials.
          </p>
        </div>
      </section>

      {/* 🔴 Our Mission */}
      <section className="flex flex-col md:flex-row-reverse items-center gap-8">
        <img
          src="/images/about-mission.jpg"
          alt="Our Mission"
          className="w-full md:w-1/2 rounded-xl shadow-md"
        />
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p>
            To help users shop smartly by comparing prices, exploring trending
            offers, and ensuring every purchase is verified and reliable.
          </p>
        </div>
      </section>

      {/* 🔵 Our Vision */}
      <section className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Our Vision</h2>
        <p>
          To become India’s most trusted platform for discovering and comparing
          the best deals from top brands, across luxury and general categories.
        </p>
      </section>

      {/* ⬅️ Back to Home */}
      <div className="text-center">
        <Link
          href="/"
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
      }
