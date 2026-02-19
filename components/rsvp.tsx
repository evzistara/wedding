// app/rsvp/page.tsx
"use client";

import { Navigation } from "@/components/navigation";

export default function RSVPPage() {
  const GOOGLE_FORM_EMBED_URL = "YOUR_GOOGLE_FORM_EMBED_URL_HERE";

  const GOOGLE_FORM_PUBLIC_URL = "YOUR_GOOGLE_FORM_PUBLIC_LINK_HERE";

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
              <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSc88IDbZBFuhDEwfLFxSN4pQ9fnY92uAerMGFbG9sm2mcyKKQ/viewform?usp=dialog"
                  width="100%"
                  height="1300"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="RSVP – Bryllup"
                >
                  Laster…
                </iframe>
              </div>

              {/* Fallback link */}
              <div className="mt-6 text-center">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc88IDbZBFuhDEwfLFxSN4pQ9fnY92uAerMGFbG9sm2mcyKKQ/viewform?usp=dialog"
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
