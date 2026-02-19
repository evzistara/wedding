import { Card } from "@/components/ui/card";

const scheduleItems = [
  {
    time: "13:00",
    title: "Vielse",
    description: "Vi gir våre ja",
  },
  {
    time: "14:30",
    title: "Mottakelse",
    description:
      "Feir med prosecco, kanapeer og kaker på Borregaard Hovedgaard mens vi venter på at brudeparet ankommer",
  },
  {
    time: "15:00",
    title: "Brudeparet ankommer",
    description: "",
  },
  {
    time: "15:15",
    title: "Kakekutting",
    description: "",
  },
  {
    time: "15:30",
    title: "Foto med alle gjester",
    description:
      "Brudeparet ønsker at det skal bli tatt foto av alle gjestene våre! Dette vil bli organisert samtidig som mingling flyttes over til middags- og festlokalet. ",
  },
  {
    time: "15:45",
    title: "Mingling i Låven",
    description:
      "Vi flytter oss over til «Låven» mens brudeparet tar noen siste bilder. Her kan dere nyte et glass prosecco mens dere tar bilder foran foto-standen. Eller kanskje dere ønsker å skrive noen gode råd til oss og legge konvolutten i «Gode råd-banken». ",
  },
  {
    time: "17:00",
    title: "Middag",
    description: "Velkomsttale og 3-retters middag med noe godt i glasset. ",
  },
  {
    time: "19:30",
    title: "Bryllupsvals og fest",
    description:
      "Brudeparet danser valsen sin før DJ-en åpner dansegulvet og vi er klare for fest!",
  },
  {
    time: "01:00",
    title: "Nattmat",
    description:
      "Nattmaten serveres når kvelden nærmer seg slutten. Søtsaker og snacks vil bli satt på bordene gjennom kvelden.",
  },
  {
    time: "02:00",
    title: "Avslutning",
    description: "",
  },
];

export function Schedule() {
  return (
    <section id="schedule" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light mb-4">Timeplan</h2>
            <div className="h-px w-24 bg-primary mx-auto" />
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[29px] md:left-1/2 top-0 bottom-0 w-px bg-primary/30 -translate-x-1/2" />

            <div className="space-y-12">
              {scheduleItems.map((item, index) => (
                <div
                  key={index}
                  className="relative flex flex-col md:flex-row gap-8 items-start md:items-center"
                >
                  {/* Timeline dot */}
                  <div className="absolute top-2 left-0 md:left-1/2 w-[60px] h-[60px] bg-primary rounded-full -translate-x-0 md:-translate-x-1/2 flex items-center justify-center z-10 border-4 border-background">
                    <div className="text-primary-foreground text-xs font-[family-name:var(--font-montserrat)] font-semibold text-center leading-tight">
                      {item.time}
                    </div>
                  </div>

                  {/* Content */}
                  <Card
                    className={`flex-1 p-8 ml-20 md:ml-0 border-0 shadow-md ${
                      index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                    } md:w-[calc(50%-30px)]`}
                  >
                    <h3 className="text-2xl font-light mb-2">{item.title}</h3>
                    <p className="text-muted-foreground font-[family-name:var(--font-montserrat)]">
                      {item.description}
                    </p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
