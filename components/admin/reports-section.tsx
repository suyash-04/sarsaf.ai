"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Calendar, TrendingUp } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const reports = [
  {
    id: 1,
    title: "Monthly Waste Report",
    description: "Comprehensive waste generation and collection analysis",
    type: "monthly",
    lastGenerated: "2024-01-01",
    size: "2.4 MB",
    format: "PDF",
  },
  {
    id: 2,
    title: "Classification Accuracy Report",
    description: "AI model performance and accuracy metrics",
    type: "weekly",
    lastGenerated: "2024-01-08",
    size: "1.8 MB",
    format: "PDF",
  },
  {
    id: 3,
    title: "Collection Efficiency Analysis",
    description: "Route optimization and collection performance data",
    type: "monthly",
    lastGenerated: "2024-01-01",
    size: "3.1 MB",
    format: "Excel",
  },
  {
    id: 4,
    title: "Environmental Impact Report",
    description: "Recycling rates and environmental benefits tracking",
    type: "quarterly",
    lastGenerated: "2024-01-01",
    size: "4.2 MB",
    format: "PDF",
  },
]

export function ReportsSection() {
  const { toast } = useToast()

  const handleDownloadReport = (reportTitle: string) => {
    toast({
      title: "Download Started",
      description: `${reportTitle} is being downloaded`,
    })
  }

  const handleGenerateReport = (reportTitle: string) => {
    toast({
      title: "Report Generation Started",
      description: `${reportTitle} is being generated. You'll be notified when ready.`,
    })
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "daily":
        return "default"
      case "weekly":
        return "secondary"
      case "monthly":
        return "outline"
      case "quarterly":
        return "destructive"
      default:
        return "secondary"
    }
  }

  const getFormatIcon = (format: string) => {
    switch (format) {
      case "PDF":
        return FileText
      case "Excel":
        return TrendingUp
      default:
        return FileText
    }
  }

  return (
    <Card className="backdrop-blur-lg bg-white/80 border-white/20">
      <CardHeader>
        <CardTitle className="flex items-center">
          <FileText className="mr-2 h-5 w-5" />
          Reports & Analytics
        </CardTitle>
        <CardDescription>Generate and download comprehensive reports</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {reports.map((report) => {
            const FormatIcon = getFormatIcon(report.format)
            return (
              <div key={report.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-start space-x-3">
                  <FormatIcon className="h-5 w-5 text-gray-600 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-medium">{report.title}</h4>
                      <Badge variant={getTypeColor(report.type)}>{report.type}</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{report.description}</p>
                    <div className="text-xs text-gray-500">
                      Last generated: {report.lastGenerated} • {report.size} • {report.format}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <Button size="sm" onClick={() => handleDownloadReport(report.title)}>
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => handleGenerateReport(report.title)}>
                    <Calendar className="h-4 w-4 mr-2" />
                    Generate
                  </Button>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h4 className="font-medium mb-2 text-blue-800">📊 Custom Reports</h4>
          <p className="text-sm text-blue-700 mb-3">
            Need a custom report? Contact our support team for specialized analytics and reporting.
          </p>
          <Button variant="outline" size="sm">
            Request Custom Report
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
