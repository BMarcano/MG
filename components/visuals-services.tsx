"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Video, Scissors, Zap, Play } from "lucide-react"

export function VisualsServices() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: Video,
      title: "Video Production",
      description: "Complete video production from conceptualization to final delivery with cinematic quality.",
      features: ["4K/8K Production", "Creative Direction", "Professional Equipment", "Premium Locations"],
    },
    {
      icon: Scissors,
      title: "Video Editing",
      description:
        "Professional editing that transforms raw material into polished and attractive content that tells your story.",
      features: ["Color Grading", "Audio Mastering", "Visual Effects", "Multi-format Optimization"],
    },
    {
      icon: Zap,
      title: "Motion Graphics",
      description:
        "Animations and motion graphics that bring your ideas to life and communicate complex messages simply.",
      features: ["2D/3D Animation", "Animated Infographics", "Logo Animation", "Dynamic Titles"],
    },
    {
      icon: Play,
      title: "Explainer Videos",
      description:
        "Explainer videos that simplify complex concepts and help your audience understand your value proposition.",
      features: ["Visual Storytelling", "Custom Animation", "Professional Voiceover", "Effective Call-to-Action"],
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

  // Visual elements - floating shapes
  const shapes = [
    { type: "circle", top: "10%", left: "5%", size: "w-12 h-12", color: "border-pink-500/20" },
    { type: "square", top: "20%", right: "10%", size: "w-16 h-16", color: "border-pink-400/20", rotate: "rotate-45" },
    { type: "triangle", bottom: "15%", left: "15%", size: "w-16 h-16", color: "border-pink-300/20" },
    { type: "circle", bottom: "20%", right: "5%", size: "w-8 h-8", color: "border-pink-600/20" },
  ]

  return (
    <section className="py-20 bg-zinc-950 relative overflow-hidden" id="services">
      {/* Floating shapes */}
      {shapes.map((shape, index) => {
        if (shape.type === "circle") {
          return (
            <motion.div
              key={index}
              className={`absolute ${shape.size} rounded-full border ${shape.color}`}
              style={{ top: shape.top, left: shape.left, right: shape.right, bottom: shape.bottom }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                scale: { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              }}
            ></motion.div>
          )
        } else if (shape.type === "square") {
          return (
            <motion.div
              key={index}
              className={`absolute ${shape.size} border ${shape.color} ${shape.rotate}`}
              style={{ top: shape.top, left: shape.left, right: shape.right, bottom: shape.bottom }}
              animate={{
                rotate: ["0deg", "360deg"],
              }}
              transition={{
                duration: 30,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            ></motion.div>
          )
        } else if (shape.type === "triangle") {
          return (
            <motion.div
              key={index}
              className="absolute"
              style={{ top: shape.top, left: shape.left, right: shape.right, bottom: shape.bottom }}
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 25,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              <div
                className={`${shape.size} border-l-transparent border-r-transparent border-b-[30px] border-b-pink-400/20`}
                style={{ width: 0, height: 0 }}
              ></div>
            </motion.div>
          )
        }
        return null
      })}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Visual Services</h2>
          <div className="w-20 h-1 bg-pink-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Visual content that impacts and converts</p>
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
              <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 h-full hover:border-pink-600/50 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl text-white group-hover:text-pink-400 transition-colors mb-4">
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
                        <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-2"></div>
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
