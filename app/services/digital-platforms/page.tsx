import { Header } from "@/components/header"
import { PlatformsHero } from "@/components/platforms-hero"
import { PlatformsServices } from "@/components/platforms-services"
import { PlatformsTech } from "@/components/platforms-tech"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"

export default function DigitalPlatformsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <PlatformsHero />
      <PlatformsServices />
      <PlatformsTech />
      <CallToAction />
      <Footer />
    </main>
  )
}
