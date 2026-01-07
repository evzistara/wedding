import { Navigation } from "@/components/navigation"
import { EventDetails } from "@/components/event-details"
import { Footer } from "@/components/footer"

export default function VenuePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <EventDetails />
      </div>
      <Footer />
    </div>
  )
}
