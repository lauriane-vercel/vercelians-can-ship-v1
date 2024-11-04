'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const cuisines = [
  { name: "Indian", emoji: "🍛", color: "bg-orange-100 hover:bg-orange-200 text-orange-700" },
  { name: "Thai", emoji: "🍜", color: "bg-green-100 hover:bg-green-200 text-green-700" },
  { name: "Vietnamese", emoji: "🍲", color: "bg-red-100 hover:bg-red-200 text-red-700" },
  { name: "French", emoji: "🥐", color: "bg-blue-100 hover:bg-blue-200 text-blue-700" },
]

export default function Component() {
  const redirectToGrubhub = (cuisine: string) => {
    window.open(`https://www.grubhub.com/search?queryText=${encodeURIComponent(cuisine)}`, '_blank')
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>My Favorite Cuisines</CardTitle>
        <CardDescription>Explore global flavors and let's plan our next culinary adventure!</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {cuisines.map((cuisine) => (
            <li key={cuisine.name} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
              <div className="flex items-center space-x-3">
                <span className="text-2xl" role="img" aria-label={`${cuisine.name} cuisine`}>
                  {cuisine.emoji}
                </span>
                <span className="text-lg font-medium">{cuisine.name}</span>
              </div>
              <Button
                onClick={() => redirectToGrubhub(cuisine.name)}
                aria-label={`Find ${cuisine.name} cuisine on Grubhub`}
                className={`${cuisine.color} rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 flex items-center space-x-1`}
                variant="ghost"
              >
                <span>Order</span>
                <ExternalLink className="w-4 h-4" />
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
