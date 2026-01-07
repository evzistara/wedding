import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Hvordan kommer vi oss til vielsen?",
    answer:
      "The Garden Estate is located in Napa Valley, about 1.5 hours from San Francisco. We recommend renting a car or using a ride-share service. Parking is available on-site. For guests staying at our recommended hotels, we will provide shuttle service to and from the venue.",
  },
  {
    question: "Når bør vi møte opp til vielsen?",
    answer:
      "We have reserved room blocks at the Napa Valley Lodge and the Harvest Inn. Please mention our wedding when booking to receive the group rate. Both hotels are within 15 minutes of the venue. More details are available on our website.",
  },
  {
    question: "Hva gjør vi hvis vi kommer for sent til vielsen?",
    answer:
      "Due to venue capacity, we are only able to accommodate guests formally invited on your invitation. If you received a plus-one, their name will be indicated on your invitation. Please reach out if you have any questions.",
  },
  {
    question: "Hvordan kommer vi oss til mottakelsen?",
    answer:
      "Both the ceremony and reception will be held outdoors in the garden. However, the venue has covered areas and heaters available in case of unexpected weather. We recommend bringing a light jacket for the evening.",
  },
  {
    question: "Spørsmål om parkering?",
    answer:
      "While we love your little ones, we have decided to make our wedding an adults-only celebration. We hope this allows parents to relax and enjoy the evening. Thank you for understanding!",
  },
  {
    question: "Hvor er hotellet?",
    answer:
      "Please indicate any dietary restrictions or allergies when you RSVP. Our caterer is experienced in accommodating various dietary needs including vegetarian, vegan, gluten-free, and other allergies.",
  },
  {
    question: "Er det mulig med middag for gjester som kommer på fredag?",
    answer:
      "Your presence at our wedding is the greatest gift of all! However, if you wish to honor us with a gift, we have registered at Crate & Barrel and Zola. We also have a honeymoon fund option available.",
  },
  {
    question: "Vil det bli matservering etter vielsen, før middag?",
    answer:
      "We have a live band and DJ scheduled for the evening. Get ready to dance under the stars! Please share your favorite songs when you RSVP so we can add them to our playlist.",
  },
  {
    question: "Vil bryllupet være innendørs eller utendørs?",
    answer:
      "We have a live band and DJ scheduled for the evening. Get ready to dance under the stars! Please share your favorite songs when you RSVP so we can add them to our playlist.",
  },
  {
    question: "Er barn velkomne?",
    answer:
      "We have a live band and DJ scheduled for the evening. Get ready to dance under the stars! Please share your favorite songs when you RSVP so we can add them to our playlist.",
  },
  {
    question: "Hvordan melder vi fra om allergier eller matpreferanser?",
    answer:
      "We have a live band and DJ scheduled for the evening. Get ready to dance under the stars! Please share your favorite songs when you RSVP so we can add them to our playlist.",
  },
  {
    question: "Vil det serveres nattmat?",
    answer:
      "We have a live band and DJ scheduled for the evening. Get ready to dance under the stars! Please share your favorite songs when you RSVP so we can add them to our playlist.",
  },
  {
    question: "Har brudeparet en ønskeliste?",
    answer:
      "We have a live band and DJ scheduled for the evening. Get ready to dance under the stars! Please share your favorite songs when you RSVP so we can add them to our playlist.",
  },
  {
    question: "Vil det bli fest etter middag?",
    answer:
      "We have a live band and DJ scheduled for the evening. Get ready to dance under the stars! Please share your favorite songs when you RSVP so we can add them to our playlist.",
  },
  {
    question: "Vil det være bar iløpet av kvelden?",
    answer:
      "We have a live band and DJ scheduled for the evening. Get ready to dance under the stars! Please share your favorite songs when you RSVP so we can add them to our playlist.",
  },
  {
    question: "Hvis jeg har spørsmål om kleskoden?",
    answer:
      "We have a live band and DJ scheduled for the evening. Get ready to dance under the stars! Please share your favorite songs when you RSVP so we can add them to our playlist.",
  },
  {
    question: "Er det greit å ha med skift?",
    answer:
      "We have a live band and DJ scheduled for the evening. Get ready to dance under the stars! Please share your favorite songs when you RSVP so we can add them to our playlist.",
  },
  {
    question: "Er høye hæler egnet på området?",
    answer:
      "We have a live band and DJ scheduled for the evening. Get ready to dance under the stars! Please share your favorite songs when you RSVP so we can add them to our playlist.",
  },
  {
    question: "Hva gjør jeg hvis jeg ønsker å holde en tale?",
    answer:
      "We have a live band and DJ scheduled for the evening. Get ready to dance under the stars! Please share your favorite songs when you RSVP so we can add them to our playlist.",
  },
  {
    question: "Er det planlagt aktiviteter utover taler og dans?",
    answer:
      "We have a live band and DJ scheduled for the evening. Get ready to dance under the stars! Please share your favorite songs when you RSVP so we can add them to our playlist.",
  },
  {
    question: "Kan vi ta bilder under vielsen?",
    answer:
      "We have a live band and DJ scheduled for the evening. Get ready to dance under the stars! Please share your favorite songs when you RSVP so we can add them to our playlist.",
  },
  {
    question: "Vil brudeparet dele bilder i etterkant?",
    answer:
      "We have a live band and DJ scheduled for the evening. Get ready to dance under the stars! Please share your favorite songs when you RSVP so we can add them to our playlist.",
  },
  {
    question: "Har brudeparet et bryllupshashtag?",
    answer:
      "We have a live band and DJ scheduled for the evening. Get ready to dance under the stars! Please share your favorite songs when you RSVP so we can add them to our playlist.",
  },
  {
    question: "Når avsluttes kvelden?",
    answer:
      "We have a live band and DJ scheduled for the evening. Get ready to dance under the stars! Please share your favorite songs when you RSVP so we can add them to our playlist.",
  },
  {
    question: "Vi ønsker sen utsjekk, hvem tar vi kontakt med?",
    answer:
      "We have a live band and DJ scheduled for the evening. Get ready to dance under the stars! Please share your favorite songs when you RSVP so we can add them to our playlist.",
  },
  {
    question: "I don’t speak Norwegian, who do I contact for my questions?",
    answer:
      "We have a live band and DJ scheduled for the evening. Get ready to dance under the stars! Please share your favorite songs when you RSVP so we can add them to our playlist.",
  },
];

export function QuestionsAnswers() {
  return (
    <section id="qa" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light mb-4">
              Spørsmål og svar
            </h2>
            <div className="h-px w-24 bg-primary mx-auto mb-6" />
            <p className="text-muted-foreground font-[family-name:var(--font-montserrat)]">
              Alt du trenger å vite om vår store dag, samlet på ett sted!
            </p>
          </div>

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
                <AccordionContent className="text-muted-foreground font-[family-name:var(--font-montserrat)] leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mb-16">
            <div className="h-px w-24 bg-primary mx-auto mb-6" />
            <p className="text-muted-foreground font-[family-name:var(--font-montserrat)]">
              Hvis dere har andre spørsmål, spør oss gjerne i forumet nedenfor;
              Dere er nok ikke de eneste med spørsmålet!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
