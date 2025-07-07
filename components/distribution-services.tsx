"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Share2, Target, BarChart3, Globe } from "lucide-react"

export function DistributionServices() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: Share2,
      title: "Social Media Distribution",
      description: "Strategic distribution of content across social platforms to maximize reach and engagement.",
      features: ["Platform-specific Optimization", "Scheduling", "Audience Targeting", "Performance Analysis"],
    },
    {
      icon: Target,
      title: "Paid Media",
      description: "Targeted advertising campaigns that deliver your content to the most relevant audiences.",
      features: ["Audience Segmentation", "A/B Testing", "Budget Optimization", "ROI Tracking"],
    },
    {
      icon: BarChart3,
      title: "Performance Tracking",
      description: "Comprehensive analytics to measure the impact and reach of your distributed content.",
      features: ["Real-time Dashboards", "Custom Reports", "Conversion Tracking", "Audience Insights"],
    },
    {
      icon: Globe,
      title: "Multi-channel Strategy",
      description: "Cohesive distribution strategies across multiple channels for maximum impact and consistency.",
      features: ["Channel Integration", "Cross-promotion", "Content Adaptation", "Unified Messaging"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  // Decorative elements - floating network nodes
  const networkNodes = Array(10)
    .fill(0)
    .map((_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
    }))

  // Network connections
  const connections = [
    { from: 0, to: 1 },
    { from: 0, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 4 },
    { from: 3, to: 5 },
    { from: 4, to: 6 },
    { from: 5, to: 7 },
    { from: 6, to: 8 },
    { from: 7, to: 9 },
    { from: 8, to: 9 },
  ]

  return (
    <section className="py-20 bg-zinc-950 relative overflow-hidden" id="services">
      {/* Network nodes */}
      {networkNodes.map((node, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-green-400"
          style={{
            width: `${node.size}px`,
            height: `${node.size}px`,
            left: `${node.x}%`,
            top: `${node.y}%`,
            opacity: 0.2,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Network connections */}
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.1 }}>
        {connections.map((connection, index) => {
          const fromNode = networkNodes[connection.from]
          const toNode = networkNodes[connection.to]
          return (
            <motion.line
              key={index}
              x1={`${fromNode.x}%`}
              y1={`${fromNode.y}%`}
              x2={`${toNode.x}%`}
              y2={`${toNode.y}%`}
              stroke="rgb(74, 222, 128)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: index * 0.2 }}
              strokeDasharray="5,5"
            />
          )
        })}
      </svg>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Distribution Services</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Strategic content distribution to reach your target audience
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 h-full hover:border-green-600/50 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl text-white group-hover:text-green-400 transition-colors mb-4">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-500 flex items-center">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
