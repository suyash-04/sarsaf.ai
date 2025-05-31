import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Download, Github } from "lucide-react"
import Link from "next/link"

export function CTA() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <Card className="p-12 backdrop-blur-lg bg-gradient-to-r from-green-600/10 to-blue-600/10 border-white/20 text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Ready to Transform Your City?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join municipalities worldwide using SmartWaste to build cleaner, smarter, and more sustainable communities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/classify">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="px-8 py-3">
              <Download className="mr-2 h-5 w-5" />
              Download Brochure
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3">
              <Github className="mr-2 h-5 w-5" />
              View on GitHub
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Municipalities</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">1M+</div>
              <div className="text-gray-600">Waste Classifications</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-600">Accuracy Rate</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
