"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Pen, Target, Zap } from "lucide-react"

export function CopywritingHero() {
  return (
    <section className="py-32 bg-gradient-to-br from-zinc-950 via-black to-zinc-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-teal-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Professional <span className="text-teal-500">Copywriting</span>
            </h1>
            <div className="w-24 h-1 bg-teal-600 mb-6"></div>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We create content that converts. From social media posts to advertising campaigns, our words drive your
              business forward
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
                <Link href="/contact">Create Content</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black"
              >
                <Link href="#services">View Services</Link>
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
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-zinc-900/50 backdrop-blur-sm rounded-3xl p-8 border border-zinc-800">
                <h3 className="text-2xl font-bold text-white mb-6">Writing Excellence</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-teal-600/20 rounded-lg flex items-center justify-center">
                      <Pen className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Creative Writing</h4>
                      <p className="text-gray-400 text-sm">Engaging and original content</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-teal-600/20 rounded-lg flex items-center justify-center">
                      <Target className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Strategic Messaging</h4>
                      <p className="text-gray-400 text-sm">Targeted communication</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-teal-600/20 rounded-lg flex items-center justify-center">
                      <Zap className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">High Conversion</h4>
                      <p className="text-gray-400 text-sm">Results-driven copy</p>
                    </div>
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
