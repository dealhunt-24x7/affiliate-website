// /components/FAQItem.tsx
"use client";

import React from "react";
import Link from "next/link";

type Props = {
  id: string;
  item: { q: string; a: string; links?: { label: string; href: string }[] };
  open: boolean;
  onToggle: () => void;
  highlight?: string;
};

function highlightText(text: string, term?: string) {
  if (!term) return text;
  const s = term.trim().toLowerCase();
  if (!s) return text;
  const parts = text.split(new RegExp(`(${s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "ig"));
  return parts.map((part, i) =>
    part.toLowerCase() === s ? (
      <mark key={i} className="bg-yellow-200 rounded px-0.5">{part}</mark>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export default function FAQItem({ id, item, open, onToggle, highlight }: Props) {
  return (
    <article className="bg-white p-5 rounded-2xl shadow-md border border-gray-100">
      <button
        id={`q-${id}`}
        aria-expanded={open}
        aria-controls={`a-${id}`}
        onClick={onToggle}
        className="w-full text-left flex justify-between items-start gap-4"
      >
        <div>
          <h4 className="font-semibold text-gray-800">{highlightText(item.q, highlight)}</h4>
          {!open && <p className="text-gray-500 text-sm mt-2 line-clamp-2">{highlightText(item.a, highlight)}</p>}
        </div>
        <div className="text-yellow-500 text-2xl font-bold">{open ? "−" : "+"}</div>
      </button>

      {open && (
        <div id={`a-${id}`} role="region" className="mt-4 text-gray-700 leading-relaxed">
          <p>{highlight ? highlightText(item.a, highlight) : item.a}</p>
          {item.links && item.links.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-3">
              {item.links.map((lnk, i) => (
                <Link key={i} href={lnk.href} className="text-yellow-600 underline text-sm">
                  {lnk.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </article>
  );
}
