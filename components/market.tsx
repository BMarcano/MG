"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

export function Market() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 bg-zinc-950" id="market">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">The Market</h2>
            <div className="w-20 h-1 bg-blue-600 mb-8"></div>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              We proudly serve different markets and segments: Corporate Content is our primary focus, but we also
              provide our services to Social Media Influencers, TV and Radio Channels, and the Public Sector through
              tailor-made Informative Channels.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              <div className="bg-zinc-900 p-4 rounded-lg border border-zinc-800">
                <h3 className="text-xl font-semibold text-white mb-2">Corporate</h3>
                <p className="text-gray-400">Branded content for businesses of all sizes</p>
              </div>
              <div className="bg-zinc-900 p-4 rounded-lg border border-zinc-800">
                <h3 className="text-xl font-semibold text-white mb-2">Influencers</h3>
                <p className="text-gray-400">High-quality content for social media stars</p>
              </div>
              <div className="bg-zinc-900 p-4 rounded-lg border border-zinc-800">
                <h3 className="text-xl font-semibold text-white mb-2">TV & Radio</h3>
                <p className="text-gray-400">Professional production for broadcast media</p>
              </div>
              <div className="bg-zinc-900 p-4 rounded-lg border border-zinc-800">
                <h3 className="text-xl font-semibold text-white mb-2">Public Sector</h3>
                <p className="text-gray-400">Informative channels for government entities</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[600px] w-[900px] rounded-xl overflow-hidden"
          >
            <Image
              src="/images/the-market.png?height=1536&width=1024&text=Podcast+Studio"
              alt="Content Creator"
              fill
              className="object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute bottom-0 left-0 right-0 p-6"
            >
              
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
