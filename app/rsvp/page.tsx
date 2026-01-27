import { Navigation } from "@/components/navigation";
import RSVP from "@/components/rsvp";
import { Footer } from "@/components/footer";

export default function RSVPPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <RSVP />
      </div>
      <Footer />
    </div>
  );
}
