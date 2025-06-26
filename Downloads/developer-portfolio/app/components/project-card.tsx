"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface Project {
  title: string
  description: string
  tech: string[]
  image: string
  liveUrl: string
}

interface ProjectCardProps {
  project: Project
  delay: number
  darkMode: boolean
}

export default function ProjectCard({ project, delay, darkMode }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group h-full"
    >
      <Card
        className={`h-full rounded-2xl shadow-xl overflow-hidden border transition-all duration-300 ${
          darkMode
            ? "bg-gradient-to-br from-[#1c1c1e] to-[#2c2c2e] border-white/10 hover:shadow-blue-500/20"
            : "bg-white border-gray-200 hover:shadow-2xl"
        }`}
      >
        <div className="relative overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={400}
            height={300}
            className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <Button
                size="icon"
                variant="secondary"
                className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2"
              >
                <ExternalLink className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
        <CardContent className="p-6 lg:p-8">
          <h3 className={`text-2xl font-semibold mb-3 tracking-tight ${darkMode ? "text-white" : "text-gray-900"}`}>
            {project.title}
          </h3>
          <p className={`text-base mb-6 leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className={`rounded-full px-4 py-1 text-sm font-medium border ${
                  darkMode
                    ? "bg-blue-500/10 text-blue-300 border-blue-500/20"
                    : "bg-blue-100 text-blue-700 border-blue-200"
                }`}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

