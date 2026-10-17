"use client";

import { useEffect, useState } from "react";

export default function DealCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 14,
    minutes: 39,
    seconds: 35,
  });

  useEffect(() => {
    let totalSeconds = 14 * 3600 + 39 * 60 + 35;

    const interval = setInterval(() => {
      if (totalSeconds <= 0) {
        totalSeconds = 24 * 3600;
      } else {
        totalSeconds--;
      }

      setTimeLeft({
        hours: Math.floor(totalSeconds / 3600),
        minutes: Math.floor((totalSeconds % 3600) / 60),
        seconds: totalSeconds % 60,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const format = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="flex items-center gap-3 bg-white/10 px-6 py-4 rounded-xl backdrop-blur-sm">
      <div className="text-center">
        <span className="text-2xl font-bold block text-white">{format(timeLeft.hours)}</span>
        <span className="text-[11px] font-bold text-outline-variant uppercase">Horas</span>
      </div>
      <span className="text-secondary-container font-bold text-2xl mb-3">:</span>
      <div className="text-center">
        <span className="text-2xl font-bold block text-white">{format(timeLeft.minutes)}</span>
        <span className="text-[11px] font-bold text-outline-variant uppercase">Min</span>
      </div>
      <span className="text-secondary-container font-bold text-2xl mb-3">:</span>
      <div className="text-center">
        <span className="text-2xl font-bold block text-white">{format(timeLeft.seconds)}</span>
        <span className="text-[11px] font-bold text-outline-variant uppercase">Seg</span>
      </div>
    </div>
  );
}