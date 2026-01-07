import { Card } from "@/components/ui/card";

export function OurStory() {
  return (
    <section id="story" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/*<div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light mb-4 text-balance">Our Story</h2>
            <div className="h-px w-24 bg-primary mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="overflow-hidden border-0 shadow-lg">
              <img src="/couple-walking-in-park-autumn.jpg" alt="Our first meeting" className="w-full h-80 object-cover" />
            </Card>
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-light mb-4">How We Met</h3>
              <p className="text-muted-foreground leading-relaxed font-[family-name:var(--font-montserrat)]">
                Our paths crossed on a crisp autumn morning at a coffee shop in downtown San Francisco. Michael
                accidentally spilled his latte on Sarah&apos;s laptop (which thankfully survived!). What started as an
                apologetic conversation over a replacement coffee turned into hours of laughter and connection. We
                discovered we had both traveled to the same tiny village in Italy the previous summer, just weeks apart.
              </p>
            </div>
          </div>
          

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="flex flex-col justify-center order-2 md:order-1">
              <h3 className="text-3xl font-light mb-4">The Proposal</h3>
              <p className="text-muted-foreground leading-relaxed font-[family-name:var(--font-montserrat)]">
                Three years later, Michael planned a surprise trip back to that same Italian village. On a terrace
                overlooking the rolling hills at sunset, surrounded by the scent of lavender and the sound of church
                bells, he got down on one knee. Sarah said yes before he could even finish asking the question. It was
                the perfect moment in the place where our story began, even before we knew it.
              </p>
            </div>
            <Card className="overflow-hidden border-0 shadow-lg order-1 md:order-2">
              <img src="/romantic-proposal-sunset-italy-countryside.jpg" alt="The proposal" className="w-full h-80 object-cover" />
            </Card>
          </div>
          */}

          <div className="text-center">
            <div className="inline-block bg-primary/10 rounded-lg p-8">
              <p className="text-xl md:text-2xl font-light italic text-balance">
                {
                  "«In you I’ve found the love of my life and my truest friend.»"
                }
              </p>
            </div>
          </div>

          <div className="gap-8 mb-16">
            <div className="text-center mt-16">
              <p className="text-muted-foreground leading-relaxed font-[family-name:var(--font-montserrat)] mb-10">
                Vi ser frem til å feire en av våre lykkeligste dager med de vi
                holder oss nært og kjært.
              </p>
              <p className="text-muted-foreground leading-relaxed font-[family-name:var(--font-montserrat)] mb-10">
                Vielsen finner plass i Sarpsborg kirke kl 13, før ferden går
                videre til mingling på Borregaard Hovedgård kl 14.30. Festen
                finner sted i nabolokalet, som vi kaller «Låven».{" "}
              </p>
              <p className="text-muted-foreground leading-relaxed font-[family-name:var(--font-montserrat)]">
                Vi gleder oss til en feiring av to mennesker som gir sitt ja til
                hverandre med dere.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
