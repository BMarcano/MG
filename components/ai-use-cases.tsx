"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function AiUseCases() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const useCases = [
    {
      title: "Customer Service Automation",
      industry: "E-commerce",
      description: "AI chatbot that reduced customer service costs by 45% while improving satisfaction scores by 20%.",
      results: ["45% Cost Reduction", "20% Higher Satisfaction", "24/7 Availability"],
    },
    {
      title: "Content Personalization",
      industry: "Media",
      description:
        "AI-driven content recommendation system that increased user engagement by 35% and subscription rates by 18%.",
      results: ["35% More Engagement", "18% Subscription Growth", "40% Lower Bounce Rate"],
    },
    {
      title: "Predictive Maintenance",
      industry: "Manufacturing",
      description:
        "Machine learning system that predicted equipment failures with 92% accuracy, reducing downtime by 37%.",
      results: ["92% Prediction Accuracy", "37% Less Downtime", "28% Maintenance Savings"],
    },
    {
      title: "Market Intelligence",
      industry: "Finance",
      description:
        "AI analysis of market trends that improved investment decision accuracy by 25% and portfolio performance by 12%.",
      results: ["25% Better Decisions", "12% Portfolio Growth", "Real-time Insights"],
    },
  ]

  // Floating code elements
  const codeSnippets = [
    { code: "function predict() {", top: "10%", left: "5%", opacity: 0.1 },
    { code: "const model = tf.sequential();", top: "25%", right: "8%", opacity: 0.1 },
    { code: "await model.train(data);", top: "60%", left: "12%", opacity: 0.1 },
    { code: "return model.predict(input);", top: "75%", right: "15%", opacity: 0.1 },
    { code: "}", top: "85%", left: "20%", opacity: 0.1 },
  ]

  return (
    <section className="py-20 bg-zinc-900 relative overflow-hidden">
      {/* Floating code snippets */}
      {codeSnippets.map((snippet, index) => (
        <div
          key={index}
          className="absolute font-mono text-xs text-purple-400/30"
          style={{
            top: snippet.top,
            left: snippet.left,
            right: snippet.right,
            opacity: snippet.opacity,
          }}
        >
          {snippet.code}
        </div>
      ))}

      {/* Floating dots */}
      <motion.div
        className="absolute w-2 h-2 bg-purple-400/30 rounded-full"
        style={{ top: "30%", right: "20%" }}
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute w-3 h-3 bg-blue-500/20 rounded-full"
        style={{ bottom: "40%", left: "15%" }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
      ></motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Success Stories</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Real-world applications of our AI solutions</p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-zinc-800/50 backdrop-blur-sm border-zinc-700 h-full hover:border-purple-600/50 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {useCase.title}
                    </h3>
                    <Badge className="bg-purple-600 text-white">{useCase.industry}</Badge>
                  </div>

                  <p className="text-gray-300 mb-6">{useCase.description}</p>

                  <div className="space-y-2">
                    {useCase.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center bg-zinc-700/30 p-2 rounded-md">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                        <span className="text-sm text-gray-300">{result}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
