import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Team } from "@/components/team"

export const metadata: Metadata = {
  title: "Our Team - Media Geek UY",
  description: "Meet the talented professionals behind Media Geek UY's innovative multimedia solutions.",
}

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <Header />
      <Team />
      <Footer />
    </main>
  )
}
