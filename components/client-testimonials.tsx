"use client"

import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { motion, useInView } from "framer-motion"
import { Quote, ExternalLink } from "lucide-react"
import Link from "next/link"

export function ClientTestimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const testimonials = [
    {
      id: 1,
      name: "Otto Inmobiliaria",
      statement:
        "Otto Otto Real Estate is proud to unveil our new website, crafted by the talented team at Media Geek. The platform blends sleek design with powerful functionality, giving our clients a faster, more intuitive way to explore listings and connect with our agents. This digital upgrade exemplifies our commitment to innovation and to providing a best‑in‑class experience for everyone who trusts Otto Otto with their real‑estate needs.",
      image: "/images/Otto.jpg?height=80&width=80&text=TF",
      website: "https://www.ottoinmobiliaria.com.uy/",
      logo: "/images/Otto.jpg?height=40&width=120&text=TechFlow+Logo",
    },
    {
      id: 2,
      name: "Iridium Shield",
      statement:
        "Iridium Shield is excited to be working with Media Geek on the optimization of our digital operations. Through the creation of tailored workflows, process automation, and modern web solutions, Media Geek has helped us streamline key areas of our business. This collaboration is part of our ongoing commitment to efficiency, innovation, and delivering a seamless experience for our clients and partners.",
      image: "/images/IS.png?height=676&width=492&text=IC",
      website: "https://innovatecorp.com",
      logo: "/images/IS.png?height=40&width=120&text=IS",
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
    <section className="py-16 bg-zinc-950 relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-green-500 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-2 h-2 bg-purple-500 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 right-10 w-4 h-4 bg-yellow-500 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Trusted by Leading Companies</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">See what our clients say about working with us</p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id} variants={itemVariants}>
              <Link href={testimonial.website} target="_blank" rel="noopener noreferrer">
                <Card className="bg-zinc-900/50 border-zinc-800 p-6 h-full hover:border-blue-600 hover:bg-zinc-900/70 transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-0">
                    {/* Quote Icon */}
                    <div className="flex justify-between items-start mb-4">
                      <Quote className="w-8 h-8 text-blue-500 opacity-50" />
                      <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-blue-400 transition-colors" />
                    </div>

                    {/* Statement */}
                    <p className="text-gray-300 mb-6 leading-relaxed italic">"{testimonial.statement}"</p>

                    {/* Client Info */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover border-2 border-zinc-700 group-hover:border-blue-500 transition-colors"
                          />
                          <div className="absolute inset-0 rounded-full bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                        <div>
                          <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                          <p className="text-gray-400 text-xs">Client</p>
                        </div>
                      </div>

                      {/* Company Logo */}
                      <div className="opacity-70 group-hover:opacity-100 transition-opacity">
                        <img
                          src={testimonial.logo || "/placeholder.svg"}
                          alt={`${testimonial.name} logo`}
                          className="h-6 object-contain"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">Ready to join our success stories?</p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            Start Your Project
            <ExternalLink className="w-4 h-4 ml-2" />
          </Link>
        </motion.div>
      </div>

      {/* Background Decorations */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
    </section>
  )
}
