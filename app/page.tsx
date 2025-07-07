import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Expertise } from "@/components/expertise"
import { Market } from "@/components/market"
import { BrandStrategy } from "@/components/brand-strategy"
import { Portfolio } from "@/components/portfolio"
import { News } from "@/components/news"
import { CallToAction } from "@/components/call-to-action"

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <Header />
      <Hero />
      <Expertise />
      <Market />
      <BrandStrategy />
      <CallToAction />
      <Footer />
    </main>
  )
}
