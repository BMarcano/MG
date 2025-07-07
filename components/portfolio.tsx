"use client"

import { useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion, useInView } from "framer-motion"
import { Play, Users, TrendingUp, Award, Eye, Heart } from "lucide-react"
import Link from "next/link"

export function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeTab, setActiveTab] = useState("results")

  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Happy Clients",
      description: "Businesses transformed",
    },
    {
      icon: Eye,
      number: "50M+",
      label: "Views Generated",
      description: "Across all platforms",
    },
    {
      icon: TrendingUp,
      number: "300%",
      label: "Average Growth",
      description: "In client engagement",
    },
    {
      icon: Award,
      number: "95%",
      label: "Client Retention",
      description: "Long-term partnerships",
    },
  ]

  const portfolioItems = [
    {
      title: "Corporate Video Campaign",
      category: "Video Production",
      client: "Tech Startup",
      results: "2.5M views, 40% conversion increase",
      image: "/placeholder.svg?height=300&width=400&text=Corporate+Video",
      metrics: { views: "2.5M", engagement: "85%", conversion: "+40%" },
    },
    {
      title: "Social Media Strategy",
      category: "Community Management",
      client: "E-commerce Brand",
      results: "300% follower growth, 150% sales boost",
      image: "/placeholder.svg?height=300&width=400&text=Social+Media",
      metrics: { followers: "+300%", engagement: "92%", sales: "+150%" },
    },
    {
      title: "Podcast Series Launch",
      category: "Content Production",
      client: "Industry Leader",
      results: "Top 10 in category, 500K downloads",
      image: "/placeholder.svg?height=300&width=400&text=Podcast+Studio",
      metrics: { downloads: "500K", ranking: "Top 10", retention: "78%" },
    },
    {
      title: "AI-Powered Content",
      category: "Artificial Intelligence",
      client: "Media Company",
      results: "70% faster production, 60% cost reduction",
      image: "/placeholder.svg?height=300&width=400&text=AI+Content",
      metrics: { speed: "+70%", cost: "-60%", quality: "95%" },
    },
  ]

  const testimonials = [
    {
      quote: "Media Geek UY transformed our digital presence completely. Our engagement rates skyrocketed!",
      author: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechFlow Inc.",
    },
    {
      quote: "The quality of content they produce is exceptional. Our brand has never looked better.",
      author: "Carlos Rodriguez",
      position: "CEO",
      company: "InnovateCorp",
    },
    {
      quote: "Their AI solutions saved us months of work. Incredible efficiency and results.",
      author: "Emma Chen",
      position: "Content Manager",
      company: "Digital Dynamics",
    },
  ]

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

  return (
    <section className="py-20 bg-black relative overflow-hidden" id="portfolio">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-500 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-10 w-4 h-4 bg-yellow-500 rounded-full animate-pulse"></div>
        <div className="absolute top-60 left-1/2 w-2 h-2 bg-pink-500 rounded-full animate-bounce"></div>
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Impact & Results</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real results for real businesses. See how we've helped companies achieve extraordinary growth.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-zinc-900/50 border-zinc-800 text-center p-6 hover:border-blue-600 transition-all duration-300 group">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-blue-500 group-hover:text-blue-400 transition-colors" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{stat.number}</h3>
                <p className="text-blue-400 font-semibold mb-1">{stat.label}</p>
                <p className="text-gray-400 text-sm">{stat.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-zinc-900 rounded-lg p-1 flex">
            <button
              onClick={() => setActiveTab("results")}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                activeTab === "results" ? "bg-blue-600 text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              Success Stories
            </button>
            <button
              onClick={() => setActiveTab("testimonials")}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                activeTab === "testimonials" ? "bg-blue-600 text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              Client Testimonials
            </button>
          </div>
        </div>

        {/* Content Sections */}
        {activeTab === "results" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          >
            {portfolioItems.map((item, index) => (
              <Card
                key={index}
                className="bg-zinc-900 border-zinc-800 overflow-hidden group hover:border-blue-600 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30">
                      <Play className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 mb-4">{item.client}</p>
                  <p className="text-green-400 font-semibold mb-4">{item.results}</p>
                  <div className="flex justify-between text-sm">
                    <div className="text-center">
                      <p className="text-blue-400 font-semibold">{Object.values(item.metrics)[0]}</p>
                      <p className="text-gray-500">{Object.keys(item.metrics)[0]}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-purple-400 font-semibold">{Object.values(item.metrics)[1]}</p>
                      <p className="text-gray-500">{Object.keys(item.metrics)[1]}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-green-400 font-semibold">{Object.values(item.metrics)[2]}</p>
                      <p className="text-gray-500">{Object.keys(item.metrics)[2]}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        )}

        {activeTab === "testimonials" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-zinc-900 border-zinc-800 p-6 hover:border-blue-600 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <Heart className="w-5 h-5 text-red-500 mr-2" />
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-yellow-400 rounded-full mr-1"></div>
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-blue-400">{testimonial.position}</p>
                  <p className="text-gray-500">{testimonial.company}</p>
                </div>
              </Card>
            ))}
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Ready to achieve similar results?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful businesses that have transformed their digital presence with our expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-zinc-700 text-white hover:bg-zinc-800">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Background Decorations */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
    </section>
  )
}
