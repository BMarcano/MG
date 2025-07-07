"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { FileText, Users, MessageSquare, CheckCircle, ArrowRight } from "lucide-react"

export function ApplicationProcess() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const steps = [
    {
      icon: FileText,
      title: "Submit Application",
      description: "Send us your resume and cover letter through our application form or email.",
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: Users,
      title: "Initial Review",
      description: "Our HR team reviews your application and assesses your fit for the role.",
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: MessageSquare,
      title: "Interview Process",
      description: "Participate in interviews with team members and hiring managers.",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: CheckCircle,
      title: "Final Decision",
      description: "We'll make our decision and get back to you with next steps.",
      color: "from-orange-400 to-red-500",
    },
  ]

  return (
    <section className="py-20 bg-zinc-950 relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Application Process</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our hiring process is designed to be transparent and efficient. Here's what you can expect when you apply.
          </p>
        </motion.div>

        <motion.div ref={ref} className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative group"
              >
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-zinc-600 to-transparent z-0">
                    <ArrowRight className="absolute -right-2 -top-2 w-4 h-4 text-zinc-600" />
                  </div>
                )}

                <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 text-center hover:border-blue-600/50 transition-all duration-300 hover:transform hover:scale-105 relative z-10">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-zinc-900 border-2 border-blue-600 rounded-full flex items-center justify-center text-blue-400 font-bold text-sm">
                    {index + 1}
                  </div>

                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center mx-auto mb-6 mt-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-zinc-800/50 to-zinc-900/50 rounded-xl p-8 border border-zinc-700">
              <h3 className="text-2xl font-bold text-white mb-4">What We Look For</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-blue-400 mb-2">Technical Skills</h4>
                  <p className="text-gray-400 text-sm">
                    Relevant experience and expertise in your field with a passion for learning new technologies.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-400 mb-2">Cultural Fit</h4>
                  <p className="text-gray-400 text-sm">
                    Alignment with our values of collaboration, innovation, and continuous improvement.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-400 mb-2">Growth Mindset</h4>
                  <p className="text-gray-400 text-sm">
                    Eagerness to grow, learn, and contribute to our team's success and company mission.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
