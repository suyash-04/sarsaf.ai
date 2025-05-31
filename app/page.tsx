import { Hero } from "@/components/home/hero"
import { Features } from "@/components/home/features"
import { Benefits } from "@/components/home/benefits"
import { CTA } from "@/components/home/cta"
import { Navigation } from "@/components/navigation"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <Navigation />
      <Hero />
      <Features />
      <Benefits />
      <CTA />
    </div>
  )
}
