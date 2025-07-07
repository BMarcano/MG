"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Users, MapPin, Award, Zap } from "lucide-react"

export function WPTGStats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Professionals",
      description: "Technology experts working globally",
    },
    {
      icon: MapPin,
      number: "15+",
      label: "Countries",
      description: "Active presence in multiple markets",
    },
    {
      icon: Award,
      number: "10+",
      label: "Years",
      description: "Experience leading digital transformation",
    },
    {
      icon: Zap,
      number: "1000+",
      label: "Projects",
      description: "Successfully delivered to satisfied clients",
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

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Numbers that <span className="text-cyan-400">Speak</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            WPTG Group's strength is reflected in our global reach and the trust of our clients
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants} className="text-center group">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative w-20 h-20 mx-auto bg-zinc-900 rounded-full flex items-center justify-center border border-cyan-600/30 group-hover:border-cyan-400 transition-all duration-300">
                  <stat.icon className="h-10 w-10 text-cyan-400" />
                </div>
              </div>
              <motion.h3
                className="text-4xl font-bold text-white mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                {stat.number}
              </motion.h3>
              <h4 className="text-xl font-semibold text-cyan-400 mb-3">{stat.label}</h4>
              <p className="text-gray-400 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
