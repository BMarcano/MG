"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { Mail, CheckCircle } from "lucide-react"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here would go the logic to subscribe to the newsletter
    setIsSubscribed(true)
    setEmail("")
  }

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="mb-8">
            <Mail className="mx-auto h-16 w-16 text-blue-600 mb-6" />
            <h2 className="text-4xl font-bold text-white mb-4">Stay updated with our news</h2>
            <p className="text-xl text-gray-300">
              Subscribe to our newsletter and receive the latest updates on technology, digital marketing, and success
              stories.
            </p>
          </div>

          {!isSubscribed ? (
            <motion.form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-zinc-900 border-zinc-700 text-white placeholder-gray-400 focus:border-blue-600"
              />
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                Subscribe
              </Button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center text-green-500"
            >
              <CheckCircle className="mr-2 h-6 w-6" />
              <span className="text-lg font-semibold">Thank you for subscribing!</span>
            </motion.div>
          )}

          <p className="text-sm text-gray-500 mt-4">No spam, only quality content. You can unsubscribe at any time.</p>
        </motion.div>
      </div>
    </section>
  )
}
