"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Search, Lightbulb, Palette, Rocket } from "lucide-react"

export function BrandProcess() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const steps = [
    {
      icon: Search,
      title: "Research & Discovery",
      description: "We research your market, competition, and audience to understand your brand context",
    },
    {
      icon: Lightbulb,
      title: "Strategy & Concept",
      description: "We develop the brand strategy and creative concepts that reflect your unique identity",
    },
    {
      icon: Palette,
      title: "Design & Development",
      description: "We create all the visual elements and materials that bring your brand to life",
    },
    {
      icon: Rocket,
      title: "Launch & Evolution",
      description: "We implement your new identity and evolve it as your business grows",
    },
  ]

  // Decorative elements
  const decorativeLines = [
    { top: "30%", left: "25%", width: "w-32", height: "h-px", rotate: "rotate-45", color: "bg-orange-600/20" },
    { top: "60%", right: "25%", width: "w-32", height: "h-px", rotate: "-rotate-45", color: "bg-orange-600/20" },
    { top: "45%", left: "40%", width: "w-48", height: "h-px", rotate: "rotate-0", color: "bg-orange-600/30" },
  ]

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Decorative lines */}
      {decorativeLines.map((line, index) => (
        <div
          key={index}
          className={`absolute ${line.width} ${line.height} ${line.rotate} ${line.color}`}
          style={{ top: line.top, left: line.left, right: line.right }}
        ></div>
      ))}

      {/* Floating dots */}
      <motion.div
        className="absolute w-3 h-3 bg-orange-500/30 rounded-full"
        style={{ top: "20%", left: "10%" }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute w-2 h-2 bg-orange-400/30 rounded-full"
        style={{ bottom: "30%", right: "15%" }}
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
      ></motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Branding Process</h2>
          <div className="w-20 h-1 bg-orange-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A structured process to create brands that truly connect
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center group"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
