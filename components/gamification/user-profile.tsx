import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Star } from "lucide-react"

export function UserProfile() {
  const user = {
    name: "Eco Warrior",
    level: 12,
    xp: 2450,
    xpToNext: 3000,
    rank: "Gold Recycler",
    totalClassifications: 156,
    totalRecycled: "45.2 kg",
    streak: 7,
  }

  const progress = (user.xp / user.xpToNext) * 100

  return (
    <Card className="backdrop-blur-lg bg-white/80 border-white/20">
      <CardHeader className="text-center">
        <Avatar className="w-20 h-20 mx-auto mb-4">
          <AvatarImage src="/placeholder-user.jpg" />
          <AvatarFallback>EW</AvatarFallback>
        </Avatar>
        <CardTitle className="flex items-center justify-center space-x-2">
          <span>{user.name}</span>
          <Badge variant="default" className="bg-yellow-500">
            Level {user.level}
          </Badge>
        </CardTitle>
        <CardDescription>{user.rank}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span>XP Progress</span>
            <span>
              {user.xp} / {user.xpToNext}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="p-3 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">{user.totalClassifications}</div>
            <div className="text-xs text-green-800">Classifications</div>
          </div>
          <div className="p-3 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">{user.totalRecycled}</div>
            <div className="text-xs text-blue-800">Recycled</div>
          </div>
        </div>

        <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
          <div className="flex items-center space-x-2">
            <Star className="h-5 w-5 text-orange-600" />
            <span className="text-sm font-medium">Current Streak</span>
          </div>
          <Badge variant="outline" className="text-orange-600 border-orange-600">
            {user.streak} days
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}
