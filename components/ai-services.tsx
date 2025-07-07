"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, MessageSquare, Zap, BarChart3 } from "lucide-react"

export function AiServices() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: Bot,
      title: "AI Chatbots",
      description: "Intelligent conversational agents that provide immediate assistance to your customers 24/7.",
      features: [
        "Natural Language Processing",
        "Multi-platform Integration",
        "Continuous Learning",
        "Analytics Dashboard",
      ],
    },
    {
      icon: MessageSquare,
      title: "Content Generation",
      description:
        "AI-powered content creation for blogs, social media, and marketing materials that saves time and resources.",
      features: ["SEO Optimization", "Multilingual Support", "Brand Voice Adaptation", "Content Calendar"],
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Intelligent automation of repetitive tasks to increase efficiency and reduce operational costs.",
      features: ["Workflow Optimization", "Custom Integrations", "Error Reduction", "Performance Monitoring"],
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description:
        "Advanced data analysis to identify trends and make informed business decisions based on AI insights.",
      features: ["Trend Forecasting", "Customer Behavior", "Market Analysis", "Visual Reports"],
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

  // Binary code floating elements
  const binaryElements = Array(15)
    .fill(0)
    .map((_, i) => ({
      text: Math.random() > 0.5 ? "1" : "0",
      size: Math.random() > 0.7 ? "text-xl" : "text-sm",
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.3 + 0.1,
    }))

  return (
    <section className="py-20 bg-zinc-950 relative overflow-hidden" id="services">
      {/* Binary code elements */}
      {binaryElements.map((el, index) => (
        <motion.div
          key={index}
          className={`absolute ${el.size} text-purple-500 font-mono`}
          style={{
            left: el.left,
            top: el.top,
            opacity: el.opacity,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [el.opacity, el.opacity * 2, el.opacity],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: el.delay,
          }}
        >
          {el.text}
        </motion.div>
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">AI Solutions</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Intelligent technologies that transform your business
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
              <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 h-full hover:border-purple-600/50 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl text-white group-hover:text-purple-400 transition-colors mb-4">
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
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></div>
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
