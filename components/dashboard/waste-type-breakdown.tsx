"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

const data = [
  { name: "Organic", value: 35, color: "#10b981" },
  { name: "Plastic", value: 25, color: "#3b82f6" },
  { name: "Paper", value: 20, color: "#f59e0b" },
  { name: "Metal", value: 12, color: "#6b7280" },
  { name: "Glass", value: 8, color: "#8b5cf6" },
]

const chartConfig = {
  organic: {
    label: "Organic",
    color: "#10b981",
  },
  plastic: {
    label: "Plastic",
    color: "#3b82f6",
  },
  paper: {
    label: "Paper",
    color: "#f59e0b",
  },
  metal: {
    label: "Metal",
    color: "#6b7280",
  },
  glass: {
    label: "Glass",
    color: "#8b5cf6",
  },
}

export function WasteTypeBreakdown() {
  return (
    <Card className="backdrop-blur-lg bg-white/80 border-white/20">
      <CardHeader>
        <CardTitle>Waste Type Distribution</CardTitle>
        <CardDescription>Current month breakdown by waste category</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <ChartTooltip content={<ChartTooltipContent />} />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
