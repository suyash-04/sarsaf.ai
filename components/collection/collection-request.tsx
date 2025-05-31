"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Users, CheckCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface CollectionRequestProps {
  userLocation: { lat: number; lng: number } | null
  onRequestSubmit: (location: { lat: number; lng: number }) => void
}

export function CollectionRequest({ userLocation, onRequestSubmit }: CollectionRequestProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasRequested, setHasRequested] = useState(false)
  const { toast } = useToast()

  const handleSubmitRequest = async () => {
    if (!userLocation) {
      toast({
        title: "Location Required",
        description: "Please allow location access to submit a collection request",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      onRequestSubmit(userLocation)
      setHasRequested(true)
      setIsSubmitting(false)

      toast({
        title: "Request Submitted",
        description: "Your collection request has been submitted successfully",
      })
    }, 1000)
  }

  return (
    <Card className="p-6 backdrop-blur-lg bg-white/80 border-white/20">
      <h2 className="text-2xl font-semibold mb-6 text-center">Request Collection</h2>

      <div className="space-y-6">
        {/* Location Status */}
        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
          <MapPin className={`h-5 w-5 ${userLocation ? "text-green-600" : "text-gray-400"}`} />
          <div className="flex-1">
            <div className="text-sm font-medium">{userLocation ? "Location Detected" : "Location Required"}</div>
            <div className="text-xs text-gray-500">
              {userLocation
                ? `${userLocation.lat.toFixed(4)}, ${userLocation.lng.toFixed(4)}`
                : "Please enable location access"}
            </div>
          </div>
          <Badge variant={userLocation ? "default" : "secondary"}>{userLocation ? "Ready" : "Pending"}</Badge>
        </div>

        {/* Collection Info */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <Clock className="h-5 w-5 text-blue-600" />
            <div>
              <div className="text-sm font-medium">Response Time</div>
              <div className="text-xs text-gray-500">Usually within 24-48 hours</div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Users className="h-5 w-5 text-purple-600" />
            <div>
              <div className="text-sm font-medium">Community Impact</div>
              <div className="text-xs text-gray-500">Join 1,200+ active users in your area</div>
            </div>
          </div>
        </div>

        {/* Request Button */}
        {hasRequested ? (
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-green-800 font-medium">Request Submitted</div>
            <div className="text-green-600 text-sm">You'll be notified when collection is scheduled</div>
          </div>
        ) : (
          <Button
            onClick={handleSubmitRequest}
            disabled={!userLocation || isSubmitting}
            className="w-full bg-green-600 hover:bg-green-700"
            size="lg"
          >
            {isSubmitting ? (
              <>
                <Clock className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              <>📢 Need Collection</>
            )}
          </Button>
        )}

        {/* Tips */}
        <div className="bg-blue-50 rounded-lg p-4">
          <h4 className="font-medium mb-2 text-blue-800">📋 Before Requesting:</h4>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• Ensure waste is properly segregated</li>
            <li>• Place bins in accessible location</li>
            <li>• Check collection schedule first</li>
          </ul>
        </div>
      </div>
    </Card>
  )
}
