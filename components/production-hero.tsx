"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ProductionHero() {
  return (
    <section className="py-32 bg-gradient-to-br from-zinc-950 via-black to-zinc-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-red-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Professional <span className="text-red-500">Content</span> Production
            </h1>
            <div className="w-24 h-1 bg-red-600 mb-6"></div>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We create high-quality multimedia content using the latest AI technologies alongside our professional
              creative team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                <Link href="/contact">Start Project</Link>
              </Button>
              
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-zinc-900/50 backdrop-blur-sm rounded-3xl p-8 border border-zinc-800">
                <h3 className="text-2xl font-bold text-white mb-6">Our Services</h3>
                <ul className="space-y-4">
                  {[
                    "4K/8K Videos",
                    "Professional Podcasts",
                    "Commercial Photography",
                    "Motion Graphics",
                    "TV/Radio Content",
                  ].map((service, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
