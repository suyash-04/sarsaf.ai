import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Recycle } from "lucide-react"

interface ClassificationResultProps {
  result: {
    type: string
    confidence: number
    color: string
    instructions: string
  }
}

export function ClassificationResult({ result }: ClassificationResultProps) {
  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 0.9) return "text-green-600"
    if (confidence >= 0.7) return "text-yellow-600"
    return "text-red-600"
  }

  const getConfidenceBadge = (confidence: number) => {
    if (confidence >= 0.9) return "High Confidence"
    if (confidence >= 0.7) return "Medium Confidence"
    return "Low Confidence"
  }

  return (
    <Card className="p-6 backdrop-blur-lg bg-white/80 border-white/20">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold">Classification Result</h3>
        <CheckCircle className="h-6 w-6 text-green-600" />
      </div>

      <div className="space-y-4">
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-800 mb-2">{result.type}</div>
          <Badge variant="secondary" className={`${getConfidenceColor(result.confidence)} bg-gray-100`}>
            {getConfidenceBadge(result.confidence)}
          </Badge>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Confidence Score</span>
            <span className={`text-sm font-bold ${getConfidenceColor(result.confidence)}`}>
              {(result.confidence * 100).toFixed(1)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full ${
                result.confidence >= 0.9 ? "bg-green-600" : result.confidence >= 0.7 ? "bg-yellow-600" : "bg-red-600"
              }`}
              style={{ width: `${result.confidence * 100}%` }}
            />
          </div>
        </div>

        {result.type !== "Mixed" && (
          <div className="flex items-center space-x-2 text-green-600">
            <Recycle className="h-5 w-5" />
            <span className="text-sm font-medium">This item is recyclable!</span>
          </div>
        )}
      </div>
    </Card>
  )
}
