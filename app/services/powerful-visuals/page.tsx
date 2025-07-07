import { Header } from "@/components/header"
import { VisualsHero } from "@/components/visuals-hero"
import { VisualsServices } from "@/components/visuals-services"
import { VisualsShowcase } from "@/components/visuals-showcase"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"

export default function PowerfulVisualsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <VisualsHero />
      <VisualsServices />
      <CallToAction />
      <Footer />
    </main>
  )
}
