import { Header } from "@/components/header"
import { CopywritingHero } from "@/components/copywriting-hero"
import { CopywritingServices } from "@/components/copywriting-services"
import { CopywritingPortfolio } from "@/components/copywriting-portfolio"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"

export default function CopywritingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <CopywritingHero />
      <CopywritingServices />
      <CopywritingPortfolio />
      <CallToAction />
      <Footer />
    </main>
  )
}
