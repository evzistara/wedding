// app/hotell/page.tsx
import { Card } from "@/components/ui/card";
import { Bed, Coffee, MapPin, Phone, Mail } from "lucide-react";

export default function Hotell() {
  return (
    <section id="qa" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light mb-4">Hotell</h2>
            <div className="h-px w-24 bg-primary mx-auto mb-6" />
            <p className="text-muted-foreground font-[family-name:var(--font-montserrat)]">
              Gjør opplevelsen ekstra uforglemmelig og bo sammen med oss på
              Borregaard Hovedgaard i Sarpsborg.
            </p>
          </div>

          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-8">
              <Card className="p-8 border-0 shadow-lg bg-card">
                <p className="text-muted-foreground font-[family-name:var(--font-montserrat)] leading-relaxed mb-2">
                  Vi har gleden av å feire både mottakelsen og middagen på samme
                  sted som overnattingsmulighetene tilbys. Dette gjør det enkelt
                  og behagelig for alle som ønsker å bo i nærheten av feiringen.
                </p>

                <p className="text-muted-foreground font-[family-name:var(--font-montserrat)] leading-relaxed mb-2">
                  Opplev hotellrom på Borregaard Hovedgård – en av Norges mest
                  historiske herregårder med røtter tilbake til 1016. Her tilbys
                  14 rom i det herskapelige hovedhuset og 45 rom i den ombygde
                  låven – alle med moderne bekvemmeligheter i historiske
                  omgivelser.
                </p>

                <p className="text-muted-foreground font-[family-name:var(--font-montserrat)] leading-relaxed mb-2">
                  For dere som velger å overnatte her, betyr dette kort vei til
                  både vielsen, feiringen og en god seng etter en lang og
                  innholdsrik dag.
                </p>

                <p className="text-muted-foreground font-[family-name:var(--font-montserrat)] leading-relaxed mb-2">
                  Frokost er inkludert for hotellgjestene, og for de som ønsker
                  å utforske området, ligger vakre Kulåsparken bare en kort
                  spasertur unna – perfekt for en rolig morgenstund eller en
                  luftetur før dagen starter.
                </p>

                <p className="text-muted-foreground font-[family-name:var(--font-montserrat)] leading-relaxed mb-2">
                  Vi anbefaler å reservere rom i god tid, da helgen kan bli
                  travel og de beste rommene vil gå først. Dersom dere har
                  spørsmål om booking, priser eller tilgjengelighet, finner dere
                  mer informasjon i Q&amp;A eller ved å kontakte det kommende
                  brudeparet direkte.
                </p>

                <div className="space-y-3 mt-2">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span className="font-[family-name:var(--font-montserrat)]">
                      959 65 377
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="font-[family-name:var(--font-montserrat)]">
                      <a
                        href="mailto:kentogmayliss@yahoo.com"
                        className="text-primary hover:underline"
                      >
                        kentogmayliss@yahoo.com
                      </a>
                    </span>
                  </div>
                </div>
              </Card>

              <div className="grid gap-2 md:grid-cols-3">
                <Card className="p-6 border-0 shadow-lg bg-card text-center">
                  <div className="flex items-center justify-center gap-2 bg-primary/10 p-2 rounded-full mb-2">
                    <Bed className="h-6 w-6 text-primary" />
                    <p className="font-light text-lg leading-none">
                      Overnatting
                    </p>
                  </div>

                  <p className="text-muted-foreground font-[family-name:var(--font-montserrat)]">
                    Kort vei til feiring og fest
                  </p>
                </Card>

                <Card className="p-6 border-0 shadow-lg bg-card text-center">
                  <div className="flex items-center justify-center gap-2 bg-primary/10 p-2 rounded-full mb-2">
                    <Coffee className="h-6 w-6 text-primary" />{" "}
                    <p className="font-light text-lg leading-none">
                      Frokost inkludert
                    </p>
                  </div>

                  <p className="text-muted-foreground font-[family-name:var(--font-montserrat)] leading-snug">
                    En rolig start på dagen
                  </p>
                </Card>

                <Card className="p-6 border-0 shadow-lg bg-card text-center">
                  <div className="flex items-center justify-center gap-2 bg-primary/10 p-2 rounded-full mb-1">
                    <MapPin className="h-6 w-6 text-primary" />
                    <p className="font-light text-lg leading-none">Nærområde</p>
                  </div>

                  <p className="text-muted-foreground font-[family-name:var(--font-montserrat)] leading-snug">
                    Kulåsparken rett i nærheten
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
