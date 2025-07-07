"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Code, Database, Cloud, Smartphone } from "lucide-react"

export function PlatformsHero() {
  return (
    <section className="py-32 bg-gradient-to-br from-zinc-950 via-black to-zinc-900 relative overflow-hidden">
      {/* Tech-inspired floating elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-24 left-24 w-6 h-6 border border-emerald-500/40 rounded"
          animate={{ rotate: [0, 90, 180, 270, 360] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        ></motion.div>
        <motion.div
          className="absolute bottom-32 right-32 w-4 h-4 bg-emerald-500/20 rounded"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        ></motion.div>
        <motion.div
          className="absolute top-1/3 right-1/3 w-2 h-2 bg-emerald-400 rounded-full"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Digital <span className="text-emerald-500">Platforms</span>
            </h1>
            <div className="w-24 h-1 bg-emerald-600 mb-6"></div>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We build scalable digital platforms that transform how your business operates. From custom web
              applications to enterprise solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                <Link href="/contact">Build Your Platform</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black"
              >
                <Link href="#services">View Solutions</Link>
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
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-zinc-900/50 backdrop-blur-sm rounded-3xl p-8 border border-zinc-800">
                <h3 className="text-2xl font-bold text-white mb-6">Platform Solutions</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-emerald-600/10 rounded-lg p-4 border border-emerald-600/20">
                    <Code className="w-8 h-8 text-emerald-400 mb-2" />
                    <p className="text-white font-semibold">Web Apps</p>
                    <p className="text-gray-400 text-sm">Custom development</p>
                  </div>
                  <div className="bg-emerald-600/10 rounded-lg p-4 border border-emerald-600/20">
                    <Database className="w-8 h-8 text-emerald-400 mb-2" />
                    <p className="text-white font-semibold">Databases</p>
                    <p className="text-gray-400 text-sm">Data management</p>
                  </div>
                  <div className="bg-emerald-600/10 rounded-lg p-4 border border-emerald-600/20">
                    <Cloud className="w-8 h-8 text-emerald-400 mb-2" />
                    <p className="text-white font-semibold">Cloud Solutions</p>
                    <p className="text-gray-400 text-sm">Scalable infrastructure</p>
                  </div>
                  <div className="bg-emerald-600/10 rounded-lg p-4 border border-emerald-600/20">
                    <Smartphone className="w-8 h-8 text-emerald-400 mb-2" />
                    <p className="text-white font-semibold">Mobile Apps</p>
                    <p className="text-gray-400 text-sm">Cross-platform</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
