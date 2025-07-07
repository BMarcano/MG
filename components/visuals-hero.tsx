"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Camera, Video, Palette, Sparkles } from "lucide-react"

export function VisualsHero() {
  return (
    <section className="py-32 bg-gradient-to-br from-zinc-950 via-black to-zinc-900 relative overflow-hidden">
      {/* Creative floating elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-32 left-16 w-16 h-16 border-2 border-pink-500/30 rounded-lg"
          animate={{ rotate: [0, 180, 360] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        ></motion.div>
        <motion.div
          className="absolute bottom-40 right-20 w-12 h-12 border-2 border-pink-400/20 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        ></motion.div>
        <motion.div
          className="absolute top-1/2 right-1/4 w-8 h-8 bg-pink-500/10 rounded-full"
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Powerful <span className="text-pink-500">Visuals</span>
            </h1>
            <div className="w-24 h-1 bg-pink-600 mb-6"></div>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We create impactful visual content that tells stories, generates emotions, and drives results. From videos
              to motion graphics
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-pink-600 hover:bg-pink-700 text-white">
                <Link href="/contact">Create Visuals</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black"
              >
                <Link href="#services">View Portfolio</Link>
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
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-zinc-900/50 backdrop-blur-sm rounded-3xl p-8 border border-zinc-800">
                <h3 className="text-2xl font-bold text-white mb-6">Visual Services</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-pink-600/10 rounded-lg p-4 border border-pink-600/20">
                    <Video className="w-8 h-8 text-pink-400 mb-2" />
                    <p className="text-white font-semibold">Video Production</p>
                    <p className="text-gray-400 text-sm">Professional videos</p>
                  </div>
                  <div className="bg-pink-600/10 rounded-lg p-4 border border-pink-600/20">
                    <Camera className="w-8 h-8 text-pink-400 mb-2" />
                    <p className="text-white font-semibold">Photography</p>
                    <p className="text-gray-400 text-sm">Commercial shoots</p>
                  </div>
                  <div className="bg-pink-600/10 rounded-lg p-4 border border-pink-600/20">
                    <Palette className="w-8 h-8 text-pink-400 mb-2" />
                    <p className="text-white font-semibold">Design</p>
                    <p className="text-gray-400 text-sm">Creative graphics</p>
                  </div>
                  <div className="bg-pink-600/10 rounded-lg p-4 border border-pink-600/20">
                    <Sparkles className="w-8 h-8 text-pink-400 mb-2" />
                    <p className="text-white font-semibold">Motion Graphics</p>
                    <p className="text-gray-400 text-sm">Animated content</p>
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
