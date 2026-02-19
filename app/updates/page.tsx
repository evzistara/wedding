import { Navigation } from "@/components/navigation";
import UpdatesPage from "@/components/updates";
import { Footer } from "@/components/footer";

export default function UpdatesPageWrapper() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <UpdatesPage />
      </div>
      <Footer />
    </div>
  );
}
