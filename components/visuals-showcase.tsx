"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play } from "lucide-react"

export function VisualsShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const showcaseItems = [
    {
      title: "Brand Story",
      client: "Tech Innovators",
      category: "Corporate Video",
      thumbnail: "/placeholder.svg?height=300&width=500",
      stats: { duration: "2:15", views: "125K", engagement: "18%" },
    },
    {
      title: "Product Launch",
      client: "Fashion Brand",
      category: "Commercial",
      thumbnail: "/placeholder.svg?height=300&width=500",
      stats: { duration: "0:45", views: "250K", engagement: "22%" },
    },
    {
      title: "App Tutorial",
      client: "FinTech Startup",
      category: "Explainer Video",
      thumbnail: "/placeholder.svg?height=300&width=500",
      stats: { duration: "1:30", views: "85K", engagement: "15%" },
    },
    {
      title: "Social Campaign",
      client: "Non-profit Org",
      category: "Social Media",
      thumbnail: "/placeholder.svg?height=300&width=500",
      stats: { duration: "1:00", views: "320K", engagement: "25%" },
    },
  ]

  // Decorative elements
  const decorativeElements = [
    { top: "10%", left: "5%", size: "w-32 h-32", color: "bg-gradient-to-br from-pink-500/5 to-purple-500/5" },
    { bottom: "20%", right: "5%", size: "w-48 h-48", color: "bg-gradient-to-tl from-pink-500/5 to-purple-500/5" },
  ]

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Decorative elements */}
      {decorativeElements.map((el, index) => (
        <div
          key={index}
          className={`absolute ${el.size} rounded-full ${el.color} blur-3xl`}
          style={{ top: el.top, left: el.left, right: el.right, bottom: el.bottom }}
        ></div>
      ))}

      {/* Floating dots */}
      <motion.div
        className="absolute w-2 h-2 bg-pink-400/30 rounded-full"
        style={{ top: "30%", right: "20%" }}
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute w-3 h-3 bg-purple-500/20 rounded-full"
        style={{ bottom: "40%", left: "15%" }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
      ></motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-pink-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A selection of our most impactful visual productions
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 overflow-hidden hover:border-pink-600/50 transition-all duration-300 group">
                <div className="relative">
                  <img
                    src={item.thumbnail || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-48 object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-pink-600/80 flex items-center justify-center">
                      <Play className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <Badge className="absolute top-4 right-4 bg-pink-600 text-white">{item.category}</Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-gray-400 text-sm">{item.client}</span>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mt-4">
                    <div className="text-center">
                      <div className="text-lg font-semibold text-pink-400">{item.stats.duration}</div>
                      <div className="text-xs text-gray-500">Duration</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold text-pink-400">{item.stats.views}</div>
                      <div className="text-xs text-gray-500">Views</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold text-pink-400">{item.stats.engagement}</div>
                      <div className="text-xs text-gray-500">Engagement</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
