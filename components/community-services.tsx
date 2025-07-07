"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, MessageSquare, Heart, Zap } from "lucide-react"

export function CommunityServices() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: Users,
      title: "Community Building",
      description: "We create and grow engaged communities around your brand, fostering loyalty and advocacy.",
      features: ["Audience Growth", "Engagement Strategies", "Community Guidelines", "Member Retention"],
    },
    {
      icon: MessageSquare,
      title: "Social Media Management",
      description:
        "Complete management of your social media presence to maintain consistent and effective communication.",
      features: ["Content Calendar", "Community Moderation", "Response Management", "Crisis Handling"],
    },
    {
      icon: Heart,
      title: "Audience Engagement",
      description:
        "Strategies and tactics to increase engagement and create meaningful interactions with your audience.",
      features: ["Interactive Content", "Live Sessions", "Contests & Giveaways", "User-Generated Content"],
    },
    {
      icon: Zap,
      title: "Reputation Management",
      description:
        "Monitoring and management of your online reputation to build trust and credibility with your audience.",
      features: ["Sentiment Analysis", "Review Management", "Brand Advocacy", "Crisis Prevention"],
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

  // Decorative elements - floating bubbles
  const bubbles = Array(15)
    .fill(0)
    .map((_, i) => ({
      size: Math.random() * 8 + 4,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      opacity: Math.random() * 0.3 + 0.1,
    }))

  return (
    <section className="py-20 bg-zinc-950 relative overflow-hidden" id="services">
      {/* Floating bubbles */}
      {bubbles.map((bubble, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-blue-400"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: bubble.left,
            top: bubble.top,
            opacity: bubble.opacity,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [bubble.opacity, bubble.opacity * 2, bubble.opacity],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
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
          <h2 className="text-4xl font-bold text-white mb-4">Community Management Services</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building and nurturing engaged communities around your brand
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
              <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 h-full hover:border-blue-600/50 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl text-white group-hover:text-blue-400 transition-colors mb-4">
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
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
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
