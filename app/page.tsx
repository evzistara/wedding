import { Hero } from "@/components/hero"
import { Navigation } from "@/components/navigation"
import { OurStory } from "@/components/our-story"
import { Footer } from "@/components/footer"

export default function WeddingPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <OurStory />
      <Footer />
    </div>
  )
}
