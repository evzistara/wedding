// app/rsvp/page.tsx
"use client";

import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/navigation";
import { useEffect } from "react";

export default function RSVPPage() {
  useEffect(() => {
    const scriptSrc = "https://tally.so/widgets/embed.js";

    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      script.onload = () => {
        // @ts-ignore
        if (window.Tally) {
          // @ts-ignore
          window.Tally.loadEmbeds();
        }
      };
      document.body.appendChild(script);
    } else {
      // @ts-ignore
      if (window.Tally) {
        // @ts-ignore
        window.Tally.loadEmbeds();
      }
    }
  }, []);
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-secondary">
        {/* Header */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-light mb-4">RSVP</h1>
              <div className="h-px w-24 bg-primary mx-auto mb-6" />
              <p className="text-muted-foreground font-[family-name:var(--font-montserrat)] text-lg">
                Vennligst svar innen 1. mai 2026
              </p>
            </div>
          </div>

          {/* Google Form */}

          <div className="container mx-auto py-10">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-2xl bg-secondary/50 p-2">
                <iframe
                  data-tally-src="https://tally.so/embed/b5WMX6?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                  loading="lazy"
                  width="100%"
                  height="400"
                  frameBorder={0}
                  title="RSVP – Wedding"
                />
              </div>

              {/* Fallback link */}
              <div className="mt-6 text-center">
                <a
                  href="PASTE_YOUR_PUBLIC_FORM_LINK_HERE"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-primary hover:underline font-[family-name:var(--font-montserrat)]"
                >
                  Åpne RSVP-skjema i ny fane
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
