"use client"

import { Navigation } from "@/components/navigation"
import { UserProfile } from "@/components/gamification/user-profile"
import { Leaderboard } from "@/components/gamification/leaderboard"
import { Achievements } from "@/components/gamification/achievements"
import { EcoPoints } from "@/components/gamification/eco-points"

export default function GamificationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Eco Gamification
          </h1>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 space-y-6">
              <UserProfile />
              <EcoPoints />
            </div>

            <div className="lg:col-span-2 space-y-6">
              <Leaderboard />
              <Achievements />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
