"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ExternalLink, Building2, Globe, TrendingUp } from "lucide-react"
import Link from "next/link"

export function WPTGFamily() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const highlights = [
    {
      icon: Building2,
      title: "Global Technology Group",
      description: "Leading IT solutions across Europe, Americas, Africa and Middle East",
    },
    {
      icon: Globe,
      title: "International Presence",
      description: "Operations across multiple continents with global reach",
    },
    {
      icon: TrendingUp,
      title: "Nasdaq Listed",
      description: "Public company listed on European markets",
    },
  ]

  return (
    <section className="py-20 bg-zinc-950 relative overflow-hidden" id="family">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Our <span className="text-cyan-400">Family</span>
            </h2>
            <div className="w-20 h-1 bg-cyan-600 mb-8"></div>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We proudly belong to <span className="text-cyan-400 font-semibold">White Pearl Technology Group</span>, an
              important IT Group leading the markets in Europe, Americas, Africa, and Middle East.
            </p>

            <p className="text-lg text-gray-400 mb-12 leading-relaxed">
              It's a huge honor being part of this amazing organization listed in Nasdaq / Europe and it will be the
              starting point for our expansion in other markets.
            </p>

            {/* Highlights */}
            <div className="space-y-6 mb-12">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-cyan-600/20 rounded-lg flex items-center justify-center">
                    <highlight.icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{highlight.title}</h3>
                    <p className="text-gray-400">{highlight.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white text-lg px-8 py-6">
                <Link href="https://wptg.com" target="_blank" rel="noopener noreferrer">
                  Visit WPTG <ExternalLink className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* WPTG Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
                <div
                  className="w-80 h-40 bg-contain bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url('/images/WhitepearlLogo.jpg?height=200&width=400&text=WHITEPEARL+Technology+Group+AB')`,
                  }}
                ></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
