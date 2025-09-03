"use client";

import { useEffect, useRef, useState } from "react";

type DealItem = {
  id: number;
  title: string;
  image: string;
};

export default function DealsCarousel({ items }: { items: DealItem[] }) {
  const [index, setIndex] = useState(0);
  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, 2500);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [items.length]);

  return (
    <div className="relative mx-3 overflow-hidden rounded-xl border">
      <div className="flex w-full">
        <div className="block w-full md:hidden">
          <img
            src={items[index]?.image}
            alt={items[index]?.title}
            className="h-56 w-full object-cover"
          />
          <div className="p-3 text-sm font-medium">{items[index]?.title}</div>
        </div>
        <div className="hidden w-full grid-cols-5 gap-3 p-3 md:grid">
          {items.slice(0, 10).map((it) => (
            <div key={it.id} className="rounded-lg border">
              <img src={it.image} alt={it.title} className="h-36 w-full rounded-t-lg object-cover" />
              <div className="px-2 py-2 text-sm">{it.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
