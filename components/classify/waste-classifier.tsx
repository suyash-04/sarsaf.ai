"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Upload, Camera, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface WasteClassifierProps {
  onClassify: (file: File) => void
  isLoading: boolean
}

export function WasteClassifier({ onClassify, isLoading }: WasteClassifierProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const { toast } = useToast()

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please select an image smaller than 5MB",
          variant: "destructive",
        })
        return
      }

      setSelectedFile(file)
      const reader = new FileReader()
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleClassify = () => {
    if (selectedFile) {
      onClassify(selectedFile)
    }
  }

  const handleCameraCapture = () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          // In a real implementation, you'd show a camera interface
          toast({
            title: "Camera feature",
            description: "Camera capture would be implemented here",
          })
        })
        .catch((err) => {
          toast({
            title: "Camera access denied",
            description: "Please allow camera access or upload an image instead",
            variant: "destructive",
          })
        })
    }
  }

  return (
    <Card className="p-6 backdrop-blur-lg bg-white/80 border-white/20">
      <h2 className="text-2xl font-semibold mb-6 text-center">Upload Waste Image</h2>

      <div className="space-y-6">
        {/* Image Preview */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          {selectedImage ? (
            <div className="space-y-4">
              <img
                src={selectedImage || "/placeholder.svg"}
                alt="Selected waste"
                className="max-w-full max-h-64 mx-auto rounded-lg shadow-md"
              />
              <p className="text-sm text-gray-600">Image ready for classification</p>
            </div>
          ) : (
            <div className="space-y-4">
              <Upload className="h-16 w-16 text-gray-400 mx-auto" />
              <p className="text-gray-600">Select an image to classify</p>
              <p className="text-sm text-gray-400">Supports JPG, PNG, WebP (max 5MB)</p>
            </div>
          )}
        </div>

        {/* Upload Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <Button
            variant="outline"
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center justify-center space-x-2"
          >
            <Upload className="h-4 w-4" />
            <span>Upload Image</span>
          </Button>

          <Button
            variant="outline"
            onClick={handleCameraCapture}
            className="flex items-center justify-center space-x-2"
          >
            <Camera className="h-4 w-4" />
            <span>Take Photo</span>
          </Button>
        </div>

        {/* Classify Button */}
        <Button
          onClick={handleClassify}
          disabled={!selectedFile || isLoading}
          className="w-full bg-green-600 hover:bg-green-700"
          size="lg"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Classifying...
            </>
          ) : (
            "Classify Waste"
          )}
        </Button>

        <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileSelect} className="hidden" />
      </div>
    </Card>
  )
}
