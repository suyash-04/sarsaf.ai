"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"

const data = [
  { month: "Jan", organic: 120, plastic: 80, metal: 40, paper: 60, glass: 30 },
  { month: "Feb", organic: 135, plastic: 85, metal: 45, paper: 65, glass: 35 },
  { month: "Mar", organic: 150, plastic: 90, metal: 50, paper: 70, glass: 40 },
  { month: "Apr", organic: 140, plastic: 95, metal: 55, paper: 75, glass: 45 },
  { month: "May", organic: 160, plastic: 100, metal: 60, paper: 80, glass: 50 },
  { month: "Jun", organic: 175, plastic: 105, metal: 65, paper: 85, glass: 55 },
]

const chartConfig = {
  organic: {
    label: "Organic",
    color: "hsl(var(--chart-1))",
  },
  plastic: {
    label: "Plastic",
    color: "hsl(var(--chart-2))",
  },
  metal: {
    label: "Metal",
    color: "hsl(var(--chart-3))",
  },
  paper: {
    label: "Paper",
    color: "hsl(var(--chart-4))",
  },
  glass: {
    label: "Glass",
    color: "hsl(var(--chart-5))",
  },
}

export function WasteTrendsChart() {
  return (
    <Card className="backdrop-blur-lg bg-white/80 border-white/20">
      <CardHeader>
        <CardTitle>Waste Generation Trends</CardTitle>
        <CardDescription>Monthly waste collection data by type (in tons)</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line
                type="monotone"
                dataKey="organic"
                stroke="var(--color-organic)"
                strokeWidth={2}
                dot={{ fill: "var(--color-organic)" }}
              />
              <Line
                type="monotone"
                dataKey="plastic"
                stroke="var(--color-plastic)"
                strokeWidth={2}
                dot={{ fill: "var(--color-plastic)" }}
              />
              <Line
                type="monotone"
                dataKey="metal"
                stroke="var(--color-metal)"
                strokeWidth={2}
                dot={{ fill: "var(--color-metal)" }}
              />
              <Line
                type="monotone"
                dataKey="paper"
                stroke="var(--color-paper)"
                strokeWidth={2}
                dot={{ fill: "var(--color-paper)" }}
              />
              <Line
                type="monotone"
                dataKey="glass"
                stroke="var(--color-glass)"
                strokeWidth={2}
                dot={{ fill: "var(--color-glass)" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
