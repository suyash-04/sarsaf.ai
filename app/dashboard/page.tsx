"use client"

import { Navigation } from "@/components/navigation"
import { WasteTrendsChart } from "@/components/dashboard/waste-trends-chart"
import { WasteTypeBreakdown } from "@/components/dashboard/waste-type-breakdown"
import { AreaAnalysis } from "@/components/dashboard/area-analysis"
import { PredictionMetrics } from "@/components/dashboard/prediction-metrics"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Waste Management Dashboard
          </h1>

          <div className="grid gap-6">
            <PredictionMetrics />

            <div className="grid lg:grid-cols-2 gap-6">
              <WasteTrendsChart />
              <WasteTypeBreakdown />
            </div>

            <AreaAnalysis />
          </div>
        </div>
      </div>
    </div>
  )
}
