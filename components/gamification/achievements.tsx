import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Trophy, Target, Zap, Calendar, Recycle, Users, Star, Award } from "lucide-react"

const achievements = [
  {
    id: 1,
    title: "First Classification",
    description: "Complete your first waste classification",
    icon: Target,
    completed: true,
    progress: 100,
    total: 1,
    points: 50,
    rarity: "Common",
  },
  {
    id: 2,
    title: "Streak Master",
    description: "Classify waste for 7 consecutive days",
    icon: Calendar,
    completed: true,
    progress: 100,
    total: 7,
    points: 200,
    rarity: "Rare",
  },
  {
    id: 3,
    title: "Century Club",
    description: "Complete 100 classifications",
    icon: Trophy,
    completed: false,
    progress: 78,
    total: 100,
    points: 500,
    rarity: "Epic",
  },
  {
    id: 4,
    title: "Recycling Hero",
    description: "Help recycle 50kg of waste",
    icon: Recycle,
    completed: false,
    progress: 45.2,
    total: 50,
    points: 300,
    rarity: "Rare",
  },
  {
    id: 5,
    title: "Community Leader",
    description: "Refer 10 friends to the platform",
    icon: Users,
    completed: false,
    progress: 3,
    total: 10,
    points: 750,
    rarity: "Legendary",
  },
  {
    id: 6,
    title: "Speed Demon",
    description: "Classify 20 items in one day",
    icon: Zap,
    completed: false,
    progress: 12,
    total: 20,
    points: 150,
    rarity: "Uncommon",
  },
]

export function Achievements() {
  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Common":
        return "bg-gray-100 text-gray-800"
      case "Uncommon":
        return "bg-green-100 text-green-800"
      case "Rare":
        return "bg-blue-100 text-blue-800"
      case "Epic":
        return "bg-purple-100 text-purple-800"
      case "Legendary":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const completedCount = achievements.filter((a) => a.completed).length
  const totalPoints = achievements.filter((a) => a.completed).reduce((sum, a) => sum + a.points, 0)

  return (
    <Card className="backdrop-blur-lg bg-white/80 border-white/20">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Award className="mr-2 h-5 w-5 text-purple-600" />
          Achievements
        </CardTitle>
        <CardDescription>
          {completedCount} of {achievements.length} completed • {totalPoints} points earned
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {achievements.map((achievement) => {
            const Icon = achievement.icon
            const progressPercent = (achievement.progress / achievement.total) * 100

            return (
              <div
                key={achievement.id}
                className={`p-4 rounded-lg border-2 ${
                  achievement.completed ? "bg-green-50 border-green-200" : "bg-gray-50 border-gray-200"
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-lg ${achievement.completed ? "bg-green-200" : "bg-gray-200"}`}>
                    <Icon className={`h-5 w-5 ${achievement.completed ? "text-green-700" : "text-gray-600"}`} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium">{achievement.title}</h4>
                      <div className="flex items-center space-x-2">
                        <Badge className={getRarityColor(achievement.rarity)}>{achievement.rarity}</Badge>
                        <Badge variant="outline">{achievement.points} pts</Badge>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 mb-2">{achievement.description}</p>

                    {!achievement.completed && (
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span>Progress</span>
                          <span>
                            {achievement.progress} / {achievement.total}
                          </span>
                        </div>
                        <Progress value={progressPercent} className="h-2" />
                      </div>
                    )}

                    {achievement.completed && (
                      <div className="flex items-center space-x-2 text-green-600">
                        <Star className="h-4 w-4" />
                        <span className="text-sm font-medium">Completed!</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
