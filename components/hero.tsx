"use client";

import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {
  const weddingDate = new Date("2026-06-27T14:30:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;

      if (distance <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-secondary"
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/romantic-wedding-ceremony-outdoor-garden.jpg"
          alt="Wedding venue"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 text-center px-4">
        <div className="flex items-center justify-center mb-8">
          <div className="h-px w-16 bg-primary" />
          <Heart className="mx-4 h-6 w-6 text-primary fill-primary" />
          <div className="h-px w-16 bg-primary" />
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-light mb-10 text-balance">
          Kent & Mayliss
        </h1>

        <div className="text-xl md:text-2xl tracking-[0.3em] font-light text-muted-foreground mb-6">
          Vi gifter oss!
        </div>

        <div className="text-2xl md:text-3xl font-light mb-10">
          27. juni 2026
        </div>

        {/* COUNTDOWN */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {[
            { label: "Dager", value: timeLeft.days },
            { label: "Timer", value: timeLeft.hours },
            { label: "Min", value: timeLeft.minutes },
            { label: "Sek", value: timeLeft.seconds },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-secondary/90 backdrop-blur-sm rounded-2xl px-4 py-3 min-w-[90px] md:min-w-[110px] shadow-sm"
            >
              <div className="text-2xl md:text-3xl font-light mb-1">
                {item.value}
              </div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
