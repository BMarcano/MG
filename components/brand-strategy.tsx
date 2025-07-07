"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

export function BrandStrategy() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      title: "Content Creation",
      description: "Crafting unique, engaging content tailored to your audience.",
    },
    {
      title: "Strategic Delivery",
      description: "Ensuring your message reaches the right people at the right time.",
    },
    {
      title: "Workflow Optimization",
      description: "Streamlining processes to save time and resources.",
    },
  ]

  return (
    <section className="py-20 bg-black" id="strategy">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-xl overflow-hidden order-2 lg:order-1"
          >
            <Image
              src="/images/workflow-opti-mg.png?height=500&width=600&text=Brand+Strategy"
              alt="Brand Strategy"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent"></div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute bottom-0 left-0 right-0 p-6"
            >
              <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                Strategic Approach
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Elevate Your Brand with Strategic Multimedia Solutions
            </h2>
            <div className="w-20 h-1 bg-blue-600 mb-8"></div>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Media Geek UY brings your vision to life through high-quality multimedia production and seamless content
              distribution. We focus on:
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-gray-300 mt-8"
            >
              Partner with us to amplify your message, connect with your audience, and drive measurable results.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
