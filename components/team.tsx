"use client"

import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { motion, useInView } from "framer-motion"
import { Linkedin, Twitter, Mail } from "lucide-react"
import Link from "next/link"

export function Team() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const teamMembers = [
    {
      name: "Veronica Quitadamo",
      role: "Business Development Representative",
      description:
        "Veronica develops business opportunities for Media Geek Uruguay, focusing on growth, partnerships, and strategic initiatives.",
      image: "/images/team/veronica.jpeg",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "veronica@mediageekuy.com",
      },
    },
    {
      name: "Brayan Marcano",
      role: "Technical Manager",
      description:
        "Brayan is a Technical Manager who leads technical teams, oversees projects, and ensures alignment between technology and business goals.",
      image: "/images/team/brayan.jpeg",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "brayan@mediageekuy.com",
      },
    },
    {
      name: "Rocio López",
      role: "Multimedia Technician",
      description:
        "Rocio is a Multimedia Technician who creates, edits, and manages multimedia content, ensuring high-quality production across various platforms.",
      image: "/images/team/rocio.jpeg",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "rocio@mediageekuy.com",
      },
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section className="py-20 bg-zinc-950 relative overflow-hidden" id="team">
      {/* Hero Background */}
      <div className="absolute top-0 left-0 right-0 h-80 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-zinc-950 z-10"></div>
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/placeholder.svg?height=400&width=1200&text=Team+Collaboration')`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 pt-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Meet the Managers</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the team of professionals who make every project possible, combining technical expertise with strategic
            vision.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {teamMembers.map((member, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-zinc-900/80 backdrop-blur-sm border-zinc-800 overflow-hidden group hover:border-blue-600 transition-all duration-500 h-full">
                <div className="relative">
                  {/* Profile Image */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-60"></div>

                    {/* Social Links Overlay */}
                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-4">
                        <Link
                          href={member.social.linkedin}
                          className="p-3 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-colors transform hover:scale-110"
                        >
                          <Linkedin size={20} />
                        </Link>
                        <Link
                          href={member.social.twitter}
                          className="p-3 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-colors transform hover:scale-110"
                        >
                          <Twitter size={20} />
                        </Link>
                        <Link
                          href={`mailto:${member.social.email}`}
                          className="p-3 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-colors transform hover:scale-110"
                        >
                          <Mail size={20} />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-blue-500 font-semibold mb-4 text-lg">{member.role}</p>
                    <p className="text-gray-400 leading-relaxed">{member.description}</p>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-300 mb-8">Want to be part of our team?</p>
          <Link
            href="/careers"
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            View Career Opportunities
          </Link>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
    </section>
  )
}
