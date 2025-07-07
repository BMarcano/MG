import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services-hero"
import { ServicesOverview } from "@/components/services-overview"
import { ServicesProcess } from "@/components/services-process"
import { CallToAction } from "@/components/call-to-action"

export const metadata: Metadata = {
  title: "Our Services - Media Geek UY",
  description: "Comprehensive multimedia and digital marketing services to elevate your brand.",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <Header />
      <ServicesHero />
      <ServicesOverview />
      <ServicesProcess />
      <CallToAction />
      <Footer />
    </main>
  )
}
