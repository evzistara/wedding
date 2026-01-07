import { Navigation } from "@/components/navigation";
import FridayMingle from "@/components/friday-mingle";
import { Footer } from "@/components/footer";

export default function QAPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <FridayMingle />
      </div>
      <Footer />
    </div>
  );
}
