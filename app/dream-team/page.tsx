import { Navigation } from "@/components/navigation";
import DreamTeam from "@/components/dream-team";
import { Footer } from "@/components/footer";

export default function QAPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <DreamTeam />
      </div>
      <Footer />
    </div>
  );
}
