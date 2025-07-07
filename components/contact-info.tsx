"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, MessageSquare, Calendar } from "lucide-react"

export function ContactInfo() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      description: "Call us directly",
      value: "+598 99 123 456",
      action: "tel:+59899123456",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Mail,
      title: "Email",
      description: "Send us an email",
      value: "info@mediageekuy.com",
      action: "mailto:info@mediageekuy.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      description: "Real-time chat",
      value: "Send message",
      action: "https://wa.me/59899123456",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Calendar,
      title: "Virtual Meeting",
      description: "Schedule a video call",
      value: "Schedule appointment",
      action: "/schedule",
      color: "from-purple-500 to-pink-500",
    },
  ]

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center lg:text-left">Contact Information</h2>

          {/* Contact Methods */}
          <div className="space-y-4 mb-12">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 hover:border-blue-600/50 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-12 h-12 rounded-lg bg-gradient-to-br ${method.color} flex items-center justify-center`}
                        >
                          <method.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                            {method.title}
                          </h3>
                          <p className="text-sm text-gray-400">{method.description}</p>
                          <p className="text-gray-300">{method.value}</p>
                        </div>
                      </div>
                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="text-blue-500 hover:text-blue-400 hover:bg-blue-600/10"
                      >
                        <a href={method.action} target={method.action.startsWith("http") ? "_blank" : undefined}>
                          Contact
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Office Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Our Office</h3>
                    <p className="text-gray-300 mb-2">Espigón Playa Building</p>
                    <p className="text-gray-300 mb-2">20100 - Punta del Este</p>
                    <p className="text-gray-300">Uruguay</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Office Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-4">Office Hours</h3>
                    <div className="space-y-2">
                      {officeHours.map((schedule, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-gray-300">{schedule.day}</span>
                          <span className="text-gray-400">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
