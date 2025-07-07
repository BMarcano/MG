import { Header } from "@/components/header"
import { AiHero } from "@/components/ai-hero"
import { AiServices } from "@/components/ai-services"
import { AiCapabilities } from "@/components/ai-capabilities"
import { AiUseCases } from "@/components/ai-use-cases"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"

export default function ArtificialIntelligencePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <AiHero />
      <AiServices />
      <AiCapabilities />
      <AiUseCases />
      <CallToAction />
      <Footer />
    </main>
  )
}
