"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ChevronDown,
  Menu,
  X,
  Video,
  Share2,
  Users,
  Brain,
  Globe,
  Layers,
  TrendingUp,
  Palette,
  FileText,
  BarChart3,
  ImageIcon,
  Briefcase,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const coreServices = [
    {
      name: "Production",
      href: "/services/production",
      icon: Video,
      description: "Video, audio & multimedia content",
    },
    {
      name: "Distribution",
      href: "/services/distribution",
      icon: Share2,
      description: "Strategic content distribution",
    },
    {
      name: "Community Management",
      href: "/services/community-management",
      icon: Users,
      description: "Digital community management",
    },
    {
      name: "Artificial Intelligence",
      href: "/services/artificial-intelligence",
      icon: Brain,
      description: "Intelligent AI solutions",
    },
  ]

  const additionalServices = [
    {
      name: "Digital Platforms",
      href: "/services/digital-platforms",
      icon: Globe,
      description: "Custom digital platforms",
    },
    {
      name: "Brand Design & Strategy",
      href: "/services/brand-design-strategy",
      icon: Palette,
      description: "Brand strategy & design",
    },
    {
      name: "SEO Optimization",
      href: "/services/seo",
      icon: TrendingUp,
      description: "Search engine optimization",
    },
    {
      name: "Copywriting",
      href: "/services/copywriting",
      icon: FileText,
      description: "Content that converts",
    },
    {
      name: "Audience Analytics",
      href: "/services/audience-analytics",
      icon: BarChart3,
      description: "Audience analysis & data",
    },
    {
      name: "Powerful Visuals",
      href: "/services/powerful-visuals",
      icon: ImageIcon,
      description: "Impactful visual content",
    },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <img src="/images/logo-dark-bg.jpeg" alt="Media Geek UY" className="h-12 w-auto" />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link href="/" className="text-white hover:text-blue-400 transition-colors">
              Home
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/team" className="text-white hover:text-blue-400 transition-colors">
              The Team
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center text-white hover:text-blue-400 transition-colors">
              Services{" "}
              <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-[700px] bg-black/95 backdrop-blur-md rounded-xl shadow-2xl border border-zinc-800 p-6"
                >
                  <div className="grid grid-cols-2 gap-8">
                    {/* Core Services */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                        <Layers className="mr-2 h-5 w-5 text-blue-400" />
                        Core Services
                      </h3>
                      <div className="space-y-2">
                        {coreServices.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="block p-3 rounded-lg hover:bg-zinc-800/50 transition-colors group"
                            onClick={() => setServicesOpen(false)}
                          >
                            <div className="flex items-start space-x-3">
                              <service.icon className="h-4 w-4 text-blue-400 mt-0.5 group-hover:text-blue-300 transition-colors flex-shrink-0" />
                              <div>
                                <div className="font-medium text-white group-hover:text-blue-400 transition-colors text-sm">
                                  {service.name}
                                </div>
                                <div className="text-xs text-gray-400">{service.description}</div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Additional Services */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                        <Globe className="mr-2 h-5 w-5 text-blue-400" />
                        Additional Services
                      </h3>
                      <div className="space-y-2 max-h-64 overflow-y-auto">
                        {additionalServices.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="block p-3 rounded-lg hover:bg-zinc-800/50 transition-colors group"
                            onClick={() => setServicesOpen(false)}
                          >
                            <div className="flex items-start space-x-3">
                              <service.icon className="h-4 w-4 text-blue-400 mt-0.5 group-hover:text-blue-300 transition-colors flex-shrink-0" />
                              <div>
                                <div className="font-medium text-white group-hover:text-blue-400 transition-colors text-sm">
                                  {service.name}
                                </div>
                                <div className="text-xs text-gray-400">{service.description}</div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* View All Services */}
                  <div className="mt-6 pt-4 border-t border-zinc-800">
                    <Link
                      href="/services"
                      className="flex items-center justify-center w-full py-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
                      onClick={() => setServicesOpen(false)}
                    >
                      View all services →
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="/careers" className="text-white hover:text-blue-400 transition-colors">
              Careers
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link href="/wptg-group" className="text-white hover:text-blue-400 transition-colors">
              WPTG Group
            </Link>
          </motion.div>
        </nav>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Button asChild className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700 text-white">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </motion.div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-md"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link
                href="/"
                className="text-white py-2 border-b border-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/team"
                className="text-white py-2 border-b border-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                The Team
              </Link>
              <div className="py-2 border-b border-gray-800">
                <button
                  className="flex items-center justify-between w-full text-white"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  Services <ChevronDown className={`h-4 w-4 ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen && (
                  <div className="mt-2 ml-4 flex flex-col space-y-2">
                    {[...coreServices, ...additionalServices].map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="text-gray-300 hover:text-white py-1 text-sm"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                href="/careers"
                className="text-white py-2 border-b border-gray-800 flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Briefcase className="w-4 h-4 mr-2" />
                Careers
              </Link>
              <Link
                href="/news"
                className="text-white py-2 border-b border-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                News
              </Link>
              <Link
                href="/wptg-group"
                className="text-white py-2 border-b border-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                WPTG Group
              </Link>
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Contact Us
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
