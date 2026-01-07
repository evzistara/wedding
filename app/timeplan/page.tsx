import { Navigation } from "@/components/navigation"
import { Schedule } from "@/components/schedule"
import { Footer } from "@/components/footer"

export default function SchedulePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <Schedule />
      </div>
      <Footer />
    </div>
  )
}
