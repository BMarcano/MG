"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Video, Camera, Mic, Edit } from "lucide-react"

export function ProductionServices() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: Video,
      title: "Video Production",
      description:
        "Complete video production from concept to final delivery with professional equipment and creative direction.",
      features: ["4K/8K Recording", "Professional Lighting", "Multi-camera Setup", "Drone Footage"],
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Professional photography for products, events, portraits, and commercial purposes.",
      features: ["Product Photography", "Event Coverage", "Portrait Sessions", "Commercial Shoots"],
    },
    {
      icon: Mic,
      title: "Audio Production",
      description: "High-quality audio recording and production for podcasts, commercials, and multimedia content.",
      features: ["Studio Recording", "Audio Editing", "Sound Design", "Voice-over Production"],
    },
    {
      icon: Edit,
      title: "Post-Production",
      description: "Professional editing and post-production services to polish your content to perfection.",
      features: ["Video Editing", "Color Grading", "Motion Graphics", "Audio Mastering"],
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

  // Decorative elements - camera/film related
  const filmStrips = [
    { top: "10%", left: "5%", width: "w-16", height: "h-2", color: "bg-red-600/20" },
    { top: "30%", right: "8%", width: "w-20", height: "h-2", color: "bg-red-600/20" },
    { bottom: "20%", left: "10%", width: "w-12", height: "h-2", color: "bg-red-600/20" },
    { bottom: "40%", right: "15%", width: "w-18", height: "h-2", color: "bg-red-600/20" },
  ]

  // Floating camera elements
  const cameraElements = [
    { icon: "📹", top: "15%", left: "15%", delay: 0 },
    { icon: "📸", top: "70%", right: "20%", delay: 0.5 },
    { icon: "🎬", top: "50%", left: "80%", delay: 1 },
    { icon: "🎤", top: "85%", left: "25%", delay: 1.5 },
  ]

  return (
    <section className="py-20 bg-zinc-950 relative overflow-hidden" id="services">
      {/* Film strip decorations */}
      {filmStrips.map((strip, index) => (
        <div
          key={index}
          className={`absolute ${strip.width} ${strip.height} ${strip.color} rounded-sm`}
          style={{ top: strip.top, left: strip.left, right: strip.right, bottom: strip.bottom }}
        >
          {/* Film holes */}
          <div className="flex justify-between items-center h-full px-1">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="w-1 h-1 bg-zinc-950 rounded-full"></div>
              ))}
          </div>
        </div>
      ))}

      {/* Floating camera elements */}
      {cameraElements.map((el, index) => (
        <motion.div
          key={index}
          className="absolute text-2xl opacity-20"
          style={{ top: el.top, left: el.left, right: el.right }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            delay: el.delay,
            ease: "easeInOut",
          }}
        >
          {el.icon}
        </motion.div>
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Production Services</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional content production with cutting-edge technology
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
              <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 h-full hover:border-red-600/50 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl text-white group-hover:text-red-400 transition-colors mb-4">
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
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2"></div>
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
