"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export function PlatformsTech() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const technologies = [
    {
      category: "Frontend",
      techs: ["React", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS"],
      color: "from-cyan-500 to-blue-500",
      textColor: "text-cyan-400",
    },
    {
      category: "Backend",
      techs: ["Node.js", "Python", "PHP", "Java", "C#", "Go"],
      color: "from-blue-500 to-purple-500",
      textColor: "text-blue-400",
    },
    {
      category: "Mobile",
      techs: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin", "Ionic"],
      color: "from-purple-500 to-pink-500",
      textColor: "text-purple-400",
    },
    {
      category: "Database",
      techs: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase", "Supabase"],
      color: "from-pink-500 to-red-500",
      textColor: "text-pink-400",
    },
    {
      category: "Cloud & DevOps",
      techs: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "Vercel"],
      color: "from-red-500 to-orange-500",
      textColor: "text-red-400",
    },
    {
      category: "Tools & Services",
      techs: ["Git", "GitHub", "Figma", "Stripe", "SendGrid", "Analytics"],
      color: "from-orange-500 to-yellow-500",
      textColor: "text-orange-400",
    },
  ]

  // Floating code elements
  const codeElements = Array(20)
    .fill(0)
    .map((_, i) => ({
      text: ["</>", "{}", "[]", "()", "//", "=>", "&&", "||"][Math.floor(Math.random() * 8)],
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.2 + 0.05,
    }))

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Floating code elements */}
      {codeElements.map((el, index) => (
        <motion.div
          key={index}
          className="absolute font-mono text-sm text-cyan-400"
          style={{
            left: el.left,
            top: el.top,
            opacity: el.opacity,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [el.opacity, el.opacity * 2, el.opacity],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: el.delay,
          }}
        >
          {el.text}
        </motion.div>
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Technologies We Use</h2>
          <div className="w-20 h-1 bg-cyan-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge technologies to build robust and scalable platforms
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 h-full hover:border-cyan-600/50 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${tech.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <span className="text-white font-bold text-lg">{tech.category[0]}</span>
                    </div>
                    <h3 className={`text-xl font-bold text-white mb-4 group-hover:${tech.textColor} transition-colors`}>
                      {tech.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {tech.techs.map((techName, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-zinc-800/50 text-gray-300 text-sm rounded-full border border-zinc-700 hover:border-cyan-600/50 transition-colors"
                      >
                        {techName}
                      </span>
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
