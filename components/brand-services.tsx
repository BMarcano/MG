"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Palette, Package, TrendingUp } from "lucide-react"

export function BrandServices() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: Target,
      title: "Brand Strategy",
      description:
        "We develop solid brand strategies that define your positioning, values, and unique value proposition in the market.",
      features: ["Market Analysis", "Positioning", "Value Proposition", "Brand Architecture"],
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description:
        "We create memorable visual identities that communicate the essence of your brand through cohesive graphic elements.",
      features: ["Logo Design", "Visual Identity", "Color Palette", "Corporate Typography"],
    },
    {
      icon: Package,
      title: "Packaging Design",
      description:
        "We design packaging that not only protects your product but also tells your story and attracts consumers.",
      features: ["Package Design", "Labels", "Displays", "Unboxing Experience"],
    },
    {
      icon: TrendingUp,
      title: "Brand Development",
      description:
        "We build and strengthen your brand through comprehensive strategies that generate recognition and loyalty.",
      features: ["Brand Guidelines", "Communication", "Brand Experience", "Brand Evolution"],
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

  // Decorative elements
  const decorativeElements = [
    { top: "10%", left: "5%", size: "w-2 h-2", color: "bg-orange-400", delay: 0 },
    { top: "20%", right: "10%", size: "w-3 h-3", color: "bg-orange-500", delay: 0.5 },
    { top: "50%", left: "15%", size: "w-4 h-4", color: "bg-orange-300", delay: 1 },
    { top: "70%", right: "5%", size: "w-2 h-2", color: "bg-orange-600", delay: 1.5 },
    { top: "85%", left: "30%", size: "w-3 h-3", color: "bg-orange-400", delay: 2 },
  ]

  return (
    <section className="py-20 bg-zinc-950 relative overflow-hidden" id="services">
      {/* Decorative floating elements */}
      {decorativeElements.map((el, index) => (
        <motion.div
          key={index}
          className={`absolute ${el.size} ${el.color} rounded-full opacity-30`}
          style={{ top: el.top, left: el.left, right: el.right }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            delay: el.delay,
            ease: "easeInOut",
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
          <h2 className="text-4xl font-bold text-white mb-4">Branding Services</h2>
          <div className="w-20 h-1 bg-orange-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive services to build strong and memorable brands
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
              <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 h-full hover:border-orange-600/50 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl text-white group-hover:text-orange-400 transition-colors mb-4">
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
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2"></div>
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
