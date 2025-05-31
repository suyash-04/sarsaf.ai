import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Smartphone, Globe, Shield, Zap, Users, Recycle, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Classification",
    description: "Advanced CNN model trained on diverse waste types with 95% accuracy",
    badge: "Core Feature",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "PWA support for offline functionality and native app experience",
    badge: "User Experience",
  },
  {
    icon: Globe,
    title: "Multilingual Support",
    description: "Available in English, Nepali, and other local languages",
    badge: "Accessibility",
  },
  {
    icon: Shield,
    title: "Privacy Focused",
    description: "Local deployment option with complete data sovereignty",
    badge: "Security",
  },
  {
    icon: Zap,
    title: "Real-time Alerts",
    description: "Instant notifications for collection requests and recyclable detection",
    badge: "Efficiency",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Gamification system to encourage citizen participation",
    badge: "Engagement",
  },
  {
    icon: Recycle,
    title: "Circular Economy",
    description: "Connect recyclable waste with local recyclers automatically",
    badge: "Sustainability",
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description: "Forecast waste generation patterns for better resource planning",
    badge: "Intelligence",
  },
]

export function Features() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to transform waste management in your municipality
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="p-6 backdrop-blur-lg bg-white/60 border-white/20 hover:bg-white/80 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <Icon className="h-8 w-8 text-green-600 group-hover:scale-110 transition-transform" />
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
