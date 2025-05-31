"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { Badge } from "@/components/ui/badge"

const data = [
  { area: "Downtown", current: 120, predicted: 135, efficiency: 85 },
  { area: "Residential A", current: 95, predicted: 110, efficiency: 92 },
  { area: "Industrial", current: 180, predicted: 165, efficiency: 78 },
  { area: "Suburban", current: 75, predicted: 85, efficiency: 88 },
  { area: "Commercial", current: 140, predicted: 155, efficiency: 82 },
]

const chartConfig = {
  current: {
    label: "Current",
    color: "hsl(var(--chart-1))",
  },
  predicted: {
    label: "Predicted",
    color: "hsl(var(--chart-2))",
  },
}

export function AreaAnalysis() {
  return (
    <Card className="backdrop-blur-lg bg-white/80 border-white/20">
      <CardHeader>
        <CardTitle>Area-wise Analysis</CardTitle>
        <CardDescription>Current vs predicted waste generation by area (tons/month)</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="area" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="current" fill="var(--color-current)" />
                  <Bar dataKey="predicted" fill="var(--color-predicted)" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Collection Efficiency</h3>
            {data.map((item) => (
              <div key={item.area} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium">{item.area}</div>
                  <div className="text-sm text-gray-500">{item.efficiency}% efficient</div>
                </div>
                <Badge
                  variant={item.efficiency >= 90 ? "default" : item.efficiency >= 80 ? "secondary" : "destructive"}
                >
                  {item.efficiency >= 90 ? "Excellent" : item.efficiency >= 80 ? "Good" : "Needs Improvement"}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
