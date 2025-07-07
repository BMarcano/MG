import { Header } from "@/components/header"
import { CommunityHero } from "@/components/community-hero"
import { CommunityServices } from "@/components/community-services"
import { CommunityFeatures } from "@/components/community-features"
import { CommunitySuccess } from "@/components/community-success"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"

export default function CommunityManagementPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <CommunityHero />
      <CommunityServices />
      <CommunityFeatures />
      <CommunitySuccess />
      <CallToAction />
      <Footer />
    </main>
  )
}
