"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { Coffee, Gamepad2, Music, Palette, Code, Heart } from "lucide-react"

export function CompanyCulture() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const cultureValues = [
    {
      icon: Coffee,
      title: "Work-Life Balance",
      description: "Flexible hours and remote work options to help you maintain a healthy balance.",
    },
    {
      icon: Gamepad2,
      title: "Fun Environment",
      description: "Regular team activities, game sessions, and social events to keep things enjoyable.",
    },
    {
      icon: Music,
      title: "Creative Freedom",
      description: "Express your creativity and bring innovative ideas to life in your projects.",
    },
    {
      icon: Palette,
      title: "Diverse Perspectives",
      description: "We celebrate diversity and believe different viewpoints make us stronger.",
    },
    {
      icon: Code,
      title: "Continuous Learning",
      description: "Access to courses, conferences, and resources to keep growing your skills.",
    },
    {
      icon: Heart,
      title: "Supportive Team",
      description: "A caring team that supports each other through challenges and celebrates wins.",
    },
  ]

  return (
    <section id="culture" className="py-20 bg-gradient-to-b from-zinc-950 to-zinc-900 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Company Culture</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We've built a culture that values creativity, collaboration, and personal growth. Here's what makes our
            workplace special.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Culture Values */}
          <motion.div ref={ref} className="space-y-6">
            {cultureValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-start space-x-4 p-6 bg-zinc-800/30 rounded-xl border border-zinc-700/50 hover:border-purple-600/50 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Culture Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-purple-500/20">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-zinc-800/50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-white mb-2">95%</div>
                  <div className="text-gray-400 text-sm">Employee Satisfaction</div>
                </div>
                <div className="bg-zinc-800/50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-white mb-2">4.8</div>
                  <div className="text-gray-400 text-sm">Glassdoor Rating</div>
                </div>
                <div className="bg-zinc-800/50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-white mb-2">100%</div>
                  <div className="text-gray-400 text-sm">Remote Friendly</div>
                </div>
                <div className="bg-zinc-800/50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-white mb-2">24/7</div>
                  <div className="text-gray-400 text-sm">Team Support</div>
                </div>
              </div>

              {/* Quote */}
              <div className="mt-8 p-6 bg-zinc-800/30 rounded-xl border-l-4 border-purple-500">
                <p className="text-gray-300 italic mb-4">
                  "Working at Media Geek UY has been an incredible journey. The team truly cares about each other and
                  the work we do together."
                </p>
                <div className="text-purple-400 font-semibold">- Team Member</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
