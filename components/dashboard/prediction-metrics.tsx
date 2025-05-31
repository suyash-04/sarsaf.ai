import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle } from "lucide-react"

export function PredictionMetrics() {
  const metrics = [
    {
      title: "Total Waste Predicted",
      value: "1,247 tons",
      change: "+12%",
      trend: "up",
      icon: TrendingUp,
      color: "text-blue-600",
    },
    {
      title: "Recycling Rate",
      value: "68%",
      change: "+5%",
      trend: "up",
      icon: CheckCircle,
      color: "text-green-600",
    },
    {
      title: "Collection Efficiency",
      value: "85%",
      change: "-2%",
      trend: "down",
      icon: TrendingDown,
      color: "text-orange-600",
    },
    {
      title: "Areas Needing Attention",
      value: "3",
      change: "0",
      trend: "stable",
      icon: AlertTriangle,
      color: "text-red-600",
    },
  ]

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => {
        const Icon = metric.icon
        return (
          <Card key={index} className="backdrop-blur-lg bg-white/80 border-white/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              <Icon className={`h-4 w-4 ${metric.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className="text-xs text-muted-foreground">
                <span
                  className={`${
                    metric.trend === "up"
                      ? "text-green-600"
                      : metric.trend === "down"
                        ? "text-red-600"
                        : "text-gray-600"
                  }`}
                >
                  {metric.change}
                </span>{" "}
                from last month
              </p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
