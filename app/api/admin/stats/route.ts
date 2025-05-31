import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    // In production, fetch real stats from database
    const mockStats = {
      users: {
        total: 1247,
        active: 892,
        new: 45,
        growth: 12,
      },
      classifications: {
        today: 89,
        week: 634,
        month: 2847,
        accuracy: 94.2,
      },
      collections: {
        pending: 34,
        completed: 156,
        efficiency: 87.5,
      },
      system: {
        uptime: 99.9,
        avgResponseTime: 1.2,
        errorRate: 0.1,
      },
    }

    return NextResponse.json({
      success: true,
      stats: mockStats,
      lastUpdated: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Admin stats error:", error)
    return NextResponse.json({ error: "Failed to fetch admin stats" }, { status: 500 })
  }
}
