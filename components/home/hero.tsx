import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Camera, MapPin, BarChart3 } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            SmartWaste
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            AI-Powered Waste Management for Smarter Cities
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Revolutionize waste management with our affordable AI solution. Classify waste instantly, optimize
            collection routes, and build sustainable communities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/classify">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                <Camera className="mr-2 h-5 w-5" />
                Classify Waste Now
              </Button>
            </Link>
            <Link href="/collection">
              <Button size="lg" variant="outline" className="px-8 py-3">
                <MapPin className="mr-2 h-5 w-5" />
                Request Collection
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 backdrop-blur-lg bg-white/60 border-white/20 hover:bg-white/80 transition-all duration-300">
            <Camera className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI Classification</h3>
            <p className="text-gray-600">
              Upload waste images and get instant AI-powered classification with 95% accuracy
            </p>
          </Card>

          <Card className="p-6 backdrop-blur-lg bg-white/60 border-white/20 hover:bg-white/80 transition-all duration-300">
            <MapPin className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Smart Collection</h3>
            <p className="text-gray-600">Request collection with one tap and track real-time collection status</p>
          </Card>

          <Card className="p-6 backdrop-blur-lg bg-white/60 border-white/20 hover:bg-white/80 transition-all duration-300">
            <BarChart3 className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Analytics Dashboard</h3>
            <p className="text-gray-600">
              Monitor waste trends and optimize collection routes with predictive analytics
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
