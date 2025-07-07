"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Smartphone, Monitor, Zap } from "lucide-react"

export function PlatformsServices() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
      features: ["Responsive Design", "SEO Optimization", "Performance Optimization", "Security Implementation"],
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile applications that provide seamless user experiences across all devices.",
      features: ["iOS & Android", "Cross-platform", "App Store Optimization", "Push Notifications"],
    },
    {
      icon: Monitor,
      title: "E-commerce Platforms",
      description: "Complete e-commerce solutions with payment integration, inventory management, and analytics.",
      features: ["Payment Integration", "Inventory Management", "Analytics Dashboard", "Multi-vendor Support"],
    },
    {
      icon: Zap,
      title: "API Development",
      description:
        "Robust APIs and integrations that connect your platforms with third-party services and internal systems.",
      features: ["RESTful APIs", "GraphQL", "Third-party Integrations", "Real-time Data"],
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

  // Tech-inspired floating elements
  const techElements = [
    { symbol: "</", top: "10%", left: "5%", size: "text-2xl", color: "text-cyan-400/20" },
    { symbol: "{}", top: "20%", right: "10%", size: "text-xl", color: "text-cyan-500/20" },
    { symbol: "[]", top: "70%", left: "15%", size: "text-lg", color: "text-cyan-300/20" },
    { symbol: "/>", top: "60%", right: "5%", size: "text-2xl", color: "text-cyan-600/20" },
    { symbol: "()", top: "85%", left: "30%", size: "text-xl", color: "text-cyan-400/20" },
  ]

  return (
    <section className="py-20 bg-zinc-950 relative overflow-hidden" id="services">
      {/* Floating tech symbols */}
      {techElements.map((el, index) => (
        <motion.div
          key={index}
          className={`absolute ${el.size} ${el.color} font-mono font-bold`}
          style={{ top: el.top, left: el.left, right: el.right }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            delay: index * 0.5,
            ease: "easeInOut",
          }}
        >
          {el.symbol}
        </motion.div>
      ))}

      {/* Binary dots */}
      <motion.div
        className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
        style={{ top: "40%", right: "20%" }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute w-3 h-3 bg-cyan-500/20 rounded-full"
        style={{ bottom: "30%", left: "10%" }}
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
      ></motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Platform Development Services</h2>
          <div className="w-20 h-1 bg-cyan-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Custom digital platforms that drive your business forward
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
              <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 h-full hover:border-cyan-600/50 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl text-white group-hover:text-cyan-400 transition-colors mb-4">
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
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
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
