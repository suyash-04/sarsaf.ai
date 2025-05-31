import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Camera, MapPin, AlertTriangle, TrendingUp, CheckCircle } from "lucide-react"

export function AdminStats() {
  const stats = [
    {
      title: "Active Users",
      value: "1,247",
      change: "+12%",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Classifications Today",
      value: "89",
      change: "+23%",
      icon: Camera,
      color: "text-green-600",
    },
    {
      title: "Collection Requests",
      value: "34",
      change: "+8%",
      icon: MapPin,
      color: "text-purple-600",
    },
    {
      title: "Active Alerts",
      value: "7",
      change: "-15%",
      icon: AlertTriangle,
      color: "text-red-600",
    },
    {
      title: "System Uptime",
      value: "99.9%",
      change: "0%",
      icon: CheckCircle,
      color: "text-green-600",
    },
    {
      title: "Processing Speed",
      value: "1.2s",
      change: "-5%",
      icon: TrendingUp,
      color: "text-blue-600",
    },
  ]

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon
        return (
          <Card key={index} className="backdrop-blur-lg bg-white/80 border-white/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <Icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span
                  className={`${
                    stat.change.startsWith("+")
                      ? "text-green-600"
                      : stat.change.startsWith("-")
                        ? "text-red-600"
                        : "text-gray-600"
                  }`}
                >
                  {stat.change}
                </span>{" "}
                from yesterday
              </p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
