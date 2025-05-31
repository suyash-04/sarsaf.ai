"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { CollectionRequest } from "@/components/collection/collection-request"
import { RequestHeatmap } from "@/components/collection/request-heatmap"
import { ActiveRequests } from "@/components/collection/active-requests"

export default function CollectionPage() {
  const [requests, setRequests] = useState<any[]>([])
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null)

  useEffect(() => {
    // Get user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          })
        },
        (error) => {
          console.error("Error getting location:", error)
        },
      )
    }

    // Load existing requests
    const mockRequests = [
      { id: 1, lat: 27.7172, lng: 85.324, timestamp: new Date(), area: "Kathmandu Central" },
      { id: 2, lat: 27.7089, lng: 85.3206, timestamp: new Date(), area: "Thamel" },
      { id: 3, lat: 27.6966, lng: 85.3206, timestamp: new Date(), area: "Patan" },
    ]
    setRequests(mockRequests)
  }, [])

  const handleNewRequest = (location: { lat: number; lng: number }) => {
    const newRequest = {
      id: requests.length + 1,
      lat: location.lat,
      lng: location.lng,
      timestamp: new Date(),
      area: "Your Area",
    }
    setRequests([...requests, newRequest])
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Waste Collection Requests
          </h1>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <CollectionRequest userLocation={userLocation} onRequestSubmit={handleNewRequest} />
              <div className="mt-6">
                <ActiveRequests requests={requests} />
              </div>
            </div>

            <div className="lg:col-span-2">
              <RequestHeatmap requests={requests} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
