"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isImageOpen, setIsImageOpen] = useState(false);

 useEffect(() => {
  const handleScroll = () => {
    if (typeof window !== "undefined") {
      setScrolled(window.scrollY > 50);
    }
  };

  const checkMobile = () => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768);
    }
  };

  handleScroll();
  checkMobile();

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", checkMobile);

  return () => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("resize", checkMobile);
  };
}, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

const scrollToSection = (href: string) => {
  console.log("Scrolling to:", href);
  setTimeout(() => {
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    } else {
      console.warn("Element not found for", href);
    }
  }, 100); // Give DOM a moment to render if needed
  setIsOpen(false);
};


  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? `${darkMode ? "bg-gray-900/95" : "bg-white/95"} backdrop-blur-md border-b ${
                darkMode ? "border-white/10" : "border-gray-200"
              }`
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20"> {/* Increased height */}
            {/* Enhanced Profile Image */}
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0 cursor-pointer"
              onClick={() => setIsImageOpen(true)}
            >
              <div className="relative">
                <Image
                  src="/Profile.png"
                  alt="Vikas Yadav"
                  width={48}  // Increased size
                  height={48} // Increased size
                  className={`rounded-full object-cover border-2 transition-all ${
                    darkMode
                      ? "border-purple-400/50 hover:border-purple-400/80"
                      : "border-purple-600/50 hover:border-purple-600/80"
                  }`}
                  priority
                />
                {scrolled && (
                  <motion.div 
                    className="absolute inset-0 rounded-full border-2 border-transparent hover:border-white/30"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </div>
            </motion.div>

            {/* Desktop Navigation - Enhanced */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      darkMode
                        ? "text-gray-300 hover:text-white hover:bg-white/10 hover:scale-105"
                        : "text-gray-700 hover:text-gray-900 hover:bg-gray-100 hover:scale-105"
                    }`}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Enhanced Theme Toggle & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full ${
                  darkMode ? "hover:bg-white/10" : "hover:bg-gray-100"
                }`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5 text-yellow-400 hover:scale-110 transition-transform" />
                ) : (
                  <Moon className="w-5 h-5 text-blue-600 hover:scale-110 transition-transform" />
                )}
              </Button>

              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(!isOpen)}
                  className={`p-2 rounded-md ${
                    darkMode ? "hover:bg-white/10" : "hover:bg-gray-100"
                  }`}
                  aria-label="Toggle menu"
                >
                  {isOpen ? (
                    <X className={`w-6 h-6 ${darkMode ? "text-white" : "text-gray-900"} hover:rotate-90 transition-transform`} />
                  ) : (
                    <Menu className={`w-6 h-6 ${darkMode ? "text-white" : "text-gray-900"} hover:rotate-180 transition-transform`} />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={`md:hidden ${
                darkMode ? "bg-gray-900/95" : "bg-white/95"
              } backdrop-blur-md border-t ${
                darkMode ? "border-white/10" : "border-gray-200"
              }`}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className={`block px-3 py-3 rounded-md text-base font-medium transition-all duration-200 ${
                      darkMode
                        ? "text-gray-300 hover:text-white hover:bg-white/10 hover:scale-105"
                        : "text-gray-700 hover:text-gray-900 hover:bg-gray-100 hover:scale-105"
                    }`}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Instagram-like Image Modal */}
     <Dialog open={isImageOpen} onOpenChange={setIsImageOpen}>
  <DialogContent
    className="sm:max-w-md bg-transparent border-none shadow-none p-0"
  >
    {/* No default cancel button here */}

    {/* You can optionally add your own close button here */}
    <button
      onClick={() => setIsImageOpen(false)}
      className="absolute top-4 right-4 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 z-50"
      aria-label="Close"
    >
      ✕
    </button>

    <div className="flex justify-center items-center min-h-[300px] p-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Image
          src="/Profile.png"
          alt="Vikas Yadav - Full View"
          width={300}
          height={300}
          className="rounded-full object-cover border-4 border-white/20 shadow-xl"
        />
      </motion.div>
    </div>
  </DialogContent>
</Dialog>

    </>
  );
}