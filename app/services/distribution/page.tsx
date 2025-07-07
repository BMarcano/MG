import { Header } from "@/components/header"
import { DistributionHero } from "@/components/distribution-hero"
import { DistributionServices } from "@/components/distribution-services"
import { DistributionChannels } from "@/components/distribution-channels"
import { DistributionMetrics } from "@/components/distribution-metrics"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"

export default function DistributionPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <DistributionHero />
      <DistributionServices />
      <DistributionChannels />
      <DistributionMetrics />
      <CallToAction />
      <Footer />
    </main>
  )
}
