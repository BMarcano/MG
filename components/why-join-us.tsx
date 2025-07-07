"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { Lightbulb, Users, Rocket, Globe, Award, Zap } from "lucide-react"

export function WhyJoinUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const reasons = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description:
        "Work with cutting-edge technologies and creative solutions that push the boundaries of digital media.",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Join a team where every voice matters and collaboration drives our success forward.",
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: Rocket,
      title: "Growth Opportunities",
      description:
        "Accelerate your career with mentorship, training, and challenging projects that expand your skills.",
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Create content and solutions that reach audiences worldwide and make a real difference.",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: Award,
      title: "Recognition & Rewards",
      description: "Your contributions are valued and rewarded with competitive compensation and benefits.",
      color: "from-red-400 to-pink-500",
    },
    {
      icon: Zap,
      title: "Fast-Paced Environment",
      description: "Thrive in a dynamic workplace where innovation happens quickly and ideas come to life.",
      color: "from-indigo-400 to-purple-500",
    },
  ]

  return (
    <section className="py-20 bg-zinc-950 relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose Media Geek UY?</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover what makes our company a great place to build your career and make an impact.
          </p>
        </motion.div>

        <motion.div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-8 h-full hover:border-blue-600/50 transition-all duration-300 hover:transform hover:scale-105">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${reason.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
