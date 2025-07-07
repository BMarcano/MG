"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Clock, BarChart3, Shield } from "lucide-react"

export function CommunityFeatures() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: MessageCircle,
      title: "24/7 Moderation",
      description: "Round-the-clock community moderation to ensure a safe and positive environment.",
    },
    {
      icon: Clock,
      title: "Quick Response Time",
      description: "Average response time of less than 30 minutes to maintain engagement.",
    },
    {
      icon: BarChart3,
      title: "Detailed Analytics",
      description: "Comprehensive reports on community growth, engagement, and sentiment.",
    },
    {
      icon: Shield,
      title: "Crisis Management",
      description: "Proactive monitoring and rapid response protocols for reputation protection.",
    },
  ]

  // Decorative elements
  const decorativeCircles = [
    { size: "w-64 h-64", top: "-10%", left: "-5%", color: "border-blue-500/10" },
    { size: "w-96 h-96", bottom: "-20%", right: "-10%", color: "border-blue-500/5" },
  ]

  // Floating elements
  const floatingElements = [
    { icon: "👍", top: "20%", left: "10%", delay: 0 },
    { icon: "❤️", top: "70%", right: "15%", delay: 0.5 },
    { icon: "💬", top: "40%", left: "80%", delay: 1 },
    { icon: "🔔", top: "80%", left: "30%", delay: 1.5 },
  ]

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Decorative circles */}
      {decorativeCircles.map((circle, index) => (
        <div
          key={index}
          className={`absolute ${circle.size} rounded-full border ${circle.color}`}
          style={{ top: circle.top, left: circle.left, right: circle.right, bottom: circle.bottom }}
        ></div>
      ))}

      {/* Floating social elements */}
      {floatingElements.map((el, index) => (
        <motion.div
          key={index}
          className="absolute text-2xl"
          style={{ top: el.top, left: el.left, right: el.right }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            delay: el.delay,
            ease: "easeInOut",
          }}
        >
          {el.icon}
        </motion.div>
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">What sets our community management services apart</p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 h-full hover:border-blue-600/50 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
