"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { DollarSign, Calendar, GraduationCap, Shield, Home, Plane, Coffee, Laptop } from "lucide-react"

export function Benefits() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Salary",
      description: "Market-competitive compensation with performance bonuses and regular reviews.",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: Calendar,
      title: "Flexible Schedule",
      description: "Work when you're most productive with flexible hours and time-off policies.",
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: GraduationCap,
      title: "Learning Budget",
      description: "Annual budget for courses, conferences, and professional development.",
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: Shield,
      title: "Health Coverage",
      description: "Comprehensive health insurance and wellness programs for you and your family.",
      color: "from-red-400 to-pink-500",
    },
    {
      icon: Home,
      title: "Remote Work",
      description: "Work from anywhere with full remote work support and home office setup.",
      color: "from-orange-400 to-red-500",
    },
    {
      icon: Plane,
      title: "Travel Opportunities",
      description: "Opportunities to travel for conferences, client meetings, and team retreats.",
      color: "from-indigo-400 to-purple-500",
    },
    {
      icon: Coffee,
      title: "Team Events",
      description: "Regular team building activities, social events, and company celebrations.",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: Laptop,
      title: "Latest Equipment",
      description: "Top-of-the-line equipment and software to help you do your best work.",
      color: "from-teal-400 to-cyan-500",
    },
  ]

  return (
    <section className="py-20 bg-zinc-900 relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-green-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Benefits & Perks</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We believe in taking care of our team with comprehensive benefits and perks that support your professional
            and personal life.
          </p>
        </motion.div>

        <motion.div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-xl p-6 h-full hover:border-green-600/50 transition-all duration-300 hover:transform hover:scale-105">
                <div
                  className={`w-14 h-14 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
