import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import { HireMeModal } from "./HireMeModal";

export const HeroSection = () => {
  const [isExploding, setIsExploding] = useState(false);

  const handleImageClick = () => {
    if (isExploding) return;
    setIsExploding(true);
    setTimeout(() => setIsExploding(false), 1000);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16" id="home">
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 lg:w-1/2 text-center lg:text-left"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-medium text-lg"
          >
            Hello, I’m
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold"
          >
            <span className="gradient-text">Nandkumar</span>
          </motion.h1>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground font-medium"
          >
            Full Stack Developer | MERN Stack | Cloud Learner
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-muted-foreground max-w-xl mx-auto lg:mx-0 text-lg"
          >
            Building scalable and modern web applications with a passion for
            clean code and innovative solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4"
          >
            <HireMeModal />
            <Button variant="outline" size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center justify-center lg:justify-start gap-4 pt-6"
          >
            <a
              href="https://github.com/NandkumarBirgad"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/nandkumar-birgad-3ba58a361"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="mailto:nandkumarbirgad5@gmail.com"
              className="p-3 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary hover:scale-110 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 flex justify-center lg:justify-end relative"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px]">
            {/* Spinning/Deep Glow Background */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/30 to-accent/30 blur-2xl opacity-50"
            />

            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-full cursor-pointer group"
              onClick={handleImageClick}
            >
              <AnimatePresence>
                {isExploding &&
                  [...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 1, x: 0, y: 0, scale: 0 }}
                      animate={{
                        opacity: 0,
                        x: (Math.random() - 0.5) * 400,
                        y: (Math.random() - 0.5) * 400,
                        scale: Math.random() * 1.5 + 0.5,
                      }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full z-20"
                      style={{
                        backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
                        boxShadow: "0 0 10px rgba(255,255,255,0.8)",
                      }}
                    />
                  ))}
              </AnimatePresence>

              {/* RGB Glow Effect on Click */}
              <motion.div
                className="absolute -inset-1 rounded-full opacity-0 pointer-events-none"
                animate={{
                  opacity: isExploding ? 1 : 0,
                  boxShadow: isExploding
                    ? [
                      "0 0 0px #ff0000",
                      "0 0 20px #00ff00",
                      "0 0 40px #0000ff",
                      "0 0 0px #ff0000",
                    ]
                    : "none",
                }}
                transition={{ duration: 0.5 }}
              />

              <img
                src="/photo.jpg"
                alt="Nandkumar Birgad"
                className={`w-full h-full object-cover rounded-full border-4 shadow-2xl relative z-10 transition-all duration-300 ${isExploding ? "border-transparent" : "border-primary/20"
                  }`}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator - Adjusted Position */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDown size={20} />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
