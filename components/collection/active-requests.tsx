import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin } from "lucide-react"

interface ActiveRequestsProps {
  requests: Array<{
    id: number
    lat: number
    lng: number
    timestamp: Date
    area: string
  }>
}

export function ActiveRequests({ requests }: ActiveRequestsProps) {
  const getTimeAgo = (timestamp: Date) => {
    const now = new Date()
    const diff = now.getTime() - timestamp.getTime()
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

    if (hours > 0) return `${hours}h ago`
    return `${minutes}m ago`
  }

  const getStatusColor = (timestamp: Date) => {
    const hours = (new Date().getTime() - timestamp.getTime()) / (1000 * 60 * 60)
    if (hours < 2) return "bg-green-100 text-green-800"
    if (hours < 24) return "bg-yellow-100 text-yellow-800"
    return "bg-red-100 text-red-800"
  }

  return (
    <Card className="p-6 backdrop-blur-lg bg-white/80 border-white/20">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <Clock className="mr-2 h-5 w-5" />
        Recent Requests
      </h3>

      <div className="space-y-3 max-h-64 overflow-y-auto">
        {requests.length === 0 ? (
          <div className="text-center text-gray-500 py-4">No active requests</div>
        ) : (
          requests
            .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
            .slice(0, 10)
            .map((request) => (
              <div key={request.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-gray-600" />
                  <div>
                    <div className="text-sm font-medium">{request.area}</div>
                    <div className="text-xs text-gray-500">
                      {request.lat.toFixed(4)}, {request.lng.toFixed(4)}
                    </div>
                  </div>
                </div>
                <Badge className={getStatusColor(request.timestamp)}>{getTimeAgo(request.timestamp)}</Badge>
              </div>
            ))
        )}
      </div>
    </Card>
  )
}
