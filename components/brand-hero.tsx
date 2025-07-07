"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function BrandHero() {
  return (
    <section className="py-32 bg-gradient-to-br from-zinc-950 via-black to-zinc-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Brand Design & <span className="text-orange-500">Strategy</span>
          </h1>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            We create powerful brand identities that emotionally connect with your audience and differentiate your
            business in the market
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
              <Link href="/contact">Create Your Brand</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black"
            >
              <Link href="#services">View Services</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
