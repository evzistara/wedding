import { Navigation } from "@/components/navigation";
import Hotell from "@/components/hotell";
import { Footer } from "@/components/footer";

export default function HotellPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <Hotell />
      </div>
      <Footer />
    </div>
  );
}
