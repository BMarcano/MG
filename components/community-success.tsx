"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function CommunitySuccess() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const successStories = [
    {
      client: "Tech Startup",
      platform: "Discord",
      results: "Built a community of 50,000+ members with 85% active engagement",
      metrics: { growth: "+300%", engagement: "85%", retention: "78%" },
    },
    {
      client: "Fashion Brand",
      platform: "Instagram",
      results: "Increased follower engagement by 200% and grew audience by 150,000",
      metrics: { growth: "+150K", engagement: "+200%", conversion: "+45%" },
    },
    {
      client: "Gaming Company",
      platform: "Multiple",
      results: "Created a cross-platform community strategy reaching 1M+ users",
      metrics: { platforms: "5", reach: "1M+", advocacy: "25%" },
    },
  ]

  // Floating dots
  const dots = Array(20)
    .fill(0)
    .map((_, i) => ({
      size: Math.random() * 3 + 1,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
    }))

  return (
    <section className="py-20 bg-zinc-900 relative overflow-hidden">
      {/* Floating dots */}
      {dots.map((dot, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-blue-400/30"
          style={{
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            left: dot.left,
            top: dot.top,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: dot.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: dot.delay,
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Success Stories</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real results from our community management strategies
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-zinc-800/50 backdrop-blur-sm border-zinc-700 h-full hover:border-blue-600/50 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {story.client}
                    </h3>
                    <Badge className="bg-blue-600 text-white">{story.platform}</Badge>
                  </div>

                  <p className="text-gray-300 mb-6">{story.results}</p>

                  <div className="grid grid-cols-3 gap-2">
                    {Object.entries(story.metrics).map(([key, value], metricIndex) => (
                      <div key={metricIndex} className="text-center p-2 bg-zinc-700/50 rounded-lg">
                        <div className="text-lg font-bold text-blue-400">{value}</div>
                        <div className="text-xs text-gray-400 capitalize">{key}</div>
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
