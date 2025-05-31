import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    // In production, fetch from database
    const mockHeatmapData = [
      { area: "Downtown", lat: 27.7172, lng: 85.324, requests: 8, lastRequest: "2024-01-15T10:30:00Z" },
      { area: "Thamel", lat: 27.7089, lng: 85.3206, requests: 3, lastRequest: "2024-01-15T09:15:00Z" },
      { area: "Patan", lat: 27.6966, lng: 85.3206, requests: 6, lastRequest: "2024-01-15T11:45:00Z" },
      { area: "Bhaktapur", lat: 27.671, lng: 85.4298, requests: 2, lastRequest: "2024-01-15T08:20:00Z" },
      { area: "Lalitpur", lat: 27.6588, lng: 85.3247, requests: 4, lastRequest: "2024-01-15T12:10:00Z" },
    ]

    return NextResponse.json({
      success: true,
      data: mockHeatmapData,
      threshold: 5,
      totalRequests: mockHeatmapData.reduce((sum, area) => sum + area.requests, 0),
    })
  } catch (error) {
    console.error("Heatmap data error:", error)
    return NextResponse.json({ error: "Failed to fetch heatmap data" }, { status: 500 })
  }
}
