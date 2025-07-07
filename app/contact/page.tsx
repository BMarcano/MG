import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { ContactMap } from "@/components/contact-map"
import { ContactCTA } from "@/components/contact-cta"

export const metadata: Metadata = {
  title: "Contact Us - Media Geek UY",
  description: "Get in touch with Media Geek UY for your multimedia and digital marketing needs.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <Header />
      <ContactHero />
      <div className="grid lg:grid-cols-2 gap-8 container mx-auto px-4 py-16">
        <ContactForm />
        <ContactInfo />
      </div>
      <ContactMap />
      <ContactCTA />
      <Footer />
    </main>
  )
}
