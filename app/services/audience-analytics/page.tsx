import { Header } from "@/components/header"
import { AnalyticsHero } from "@/components/analytics-hero"
import { AnalyticsServices } from "@/components/analytics-services"
import { AnalyticsDashboard } from "@/components/analytics-dashboard"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"

export default function AudienceAnalyticsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <AnalyticsHero />
      <AnalyticsServices />
      <AnalyticsDashboard />
      <CallToAction />
      <Footer />
    </main>
  )
}
