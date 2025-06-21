"use client"

import { useState, useEffect } from "react"
import React, { FormEvent } from "react";
import { motion, useScroll, useTransform } from "framer-motion"
import emailjs from "emailjs-com";
import { toast, Toaster } from "react-hot-toast";
import {
  Github,
  Linkedin,
  Mail,
  Code,
  Database,
  Globe,
  Smartphone,
  Palette,
  Monitor,
  Layers,
  Rocket,
  ServerCog,
  ClipboardList,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "./components/navbar"
import ProjectCard from "./components/project-card"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode)
  }, [darkMode])


  const projects = [
   {
  title: "FitForHire",
  description: "An AI-powered tool that analyzes your resume against a job description to provide tailored improvement suggestions. It also includes a feature to generate ATS-friendly resumes for better job tracking system compatibility.", 
   tech: ["React", "TailwindCSS", "Clerk", "Gemini AI", "Node.js", "Express", "Clerk", "MongoDB"],
  image: "/project1.png",
  liveUrl: "https://fit-for-hire-livid.vercel.app", // Replace with actual deployed link
  githubUrl: "#", // Replace with actual GitHub repo link
},

   {
  title: "IronMentor - Fitness AI",
  description:
    "A conversational AI fitness coach that generates personalized diet and workout plans based on user input. Built using modern AI APIs for real-time interaction and tailored health guidance.",
  tech: ["Next.js", "Vapi", "Gemini AI", "TailwindCSS"],
  image: "/project2.png", // Replace with your actual image path
  liveUrl: "https://iron-mentor.vercel.app/", // Replace with the deployed app link
  githubUrl: "#", // Replace with your GitHub repo
}
,
   {
  title: "Crypto Radar",
  description:
    "A comprehensive cryptocurrency tracking platform featuring real-time data on market cap, price charts, 24h highs/lows, and global filtering in INR, USD, and EUR. Also integrates the latest crypto news using Guardian API.",
  tech: ["React", "TailwindCSS", "CoinGecko API", "Guardian API"],
  image: "/project3.png", // Replace with your actual image
  liveUrl: "https://cryptoradarr.netlify.app/", // Replace with deployed app link
  githubUrl: "#", // Replace with GitHub repo link
}

  ]

  const services = [
  {
    title: "Web Development",
    description:
      "Custom web applications built with modern frameworks like React, Next.js, and Node.js for optimal performance and user experience.",
    icon: <Monitor className="w-8 h-8" />,
    features: ["Responsive Design", "SEO Optimization", "Performance Tuning", "Modern Frameworks"],
  },
  {
    title: "Responsive Design",
    description:
      "Mobile-first and cross-device designs that ensure your website looks and works perfectly on all screen sizes.",
    icon: <Smartphone className="w-8 h-8" />,
    features: ["Mobile-First Design", "Cross-Browser Compatibility", "Accessibility", "UI Consistency"],
  },
  {
    title: "MERN Stack Development",
    description:
      "Full-stack web apps built with MongoDB, Express.js, React, and Node.js, delivering seamless front-to-back integration.",
    icon: <Layers className="w-8 h-8" />,
    features: ["MongoDB Integration", "REST/GraphQL APIs", "React SPA", "Authentication & Authorization"],
  },
  {
    title: "UI/UX Design",
    description:
      "User-centered design approach creating intuitive interfaces with modern design principles and accessibility standards.",
    icon: <Palette className="w-8 h-8" />,
    features: ["User Research", "Prototyping", "Design Systems", "Accessibility"],
  },
  {
    title: "CMS & Admin Panels",
    description:
      "Custom dashboards and content management systems to help you control and manage your content and data easily.",
    icon: <ClipboardList className="w-8 h-8" />,
    features: ["Dynamic Content", "User Management", "Role-based Access", "Analytics Dashboards"],
  },
  {
    title: "Consulting",
    description:
      "Technical consulting and code reviews to help optimize your existing projects and implement best practices.",
    icon: <Rocket className="w-8 h-8" />,
    features: ["Code Review", "Architecture Planning", "Performance Audit", "Team Training"],
  },
];
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

 const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      await emailjs.send(
        "service_zhwvcja", // Replace with your EmailJS service ID
        "template_ce1dwxk", // Replace with your template ID
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
          title: "Get in Touch",
        },
        "cGPMF0OE_CvNkW1BS" // Replace with your EmailJS public key
      );

      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Try again later.");
    } finally {
      setSending(false);
    }
  };


  return (
    
  <div
  className={`transition-colors duration-300 min-h-[100dvh] flex flex-col ${
    darkMode ? "dark bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
  }`}
>

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Hero Section */}
 <section
    id="home"
    className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8"
  >

  <div className="relative z-10 text-center max-w-4xl mx-auto w-full">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="space-y-6"
    >
      {/* Name Heading */}
      <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2 drop-shadow-lg">
        Vikas Yadav
      </h1>

      {/* Title & Underline */}
      <div className="relative inline-block">
        <p
          className={`text-base sm:text-xl md:text-2xl lg:text-3xl font-medium ${
            darkMode ? "text-gray-200" : "text-gray-700"
          }`}
        >
          Full-Stack Developer & Creative Technologist
        </p>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 1, duration: 0.8 }}
          className={`h-0.5 mt-1 ${
            darkMode
              ? "bg-gradient-to-r from-blue-400 to-purple-500"
              : "bg-gradient-to-r from-blue-500 to-purple-600"
          }`}
        />
      </div>

      {/* Summary */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className={`max-w-2xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed ${
          darkMode ? "text-gray-300" : "text-gray-600"
        }`}
      >
        Building seamless digital experiences with modern web technologies and innovative solutions.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
      >
        <Button
          size="lg"
          className={`relative overflow-hidden group px-8 py-3 text-lg font-medium ${darkMode?"text-white":"text-black"}`}
          onClick={() =>
            document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <span className="relative z-10">View My Projects</span>
          <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:from-blue-600 group-hover:to-purple-700 transition-all duration-300" />
        </Button>

        <Button
          variant={darkMode ? "secondary" : "outline"}
          size="lg"
          className={`px-8 py-3 text-lg font-medium border-2 border-black ${darkMode?"text-black":"text-black"}`}
          onClick={() =>
            document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <Mail className="w-5 h-5 mr-2" />
          Contact Me
        </Button>
      </motion.div>

      {/* Optional: Tech Stack Badges or tags */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.1 }}
        className="flex flex-wrap justify-center gap-2 pt-8 max-w-2xl mx-auto"
      >
<span className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 px-4 py-1 rounded-full text-sm font-medium shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md hover:brightness-105 cursor-default">
  Problem Solver
</span>

<span className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 px-4 py-1 rounded-full text-sm font-medium shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md hover:brightness-105 cursor-default">
  Fast Learner
</span>

<span className="bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200 px-4 py-1 rounded-full text-sm font-medium shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md hover:brightness-105 cursor-default">
  Team Player
</span>

<span className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 px-4 py-1 rounded-full text-sm font-medium shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md hover:brightness-105 cursor-default">
  Adaptable
</span>
      </motion.div>
    </motion.div>
  </div>

  {/* Scroll Indicator */}
  <motion.div
    animate={{ y: [0, 15, 0] }}
    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
    className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
    onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
    aria-label="Scroll down"
  >
    <div
      className={`w-7 h-11 sm:w-8 sm:h-12 border-2 ${
        darkMode ? "border-white/30" : "border-gray-400/30"
      } rounded-full flex justify-center items-start p-1`}
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className={`w-1.5 h-3 rounded-full ${
          darkMode ? "bg-white/80" : "bg-gray-600/80"
        }`}
      />
    </div>
  </motion.div>
</section>

     {/* About Section */}
<section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
  <div className="max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >
      <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? "text-white" : "text-gray-900"}`}>
        About Me
      </h2>
      <p className={`text-xl max-w-4xl mx-auto leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
       I'm a passionate full-stack developer with hands-on experience in building responsive, scalable, and high-performance web applications using the MERN stack. I specialize in crafting seamless user experiences by combining modern UI/UX principles with robust backend architecture. My approach focuses on clean code, performance optimization, and delivering real-world solutions that are both functional and visually engaging.


      </p>
    </motion.div>

    {/* Skills Grid */}
    <div className="max-w-6xl mx-auto mb-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h3 className={`text-3xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
          Skills & Technologies
        </h3>
        <p className={`text-lg ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
          Technologies I use to bring ideas to life
        </p>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 lg:gap-8">
        {[
          { name: "HTML5", icon: <img src="/html.png" className="w-10 h-10" alt="HTML5" /> },
          { name: "CSS3", icon: <img src="css.png" className="w-10 h-10" alt="CSS3" /> },
          { name: "TailwindCSS", icon: <img src="/tailwind.png" className="w-10 h-10" alt="HTML5" /> },
          { name: "Bootstrap", icon: <img src="/bootstrap.png" className="w-10 h-10" alt="HTML5" /> },

          { name: "JavaScript", icon: <img src="/javascript.png" className="w-10 h-10" alt="JS" /> },
          { name: "React.js", icon: <img src="/react.png" className="w-10 h-10" alt="React" /> },
          { name: "Node.js", icon: <img src="/nodejs.png" className="w-10 h-10" alt="Node" /> },
          { name: "Express.js", icon: <img src="/express.png" className="w-10 h-10" alt="Express" /> },
          { name: "MongoDB", icon: <img src="/mongodb.png" className="w-10 h-10" alt="MongoDB" /> },
          { name: "TypeScript", icon: <img src="/typescript.png" className="w-10 h-10" alt="TypeScript" /> },
          { name: "Framer Motion", icon: <img src="/framermotion.png" className="w-10 h-10" alt="Framer Motion" /> },
          { name: "Next JS", icon: <img src="/next.png" className="w-10 h-10" alt="Framer Motion" /> },
          { name: "Clerk", icon: <img src="/clerk.png" className="w-10 h-10" alt="Framer Motion" /> },
          { name: "Vercel", icon: <img src="/vercel.png" className="w-10 h-10" alt="Framer Motion" /> },
          { name: "Railway", icon: <img src="/railway.png" className="w-10 h-10" alt="Framer Motion" /> },
          { name: "Netlify", icon: <img src="/netlify.png" className="w-10 h-10" alt="Framer Motion" /> },



        ].map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
            className={`flex flex-col items-center p-6 rounded-2xl ${
              darkMode
                ? "bg-white/5 border-white/10 hover:bg-white/10"
                : "bg-white border-gray-200 hover:bg-gray-50 shadow-sm hover:shadow-md"
            } border backdrop-blur-sm transition-all duration-300 cursor-pointer`}
          >
            <div className="mb-3">{skill.icon}</div>
            <span className={`text-sm font-medium text-center ${darkMode ? "text-white" : "text-gray-700"}`}>
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>

    {/* What I Do Section */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto"
    >
      <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/10">
        <h3 className={`text-3xl font-bold mb-8 text-center ${darkMode ? "text-white":"text-black"}`}>What I Do</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <Code className="w-12 h-12 text-blue-400 mb-4" />
            <h4 className={`font-semibold text-lg mb-2 ${darkMode ? "text-white" : "text-black"}`}>Frontend Development</h4>
            <p className={`text-sm ${darkMode ?"text-white":"text-black" }`}>React, TypeScript, Tailwind CSS, Framer Motion</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Database className="w-12 h-12 text-green-400 mb-4" />
            <h4 className={`font-semibold text-lg mb-2 ${darkMode ? "text-white" : "text-black"}`}>Backend Development</h4>
            <p className={`text-sm ${darkMode ? "text-white": "text-black"}`}>Node.js, Express, MongoDB, REST APIs</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <ServerCog className="w-12 h-12 text-yellow-400 mb-4" />
            <h4 className={`font-semibold text-lg mb-2 ${darkMode ?"text-white":"text-black"}`}>Deployment & Hosting</h4>
            <p className={`text-sm ${darkMode ? "text-white":"text-black"}`}>Render, Vercel, Netlify, GitHub Actions</p>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
</section>

      {/* Projects Section */}
      <section id="projects" className={`py-24 px-4 sm:px-6 lg:px-8 ${darkMode ? "bg-gray-800/50" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? "text-white" : "text-gray-900"}`}>
              Featured Projects
            </h2>
            <p className={`text-xl max-w-4xl mx-auto leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              Here are some of my recent projects that showcase my skills and creativity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} delay={index * 0.2} darkMode={darkMode} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`py-24 px-4 sm:px-6 lg:px-8 ${darkMode ? "bg-gray-900/50" : "bg-gray-100"}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? "text-white" : "text-gray-900"}`}>
              Services
            </h2>
            <p className={`text-xl max-w-4xl mx-auto leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              Comprehensive development services to bring your ideas to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group h-full"
              >
                <Card
                  className={`h-full ${
                    darkMode
                      ? "bg-white/5 border-white/10 hover:bg-white/10"
                      : "bg-white border-gray-200 hover:shadow-xl"
                  } transition-all duration-300`}
                >
                  <CardContent className="p-8">
                    <div
                      className={`inline-flex p-4 rounded-2xl mb-6 ${
                        darkMode
                          ? "bg-gradient-to-br from-blue-500/20 to-purple-600/20"
                          : "bg-gradient-to-br from-blue-100 to-purple-100"
                      }`}
                    >
                      <div className="text-blue-500">{service.icon}</div>
                    </div>
                    <h3 className={`text-2xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
                      {service.title}
                    </h3>
                    <p className={`mb-6 leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                      {service.description}
                    </p>
                    <div className="space-y-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                          <span className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{feature}</span>
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

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? "text-white" : "text-gray-900"}`}>
              Let's Work Together
            </h2>
            <p className={`text-xl max-w-4xl mx-auto leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              Ready to bring your ideas to life? Let's create something amazing together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
             <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                         <Toaster position="top-right" reverseOrder={false} />

  <CardContent className="p-8 lg:p-10">
    <h3 className={`text-3xl font-bold mb-8 ${darkMode ? "text-white" : "text-black"}`}>
      Send a Message
    </h3>
    
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <Input
          placeholder="Your Name"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={`bg-white/10 border-white/20 text-white h-12 text-lg ${darkMode ? "placeholder::text-gray-400":"placeholder:text-black"}`}
        />
      </div>
      <div>
        <Input
          type="email"
          placeholder="Your Email"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={`bg-white/10 border-white/20 text-white h-12 text-lg ${darkMode ? "placeholder::text-white":"placeholder:text-black"}`}
        />
      </div>
      <div>
        <Textarea
          placeholder="Your Message"
          name="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={6}
          className={`bg-white/10 border-white/20 text-white text-lg resize-none ${darkMode ? "placeholder:text-gray-400":"placeholder:text-black"}`}
        />
      </div>
      <Button
        type="submit"
        disabled={sending}
        className={`w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 h-12 text-lg font-semibold ${
          darkMode ? "text-white" : "text-black"
        } ${sending ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {sending ? "Sending..." : "Send Message"}
      </Button>
    </form>
  </CardContent>
</Card>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className={`text-3xl font-bold mb-8 ${darkMode ? "text-white ":"text-black"}`}>Get In Touch</h3>
                <div className="space-y-6">
  {/* Email */}
  <div className="flex items-center gap-4">
    <div className="p-3 bg-blue-500/20 rounded-full">
      <Mail className="w-6 h-6 text-blue-400" />
    </div>
    <a
      href="mailto:vy532555@email.com"
      className={`text-lg ${darkMode ? "text-gray-300" : "text-black"} hover:text-blue-500 transition-colors`}
    >
      vy532555@email.com
    </a>
  </div>

  {/* WhatsApp */}
  <div className="flex items-center gap-4">
    <div className="p-3 bg-green-500/20 rounded-full">
      <svg
        className="w-6 h-6 text-green-500"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.52 3.48A11.92 11.92 0 0 0 12 0a12 12 0 0 0-9.24 19.44L0 24l4.8-2.76A11.94 11.94 0 0 0 12 24a11.94 11.94 0 0 0 8.52-20.52ZM12 22a9.94 9.94 0 0 1-5.28-1.5l-.36-.24-3.12 1.8.84-3.48-.24-.36A10 10 0 1 1 12 22Zm5.4-7.32c-.24-.12-1.44-.72-1.68-.84s-.36-.12-.48.12-.6.84-.72 1.08-.24.24-.48.12a8.07 8.07 0 0 1-3.72-3.24c-.24-.48.24-.36.72-1.2.12-.24 0-.48 0-.6s0-.36-.12-.48-.48-1.2-.72-1.68c-.18-.42-.36-.48-.48-.48h-.36a1.1 1.1 0 0 0-.84.36c-.24.24-.96.96-.96 2.28s.96 2.64 1.08 2.88a10.48 10.48 0 0 0 4.44 4.44c.6.24 1.2.36 1.56.48a4.61 4.61 0 0 0 2.04.12c.6-.12 1.44-.6 1.56-1.2s.24-1.08.12-1.2-.24-.12-.48-.24Z" />
      </svg>
    </div>
    <a
      href="https://wa.me/919082539010"
      target="_blank"
      rel="noopener noreferrer"
      className={`text-lg ${darkMode ? "text-gray-300" : "text-black"} hover:text-green-600 transition-colors`}
    >
     +919082539010
    </a>
  </div>

  {/* LinkedIn */}
  <div className="flex items-center gap-4">
    <div className="p-3 bg-blue-600/20 rounded-full">
      <Linkedin className="w-6 h-6 text-blue-500" />
    </div>
    <a
      href="https://www.linkedin.com/in/vikas-yadav-1916002a6"
      target="_blank"
      rel="noopener noreferrer"
      className={`text-lg ${darkMode ? "text-gray-300" : "text-black"} hover:text-blue-600 transition-colors`}
    >
      Linkedin
    </a>
  </div>
</div>

              </div>

              <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <h4 className={`text-2xl font-bold mb-4 ${darkMode ? "text-white":"text-black"}`}>Available for Freelance</h4>
                <p className={`mb-6 leading-relaxed ${darkMode ? "text-gray-300":"text-black"}`}>
                  I'm currently available for freelance projects and full-time opportunities. Let's discuss how we can
                  work together!
                </p>
             
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
     <footer className={`py-12 px-4 sm:px-6 lg:px-8 border-t ${darkMode ? "border-white/10 bg-gray-900" : "border-gray-200 bg-gray-50"}`}>
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
    
    {/* Copyright */}
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`mb-6 md:mb-0 text-lg text-center md:text-left ${
        darkMode ? "text-gray-400" : "text-gray-600"
      }`}
    >
      © 2025 <span className={`${darkMode ? "text-white" : "text-black"} font-semibold`}>Vikas Yadav</span>. All rights reserved.
    </motion.p>

    {/* Social Links */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="flex gap-6"
    >
      {/* GitHub */}
      <motion.a
        whileHover={{ scale: 1.1, rotate: 5 }}
        href="https://github.com/vikasyadavvvv"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub Profile"
        className={`p-3 rounded-full transition-colors ring-1 ${
          darkMode
            ? "bg-white/10 hover:bg-white/20 ring-white/10 hover:ring-white/30"
            : "bg-gray-100 hover:bg-gray-200 ring-gray-200 hover:ring-gray-300"
        }`}
      >
        <Github className={`w-6 h-6 ${darkMode ? "text-gray-400" : "text-gray-600"}`} />
      </motion.a>

      {/* LinkedIn */}
      <motion.a
        whileHover={{ scale: 1.1, rotate: -5 }}
        href="https://www.linkedin.com/in/vikas-yadav"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn Profile"
        className={`p-3 rounded-full transition-colors ring-1 ${
          darkMode
            ? "bg-white/10 hover:bg-white/20 ring-white/10 hover:ring-white/30"
            : "bg-gray-100 hover:bg-gray-200 ring-gray-200 hover:ring-gray-300"
        }`}
      >
        <Linkedin className={`w-6 h-6 ${darkMode ? "text-gray-400" : "text-gray-600"}`} />
      </motion.a>

      {/* Email */}
      <motion.a
        whileHover={{ scale: 1.1, rotate: 5 }}
        href="mailto:vy532555@gmail.com"
        aria-label="Send Email"
        className={`p-3 rounded-full transition-colors ring-1 ${
          darkMode
            ? "bg-white/10 hover:bg-white/20 ring-white/10 hover:ring-white/30"
            : "bg-gray-100 hover:bg-gray-200 ring-gray-200 hover:ring-gray-300"
        }`}
      >
        <Mail className={`w-6 h-6 ${darkMode ? "text-gray-400" : "text-gray-600"}`} />
      </motion.a>
    </motion.div>
  </div>
</footer>

    </div>
  )
}
