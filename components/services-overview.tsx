"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Video,
  Share2,
  Users,
  Brain,
  Globe,
  ArrowRight,
  Palette,
  TrendingUp,
  FileText,
  BarChart3,
  ImageIcon,
} from "lucide-react"
import Link from "next/link"

export function ServicesOverview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: Video,
      title: "Production",
      description: "Professional multimedia content creation with cutting-edge technology",
      features: ["4K/8K Videos", "Podcasts", "Photography", "Motion Graphics"],
      href: "/services/production",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: Share2,
      title: "Distribution",
      description: "Strategic content distribution across multiple platforms and channels",
      features: ["Digital Platforms", "Social Media", "APIs", "Digital Signage"],
      href: "/services/distribution",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Community Management",
      description: "Professional digital community management and audience engagement",
      features: ["Social Strategy", "Exclusive Content", "Analytics", "Automation"],
      href: "/services/community-management",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Brain,
      title: "Artificial Intelligence",
      description: "Intelligent solutions to optimize processes and personalize experiences",
      features: ["Predictive Analytics", "Automation", "Personalization", "Insights"],
      href: "/services/artificial-intelligence",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Globe,
      title: "Digital Platforms",
      description: "Scalable digital platform development and exceptional user experiences",
      features: ["Custom Development", "UX/UI", "Integration", "Scalability"],
      href: "/services/digital-platforms",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Palette,
      title: "Brand Design & Strategy",
      description: "Powerful brand identities that emotionally connect with your audience",
      features: ["Brand Strategy", "Visual Identity", "Logo Design", "Brand Guidelines"],
      href: "/services/brand-design-strategy",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: TrendingUp,
      title: "SEO Optimization",
      description: "Improve your visibility on Google with proven SEO strategies",
      features: ["Keyword Research", "Technical SEO", "Content Strategy", "Link Building"],
      href: "/services/seo",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: FileText,
      title: "Copywriting",
      description: "Content that converts. From social posts to advertising campaigns",
      features: ["Social Media Content", "Ad Copy", "Content Strategy", "Email Marketing"],
      href: "/services/copywriting",
      color: "from-teal-500 to-cyan-500",
    },
    {
      icon: BarChart3,
      title: "Audience Analytics",
      description: "Transform data into smart decisions with advanced analytics",
      features: ["Social Analytics", "Targeted Campaigns", "Customer Journey", "Performance Reports"],
      href: "/services/audience-analytics",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: ImageIcon,
      title: "Powerful Visuals",
      description: "Impactful visual content that tells stories and drives results",
      features: ["Video Production", "Motion Graphics", "Video Editing", "Explainer Videos"],
      href: "/services/powerful-visuals",
      color: "from-pink-500 to-purple-500",
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

  return (
    <section className="py-20 bg-zinc-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Complete Services</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From creation to distribution, we offer comprehensive solutions for all your digital content needs
          </p>
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
              <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 h-full hover:border-blue-600/50 transition-all duration-300 group">
                <CardHeader>
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-400">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-500 flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    variant="ghost"
                    className="w-full text-blue-500 hover:text-blue-400 hover:bg-blue-600/10 mt-4"
                  >
                    <Link href={service.href}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
