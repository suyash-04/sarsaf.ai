import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Trophy, Medal, Award } from "lucide-react"

const leaderboard = [
  {
    rank: 1,
    name: "Green Champion",
    points: 4850,
    classifications: 245,
    avatar: "/placeholder-user.jpg",
    badge: "Platinum",
  },
  {
    rank: 2,
    name: "Eco Master",
    points: 4200,
    classifications: 198,
    avatar: "/placeholder-user.jpg",
    badge: "Gold",
  },
  {
    rank: 3,
    name: "Recycle Pro",
    points: 3890,
    classifications: 187,
    avatar: "/placeholder-user.jpg",
    badge: "Gold",
  },
  {
    rank: 4,
    name: "Waste Warrior",
    points: 3450,
    classifications: 156,
    avatar: "/placeholder-user.jpg",
    badge: "Silver",
  },
  {
    rank: 5,
    name: "Earth Guardian",
    points: 3200,
    classifications: 142,
    avatar: "/placeholder-user.jpg",
    badge: "Silver",
  },
]

export function Leaderboard() {
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-5 w-5 text-yellow-500" />
      case 2:
        return <Medal className="h-5 w-5 text-gray-400" />
      case 3:
        return <Award className="h-5 w-5 text-amber-600" />
      default:
        return <span className="text-sm font-bold text-gray-600">#{rank}</span>
    }
  }

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Platinum":
        return "bg-purple-100 text-purple-800"
      case "Gold":
        return "bg-yellow-100 text-yellow-800"
      case "Silver":
        return "bg-gray-100 text-gray-800"
      case "Bronze":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card className="backdrop-blur-lg bg-white/80 border-white/20">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Trophy className="mr-2 h-5 w-5 text-yellow-500" />
          Leaderboard
        </CardTitle>
        <CardDescription>Top eco-warriors in your community</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {leaderboard.map((user) => (
            <div key={user.rank} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-center w-8">{getRankIcon(user.rank)}</div>

              <Avatar className="w-10 h-10">
                <AvatarImage src={user.avatar || "/placeholder.svg"} />
                <AvatarFallback>
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="font-medium truncate">{user.name}</span>
                  <Badge className={getBadgeColor(user.badge)}>{user.badge}</Badge>
                </div>
                <div className="text-sm text-gray-600">{user.classifications} classifications</div>
              </div>

              <div className="text-right">
                <div className="text-lg font-bold text-green-600">{user.points}</div>
                <div className="text-xs text-gray-500">points</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
