"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, Target, Users, TrendingUp } from "lucide-react"

export function AnalyticsServices() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: BarChart3,
      title: "Social Media Analytics",
      description: "In-depth analysis of Facebook, Instagram, and LinkedIn to understand your audience behavior.",
      features: ["Engagement Analysis", "Audience Insights", "Content Performance", "Competitor Benchmarking"],
    },
    {
      icon: Target,
      title: "Targeted Ad Campaigns",
      description: "Data-driven optimization of advertising campaigns to maximize conversions and reduce costs.",
      features: ["Audience Segmentation", "A/B Testing", "Conversion Tracking", "ROI Optimization"],
    },
    {
      icon: Users,
      title: "Customer Journey Mapping",
      description: "Complete mapping of the customer journey to identify improvement points and opportunities.",
      features: ["Touchpoint Analysis", "Conversion Funnels", "User Behavior", "Drop-off Points"],
    },
    {
      icon: TrendingUp,
      title: "Performance Reporting",
      description: "Detailed reports and real-time dashboards to monitor the performance of your strategies.",
      features: ["Real-time Dashboards", "Custom Reports", "KPI Tracking", "Predictive Analytics"],
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

  // Data visualization elements
  const dataPoints = Array(20)
    .fill(0)
    .map((_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      color: `rgba(${Math.floor(Math.random() * 100 + 79)}, ${Math.floor(Math.random() * 50 + 70)}, ${Math.floor(
        Math.random() * 100 + 155,
      )}, ${Math.random() * 0.2 + 0.1})`,
    }))

  return (
    <section className="py-20 bg-zinc-950 relative overflow-hidden" id="services">
      {/* Data visualization elements */}
      {dataPoints.map((point, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            left: `${point.x}%`,
            top: `${point.y}%`,
            width: `${point.size}px`,
            height: `${point.size}px`,
            backgroundColor: point.color,
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

      {/* Connecting lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.05 }}>
        <motion.path
          d="M0,50 Q25,25 50,50 T100,50"
          fill="none"
          stroke="rgb(129, 140, 248)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          style={{ strokeDasharray: 1, strokeDashoffset: 0 }}
        />
        <motion.path
          d="M0,70 Q40,40 80,70 T100,70"
          fill="none"
          stroke="rgb(129, 140, 248)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
          style={{ strokeDasharray: 1, strokeDashoffset: 0 }}
        />
      </svg>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Analytics Services</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Data that drives intelligent decisions</p>
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
              <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 h-full hover:border-indigo-600/50 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl text-white group-hover:text-indigo-400 transition-colors mb-4">
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
                        <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2"></div>
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
