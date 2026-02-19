"use client";

import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { CusdisComments } from "@/components/CusdisComments";

export default function UpdatesPage() {
  return (
    <>
      <Navigation />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 mb-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-light mb-4">Updates</h1>
            <div className="h-px w-24 bg-primary mx-auto mb-6" />

            <p className="text-muted-foreground font-[family-name:var(--font-montserrat)] text-lg leading-relaxed">
              Hvis det skulle komme noen endringer, vil alt bli publisert her.
            </p>

            <p className="text-muted-foreground font-[family-name:var(--font-montserrat)] mt-3">
              Ta gjerne en ekstra titt før bryllupsdagen.
            </p>
          </div>
        </div>

        {/* Updates Feed */}

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto min-h-[80vh]">
            <CusdisComments
              appId="b760e42b-4e10-4e81-9cd2-a79034b4e41c"
              pageId="updates"
              pageTitle="Bryllupsoppdateringer"
            />
          </div>
        </div>
      </section>
    </>
  );
}
