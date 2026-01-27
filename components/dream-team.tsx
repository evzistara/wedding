// app/dream-team/page.tsx
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Mic,
  Users,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";

type Person = {
  name: string;
  note?: string;
};

type DreamTeamGroup = {
  role: string;
  icon: LucideIcon;
  people: Person[];
};

type ContactRule = {
  title: string;
  text: string;
};

const dreamTeam: DreamTeamGroup[] = [
  {
    role: "Toastmaster",
    icon: Mic,
    people: [{ name: "Bjørn Tøgersen" }],
  },
  {
    role: "Forlovere",
    icon: HeartHandshake,
    people: [
      { name: "Andre Pajesø", note: "Brudgom" },
      { name: "Camilla Pedersen", note: "Brud" },
    ],
  },
  {
    role: "Brudesvenner",
    icon: Users,
    people: [
      { name: "Meliha Strmonja Lie Nilsen" },
      { name: "Kajsa Lisa Høidahl" },
      { name: "Jeanette Sylte Martinez" },
    ],
  },
];

const contactRules: ContactRule[] = [
  {
    title: "Taler",
    text: "For spørsmål om taler, henvend dere til vår toastmaster.",
  },
  {
    title: "Praktisk info",
    text: "For andre spørsmål, f.eks. kleskode, timeplan, transport og annet – ta kontakt med brudens forlover Camilla.",
  },
  {
    title: "Allergier & mat",
    text: "For spørsmål om allergier, matpreferanser og kaker – ta kontakt med Kajsa.",
  },
  {
    title: "Overnatting",
    text: "For spørsmål om overnatting – ta kontakt med brudeparet på maylissogkent@gmail.com.",
  },
];

export default function DreamTeam() {
  return (
    <section className="relative py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light mb-4">Dream-team</h2>
            <div className="h-px w-24 bg-primary mx-auto mb-6" />
          </div>
        </div>
      </div>

      {/* Content */}

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* People */}
          <div className="grid gap-8 md:grid-cols-3 items-stretch">
            {dreamTeam.map((group) => {
              const Icon = group.icon;
              return (
                <Card
                  key={group.role}
                  className="p-8 border-0 shadow-lg bg-card"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-light">{group.role}</h2>
                  </div>

                  <div className="space-y-4">
                    {group.people.map((p) => (
                      <div
                        key={p.name}
                        className="flex items-baseline justify-between gap-4"
                      >
                        <p className="text-lg font-light">{p.name}</p>
                        {p.note && (
                          <span className="text-xs tracking-widest uppercase text-muted-foreground">
                            {p.note}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Help / Contact guidance */}
          <Card className="p-8 border-0 shadow-lg bg-card">
            <h2 className="text-3xl font-light mb-4 text-center">
              Noe dere lurer på?
            </h2>
            <p className="text-center text-muted-foreground font-[family-name:var(--font-montserrat)] leading-relaxed">
              Se om dere finner det under Q&amp;A, eller bruk oversikten under.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {contactRules.map((rule) => (
                <div
                  key={rule.title}
                  className="rounded-2xl bg-secondary/60 p-6"
                >
                  <p className="text-lg font-light mb-2">{rule.title}</p>
                  <p className="text-muted-foreground font-[family-name:var(--font-montserrat)] leading-relaxed">
                    {rule.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="bg-primary/10 p-3 rounded-full">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <p className="font-[family-name:var(--font-montserrat)]">
                maylissogkent@gmail.com
              </p>
            </div>
          </Card>
          <div className="pt-6 flex justify-center">
            <Button asChild variant="outline">
              <Link href="/dream-team/intern">
                Kun for Dream Team (passord)
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
