"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactMap() {
  return (
    <section className="py-20 bg-zinc-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Find Us</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300">Located in the heart of Punta del Este, Uruguay</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden"
        >
          {/* Map placeholder */}
          <div className="relative h-96 bg-zinc-900 flex items-center justify-center">
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('/placeholder.svg?height=400&width=800&text=Interactive+Map+Punta+del+Este')`,
              }}
            ></div>
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Map overlay info */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-black/80 backdrop-blur-sm rounded-lg p-6 border border-zinc-700">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Media Geek UY</h3>
                    <p className="text-gray-300 text-sm">Espigón Playa Building, 20100 - Punta del Este, Uruguay</p>
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                  >
                    <a
                      href="https://maps.google.com/?q=Punta+del+Este+Uruguay"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on Google Maps <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional location info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
        >
          <div className="text-center">
            <h3 className="text-lg font-semibold text-white mb-2">Easy Access</h3>
            <p className="text-gray-400">Central location with easy access by public transport and parking available</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-white mb-2">Business District</h3>
            <p className="text-gray-400">In Punta del Este's financial district, surrounded by technology companies</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-white mb-2">Ocean View</h3>
            <p className="text-gray-400">Modern offices with panoramic views, inspiring environment for creativity</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
