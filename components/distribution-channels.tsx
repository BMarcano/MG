"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram, Facebook, Linkedin, Youtube, Twitter, Globe } from "lucide-react"

export function DistributionChannels() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const channels = [
    {
      icon: Instagram,
      title: "Instagram",
      description: "Visual storytelling and engagement with a focus on aesthetics and community.",
      color: "from-pink-500 to-purple-500",
      textColor: "text-pink-400",
    },
    {
      icon: Facebook,
      title: "Facebook",
      description: "Broad reach with diverse content formats and targeted advertising capabilities.",
      color: "from-blue-500 to-blue-600",
      textColor: "text-blue-400",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Professional content for B2B marketing and industry thought leadership.",
      color: "from-blue-600 to-blue-800",
      textColor: "text-blue-400",
    },
    {
      icon: Youtube,
      title: "YouTube",
      description: "Video content platform for in-depth storytelling and brand education.",
      color: "from-red-500 to-red-700",
      textColor: "text-red-400",
    },
    {
      icon: Twitter,
      title: "Twitter",
      description: "Real-time engagement and conversation around trending topics and news.",
      color: "from-blue-400 to-blue-500",
      textColor: "text-blue-400",
    },
    {
      icon: Globe,
      title: "Owned Media",
      description: "Your website, blog, and email channels for direct audience communication.",
      color: "from-green-500 to-emerald-600",
      textColor: "text-green-400",
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
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Floating dots */}
      {dots.map((dot, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-green-400/30"
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
          <h2 className="text-4xl font-bold text-white mb-4">Distribution Channels</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Strategic platforms to share your content with the right audience
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {channels.map((channel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 h-full hover:border-green-600/50 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${channel.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <channel.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3
                    className={`text-xl font-bold text-center text-white mb-3 group-hover:${channel.textColor} transition-colors`}
                  >
                    {channel.title}
                  </h3>
                  <p className="text-gray-400 text-center">{channel.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
