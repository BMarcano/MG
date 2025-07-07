import { Header } from "@/components/header"
import { NewsArticle } from "@/components/news-article"
import { RelatedArticles } from "@/components/related-articles"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { Footer } from "@/components/footer"

interface NewsPageProps {
  params: {
    id: string
  }
}

export default function NewsDetailPage({ params }: NewsPageProps) {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <div className="pt-20">
        <NewsArticle articleId={params.id} />
        <RelatedArticles currentArticleId={params.id} />
      </div>
      <NewsletterSignup />
      <Footer />
    </main>
  )
}
