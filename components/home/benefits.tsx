import { Card } from "@/components/ui/card"
import { CheckCircle, DollarSign, Leaf, Users, BarChart3, Clock } from "lucide-react"

const benefits = [
  {
    icon: DollarSign,
    title: "Cost Effective",
    description:
      "Reduce waste management costs by up to 40% through optimized collection routes and predictive analytics",
    stats: "40% Cost Reduction",
  },
  {
    icon: Leaf,
    title: "Environmental Impact",
    description: "Increase recycling rates and reduce landfill waste through better segregation and citizen engagement",
    stats: "60% More Recycling",
  },
  {
    icon: Users,
    title: "Citizen Engagement",
    description: "Empower citizens with easy-to-use tools and gamification to participate in waste management",
    stats: "85% User Satisfaction",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Decisions",
    description: "Make informed decisions with comprehensive analytics and waste generation predictions",
    stats: "95% Accuracy",
  },
  {
    icon: Clock,
    title: "Faster Response",
    description: "Reduce collection response time through automated alerts and optimized scheduling",
    stats: "50% Faster Response",
  },
  {
    icon: CheckCircle,
    title: "Compliance Ready",
    description: "Meet environmental regulations with detailed reporting and audit trails",
    stats: "100% Compliance",
  },
]

export function Benefits() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-green-50 to-blue-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Why Choose SmartWaste?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Proven benefits for municipalities and local governments worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card
                key={index}
                className="p-6 backdrop-blur-lg bg-white/80 border-white/20 hover:bg-white/90 transition-all duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-green-100 mr-4 group-hover:bg-green-200 transition-colors">
                    <Icon className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">{benefit.stats}</div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
