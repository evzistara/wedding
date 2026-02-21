import { Card } from "@/components/ui/card";
import { MapPin, Calendar, Clock } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function EventDetails() {
  return (
    <section id="details" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light mb-4">
              Event Detaljer
            </h2>
            <div className="h-px w-24 bg-primary mx-auto" />
          </div>
          {/* VIELSE + BILDE + MOTTAKELSE */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* VIELSE */}
            <Card className="p-8 border-0 shadow-lg bg-card">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-l font-light mb-2 font-[family-name:var(--font-montserrat)]">
                    Vielse
                  </h3>
                  <p className="text-sm text-muted-foreground font-[family-name:var(--font-montserrat)]">
                    Lørdag, 27. juni 2026
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-l font-light mb-2 font-[family-name:var(--font-montserrat)]">
                    Tid
                  </h3>
                  <p className="text-sm text-muted-foreground font-[family-name:var(--font-montserrat)]">
                    Kl. 13:00
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-l font-light mb-2 font-[family-name:var(--font-montserrat)]">
                    Adresse
                  </h3>
                  <p className="text-sm text-muted-foreground font-[family-name:var(--font-montserrat)]">
                    Glengsgata 33
                    <br />
                    1706 Sarpsborg
                  </p>
                </div>
              </div>
            </Card>

            {/* BILDE */}
            <Card className="p-0 overflow-hidden border-0 shadow-lg">
              <img
                src="/vielse.jpg"
                alt="Venue"
                className="w-full h-full object-cover min-h-[350px]"
              />
            </Card>

            {/* MOTTAKELSE */}
            <Card className="p-8 border-0 shadow-lg bg-card">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-l font-light mb-2 font-[family-name:var(--font-montserrat)]">
                    Mottakelse
                  </h3>
                  <p className="text-sm text-muted-foreground font-[family-name:var(--font-montserrat)]">
                    Sarpsborg Borregaard Hovedgaard
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-l font-light mb-2 font-[family-name:var(--font-montserrat)]">
                    Tid
                  </h3>
                  <p className="text-sm text-muted-foreground font-[family-name:var(--font-montserrat)]">
                    Kl. 14:30
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-l font-light mb-2 font-[family-name:var(--font-montserrat)]">
                    Adresse
                  </h3>
                  <p className="text-sm text-muted-foreground font-[family-name:var(--font-montserrat)]">
                    Oscar Pedersens vei 45
                    <br />
                    1721 Sarpsborg
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="mt-8 p-8 border-0 shadow-lg bg-card">
            <h3 className="text-2xl font-light mb-4 text-center font-[family-name:var(--font-montserrat)]">
              Middag og fest
            </h3>
            <p className="text-center text-muted-foreground font-[family-name:var(--font-montserrat)] leading-relaxed">
              Vi ønsker å dele vielsen med både store og små. Barna er også
              hjertelig velkomne til mottakelsen, hvor det vil bli servert noe
              søtt som vi håper faller i smak.
            </p>
            <p className="text-center text-muted-foreground font-[family-name:var(--font-montserrat)] leading-relaxed">
              Selve middagen og festen blir en voksenfeiring, og gjennomføres
              derfor uten barn. Middag og fest arrangeres i nabolokalet – Låven.
              💛
            </p>
          </Card>

          <Card className="mt-8 p-8 border-0 shadow-lg bg-card">
            <h3 className="text-2xl font-light mb-4 text-center font-[family-name:var(--font-montserrat)]">
              Parkering
            </h3>
            <p className="text-center text-muted-foreground font-[family-name:var(--font-montserrat)] leading-relaxed">
              Parkering rett utenfor kirken eller parkeringshuset til Storbyen
              kjøpesenter som er rett ved kirken. For mer info om parkering og
              transport, se Q&A
            </p>
          </Card>

          <Card className="mt-8 p-8 border-0 shadow-lg bg-card">
            <h3 className="text-2xl font-light mb-4 text-center font-[family-name:var(--font-montserrat)]">
              Kleskode
            </h3>
            <p className="text-center text-muted-foreground font-[family-name:var(--font-montserrat)] leading-relaxed">
              Formell Svart dress for herrene og gulvlengde/ankellengde i
              lignende disse fargene for damene.
            </p>
            <img
              src="/kleskode.png"
              alt="Kleskode til bryllupet"
              className="mx-auto mt-4"
            />
          </Card>

          <Accordion type="single" collapsible className="mt-8">
            <AccordionItem
              value="gallery"
              className="bg-card border-0 rounded-lg shadow-lg overflow-hidden"
            >
              <AccordionTrigger className="px-8 py-6 hover:no-underline">
                <h3 className="text-2xl font-light font-[family-name:var(--font-montserrat)] text-center w-full">
                  Se oversikt over område
                </h3>
              </AccordionTrigger>

              <AccordionContent className="px-8 pb-8">
                <div className="rounded-2xl overflow-hidden shadow-md">
                  <img src="/kart.jpg" alt="Bilde" className="w-full h-auto" />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
