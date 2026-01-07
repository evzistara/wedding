import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Heart className="h-5 w-5 text-primary fill-primary" />
          </div>
          <p className="text-muted-foreground font-[family-name:var(--font-montserrat)] mb-2">
            Mayliss & Kent
          </p>
          <p className="text-sm text-muted-foreground font-[family-name:var(--font-montserrat)]">
            27. juni
          </p>
          <div className="mt-6 text-xs text-muted-foreground">
            <p>For mer informasjon, se nedtrekksmeny.</p>
            <p>
              For ytterligere informasjon eller spørsmål, kontakt oss på
              example@example.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
