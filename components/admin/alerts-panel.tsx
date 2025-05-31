"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertTriangle, CheckCircle, Clock, X } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const alerts = [
  {
    id: 1,
    type: "high_volume",
    title: "High Volume Area Detected",
    description: "Downtown area has 8 collection requests",
    severity: "high",
    timestamp: "2 hours ago",
    area: "Downtown",
  },
  {
    id: 2,
    type: "recyclable_detected",
    title: "Recyclable Material Found",
    description: "Large amount of plastic detected in Industrial area",
    severity: "medium",
    timestamp: "4 hours ago",
    area: "Industrial",
  },
  {
    id: 3,
    type: "system",
    title: "Model Performance",
    description: "Classification accuracy dropped to 89%",
    severity: "low",
    timestamp: "1 day ago",
    area: "System",
  },
  {
    id: 4,
    type: "collection_due",
    title: "Collection Overdue",
    description: "Suburban area collection is 2 days overdue",
    severity: "high",
    timestamp: "6 hours ago",
    area: "Suburban",
  },
]

export function AlertsPanel() {
  const { toast } = useToast()

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "destructive"
      case "medium":
        return "default"
      case "low":
        return "secondary"
      default:
        return "secondary"
    }
  }

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "high":
        return AlertTriangle
      case "medium":
        return Clock
      case "low":
        return CheckCircle
      default:
        return Clock
    }
  }

  const handleResolveAlert = (alertId: number) => {
    toast({
      title: "Alert Resolved",
      description: "The alert has been marked as resolved",
    })
  }

  const handleDismissAlert = (alertId: number) => {
    toast({
      title: "Alert Dismissed",
      description: "The alert has been dismissed",
    })
  }

  return (
    <Card className="backdrop-blur-lg bg-white/80 border-white/20">
      <CardHeader>
        <CardTitle className="flex items-center">
          <AlertTriangle className="mr-2 h-5 w-5" />
          Active Alerts
        </CardTitle>
        <CardDescription>System alerts and notifications requiring attention</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {alerts.map((alert) => {
            const Icon = getSeverityIcon(alert.severity)
            return (
              <div key={alert.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                <Icon
                  className={`h-5 w-5 mt-0.5 ${
                    alert.severity === "high"
                      ? "text-red-600"
                      : alert.severity === "medium"
                        ? "text-yellow-600"
                        : "text-green-600"
                  }`}
                />

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-sm font-medium">{alert.title}</h4>
                    <Badge variant={getSeverityColor(alert.severity)}>{alert.severity}</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{alert.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      {alert.area} • {alert.timestamp}
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" onClick={() => handleResolveAlert(alert.id)}>
                        Resolve
                      </Button>
                      <Button size="sm" variant="ghost" onClick={() => handleDismissAlert(alert.id)}>
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
