"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Share2, Target, Megaphone } from "lucide-react"

export function CopywritingServices() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: Share2,
      title: "Social Media Content",
      description:
        "Engaging and viral content for all your social platforms that generates engagement and builds community.",
      features: ["Monthly Posts", "Stories & Reels", "Optimized Captions", "Hashtag Strategy"],
    },
    {
      icon: Target,
      title: "Ad Management",
      description: "Persuasive copy for advertising campaigns that maximizes conversions and ROI across all platforms.",
      features: ["Facebook Ads", "Google Ads", "LinkedIn Ads", "Copy Testing"],
    },
    {
      icon: FileText,
      title: "Content Strategy",
      description: "Comprehensive content strategies that align your message with business goals and audience.",
      features: ["Content Calendar", "Brand Voice", "Editorial Guidelines", "Content Audit"],
    },
    {
      icon: Megaphone,
      title: "Campaign Copy",
      description: "Advertising texts that capture attention, generate interest, and effectively motivate action.",
      features: ["Impactful Headlines", "Call-to-Actions", "Email Marketing", "Landing Pages"],
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

  // Decorative elements - floating text elements
  const floatingWords = [
    { text: "Engage", top: "10%", left: "5%", size: "text-sm", color: "text-teal-400/20" },
    { text: "Convert", top: "20%", right: "10%", size: "text-lg", color: "text-teal-500/20" },
    { text: "Inspire", top: "70%", left: "15%", size: "text-base", color: "text-teal-300/20" },
    { text: "Persuade", top: "60%", right: "5%", size: "text-xl", color: "text-teal-600/20" },
    { text: "Connect", top: "85%", left: "30%", size: "text-lg", color: "text-teal-400/20" },
  ]

  return (
    <section className="py-20 bg-zinc-950 relative overflow-hidden" id="services">
      {/* Floating text elements */}
      {floatingWords.map((word, index) => (
        <motion.div
          key={index}
          className={`absolute ${word.size} ${word.color} font-bold opacity-30`}
          style={{ top: word.top, left: word.left, right: word.right }}
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
          {word.text}
        </motion.div>
      ))}

      {/* Floating dots */}
      <motion.div
        className="absolute w-2 h-2 bg-teal-400/30 rounded-full"
        style={{ top: "40%", right: "20%" }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute w-3 h-3 bg-teal-500/20 rounded-full"
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
          <h2 className="text-4xl font-bold text-white mb-4">Copywriting Services</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Content that connects, convinces, and converts</p>
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
              <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 h-full hover:border-teal-600/50 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl text-white group-hover:text-teal-400 transition-colors mb-4">
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
                        <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2"></div>
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
