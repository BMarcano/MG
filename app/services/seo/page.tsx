import { Header } from "@/components/header"
import { SeoHero } from "@/components/seo-hero"
import { SeoServices } from "@/components/seo-services"
import { SeoResults } from "@/components/seo-results"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"

export default function SeoPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <SeoHero />
      <SeoServices />
      <SeoResults />
      <CallToAction />
      <Footer />
    </main>
  )
}
