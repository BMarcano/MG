import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsHero } from "@/components/news-hero"
import { NewsGrid } from "@/components/news-grid"
import { NewsletterSignup } from "@/components/newsletter-signup"

export const metadata: Metadata = {
  title: "News & Insights - Media Geek UY",
  description: "Stay updated with the latest news, insights, and trends in digital media and technology.",
}

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <Header />
      <NewsHero />
      <NewsGrid />
      <NewsletterSignup />
      <Footer />
    </main>
  )
}
