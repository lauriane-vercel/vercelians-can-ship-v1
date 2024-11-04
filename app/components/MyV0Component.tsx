'use client'

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const cuisines = [
  { name: "Indian", emoji: "🍛", buttonColor: "bg-orange-50 hover:bg-orange-100 text-orange-600" },
  { name: "Thai", emoji: "🍜", buttonColor: "bg-green-50 hover:bg-green-100 text-green-600" },
  { name: "Vietnamese", emoji: "🍲", buttonColor: "bg-blue-50 hover:bg-blue-100 text-blue-600" },
  { name: "French", emoji: "🥐", buttonColor: "bg-purple-50 hover:bg-purple-100 text-purple-600" },
]

export default function Component() {
  const redirectToGrubhub = (cuisine: string) => {
    window.open(`https://www.grubhub.com/search?queryText=${encodeURIComponent(cuisine)}`, '_blank')
  }

  return (
    <Card className="w-[593px] h-[287px] mx-auto bg-gray-50/50 p-6 flex flex-col">
      <div className="mb-4">
        <h2 className="text-2xl font-medium text-gray-700 leading-tight">My Favorite Cuisines</h2>
        <p className="text-gray-500 text-sm">
          Explore global flavors and let's plan our next culinary adventure!
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 flex-grow">
        {cuisines.map((cuisine) => (
          <div
            key={cuisine.name}
            className="flex items-center justify-between p-4 bg-white rounded-lg"
          >
            <div className="flex items-center gap-3">
              <span className="text-xl" role="img" aria-label={`${cuisine.name} cuisine`}>
                {cuisine.emoji}
              </span>
              <span className="text-base font-medium text-gray-700">{cuisine.name}</span>
            </div>
            <Button
              onClick={() => redirectToGrubhub(cuisine.name)}
              className={`${cuisine.buttonColor} rounded-full px-3 py-1 h-8 text-xs font-normal flex items-center gap-1`}
              variant="ghost"
            >
              Order
              <ExternalLink className="w-3 h-3" />
            </Button>
          </div>
        ))}
      </div>
    </Card>
  )
}
