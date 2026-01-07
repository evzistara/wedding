import { Card } from "@/components/ui/card";
import { MapPin, Calendar, Clock } from "lucide-react";

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
                src="/elegant-garden-wedding-venue-napa-valley.jpg"
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
        </div>
      </div>
    </section>
  );
}
