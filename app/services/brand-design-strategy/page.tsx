import { Header } from "@/components/header"
import { BrandHero } from "@/components/brand-hero"
import { BrandServices } from "@/components/brand-services"
import { BrandProcess } from "@/components/brand-process"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"

export default function BrandDesignStrategyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <BrandHero />
      <BrandServices />
      <BrandProcess />
      <CallToAction />
      <Footer />
    </main>
  )
}
