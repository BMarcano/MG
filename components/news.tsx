"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import Link from "next/link"

export function News() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const newsItems = [
    {
      title: "Media Geek UY expands audiovisual production services",
      date: "May 10, 2024",
      readTime: "5 min",
      excerpt: "New technologies and equipment to offer the best quality in multimedia content production.",
    },
    {
      title: "Digital marketing trends for 2024",
      date: "April 28, 2024",
      readTime: "4 min",
      excerpt: "Discover the most effective strategies to make your brand stand out in today's digital environment.",
    },
    {
      title: "Success stories: Transforming brands with strategic content",
      date: "April 15, 2024",
      readTime: "6 min",
      excerpt: "Learn how we've helped companies achieve their communication goals.",
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
    <section className="py-20 bg-zinc-950" id="news">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">News from Media Geek World</h2>
            <div className="w-20 h-1 bg-blue-600"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button
              asChild
              variant="outline"
              className="mt-6 md:mt-0 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              <Link href="/news">
                View all news <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {newsItems.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-zinc-900 border-zinc-800 h-full hover:border-blue-600 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center text-sm text-gray-400 mb-2">
                    <Calendar className="mr-2 h-4 w-4" />
                    {item.date}
                    <span className="mx-2">•</span>
                    <Clock className="mr-2 h-4 w-4" />
                    {item.readTime}
                  </div>
                  <CardTitle className="text-xl text-white">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{item.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    variant="ghost"
                    className="text-blue-500 hover:text-blue-400 p-0 hover:bg-transparent"
                  >
                    <Link href={`/news/${index + 1}`}>
                      Read more <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
