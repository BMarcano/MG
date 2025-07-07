"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function CopywritingPortfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const portfolioItems = [
    {
      type: "Social Media Campaign",
      client: "TechStart UY",
      description: "Product launch campaign that generated 300% more engagement",
      metrics: { engagement: "+300%", reach: "50K", conversions: "+180%" },
      category: "Social Media",
    },
    {
      type: "Email Marketing",
      client: "E-commerce Fashion",
      description: "Email series that increased sales by 250% during Black Friday",
      metrics: { openRate: "45%", clickRate: "12%", sales: "+250%" },
      category: "Email",
    },
    {
      type: "Ad Campaign",
      client: "SaaS Platform",
      description: "Facebook ad copy that reduced CPA by 40%",
      metrics: { cpa: "-40%", ctr: "3.2%", roas: "4.5x" },
      category: "Advertising",
    },
    {
      type: "Content Strategy",
      client: "Health & Wellness",
      description: "Content strategy that tripled organic traffic in 6 months",
      metrics: { traffic: "+300%", leads: "+150%", engagement: "+200%" },
      category: "Strategy",
    },
  ]

  // Decorative elements
  const decorativeCircles = [
    { size: "w-32 h-32", top: "10%", left: "-5%", color: "border-teal-500/10" },
    { size: "w-48 h-48", bottom: "-10%", right: "-5%", color: "border-teal-500/5" },
    { size: "w-24 h-24", top: "40%", right: "10%", color: "border-teal-500/10" },
  ]

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Decorative circles */}
      {decorativeCircles.map((circle, index) => (
        <div
          key={index}
          className={`absolute ${circle.size} rounded-full border ${circle.color}`}
          style={{ top: circle.top, left: circle.left, right: circle.right, bottom: circle.bottom }}
        ></div>
      ))}

      {/* Floating dots */}
      <motion.div
        className="absolute w-2 h-2 bg-teal-400/30 rounded-full"
        style={{ top: "30%", left: "20%" }}
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute w-3 h-3 bg-teal-500/20 rounded-full"
        style={{ bottom: "20%", right: "15%" }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
      ></motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Success Stories</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real results that demonstrate the power of the right words
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 h-full hover:border-teal-600/50 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-teal-600 text-white">{item.category}</Badge>
                    <span className="text-gray-400 text-sm">{item.client}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
                    {item.type}
                  </h3>

                  <p className="text-gray-400 mb-6">{item.description}</p>

                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(item.metrics).map(([key, value], metricIndex) => (
                      <div key={metricIndex} className="text-center">
                        <div className="text-2xl font-bold text-teal-400">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, " $1")}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
