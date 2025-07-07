"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion, useAnimation, useInView } from "framer-motion"

export function Hero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background with Overlay */}
      <div className="absolute inset-0 z-0">
  {/* Capa de overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/70 z-10"></div>

  {/* Video de fondo */}
  <video
    className="w-full h-full object-cover"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="/videos/hero-video.mp4" type="video/mp4" />
    Tu navegador no soporta la reproducción de video.
  </video>
</div>

      <div className="container mx-auto px-4 z-10">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={containerVariants} className="max-w-3xl">
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            <span className="block">MEDIA</span>
            <span className="block">PRODUCTION</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-300 mb-8">
            We transform your vision into high-impact digital content
          </motion.p>

          <motion.div variants={itemVariants}>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6">
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/70 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  )
}
