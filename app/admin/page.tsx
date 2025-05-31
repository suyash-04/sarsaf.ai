"use client"

import { Navigation } from "@/components/navigation"
import { AdminStats } from "@/components/admin/admin-stats"
import { AlertsPanel } from "@/components/admin/alerts-panel"
import { ClassificationLogs } from "@/components/admin/classification-logs"
import { ReportsSection } from "@/components/admin/reports-section"

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Admin Panel
          </h1>

          <div className="grid gap-6">
            <AdminStats />

            <div className="grid lg:grid-cols-2 gap-6">
              <AlertsPanel />
              <ReportsSection />
            </div>

            <ClassificationLogs />
          </div>
        </div>
      </div>
    </div>
  )
}
