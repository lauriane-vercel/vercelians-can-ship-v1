'use client'

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const cuisines = [
  { name: "Indian", emoji: "🍛", buttonColor: "bg-orange-50 hover:bg-orange-100 text-orange-600", query: "Indian" },
  { name: "Sripraphai Thai", emoji: "🍜", buttonColor: "bg-green-50 hover:bg-green-100 text-green-600", query: "Sripraphai Thai Restaurant" },
  { name: "Vietnamese", emoji: "🍲", buttonColor: "bg-blue-50 hover:bg-blue-100 text-blue-600", query: "Vietnamese" },
  { name: "French", emoji: "🥐", buttonColor: "bg-purple-50 hover:bg-purple-100 text-purple-600", query: "French" },
]

export default function Component() {
  const redirectToGrubhub = (query: string) => {
    window.open(`https://www.grubhub.com/search?queryText=${encodeURIComponent(query)}`, '_blank')
  }

  return (
    <Card className="w-[529px] h-[222px] mx-auto bg-gray-50/50 p-4 flex flex-col">
      <div className="mb-3">
        <h2 className="text-xl font-medium text-gray-700 leading-tight">My Favorite Cuisines</h2>
        <p className="text-gray-500 text-sm">
          Explore global flavors for our next culinary adventure!
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3 flex-grow">
        {cuisines.map((cuisine) => (
          <div
            key={cuisine.name}
            className="flex items-center justify-between p-2 bg-white rounded-lg"
          >
            <div className="flex items-center gap-2">
              <span className="text-xl" role="img" aria-label={`${cuisine.name}`}>
                {cuisine.emoji}
              </span>
              <span className="text-base font-medium text-gray-700 truncate max-w-[110px]">
                {cuisine.name}
              </span>
            </div>
            <Button
              onClick={() => redirectToGrubhub(cuisine.query)}
              className={`${cuisine.buttonColor} rounded-full px-3 py-1 h-7 text-sm font-normal flex items-center gap-1`}
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
