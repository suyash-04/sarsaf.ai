"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Camera, Download, Search } from "lucide-react"
import { useState } from "react"

const logs = [
  {
    id: 1,
    timestamp: "2024-01-15 14:30:22",
    userId: "user_123",
    imageUrl: "/placeholder.svg?height=50&width=50",
    classification: "Plastic",
    confidence: 0.94,
    location: "Downtown",
    status: "success",
  },
  {
    id: 2,
    timestamp: "2024-01-15 14:28:15",
    userId: "user_456",
    imageUrl: "/placeholder.svg?height=50&width=50",
    classification: "Organic",
    confidence: 0.87,
    location: "Residential A",
    status: "success",
  },
  {
    id: 3,
    timestamp: "2024-01-15 14:25:33",
    userId: "user_789",
    imageUrl: "/placeholder.svg?height=50&width=50",
    classification: "Metal",
    confidence: 0.92,
    location: "Industrial",
    status: "success",
  },
  {
    id: 4,
    timestamp: "2024-01-15 14:22:18",
    userId: "user_321",
    imageUrl: "/placeholder.svg?height=50&width=50",
    classification: "Paper",
    confidence: 0.76,
    location: "Commercial",
    status: "low_confidence",
  },
  {
    id: 5,
    timestamp: "2024-01-15 14:20:45",
    userId: "user_654",
    imageUrl: "/placeholder.svg?height=50&width=50",
    classification: "Glass",
    confidence: 0.89,
    location: "Suburban",
    status: "success",
  },
]

export function ClassificationLogs() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("all")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "success":
        return "default"
      case "low_confidence":
        return "secondary"
      case "error":
        return "destructive"
      default:
        return "secondary"
    }
  }

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 0.9) return "text-green-600"
    if (confidence >= 0.7) return "text-yellow-600"
    return "text-red-600"
  }

  const filteredLogs = logs.filter((log) => {
    const matchesSearch =
      log.classification.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.userId.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesFilter =
      filterType === "all" ||
      (filterType === "high_confidence" && log.confidence >= 0.9) ||
      (filterType === "low_confidence" && log.confidence < 0.8)

    return matchesSearch && matchesFilter
  })

  return (
    <Card className="backdrop-blur-lg bg-white/80 border-white/20">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Camera className="mr-2 h-5 w-5" />
          Classification Logs
        </CardTitle>
        <CardDescription>Recent waste classification activities and results</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by classification, location, or user..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={filterType === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterType("all")}
              >
                All
              </Button>
              <Button
                variant={filterType === "high_confidence" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterType("high_confidence")}
              >
                High Confidence
              </Button>
              <Button
                variant={filterType === "low_confidence" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterType("low_confidence")}
              >
                Low Confidence
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>

          {/* Logs Table */}
          <div className="overflow-x-auto">
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {filteredLogs.map((log) => (
                <div key={log.id} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                  <img
                    src={log.imageUrl || "/placeholder.svg"}
                    alt="Classified waste"
                    className="w-12 h-12 rounded-lg object-cover"
                  />

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{log.classification}</span>
                        <Badge variant={getStatusColor(log.status)}>{log.status.replace("_", " ")}</Badge>
                      </div>
                      <span className={`text-sm font-medium ${getConfidenceColor(log.confidence)}`}>
                        {(log.confidence * 100).toFixed(1)}%
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">
                      {log.location} • {log.userId} • {log.timestamp}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
