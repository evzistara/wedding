// app/updates/page.tsx
"use client";

import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";

export default function UpdatesPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-background">
        {/* Header */}
        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-light mb-4">Updates</h1>
              <div className="h-px w-24 bg-primary mx-auto mb-6" />
              <p className="text-muted-foreground font-[family-name:var(--font-montserrat)] text-lg leading-relaxed">
                Hvis det skulle komme noen endringer, vil alt bli publisert på
                denne nettsiden.
              </p>
              <p className="text-muted-foreground font-[family-name:var(--font-montserrat)] mt-3">
                Ta gjerne en ekstra titt her inne før bryllupsdagen.
              </p>
            </div>
          </div>
        </section>

        {/* Notion Embed */}
        <section className="py-24" style={{ backgroundColor: "#DEDAD4" }}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="p-4 md:p-8 border-0 shadow-lg bg-card">
                <div className="rounded-2xl overflow-hidden bg-white">
                  <iframe
                    src="https://mayliss-og-kent.notion.site/30931b2cfaa680acabc7d43bb85a3dcb?v=30931b2cfaa6807f8081000cc762ab2d"
                    className="w-full h-[1400px]"
                    style={{ border: 0 }}
                    loading="lazy"
                    title="Bryllupsoppdateringer"
                  />
                </div>

                {/* Optional external link */}
                <div className="mt-6 text-center">
                  <a
                    href="https://mayliss-og-kent.notion.site/30931b2cfaa680acabc7d43bb85a3dcb?v=30931b2cfaa6807f8081000cc762ab2d"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-primary hover:underline font-[family-name:var(--font-montserrat)]"
                  >
                    Åpne oppdateringer i ny fane
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
