"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Eye, Users, TrendingUp, Target } from "lucide-react"

export function AnalyticsDashboard() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const metrics = [
    { icon: Eye, label: "Page Views", value: "2.4M", change: "+15%" },
    { icon: Users, label: "Active Users", value: "45.2K", change: "+23%" },
    { icon: TrendingUp, label: "Conversion Rate", value: "3.8%", change: "+12%" },
    { icon: Target, label: "Ad Performance", value: "4.2x ROAS", change: "+18%" },
  ]

  // Chart data visualization
  const chartLines = [
    { points: "M0,50 L20,45 L40,60 L60,35 L80,50 L100,30", color: "stroke-indigo-500" },
    { points: "M0,70 L20,65 L40,75 L60,60 L80,65 L100,55", color: "stroke-purple-500" },
    { points: "M0,40 L20,50 L40,35 L60,55 L80,40 L100,45", color: "stroke-blue-500" },
  ]

  // Floating data points
  const dataPoints = Array(15)
    .fill(0)
    .map((_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 2,
    }))

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Floating data points */}
      {dataPoints.map((point, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-indigo-400/30"
          style={{
            left: `${point.x}%`,
            top: `${point.y}%`,
            width: `${point.size}px`,
            height: `${point.size}px`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            delay: point.delay,
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
          <h2 className="text-4xl font-bold text-white mb-4">Real-Time Dashboard</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Key metrics that help you make informed decisions</p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 hover:border-indigo-600/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <metric.icon className="h-8 w-8 text-indigo-400" />
                    <span className="text-green-400 text-sm font-semibold">{metric.change}</span>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                  <div className="text-gray-400 text-sm">{metric.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative rounded-2xl overflow-hidden bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 p-6"
        >
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xl font-bold text-white">Performance Analytics</h3>
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
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

              {/* Data points */}
              {[0, 20, 40, 60, 80, 100].map((x, i) => (
                <g key={i}>
                  <line x1={x} y1="0" x2={x} y2="100" stroke="#374151" strokeWidth="0.5" strokeDasharray="2,2" />
                  <text x={x} y="100" textAnchor="middle" fill="#9CA3AF" fontSize="3">
                    {i * 20}%
                  </text>
                </g>
              ))}
            </svg>

            {/* Legend */}
            <div className="absolute bottom-0 right-0 flex items-center space-x-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-indigo-500 rounded-full mr-1"></div>
                <span className="text-xs text-gray-400">Traffic</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-1"></div>
                <span className="text-xs text-gray-400">Conversions</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-1"></div>
                <span className="text-xs text-gray-400">Engagement</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
