"use client";

import { useState, useEffect } from "react";

interface Banner {
  id: number;
  image: string;
  link: string;
  alt: string;
}

const banners: Banner[] = [
  { id: 1, image: "/ads/banner1.jpg", link: "https://affiliate-link.com/1", alt: "Banner 1" },
  { id: 2, image: "/ads/banner2.jpg", link: "https://affiliate-link.com/2", alt: "Banner 2" },
  { id: 3, image: "/ads/banner3.jpg", link: "https://affiliate-link.com/3", alt: "Banner 3" },
];

export default function BannerAdSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000); // Change banner every 5 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-gray-100 py-2 shadow-sm flex justify-center items-center">
      <a
        href={banners[current].link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center items-center w-full max-w-6xl px-4"
      >
        <img
          src={banners[current].image}
          alt={banners[current].alt}
          className="h-12 md:h-16 object-contain w-full"
        />
      </a>
    </div>
  );
}
