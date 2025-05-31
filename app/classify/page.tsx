"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { WasteClassifier } from "@/components/classify/waste-classifier"
import { ClassificationResult } from "@/components/classify/classification-result"
import { SegregationInstructions } from "@/components/classify/segregation-instructions"

export default function ClassifyPage() {
  const [classificationResult, setClassificationResult] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleClassification = async (imageFile: File) => {
    setIsLoading(true)

    // Simulate API call to backend
    setTimeout(() => {
      const mockResults = [
        { type: "Plastic", confidence: 0.92, color: "blue", instructions: "Place in blue recycling bin" },
        { type: "Organic", confidence: 0.88, color: "green", instructions: "Place in green compost bin" },
        { type: "Metal", confidence: 0.95, color: "gray", instructions: "Place in metal recycling bin" },
        { type: "Paper", confidence: 0.85, color: "yellow", instructions: "Place in paper recycling bin" },
        { type: "Glass", confidence: 0.9, color: "clear", instructions: "Place in glass recycling bin" },
      ]

      const randomResult = mockResults[Math.floor(Math.random() * mockResults.length)]
      setClassificationResult(randomResult)
      setIsLoading(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            AI Waste Classifier
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            <WasteClassifier onClassify={handleClassification} isLoading={isLoading} />

            <div className="space-y-6">
              {classificationResult && (
                <>
                  <ClassificationResult result={classificationResult} />
                  <SegregationInstructions result={classificationResult} />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
