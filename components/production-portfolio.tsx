"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Camera, Mic } from "lucide-react"

export function ProductionPortfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const portfolioItems = [
    {
      title: "Corporate Documentary",
      client: "Tech Innovation Corp",
      category: "Video Production",
      thumbnail: "/placeholder.svg?height=300&width=500",
      icon: Play,
      stats: { duration: "15:30", views: "500K", awards: "3" },
    },
    {
      title: "Product Launch Event",
      client: "Fashion Forward",
      category: "Photography",
      thumbnail: "/placeholder.svg?height=300&width=500",
      icon: Camera,
      stats: { photos: "500+", coverage: "8hrs", satisfaction: "100%" },
    },
    {
      title: "Podcast Series",
      client: "Business Leaders",
      category: "Audio Production",
      thumbnail: "/placeholder.svg?height=300&width=500",
      icon: Mic,
      stats: { episodes: "24", downloads: "1M+", rating: "4.9" },
    },
    {
      title: "Brand Commercial",
      client: "Eco Solutions",
      category: "Video Production",
      thumbnail: "/placeholder.svg?height=300&width=500",
      icon: Play,
      stats: { duration: "2:30", reach: "2M", conversion: "+35%" },
    },
  ]

  // Decorative elements
  const decorativeElements = [
    { top: "10%", left: "5%", size: "w-24 h-24", color: "bg-gradient-to-br from-red-500/10 to-orange-500/10" },
    { bottom: "20%", right: "5%", size: "w-32 h-32", color: "bg-gradient-to-tl from-red-500/10 to-orange-500/10" },
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
        className="absolute w-2 h-2 bg-red-400/30 rounded-full"
        style={{ top: "30%", right: "20%" }}
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute w-3 h-3 bg-orange-500/20 rounded-full"
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
          <h2 className="text-4xl font-bold text-white mb-4">Featured Productions</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">A showcase of our most impactful production work</p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 overflow-hidden hover:border-red-600/50 transition-all duration-300 group">
                <div className="relative">
                  <img
                    src={item.thumbnail || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-48 object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-red-600/80 flex items-center justify-center">
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <Badge className="absolute top-4 right-4 bg-red-600 text-white">{item.category}</Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-gray-400 text-sm">{item.client}</span>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mt-4">
                    {Object.entries(item.stats).map(([key, value], statIndex) => (
                      <div key={statIndex} className="text-center">
                        <div className="text-lg font-semibold text-red-400">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
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
