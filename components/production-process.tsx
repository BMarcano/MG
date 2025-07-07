"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Lightbulb, FileText, Camera, Edit, Rocket } from "lucide-react"

export function ProductionProcess() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const steps = [
    {
      icon: Lightbulb,
      title: "Concept Development",
      description: "We work with you to develop creative concepts that align with your brand and objectives",
    },
    {
      icon: FileText,
      title: "Pre-Production",
      description: "Detailed planning including scripts, storyboards, location scouting, and crew coordination",
    },
    {
      icon: Camera,
      title: "Production",
      description: "Professional filming/recording with state-of-the-art equipment and experienced crew",
    },
    {
      icon: Edit,
      title: "Post-Production",
      description: "Expert editing, color grading, sound design, and visual effects to perfect your content",
    },
    {
      icon: Rocket,
      title: "Delivery & Distribution",
      description: "Final delivery in all required formats and assistance with distribution strategy",
    },
  ]

  // Decorative elements
  const decorativeLines = [
    { top: "25%", left: "20%", width: "w-32", height: "h-px", color: "bg-red-600/20" },
    { top: "45%", right: "20%", width: "w-32", height: "h-px", color: "bg-red-600/20" },
    { top: "65%", left: "30%", width: "w-32", height: "h-px", color: "bg-red-600/20" },
    { top: "85%", right: "30%", width: "w-32", height: "h-px", color: "bg-red-600/20" },
  ]

  return (
    <section className="py-20 bg-zinc-900 relative overflow-hidden">
      {/* Decorative lines */}
      {decorativeLines.map((line, index) => (
        <div
          key={index}
          className={`absolute ${line.width} ${line.height} ${line.color}`}
          style={{ top: line.top, left: line.left, right: line.right }}
        ></div>
      ))}

      {/* Floating elements */}
      <motion.div
        className="absolute w-16 h-16 border border-red-600/20 rounded-full"
        style={{ top: "20%", left: "5%" }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      ></motion.div>
      <motion.div
        className="absolute w-12 h-12 border border-red-600/20 rounded-full"
        style={{ bottom: "20%", right: "10%" }}
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      ></motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Production Process</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our proven methodology for creating exceptional content
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center group"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-red-600 to-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
