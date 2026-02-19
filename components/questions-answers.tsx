"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";
import { CusdisComments } from "@/components/CusdisComments";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

type FAQ = {
  question: string;
  answer: ReactNode;
};

const faqs: FAQ[] = [
  {
    question: "Hvor booker vi hotell?",
    answer: (
      <>
        <p>
          Alle henvendelser og booking gjøres direkte til brudeparet på e-post:
        </p>
        <p className="mt-2">
          <a
            href="mailto:kentogmayliss@yahoo.com?subject=Hotell"
            className="text-primary hover:underline"
          >
            kentogmayliss@yahoo.com
          </a>
        </p>
        <p className="mt-2">Merk emnefelt med «Hotell».</p>
      </>
    ),
  },
  {
    question: "Hvor er hotellet?",
    answer: (
      <>
        <p className="font-medium">Adresse:</p>
        <p>
          Oscar Pedersens vei 45
          <br />
          1721 Sarpsborg
        </p>

        <p className="mt-4 font-medium">Nettside:</p>
        <p>
          <a
            href="https://borregaardhovedgard.no/"
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:underline break-all"
          >
            https://borregaardhovedgard.no/
          </a>
        </p>
      </>
    ),
  },
  {
    question: "Vi ønsker sen utsjekk",
    answer: (
      <p>Det er sen utsjekk for alle gjester i vårt bryllup, kl. 13.00.</p>
    ),
  },
  {
    question: "Hvordan kommer vi oss til vielsen/mottakelsen?",
    answer: (
      <>
        <p>
          Fra hotellet er det gangavstand til kirken – en hyggelig spasertur
          gjennom Kulåsparken.
        </p>
        <p className="mt-2">
          Fra Sarpsborg togstasjon tar det ca. 3 minutter med bil eller 9
          minutter til fots.
        </p>
        <p className="mt-2">
          Det finnes noen parkeringsplasser rett utenfor kirken og langs
          hovedveien i umiddelbar nærhet. I tillegg er det flere
          parkeringsmuligheter i sentrum.
        </p>
        <p className="mt-2">
          For de som foretrekker taxi, benyttes vanligvis Taxisentralen, tlf.{" "}
          <a href="tel:02600" className="text-primary hover:underline">
            02600
          </a>
          .
        </p>
      </>
    ),
  },
  {
    question: "Når bør vi møte opp til vielsen?",
    answer: <p>Vi anbefaler å møte opp i god tid. Senest kl. 12.40.</p>,
  },
  {
    question: "Hva gjør vi hvis vi kommer for sent til vielsen?",
    answer: (
      <>
        <p>Ta kontakt med brudens forlover for å høre om alt er i rute.</p>
        <p className="mt-2">
          Dersom vielsen allerede er i gang, vil dere få beskjed om å utebli og
          heller møte til mottakelsen.
        </p>
      </>
    ),
  },
  {
    question: "Hvordan kommer vi oss til mottakelsen etter vielsen?",
    answer: (
      <>
        <p>
          Fra kirken er det gangavstand til mottakelsen (ca. 12 minutter). Med
          bil tar det rundt 3 minutter.
        </p>
        <p className="mt-2">
          Parkering er tilgjengelig foran det store teglsteinsbygget, hvor
          resepsjonen og Restaurant Låven ligger.
        </p>
        <p className="mt-2">
          Det er ikke parkering ved Hovedhuset (hvit bygning), hvor minglingen
          finner sted.
        </p>
        <p className="mt-2">
          For de som foretrekker taxi, benyttes vanligvis Taxisentralen, tlf.{" "}
          <a href="tel:02600" className="text-primary hover:underline">
            02600
          </a>
          .
        </p>
        <p className="mt-2">
          Trenger dere hjelp med transport, ta kontakt med brudens forlover.
        </p>
      </>
    ),
  },
  {
    question: "Hva med parkerings-muligheter?",
    answer: (
      <>
        <p className="font-medium">Vielsen:</p>
        <ul className="list-disc pl-5">
          <li>
            Parkering rett utenfor kirken og langs veiene rundt (begrenset
            kapasitet)
          </li>
          <li>
            Parkeringshus på Storbyen Kjøpesenter, ca. 1 minutts gange fra
            kirken
          </li>
        </ul>

        <p className="mt-4 font-medium">Mottakelsen:</p>
        <ul className="list-disc pl-5">
          <li>Gode parkeringsmuligheter ved Borregaard Hotell</li>
          <li>Det skal ikke kjøres inn den store porten til Hovedhuset</li>
          <li>Følg hovedveien til Borregaard Hotell</li>
        </ul>
      </>
    ),
  },
  {
    question: "Finnes det lademuligheter for el-bil?",
    answer: (
      <p>Ja, det finnes et begrenset antall ladestasjoner på hotellet.</p>
    ),
  },
  {
    question: "Vil det bli servert mat etter vielsen?",
    answer: (
      <>
        <p>
          Ja. I mottakelsen vil det bli serververt lett fingermat, bobler og
          søtsaker.
        </p>
        <p className="mt-2">Kakekutting vil også finne sted før middagen.</p>
        <p className="mt-2">Det vil i tillegg være bar tilgjengelig.</p>
      </>
    ),
  },
  {
    question: "Hvordan blir middagen?",
    answer: (
      <>
        <p>
          Det vil bli servert tre-retters meny. Middagen holdes i Restaurant
          Låven. Alle våre gjester vil bli vist til restauranten.
        </p>
        <p className="mt-2">
          Spørsmål rundt allergier eller vegetar/annen kost, ta kontakt med
          brudesvenn Kajsa Lisa Høidahl.
        </p>
      </>
    ),
  },
  {
    question: "Vil mottakelse og middag være innendørs eller utendørs?",
    answer: (
      <>
        <p>
          Feiringen vil hovedsakelig foregå innendørs i Hovedhuset og Låven.
        </p>
        <p className="mt-2">
          Ved godt vær vil det også være mulig å mingle utendørs.
        </p>
      </>
    ),
  },
  {
    question: "Foregår feiringen i ulike lokaler?",
    answer: (
      <>
        <p>
          Ja. Mottakelsen vil finne sted i Hovedhuset, det hvite bygget på
          området. Hovedhuset har et svært stilfullt interiør, og danner en
          rolig og elegant ramme for starten av feiringen.
        </p>
        <p className="mt-2">
          Etter en stund vil gjestene bli vist videre til middagslokalet, Låven.
          Samtidig fortsetter minglingen der, slik at brudeparet får et rolig og
          privat øyeblikk til fotografering på området.
        </p>
        <p className="mt-2">
          Vi har valgt denne løsningen fordi Låven gir større rom for
          feststemning og dans. Det betyr at når middagen er ferdig, er rammene
          satt for en skikkelig feiring – med god stemning, musikk og dansegulv.
        </p>
        <img
          src="/kart.jpg"
          alt="Kart over området"
          className="w-full h-full object-cover min-h-[350px]"
        />
      </>
    ),
  },
  {
    question: "Vil det være bar i løpet av kvelden?",
    answer: (
      <>
        <p>Ja. Baren er åpen hele dagen.</p>
        <p className="mt-2">
          Det vil bli servert bobler eller øl under minglingen, samt drikke til
          hver rett under middagen.
        </p>
        <p className="mt-2">
          Øvrig drikke kan kjøpes i baren gjennom dagen og kvelden, og det vil
          være mulig å benytte baren også mellom rettene under middagen.
        </p>
      </>
    ),
  },
  {
    question: "Vil det bli servert nattmat?",
    answer: <p>Ja, nattmat vil bli servert.</p>,
  },
  {
    question: "Er barn velkomne?",
    answer: (
      <>
        <p>Vi ønsker å dele vielsen med både store og små.</p>
        <p className="mt-2">Middagen blir en voksenfeiring, uten barn.</p>
        <p className="mt-2">
          For langveisfarende gjester og spedbarn kan det gjøres unntak.
        </p>
        <p className="mt-2">
          Det finnes også mulighet for barnepass under middagen – ta kontakt for
          mer informasjon.
        </p>
      </>
    ),
  },
  {
    question: "Spørsmål om kleskoden?",
    answer: (
      <>
        <p>
          Kleskoden er ment som en veiledning, og bildene som er delt er kun
          eksempler.
        </p>
        <p className="mt-2">
          Brudeparet (bruden) ønsker et uttrykk med lyse farger som harmonerer
          med bryllupets dekor.
        </p>
        <p className="mt-2">
          Har dere spørsmål, ta kontakt med brudens forlover.
        </p>
      </>
    ),
  },
  {
    question: "Er det greit å ha med skift eller ekstra sko?",
    answer: (
      <>
        <p>
          Ja. Det er helt greit å ha med ekstra sko, og eventuelt skift når vi
          går over til fest og dans.
        </p>
        <p className="mt-2">
          Det vil være mulig å oppbevare bagasje på et eget rom på hotellet. Kun
          hotellets ansatte har tilgang.
        </p>
        <p className="mt-2">Merk at oppbevaring skjer på eget ansvar.</p>
      </>
    ),
  },
  {
    question: "Er høye hæler egnet på området?",
    answer: (
      <>
        <p>Høye hæler fungerer godt innendørs.</p>
        <p className="mt-2">
          Utendørs er underlaget delvis belagt med gårdssingel.
        </p>
      </>
    ),
  },
  {
    question: "Hva gjør jeg hvis jeg ønsker å holde tale?",
    answer: (
      <>
        <p>Alle henvendelser om taler rettes til toastmaster.</p>
        <p className="mt-2">Vi ber om at:</p>
        <ul className="list-disc pl-5">
          <li>nærmeste familie og venner holder talene på maks 3 minutter</li>
          <li>øvrige taler begrenses til 1–2 minutter</li>
        </ul>
      </>
    ),
  },
  {
    question: "Er det planlagt aktiviteter utover taler og dans?",
    answer: (
      <>
        <p>Ja. Under mottakelsen vil det være:</p>
        <ul className="list-disc pl-5">
          <li>live musikk</li>
          <li>gjestebok</li>
          <li>fotovegg</li>
        </ul>
        <p className="mt-2">
          Når minglingen flyttes til Låven, oppfordrer vi gjestene til å legge
          igjen råd og hilsener i egne bokser som er satt frem.
        </p>
      </>
    ),
  },
  {
    question: "Kan vi ta bilder under vielsen?",
    answer: (
      <>
        <p>Vi ber om at fotografering under vielsen begrenses.</p>
        <p className="mt-2">
          Vi har egen fotograf, og alle bilder vil bli delt med våre gjester.
        </p>
        <p className="mt-2">
          Vi har forståelse for at enkelte nære familiemedlemmer og venner
          ønsker å ta ett personlig bilde. Ta gjerne dette, men unngå å holde
          kamera eller telefon oppe gjennom hele vielsen.
        </p>
        <p className="mt-2">
          Vis hensyn til fotografen, og sørg for at kamera eller telefon er uten
          blitz og lyd.
        </p>
        <p className="mt-2">
          Men vi blir svært glade for bilder fra fest, middag og mingling.
        </p>
      </>
    ),
  },
  {
    question: "Vil brudeparet dele bilder i etterkant?",
    answer: (
      <p>
        Ja, bilder fra hele dagen vil bli delt enten på nettsiden eller at dere
        får tilsendt en link på e-post.
      </p>
    ),
  },
  {
    question: "Har bryllupet en hashtag?",
    answer: (
      <>
        <p>
          Ja: <span className="font-medium">#kentogmayliss</span>
        </p>
        <p className="mt-2">
          Vi setter utrolig stor pris på hvis dere vil sende oss bilder fra
          dagen vår &lt;3
        </p>
      </>
    ),
  },
  {
    question: "Vil det bli fest etter middagen?",
    answer: (
      <p>
        Absolutt. Etter middagen er det duket for fest med DJ, live musikk og
        dansegulv.
      </p>
    ),
  },
  {
    question: "Har brudeparet gaveønsker?",
    answer: (
      <>
        <p>Vi er så heldige at vi allerede har det meste vi trenger.</p>
        <p className="mt-2">
          Ønsker dere å gi en gave, vil et bidrag til bryllupsreisen bety mye
          for oss.
        </p>
        <p className="mt-2">
          Vi har også laget en liten ønskeliste hos Tilbords for de som
          foretrekker det.
        </p>

        <p className="mt-4 font-medium">Lenke til gavelisten:</p>
        <p>
          <a
            href="https://www.tilbords.no/min-side/onskelister/181538/"
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:underline break-all"
          >
            https://www.tilbords.no/min-side/onskelister/181538/
          </a>
        </p>
      </>
    ),
  },
  {
    question: "Når avsluttes kvelden?",
    answer: <p>Festen avsluttes kl. 02.00.</p>,
  },
  {
    question: "I don’t speak Norwegian – who can I contact with questions?",
    answer: <p>Please contact the maid of honor.</p>,
  },
];

