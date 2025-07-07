import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WPTGHero } from "@/components/wptg-hero"
import { WPTGFamily } from "@/components/wptg-family"
import { WPTGStats } from "@/components/wptg-stats"
import { WPTGPartnership } from "@/components/wptg-partnership"
import { WPTGGlobalPresence } from "@/components/wptg-global-presence"

export const metadata: Metadata = {
  title: "WPTG Group - Media Geek UY",
  description: "Learn about our partnership with WPTG Group and our global media network.",
}

export default function WptgGroupPage() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <Header />
      <WPTGHero />
      <WPTGFamily />
      <WPTGStats />
      <WPTGPartnership />
      <WPTGGlobalPresence />
      <Footer />
    </main>
  )
}
