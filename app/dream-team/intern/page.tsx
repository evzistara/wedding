"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Navigation } from "@/components/navigation";

const STORAGE_KEY = "dream_team_unlocked_v1";
const PASSWORD = "dreamteam2026";

export default function DreamTeamInternPage() {
  const [pw, setPw] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "true") setUnlocked(true);
  }, []);

  const handleUnlock = () => {
    if (pw.trim() === PASSWORD) {
      setUnlocked(true);
      setError(false);
      localStorage.setItem(STORAGE_KEY, "true");
    } else {
      setError(true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setUnlocked(false);
    setPw("");
    setError(false);
  };

  return (
    <>
      {/* ✅ Navigation always visible */}
      <Navigation />

      {/* LOCKED STATE */}
      {!unlocked ? (
        <section className="min-h-screen flex items-center justify-center bg-secondary px-4 pt-24">
          <Card className="w-full max-w-md p-8 border-0 shadow-lg bg-card text-center">
            <h1 className="text-3xl font-light mb-3">Kun for Dream Team</h1>

            <p className="text-muted-foreground font-[family-name:var(--font-montserrat)] mb-6">
              Skriv inn passordet for å se intern informasjon.
            </p>

            <Input
              type="password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              placeholder="Passord"
              className="bg-background"
              onKeyDown={(e) => e.key === "Enter" && handleUnlock()}
            />

            {error && (
              <p className="mt-3 text-sm text-red-500">
                Feil passord — prøv igjen.
              </p>
            )}

            <Button className="w-full mt-6" onClick={handleUnlock}>
              Logg inn
            </Button>
          </Card>
        </section>
      ) : (
        /* UNLOCKED STATE */
        <main className="min-h-screen bg-background pt-20">
          <section className="py-24 bg-secondary">
            <div className="container mx-auto px-4 text-center max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-light mb-4">
                Dream Team – Intern info
              </h1>
              <div className="h-px w-24 bg-primary mx-auto mb-6" />
              <p className="text-muted-foreground font-[family-name:var(--font-montserrat)] text-lg">
                Info om fredagsmiddag og spesiell overnatting.
              </p>

              <Button variant="outline" className="mt-8" onClick={handleLogout}>
                Logg ut
              </Button>
            </div>
          </section>

          <section className="py-24">
            <div className="container mx-auto px-4 max-w-5xl space-y-8">
              <Card className="p-8 border-0 shadow-lg bg-card">
                <h2 className="text-3xl font-light mb-4">Fredagsmiddag</h2>
                <p className="text-muted-foreground font-[family-name:var(--font-montserrat)]">
                  Intern info om middag, tidspunkt og deltakere.
                </p>
              </Card>

              <Card className="p-8 border-0 shadow-lg bg-card">
                <h2 className="text-3xl font-light mb-4">
                  Spesiell overnatting
                </h2>
                <p className="text-muted-foreground font-[family-name:var(--font-montserrat)]">
                  Intern info om rom, fordeling og booking.
                </p>
              </Card>
            </div>
          </section>
        </main>
      )}
    </>
  );
}
