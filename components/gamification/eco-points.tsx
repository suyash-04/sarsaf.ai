import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Coins, Gift, Leaf } from "lucide-react"

const rewards = [
  {
    id: 1,
    title: "Plant a Tree",
    description: "Fund tree planting in your community",
    cost: 500,
    category: "Environmental",
    available: true,
  },
  {
    id: 2,
    title: "Eco-friendly Bag",
    description: "Reusable shopping bag made from recycled materials",
    cost: 750,
    category: "Physical",
    available: true,
  },
  {
    id: 3,
    title: "Coffee Shop Voucher",
    description: "$10 voucher for local eco-friendly coffee shop",
    cost: 1000,
    category: "Voucher",
    available: false,
  },
  {
    id: 4,
    title: "Premium Features",
    description: "Unlock advanced analytics for 1 month",
    cost: 300,
    category: "Digital",
    available: true,
  },
]

export function EcoPoints() {
  const userPoints = 1250

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Environmental":
        return "bg-green-100 text-green-800"
      case "Physical":
        return "bg-blue-100 text-blue-800"
      case "Voucher":
        return "bg-purple-100 text-purple-800"
      case "Digital":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card className="backdrop-blur-lg bg-white/80 border-white/20">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Coins className="mr-2 h-5 w-5 text-yellow-600" />
          Eco Points Store
        </CardTitle>
        <CardDescription>You have {userPoints} eco points to spend</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Points Balance */}
          <div className="text-center p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">{userPoints}</div>
            <div className="text-sm text-gray-600">Available Points</div>
          </div>

          {/* Rewards */}
          <div className="space-y-3">
            <h4 className="font-medium flex items-center">
              <Gift className="mr-2 h-4 w-4" />
              Available Rewards
            </h4>

            {rewards.map((reward) => (
              <div key={reward.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-medium">{reward.title}</span>
                    <Badge className={getCategoryColor(reward.category)}>{reward.category}</Badge>
                  </div>
                  <p className="text-sm text-gray-600">{reward.description}</p>
                </div>

                <div className="text-right ml-4">
                  <div className="text-lg font-bold text-green-600 mb-2">{reward.cost}</div>
                  <Button size="sm" disabled={!reward.available || userPoints < reward.cost} className="w-20">
                    {userPoints >= reward.cost ? "Redeem" : "Locked"}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Earning Tips */}
          <div className="bg-blue-50 rounded-lg p-4">
            <h4 className="font-medium mb-2 text-blue-800 flex items-center">
              <Leaf className="mr-2 h-4 w-4" />
              Earn More Points
            </h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Classify waste: +10 points</li>
              <li>• Daily streak: +20 points</li>
              <li>• Refer friends: +100 points</li>
              <li>• Complete achievements: +50-750 points</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
