import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const area = searchParams.get("area")
    const timeframe = searchParams.get("timeframe") || "30"

    // In production, use Prophet or similar for time series prediction
    const mockPredictions = generateMockPredictions(area, Number.parseInt(timeframe))

    return NextResponse.json({
      success: true,
      area: area || "all",
      timeframe: `${timeframe} days`,
      predictions: mockPredictions,
      accuracy: 0.87,
      lastUpdated: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Prediction error:", error)
    return NextResponse.json({ error: "Failed to generate predictions" }, { status: 500 })
  }
}

function generateMockPredictions(area: string | null, days: number) {
  const predictions = []
  const baseWaste = area ? Math.random() * 100 + 50 : Math.random() * 500 + 200

  for (let i = 0; i < days; i++) {
    const date = new Date()
    date.setDate(date.getDate() + i)

    // Add some seasonality and trend
    const seasonality = Math.sin((i / 7) * 2 * Math.PI) * 10
    const trend = i * 0.5
    const noise = (Math.random() - 0.5) * 20

    predictions.push({
      date: date.toISOString().split("T")[0],
      predicted: Math.max(0, baseWaste + seasonality + trend + noise),
      confidence: 0.85 + Math.random() * 0.1,
    })
  }

  return predictions
}
