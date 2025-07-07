"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { TrendingUp, Users, Search, Award } from "lucide-react"

export function SeoResults() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const metrics = [
    {
      icon: TrendingUp,
      number: "250%",
      label: "Increase in Organic Traffic",
      description: "Average increase in 6 months",
    },
    {
      icon: Search,
      number: "Top 3",
      label: "Google Positions",
      description: "85% of target keywords",
    },
    {
      icon: Users,
      number: "180%",
      label: "Improvement in Conversions",
      description: "More qualified traffic",
    },
    {
      icon: Award,
      number: "95%",
      label: "Satisfied Clients",
      description: "Proven results",
    },
  ]

  // Decorative elements
  const decorativeLines = [
    { left: "10%", top: "20%", width: "w-32", height: "h-px", color: "bg-yellow-600/20" },
    { right: "10%", bottom: "30%", width: "w-32", height: "h-px", color: "bg-yellow-600/20" },
    { left: "20%", bottom: "20%", width: "w-px", height: "h-32", color: "bg-yellow-600/20" },
    { right: "25%", top: "15%", width: "w-px", height: "h-32", color: "bg-yellow-600/20" },
  ]

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Decorative lines */}
      {decorativeLines.map((line, index) => (
        <div
          key={index}
          className={`absolute ${line.width} ${line.height} ${line.color}`}
          style={{ left: line.left, right: line.right, top: line.top, bottom: line.bottom }}
        ></div>
      ))}

      {/* Floating elements */}
      <motion.div
        className="absolute w-12 h-12 border border-yellow-600/20 rounded-full"
        style={{ top: "30%", left: "5%" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute w-8 h-8 border border-yellow-600/20 rounded-full"
        style={{ bottom: "20%", right: "10%" }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
      ></motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Proven Results</h2>
          <div className="w-20 h-1 bg-yellow-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real metrics that demonstrate the impact of our SEO strategies
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center group"
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/20 to-orange-600/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative w-20 h-20 mx-auto bg-zinc-900 rounded-full flex items-center justify-center border border-yellow-600/30 group-hover:border-yellow-400 transition-all duration-300">
                  <metric.icon className="h-10 w-10 text-yellow-400" />
                </div>
              </div>
              <motion.h3
                className="text-4xl font-bold text-white mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                {metric.number}
              </motion.h3>
              <h4 className="text-xl font-semibold text-yellow-400 mb-3">{metric.label}</h4>
              <p className="text-gray-400 text-sm">{metric.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
