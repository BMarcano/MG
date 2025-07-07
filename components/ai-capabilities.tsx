"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Cpu, Database, Network } from "lucide-react"

export function AiCapabilities() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const capabilities = [
    {
      icon: Brain,
      title: "Natural Language Processing",
      description: "Our AI systems understand and generate human language with remarkable accuracy.",
    },
    {
      icon: Cpu,
      title: "Machine Learning",
      description: "Algorithms that learn from data and improve over time for better results.",
    },
    {
      icon: Database,
      title: "Big Data Processing",
      description: "Analysis of large volumes of data to extract valuable insights and patterns.",
    },
    {
      icon: Network,
      title: "Neural Networks",
      description: "Advanced deep learning models that mimic human brain function for complex tasks.",
    },
  ]

  // Decorative elements - circuit patterns
  const circuitLines = [
    { start: { x: "10%", y: "20%" }, end: { x: "30%", y: "20%" }, color: "bg-purple-600/20" },
    { start: { x: "30%", y: "20%" }, end: { x: "30%", y: "40%" }, color: "bg-purple-600/20" },
    { start: { x: "70%", y: "60%" }, end: { x: "90%", y: "60%" }, color: "bg-purple-600/20" },
    { start: { x: "70%", y: "60%" }, end: { x: "70%", y: "80%" }, color: "bg-purple-600/20" },
    { start: { x: "40%", y: "85%" }, end: { x: "60%", y: "85%" }, color: "bg-purple-600/20" },
  ]

  // Circuit nodes
  const circuitNodes = [
    { x: "10%", y: "20%", size: "w-2 h-2", color: "bg-purple-500/40" },
    { x: "30%", y: "20%", size: "w-3 h-3", color: "bg-purple-500/40" },
    { x: "30%", y: "40%", size: "w-2 h-2", color: "bg-purple-500/40" },
    { x: "70%", y: "60%", size: "w-3 h-3", color: "bg-purple-500/40" },
    { x: "90%", y: "60%", size: "w-2 h-2", color: "bg-purple-500/40" },
    { x: "70%", y: "80%", size: "w-2 h-2", color: "bg-purple-500/40" },
    { x: "40%", y: "85%", size: "w-2 h-2", color: "bg-purple-500/40" },
    { x: "60%", y: "85%", size: "w-2 h-2", color: "bg-purple-500/40" },
  ]

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Circuit lines */}
      {circuitLines.map((line, index) => (
        <div
          key={index}
          className={`absolute h-px ${line.color}`}
          style={{
            left: line.start.x,
            top: line.start.y,
            width: line.start.x === line.end.x ? "1px" : `calc(${line.end.x} - ${line.start.x})`,
            height: line.start.y === line.end.y ? "1px" : `calc(${line.end.y} - ${line.start.y})`,
          }}
        ></div>
      ))}

      {/* Circuit nodes */}
      {circuitNodes.map((node, index) => (
        <motion.div
          key={index}
          className={`absolute ${node.size} ${node.color} rounded-full`}
          style={{ left: node.x, top: node.y }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: index * 0.2,
          }}
        ></motion.div>
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">AI Capabilities</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Cutting-edge technologies powering our AI solutions</p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 h-full hover:border-purple-600/50 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <capability.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {capability.title}
                  </h3>
                  <p className="text-gray-400">{capability.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
