"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Calendar, Clock } from "lucide-react"
import Link from "next/link"

// Simulando artículos relacionados
const relatedArticles = [
  {
    id: 2,
    title: "Tendencias en marketing digital para 2024",
    image: "/placeholder.svg?height=200&width=300&text=Digital+Marketing",
    publishedAt: "2024-01-10",
    readTime: "4 min",
    category: "Marketing",
  },
  {
    id: 3,
    title: "Casos de éxito: Transformando marcas con contenido estratégico",
    image: "/placeholder.svg?height=200&width=300&text=Brand+Success",
    publishedAt: "2024-01-05",
    readTime: "6 min",
    category: "Casos de Éxito",
  },
  {
    id: 4,
    title: "La revolución del contenido generado por IA",
    image: "/placeholder.svg?height=200&width=300&text=AI+Content",
    publishedAt: "2024-01-01",
    readTime: "7 min",
    category: "Inteligencia Artificial",
  },
]

interface RelatedArticlesProps {
  currentArticleId: string
}

export function RelatedArticles({ currentArticleId }: RelatedArticlesProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Artículos Relacionados</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {relatedArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={`/news/${article.id}`}>
                <Card className="bg-zinc-900 border-zinc-800 overflow-hidden h-full hover:border-blue-600 transition-all duration-300 group">
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
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm text-gray-400 space-x-4">
                      <div className="flex items-center">
                        <Calendar className="mr-1 h-4 w-4" />
                        {formatDate(article.publishedAt)}
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-1 h-4 w-4" />
                        {article.readTime}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
