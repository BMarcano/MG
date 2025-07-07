"use client"

import { useState, useRef } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion, useInView } from "framer-motion"
import { Calendar, Clock, ArrowRight, User, Eye } from "lucide-react"
import Link from "next/link"

// Simulating data that would come from Supabase
const newsData = [
  {
    id: 1,
    title: "Media Geek UY expands audiovisual production services",
    excerpt:
      "New technologies and equipment to offer the best quality in multimedia content production. Discover how we're revolutionizing the industry.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: "/placeholder.svg?height=300&width=500&text=Production+Equipment",
    author: "Veronica Quitadamo",
    publishedAt: "2024-01-15",
    readTime: "5 min",
    category: "Technology",
    views: 1250,
    featured: true,
  },
  {
    id: 2,
    title: "Digital marketing trends for 2024",
    excerpt:
      "Discover the most effective strategies to make your brand stand out in today's digital environment and predictions for next year.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: "/placeholder.svg?height=300&width=500&text=Digital+Marketing",
    author: "Brayan Marcano",
    publishedAt: "2024-01-10",
    readTime: "4 min",
    category: "Marketing",
    views: 980,
    featured: false,
  },
  {
    id: 3,
    title: "Success stories: Transforming brands with strategic content",
    excerpt:
      "Learn how we've helped companies achieve their communication goals through innovative multimedia strategies.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: "/placeholder.svg?height=300&width=500&text=Brand+Success",
    author: "Rocio López",
    publishedAt: "2024-01-05",
    readTime: "6 min",
    category: "Success Stories",
    views: 1450,
    featured: true,
  },
  {
    id: 4,
    title: "The AI-generated content revolution",
    excerpt:
      "We explore how artificial intelligence is transforming content creation and what it means for the future of media.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: "/placeholder.svg?height=300&width=500&text=AI+Content",
    author: "Brayan Marcano",
    publishedAt: "2024-01-01",
    readTime: "7 min",
    category: "Artificial Intelligence",
    views: 2100,
    featured: false,
  },
  {
    id: 5,
    title: "Podcast: The future of business communication",
    excerpt:
      "In our new episode, we discuss emerging trends in corporate communication and how to adapt to market changes.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: "/placeholder.svg?height=300&width=500&text=Podcast+Studio",
    author: "Veronica Quitadamo",
    publishedAt: "2023-12-28",
    readTime: "3 min",
    category: "Podcast",
    views: 750,
    featured: false,
  },
  {
    id: 6,
    title: "New strategic partnerships in the multimedia sector",
    excerpt:
      "Media Geek UY announces key collaborations that will strengthen our ability to offer comprehensive solutions to our clients.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: "/placeholder.svg?height=300&width=500&text=Partnership",
    author: "Rocio López",
    publishedAt: "2023-12-20",
    readTime: "4 min",
    category: "Company",
    views: 890,
    featured: false,
  },
]

const categories = [
  "All",
  "Technology",
  "Marketing",
  "Success Stories",
  "Artificial Intelligence",
  "Podcast",
  "Company",
]

export function NewsGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [visibleArticles, setVisibleArticles] = useState(6)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredNews =
    selectedCategory === "All" ? newsData : newsData.filter((article) => article.category === selectedCategory)

  const featuredArticles = filteredNews.filter((article) => article.featured)
  const regularArticles = filteredNews.filter((article) => !article.featured)

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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <section className="py-20 bg-zinc-950" id="news-grid">
      <div className="container mx-auto px-4">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`${
                selectedCategory === category
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "border-zinc-700 text-gray-300 hover:bg-zinc-800 hover:text-white"
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.slice(0, 2).map((article, index) => (
                <Card
                  key={article.id}
                  className="bg-zinc-900 border-zinc-800 overflow-hidden group hover:border-blue-600 transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden">
                    <div
                      className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
                      style={{
                        backgroundImage: `url('${article.image}')`,
                      }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <Badge className="absolute top-4 left-4 bg-blue-600 text-white">{article.category}</Badge>
                    <Badge className="absolute top-4 right-4 bg-red-600 text-white">Featured</Badge>
                  </div>
                  <CardHeader>
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {article.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-400 space-x-4">
                      <div className="flex items-center">
                        <User className="mr-1 h-4 w-4" />
                        {article.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="mr-1 h-4 w-4" />
                        {formatDate(article.publishedAt)}
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-1 h-4 w-4" />
                        {article.readTime}
                      </div>
                      <div className="flex items-center">
                        <Eye className="mr-1 h-4 w-4" />
                        {article.views}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 leading-relaxed">{article.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      asChild
                      variant="ghost"
                      className="text-blue-500 hover:text-blue-400 p-0 hover:bg-transparent"
                    >
                      <Link href={`/news/${article.id}`}>
                        Read more <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </motion.div>
        )}

        {/* Regular Articles Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {regularArticles.slice(0, visibleArticles).map((article, index) => (
            <motion.div key={article.id} variants={itemVariants}>
              <Card className="bg-zinc-900 border-zinc-800 overflow-hidden h-full group hover:border-blue-600 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: `url('${article.image}')`,
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <Badge className="absolute top-4 left-4 bg-blue-600 text-white">{article.category}</Badge>
                </div>
                <CardHeader className="pb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-400 space-x-3">
                    <div className="flex items-center">
                      <User className="mr-1 h-3 w-3" />
                      {article.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-3 w-3" />
                      {formatDate(article.publishedAt)}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">{article.excerpt}</p>
                </CardContent>
                <CardFooter className="pt-2">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex items-center text-xs text-gray-500 space-x-3">
                      <div className="flex items-center">
                        <Clock className="mr-1 h-3 w-3" />
                        {article.readTime}
                      </div>
                      <div className="flex items-center">
                        <Eye className="mr-1 h-3 w-3" />
                        {article.views}
                      </div>
                    </div>
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="text-blue-500 hover:text-blue-400 p-0 hover:bg-transparent"
                    >
                      <Link href={`/news/${article.id}`}>
                        Read <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        {visibleArticles < regularArticles.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button
              onClick={() => setVisibleArticles((prev) => prev + 6)}
              variant="outline"
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              Load more articles
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
