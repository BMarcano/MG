"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, Eye, Share2, Heart, Bookmark } from "lucide-react"
import Link from "next/link"

// Simulando datos que vendrían de Supabase
const getArticleById = (id: string) => {
  // En una implementación real, esto haría una consulta a Supabase
  return {
    id: 1,
    title: "Media Geek UY expande sus servicios de producción audiovisual",
    content: `
      <p>En un movimiento estratégico para fortalecer su posición en el mercado multimedia, Media Geek UY ha anunciado una significativa expansión de sus servicios de producción audiovisual. Esta iniciativa incluye la incorporación de tecnología de vanguardia y equipos especializados que permitirán ofrecer contenido de la más alta calidad a sus clientes.</p>

      <h2>Nuevas Tecnologías Implementadas</h2>
      <p>La empresa ha invertido en equipos de última generación, incluyendo cámaras 8K, sistemas de iluminación LED profesionales y software de edición avanzado. Estas herramientas permitirán crear contenido que cumple con los estándares más exigentes de la industria.</p>

      <h2>Impacto en el Mercado</h2>
      <p>Esta expansión posiciona a Media Geek UY como líder en el sector multimedia uruguayo, ofreciendo servicios que anteriormente solo estaban disponibles en mercados internacionales. Los clientes ahora pueden acceder a producciones de nivel mundial sin salir del país.</p>

      <h2>Servicios Ampliados</h2>
      <ul>
        <li>Producción de video en resolución 8K</li>
        <li>Streaming en vivo profesional</li>
        <li>Post-producción avanzada con efectos especiales</li>
        <li>Grabación de audio en estudios acústicamente tratados</li>
        <li>Servicios de motion graphics y animación 3D</li>
      </ul>

      <p>La inversión en tecnología y talento humano demuestra el compromiso de Media Geek UY con la excelencia y la innovación continua en el sector multimedia.</p>
    `,
    image: "/placeholder.svg?height=400&width=800&text=Production+Equipment",
    author: "Veronica Quitadamo",
    publishedAt: "2024-01-15",
    readTime: "5 min",
    category: "Tecnología",
    views: 1250,
    likes: 89,
  }
}

interface NewsArticleProps {
  articleId: string
}

export function NewsArticle({ articleId }: NewsArticleProps) {
  const article = getArticleById(articleId)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <article className="py-20 bg-zinc-950">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Article Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <Badge className="mb-4 bg-blue-600 text-white">{article.category}</Badge>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{article.title}</h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
            <div className="flex items-center">
              <User className="mr-2 h-5 w-5" />
              <span>Por {article.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              <span>{formatDate(article.publishedAt)}</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-5 w-5" />
              <span>{article.readTime} de lectura</span>
            </div>
            <div className="flex items-center">
              <Eye className="mr-2 h-5 w-5" />
              <span>{article.views} vistas</span>
            </div>
          </div>

          {/* Social Actions */}
          <div className="flex items-center gap-4 mb-8">
            <Button variant="outline" size="sm" className="border-zinc-700 text-gray-300 hover:bg-zinc-800">
              <Heart className="mr-2 h-4 w-4" />
              {article.likes}
            </Button>
            <Button variant="outline" size="sm" className="border-zinc-700 text-gray-300 hover:bg-zinc-800">
              <Share2 className="mr-2 h-4 w-4" />
              Compartir
            </Button>
            <Button variant="outline" size="sm" className="border-zinc-700 text-gray-300 hover:bg-zinc-800">
              <Bookmark className="mr-2 h-4 w-4" />
              Guardar
            </Button>
          </div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div
            className="w-full h-96 bg-cover bg-center bg-no-repeat rounded-xl"
            style={{
              backgroundImage: `url('${article.image}')`,
            }}
          ></div>
        </motion.div>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="prose prose-lg prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Back to News */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 pt-8 border-t border-zinc-800"
        >
          <Button
            asChild
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
          >
            <Link href="/news">← Volver a Noticias</Link>
          </Button>
        </motion.div>
      </div>
    </article>
  )
}
