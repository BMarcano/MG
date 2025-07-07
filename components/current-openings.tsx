"use client"

import { motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, DollarSign, Users, Search, Filter, Briefcase, Mail } from "lucide-react"

// This interface will be used for Supabase integration
interface JobOpening {
  id: string
  title: string
  department: string
  location: string
  type: string // "Full-time", "Part-time", "Contract"
  salary_range?: string
  description: string
  requirements: string[]
  posted_date: string
  is_active: boolean
  created_at: string
  updated_at: string
}

export function CurrentOpenings() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [jobs, setJobs] = useState<JobOpening[]>([])
  const [loading, setLoading] = useState(true)

  // This useEffect will be used to fetch from Supabase in the future
  useEffect(() => {
    // Simulate API call - replace with Supabase query
    const fetchJobs = async () => {
      try {
        // TODO: Replace with actual Supabase query
        // const { data, error } = await supabase
        //   .from('job_openings')
        //   .select('*')
        //   .eq('is_active', true)
        //   .order('created_at', { ascending: false })

        // For now, return empty array
        setJobs([])
        setLoading(false)
      } catch (error) {
        console.error("Error fetching jobs:", error)
        setJobs([])
        setLoading(false)
      }
    }

    fetchJobs()
  }, [])

  return (
    <section id="openings" className="py-20 bg-gradient-to-b from-zinc-900 to-zinc-950 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Current Openings</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our current job opportunities and find your perfect role in our growing team.
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 p-6 bg-zinc-800/30 rounded-xl border border-zinc-700">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search positions..."
                className="w-full pl-10 pr-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex gap-2">
              <select className="px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg text-white focus:outline-none focus:border-blue-500">
                <option value="">All Departments</option>
                <option value="engineering">Engineering</option>
                <option value="design">Design</option>
                <option value="marketing">Marketing</option>
                <option value="sales">Sales</option>
              </select>
              <Button variant="outline" className="border-zinc-600 text-gray-300 hover:bg-zinc-700">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Job Listings */}
        <motion.div ref={ref} className="max-w-4xl mx-auto">
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-400">Loading positions...</p>
            </div>
          ) : jobs.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">No Open Positions Right Now</h3>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                We're not actively hiring at the moment, but we're always interested in connecting with talented
                individuals. Feel free to send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3" asChild>
                  <a href="mailto:careers@mediageekuy.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Your Resume
                  </a>
                </Button>
                <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-6 py-3" asChild>
                  <a href="#culture">Learn About Our Culture</a>
                </Button>
              </div>
            </motion.div>
          ) : (
            <div className="space-y-6">
              {jobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Card className="bg-zinc-800/50 border-zinc-700 hover:border-blue-600/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                                <div className="flex items-center">
                                  <Users className="w-4 h-4 mr-1" />
                                  {job.department}
                                </div>
                                <div className="flex items-center">
                                  <MapPin className="w-4 h-4 mr-1" />
                                  {job.location}
                                </div>
                                <div className="flex items-center">
                                  <Clock className="w-4 h-4 mr-1" />
                                  {job.type}
                                </div>
                                {job.salary_range && (
                                  <div className="flex items-center">
                                    <DollarSign className="w-4 h-4 mr-1" />
                                    {job.salary_range}
                                  </div>
                                )}
                              </div>
                            </div>
                            <Badge variant="secondary" className="bg-blue-600/20 text-blue-400">
                              New
                            </Badge>
                          </div>
                          <p className="text-gray-300 mb-4 line-clamp-2">{job.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {job.requirements.slice(0, 3).map((req, idx) => (
                              <Badge key={idx} variant="outline" className="border-zinc-600 text-gray-400">
                                {req}
                              </Badge>
                            ))}
                            {job.requirements.length > 3 && (
                              <Badge variant="outline" className="border-zinc-600 text-gray-400">
                                +{job.requirements.length - 3} more
                              </Badge>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Button variant="outline" className="border-zinc-600 text-gray-300 hover:bg-zinc-700">
                            View Details
                          </Button>
                          <Button className="bg-blue-600 hover:bg-blue-700 text-white">Apply Now</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Future Opportunities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl p-8 border border-blue-500/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Don't See Your Role?</h3>
            <p className="text-gray-300 mb-6">
              We're always looking for talented individuals to join our team. Send us your resume and let us know how
              you'd like to contribute.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
              <a href="mailto:careers@mediageekuy.com">
                <Mail className="w-4 h-4 mr-2" />
                Get in Touch
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
