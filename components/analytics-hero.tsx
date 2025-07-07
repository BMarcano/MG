"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BarChart3, TrendingUp, Users, Eye } from "lucide-react"

export function AnalyticsHero() {
  return (
    <section className="py-32 bg-gradient-to-br from-zinc-950 via-black to-zinc-900 relative overflow-hidden">
      {/* Floating data visualization elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-4 h-4 bg-indigo-500 rounded-full"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        ></motion.div>
        <motion.div
          className="absolute top-40 right-32 w-3 h-3 bg-indigo-400 rounded-full"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
        ></motion.div>
        <motion.div
          className="absolute bottom-32 left-32 w-2 h-2 bg-indigo-300 rounded-full"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Audience <span className="text-indigo-500">Analytics</span>
            </h1>
            <div className="w-24 h-1 bg-indigo-600 mb-6"></div>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform data into intelligent decisions. Know your audience, optimize your campaigns, and maximize your
              ROI with advanced analytics
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                <Link href="/contact">Analyze My Audience</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-black"
              >
                <Link href="#services">View Metrics</Link>
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
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-zinc-900/50 backdrop-blur-sm rounded-3xl p-8 border border-zinc-800">
                <h3 className="text-2xl font-bold text-white mb-6">Analytics Dashboard</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-indigo-600/10 rounded-lg p-4 border border-indigo-600/20">
                    <BarChart3 className="w-8 h-8 text-indigo-400 mb-2" />
                    <p className="text-white font-semibold">Performance</p>
                    <p className="text-gray-400 text-sm">Real-time metrics</p>
                  </div>
                  <div className="bg-indigo-600/10 rounded-lg p-4 border border-indigo-600/20">
                    <TrendingUp className="w-8 h-8 text-indigo-400 mb-2" />
                    <p className="text-white font-semibold">Growth</p>
                    <p className="text-gray-400 text-sm">Trend analysis</p>
                  </div>
                  <div className="bg-indigo-600/10 rounded-lg p-4 border border-indigo-600/20">
                    <Users className="w-8 h-8 text-indigo-400 mb-2" />
                    <p className="text-white font-semibold">Audience</p>
                    <p className="text-gray-400 text-sm">Demographics</p>
                  </div>
                  <div className="bg-indigo-600/10 rounded-lg p-4 border border-indigo-600/20">
                    <Eye className="w-8 h-8 text-indigo-400 mb-2" />
                    <p className="text-white font-semibold">Insights</p>
                    <p className="text-gray-400 text-sm">Deep analysis</p>
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
