"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Trash2, Bell, MapPin } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface SegregationInstructionsProps {
  result: {
    type: string
    confidence: number
    color: string
    instructions: string
  }
}

export function SegregationInstructions({ result }: SegregationInstructionsProps) {
  const { toast } = useToast()

  const getBinColor = (color: string) => {
    const colors: { [key: string]: string } = {
      blue: "bg-blue-500",
      green: "bg-green-500",
      gray: "bg-gray-500",
      yellow: "bg-yellow-500",
      clear: "bg-gray-300",
    }
    return colors[color] || "bg-gray-500"
  }

  const handleNotifyRecyclers = () => {
    toast({
      title: "Recyclers Notified",
      description: "Local recyclers have been notified about this recyclable material",
    })
  }

  const handleRequestCollection = () => {
    toast({
      title: "Collection Requested",
      description: "Your collection request has been submitted",
    })
  }

  const isRecyclable = result.type !== "Mixed" && result.type !== "Organic"

  return (
    <Card className="p-6 backdrop-blur-lg bg-white/80 border-white/20">
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        <Trash2 className="mr-2 h-5 w-5" />
        Segregation Instructions
      </h3>

      <div className="space-y-6">
        {/* Bin Visualization */}
        <div className="text-center">
          <div className={`w-16 h-20 ${getBinColor(result.color)} rounded-lg mx-auto mb-3 relative`}>
            <div className="absolute inset-x-0 top-1 h-2 bg-black/20 rounded-t-lg" />
            <Trash2 className="absolute inset-0 m-auto h-6 w-6 text-white" />
          </div>
          <Badge variant="outline" className="text-sm">
            {result.color.charAt(0).toUpperCase() + result.color.slice(1)} Bin
          </Badge>
        </div>

        {/* Instructions */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-medium mb-2">How to dispose:</h4>
          <p className="text-sm text-gray-600">{result.instructions}</p>
        </div>

        {/* Additional Tips */}
        <div className="bg-blue-50 rounded-lg p-4">
          <h4 className="font-medium mb-2 text-blue-800">💡 Pro Tips:</h4>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• Clean containers before disposal</li>
            <li>• Remove labels when possible</li>
            <li>• Check local recycling guidelines</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          {isRecyclable && (
            <Button onClick={handleNotifyRecyclers} className="w-full bg-green-600 hover:bg-green-700">
              <Bell className="mr-2 h-4 w-4" />
              Notify Local Recyclers
            </Button>
          )}

          <Button onClick={handleRequestCollection} variant="outline" className="w-full">
            <MapPin className="mr-2 h-4 w-4" />
            Request Collection
          </Button>
        </div>
      </div>
    </Card>
  )
}
