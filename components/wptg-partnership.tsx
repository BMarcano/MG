"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Handshake, Target, Rocket, Shield } from "lucide-react"

export function WPTGPartnership() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const benefits = [
    {
      icon: Handshake,
      title: "Strategic Alliance",
      description:
        "Access to global resources and international expertise to offer world-class solutions to our clients.",
    },
    {
      icon: Target,
      title: "Market Expansion",
      description: "Growth opportunities in new international markets backed by WPTG's global network.",
    },
    {
      icon: Rocket,
      title: "Continuous Innovation",
      description:
        "Access to the latest technologies and methodologies developed by the group to stay at the forefront.",
    },
    {
      icon: Shield,
      title: "Corporate Backing",
      description: "WPTG Group's financial strength and reputation allows us to take on larger scale projects.",
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
    <section className="py-20 bg-zinc-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Alliance <span className="text-cyan-400">Benefits</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Being part of WPTG Group allows us to offer international-level services with the backing of a leading
            technology organization
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 h-full hover:border-cyan-600/50 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-xl flex items-center justify-center group-hover:from-cyan-600/30 group-hover:to-blue-600/30 transition-all duration-300">
                      <benefit.icon className="h-8 w-8 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