export function QuestionsAnswers() {
  useEffect(() => {
    const scriptSrc = "https://cdn.commoninja.com/sdk/latest/commonninja.js";

    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const script = document.createElement("script");
      script.src = scriptSrc;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="qa" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light mb-4">
              Spørsmål og svar
            </h2>
            <div className="h-px w-24 bg-primary mx-auto mb-6" />
            <p className="text-muted-foreground font-[family-name:var(--font-montserrat)]">
              Alt du trenger å vite om vår store dag, samlet på ett sted!
            </p>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border-0 rounded-lg shadow-md px-6"
              >
                <AccordionTrigger className="text-left text-lg font-light hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-[family-name:var(--font-montserrat)] leading-relaxed pb-6 space-y-3">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Guest questions / forum
      
          <div className="py-16 text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Spørsmål fra gjester
            </h2>
            <div className="h-px w-24 bg-primary mx-auto mb-6" />
            <p className="text-muted-foreground font-[family-name:var(--font-montserrat)] mb-10">
              Hvis dere har andre spørsmål, spør oss gjerne i forumet nedenfor.
              Dere er nok ikke de eneste med spørsmålet!
            </p>

            <Card className="p-6 md:p-8 border-0 shadow-lg bg-card text-left">
              <div className="commonninja_component pid-34d3f9da-0d81-4756-827e-e236b1fcbb66" />
            </Card>
          </div>*/}
          <div className="py-16 text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Spørsmål fra gjester
            </h2>
            <div className="h-px w-24 bg-primary mx-auto mb-6" />
            <p className="text-muted-foreground font-[family-name:var(--font-montserrat)] mb-10">
              Hvis dere har andre spørsmål, spør oss gjerne i forumet nedenfor.
              Dere er nok ikke de eneste med spørsmålet!
            </p>
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto min-h-[80vh]">
                <Card className="p-6 md:p-8 border-0 shadow-lg bg-card text-left">
                  <CusdisComments
                    appId="b760e42b-4e10-4e81-9cd2-a79034b4e41c"
                    pageId="qa"
                    pageTitle="Spørsmål og svar"
                  />
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
