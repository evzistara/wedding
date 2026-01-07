// app/friday-mingle/page.tsx
import { Card } from "@/components/ui/card";
import { Music, Wine, Clock, MapPin } from "lucide-react";

export default function FridayMingle() {
  return (
    <section id="friday-mingle" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light mb-4">
              Friday Mingle
            </h2>
            <div className="h-px w-24 bg-primary mx-auto mb-6" />
          </div>

          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid gap-8 md:grid-cols-3 items-stretch">
                {/* Info */}
                <Card className="p-8 border-0 shadow-lg bg-card md:col-span-2">
                  <p className="text-muted-foreground font-[family-name:var(--font-montserrat)] leading-relaxed mb-2">
                    Vi ønsker hjertelig velkommen til en intim og hyggelig
                    samling for dere som bor på hotellet sammen med oss denne
                    helgen. Kvelden byr på live musikk fra Kirsti Hille med
                    følge, en koselig bar med forfriskende drikke, samt søtsaker
                    og små delikate kanapeer. Minglingen starter kl. 19.
                  </p>

                  <p className="text-muted-foreground font-[family-name:var(--font-montserrat)] leading-relaxed mb-2">
                    Vi avrunder kvelden litt tidlig slik at alle får hvile godt
                    før den store dagen. Musikkinnslagene avsluttes kl. 22, og
                    bruden trekker nok tilbake til sitt rom allerede før dette.
                  </p>

                  <p className="text-muted-foreground font-[family-name:var(--font-montserrat)] leading-relaxed">
                    For dere som ønsker et større måltid før minglingen, er det
                    mulig å bestille room service til rommet. Restauranten
                    holder stengt denne kvelden da den forberedes til
                    bryllupsmiddagen. Sarpsborg har også flere koselige
                    restauranter – se gjerne forslagene i Q&amp;A.
                  </p>
                </Card>

                {/* Details */}
                <Card className="p-8 border-0 shadow-lg bg-card">
                  <h2 className="text-2xl font-light">Detaljer</h2>

                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-m text-muted-foreground font-[family-name:var(--font-montserrat)]">
                          Tid
                        </p>
                        <p className="text-sm font-light font-[family-name:var(--font-montserrat)]">
                          Kl. 19:00 - 22:00
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Music className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-m text-muted-foreground font-[family-name:var(--font-montserrat)]">
                          Live musikk
                        </p>
                        <p className="text-sm font-light font-[family-name:var(--font-montserrat)]">
                          Kirsti Hille
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Wine className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-m text-muted-foreground font-[family-name:var(--font-montserrat)]">
                          Servering
                        </p>
                        <p className="text-sm font-light font-[family-name:var(--font-montserrat)]">
                          Bar, søtsaker &amp; kanapeer
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-m text-muted-foreground font-[family-name:var(--font-montserrat)]">
                          Sted
                        </p>
                        <p className="text-sm font-light font-[family-name:var(--font-montserrat)]">
                          Borregaard Hovedgård
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Closing */}
              <Card className="mt-8 p-8 border-0 shadow-lg bg-card">
                <p className="text-center text-muted-foreground font-[family-name:var(--font-montserrat)] leading-relaxed">
                  Bli med på en hel helg med god mat, god drikke og hyggelig
                  selskap! <br />
                  Vi ser frem til å skape lykkelige minner med dere {"<3"}
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
