// /components/FAQList.tsx
"use client";

import React, { useState } from "react";
import FAQItem from "./FAQItem";
import { FAQItem as FAQItemType } from "../data/faqs"; // for type only (ts import)
type Item = { q: string; a: string; links?: { label: string; href: string }[] };

type Props = {
  items: Item[];
  searchTerm?: string;
};

export default function FAQList({ items, searchTerm }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {items.map((it, idx) => (
        <FAQItem
          key={idx}
          id={`${idx}`}
          item={it}
          open={openIndex === idx}
          onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
          highlight={searchTerm}
        />
      ))}
    </div>
  );
          }
