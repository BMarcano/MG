"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export function WPTGGlobalPresence() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const regions = [
    {
      name: "Europe",
      countries: ["Sweden", "Germany", "United Kingdom", "France", "Spain"],
      description: "Headquarters and European operations center",
      color: "from-cyan-500 to-blue-500",
    },
    {
      name: "Americas",
      countries: ["United States", "Canada", "Brazil", "Uruguay", "Mexico"],
      description: "Strategic expansion in American markets",
      color: "from-blue-500 to-purple-500",
    },
    {
      name: "Africa",
      countries: ["South Africa", "Nigeria", "Kenya", "Ghana"],
      description: "Development of emerging African markets",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Middle East",
      countries: ["UAE", "Saudi Arabia", "Qatar", "Israel"],
      description: "Presence in high-tech markets",
      color: "from-pink-500 to-cyan-500",
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
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background world map placeholder */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full bg-contain bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/placeholder.svg?height=600&width=1200&text=World+Map')`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Global <span className="text-cyan-400">Presence</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            WPTG Group operates on four continents, providing innovative technology solutions worldwide
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {regions.map((region, index) => (
            <motion.div key={index} variants={itemVariants} className="group">
              <div className="relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${region.color} opacity-20 rounded-2xl blur-xl group-hover:opacity-30 transition-opacity duration-300`}
                ></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-6 border border-zinc-800 group-hover:border-cyan-600/50 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {region.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{region.description}</p>
                  <div className="space-y-2">
                    {region.countries.map((country, countryIndex) => (
                      <Badge
                        key={countryIndex}
                        variant="outline"
                        className="mr-2 mb-2 border-zinc-700 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition-colors"
                      >
                        {country}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-300 mb-8">
            Interested in being part of our global network? Discover the opportunities WPTG Group can offer your
            business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://wptg.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore WPTG Group
            </motion.a>
            <motion.a
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold rounded-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Media Geek UY
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
