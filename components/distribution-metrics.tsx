"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Eye, Users, TrendingUp, Target } from "lucide-react"

export function DistributionMetrics() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const metrics = [
    { icon: Eye, label: "Reach", value: "5.2M", change: "+32%" },
    { icon: Users, label: "Engagement", value: "18.7%", change: "+15%" },
    { icon: TrendingUp, label: "Conversion", value: "4.3%", change: "+22%" },
    { icon: Target, label: "ROI", value: "3.8x", change: "+28%" },
  ]

  // Chart data visualization
  const chartLines = [
    { points: "M0,50 L20,45 L40,30 L60,35 L80,25 L100,20", color: "stroke-green-500" },
    { points: "M0,70 L20,65 L40,60 L60,55 L80,45 L100,40", color: "stroke-emerald-500" },
  ]

  return (
    <section className="py-20 bg-zinc-900 relative overflow-hidden">
      {/* Floating elements */}
      <motion.div
        className="absolute w-32 h-32 rounded-full bg-green-500/5"
        style={{ top: "10%", left: "5%" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute w-48 h-48 rounded-full bg-green-500/5"
        style={{ bottom: "10%", right: "5%" }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
      ></motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Performance Metrics</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Measuring the impact of our distribution strategies</p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-zinc-800/50 backdrop-blur-sm border-zinc-700 hover:border-green-600/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <metric.icon className="h-8 w-8 text-green-400" />
                    <span className="text-green-400 text-sm font-semibold">{metric.change}</span>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                  <div className="text-gray-400 text-sm">{metric.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Performance Chart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative rounded-2xl overflow-hidden bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 p-6"
        >
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xl font-bold text-white">Distribution Performance</h3>
            <div className="flex space-x-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-xs text-gray-400">Reach</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></div>
                <span className="text-xs text-gray-400">Engagement</span>
              </div>
            </div>
          </div>

          {/* Chart visualization */}
          <div className="h-48 w-full relative">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              {chartLines.map((line, index) => (
                <motion.path
                  key={index}
                  d={line.points}
                  fill="none"
                  className={`${line.color} stroke-2`}
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ duration: 2, delay: 0.5 + index * 0.2 }}
                  strokeDasharray="1"
                  strokeDashoffset="0"
                />
              ))}

              {/* Grid lines */}
              {[0, 20, 40, 60, 80, 100].map((x, i) => (
                <line key={i} x1={x} y1="0" x2={x} y2="100" stroke="#374151" strokeWidth="0.5" strokeDasharray="2,2" />
              ))}
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
