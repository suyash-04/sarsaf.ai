"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, TrendingUp } from "lucide-react"

interface RequestHeatmapProps {
  requests: Array<{
    id: number
    lat: number
    lng: number
    timestamp: Date
    area: string
  }>
}

export function RequestHeatmap({ requests }: RequestHeatmapProps) {
  // Group requests by area
  const areaStats = requests.reduce(
    (acc, request) => {
      acc[request.area] = (acc[request.area] || 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )

  const totalRequests = requests.length
  const threshold = 5 // Trigger collection when 5+ requests in area

  return (
    <Card className="p-6 backdrop-blur-lg bg-white/80 border-white/20">
      <h2 className="text-2xl font-semibold mb-6">Collection Heatmap</h2>

      <div className="space-y-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">{totalRequests}</div>
            <div className="text-sm text-blue-800">Total Requests</div>
          </div>
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">{Object.keys(areaStats).length}</div>
            <div className="text-sm text-green-800">Active Areas</div>
          </div>
          <div className="text-center p-3 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">
              {Object.values(areaStats).filter((count) => count >= threshold).length}
            </div>
            <div className="text-sm text-purple-800">Ready for Collection</div>
          </div>
        </div>

        {/* Mock Map Visualization */}
        <div className="bg-gray-100 rounded-lg p-6 min-h-64 relative">
          <div className="text-center text-gray-500 mb-4">
            <MapPin className="h-8 w-8 mx-auto mb-2" />
            Interactive Map View
          </div>

          {/* Simulated map points */}
          <div className="absolute inset-4 grid grid-cols-4 gap-4">
            {Object.entries(areaStats).map(([area, count], index) => (
              <div
                key={area}
                className={`relative rounded-full ${
                  count >= threshold ? "bg-red-500" : count >= 3 ? "bg-yellow-500" : "bg-green-500"
                } opacity-70`}
                style={{
                  width: `${Math.max(20, count * 8)}px`,
                  height: `${Math.max(20, count * 8)}px`,
                  gridColumn: (index % 4) + 1,
                  gridRow: Math.floor(index / 4) + 1,
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center text-white text-xs font-bold">
                  {count}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Area Breakdown */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold flex items-center">
            <TrendingUp className="mr-2 h-5 w-5" />
            Area Breakdown
          </h3>

          {Object.entries(areaStats)
            .sort(([, a], [, b]) => b - a)
            .map(([area, count]) => (
              <div key={area} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-gray-600" />
                  <span className="font-medium">{area}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant={count >= threshold ? "destructive" : count >= 3 ? "default" : "secondary"}>
                    {count} requests
                  </Badge>
                  {count >= threshold && (
                    <Badge variant="outline" className="text-red-600 border-red-600">
                      Collection Due
                    </Badge>
                  )}
                </div>
              </div>
            ))}
        </div>

        {/* Legend */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-medium mb-3">Heat Map Legend</h4>
          <div className="grid grid-cols-3 gap-3 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-500 rounded-full" />
              <span>Low (1-2 requests)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-yellow-500 rounded-full" />
              <span>Medium (3-4 requests)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-red-500 rounded-full" />
              <span>High (5+ requests)</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
