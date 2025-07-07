"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Settings, Link, FileText, BarChart, Users } from "lucide-react"

export function SeoServices() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: Search,
      title: "Keyword Research",
      description: "In-depth keyword research to identify ranking opportunities and qualified traffic.",
      features: ["Competitor Analysis", "Long-tail Keywords", "Search Intent", "Keyword Difficulty"],
    },
    {
      icon: Settings,
      title: "Technical SEO",
      description: "Technical website optimization to improve indexing and user experience.",
      features: ["Site Speed", "Mobile Optimization", "Schema Markup", "Core Web Vitals"],
    },
    {
      icon: FileText,
      title: "Content Creation",
      description: "Creation of optimized content that responds to your target audience's searches.",
      features: ["SEO Copywriting", "Blog Posts", "Landing Pages", "Content Strategy"],
    },
    {
      icon: Link,
      title: "Link Building",
      description: "Building quality links to increase your website's authority and credibility.",
      features: ["Guest Posting", "Digital PR", "Resource Pages", "Broken Link Building"],
    },
    {
      icon: BarChart,
      title: "On-Page SEO",
      description: "Optimization of internal site elements to improve search engine ranking.",
      features: ["Meta Tags", "URL Structure", "Internal Linking", "Content Optimization"],
    },
    {
      icon: Users,
      title: "Competitor Research",
      description: "Detailed competitor analysis to identify opportunities and winning strategies.",
      features: ["Gap Analysis", "Backlink Analysis", "Content Gaps", "SERP Analysis"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  // Decorative elements
  const floatingDots = Array(12)
    .fill(0)
    .map((_, i) => ({
      size: Math.random() * 3 + 1,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      opacity: Math.random() * 0.3 + 0.1,
    }))

  return (
    <section className="py-20 bg-zinc-950 relative overflow-hidden" id="services">
      {/* Floating dots */}
      {floatingDots.map((dot, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-yellow-400"
          style={{
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            left: dot.left,
            top: dot.top,
            opacity: dot.opacity,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [dot.opacity, dot.opacity * 2, dot.opacity],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Complete SEO Services</h2>
          <div className="w-20 h-1 bg-yellow-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Comprehensive strategies to dominate search results</p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 h-full hover:border-yellow-600/50 transition-all duration-300 group">
                <CardHeader>
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-black" />
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-yellow-400 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-400 text-sm">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-500 flex items-center">
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
