import { Header } from "@/components/header"
import { ProductionHero } from "@/components/production-hero"
import { ProductionServices } from "@/components/production-services"
import { ProductionPortfolio } from "@/components/production-portfolio"
import { ProductionProcess } from "@/components/production-process"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"

export default function ProductionPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <ProductionHero />
      <ProductionServices />
      <ProductionProcess />
      <CallToAction />
      <Footer />
    </main>
  )
}
