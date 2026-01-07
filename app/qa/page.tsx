import { Navigation } from "@/components/navigation"
import { QuestionsAnswers } from "@/components/questions-answers"
import { Footer } from "@/components/footer"

export default function QAPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <QuestionsAnswers />
      </div>
      <Footer />
    </div>
  )
}
