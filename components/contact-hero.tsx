"use client"

import { motion } from "framer-motion"
import { MessageCircle, Phone, Mail } from "lucide-react"

export function ContactHero() {
  return (
    <section className="py-32 bg-gradient-to-br from-zinc-950 via-black to-zinc-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's Talk About Your{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Next Project
            </span>
          </motion.h1>

          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Have questions about pricing, plans, or our services? Fill out the form and we'll get in touch with you.
          </motion.p>

          {/* Quick contact options */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <Phone className="h-5 w-5 text-blue-400" />
              <span>+598 99 123 456</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <Mail className="h-5 w-5 text-blue-400" />
              <span>info@mediageekuy.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <MessageCircle className="h-5 w-5 text-blue-400" />
              <span>Live chat</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
