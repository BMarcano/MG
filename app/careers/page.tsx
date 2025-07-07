import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CareersHero } from "@/components/careers-hero"
import { CompanyCulture } from "@/components/company-culture"
import { Benefits } from "@/components/benefits"
import { CurrentOpenings } from "@/components/current-openings"
import { ApplicationProcess } from "@/components/application-process"

export const metadata: Metadata = {
  title: "Careers - Join Our Team | Media Geek UY",
  description:
    "Join our innovative team at Media Geek UY. Explore career opportunities in digital media, content production, and technology.",
  keywords: "careers, jobs, media geek, digital media jobs, content production careers, uruguay jobs",
}

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <Header />
      <CareersHero />
      <CompanyCulture />
      <Benefits />
      <CurrentOpenings />
      <ApplicationProcess />
      <Footer />
    </main>
  )
}
