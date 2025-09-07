"use client";

import { useEffect, useState } from "react";

export default function DealTimer({ duration = 6 * 60 * 60 }) {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (secs: number) => {
    const h = Math.floor(secs / 3600)
      .toString()
      .padStart(2, "0");
    const m = Math.floor((secs % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const s = Math.floor(secs % 60)
      .toString()
      .padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  return (
    <span className="text-sm font-semibold text-red-600 bg-yellow-100 px-2 py-1 rounded">
      ⏰ {formatTime(timeLeft)}
    </span>
  );
}
