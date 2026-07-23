import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download, Sparkles } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { HireMeModal } from "./HireMeModal";

const ROLES = [
  "Full Stack Developer",
  "MERN Stack Engineer",
  "Cloud Learner",
  "Problem Solver",
];

const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  size: Math.random() * 4 + 2,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 6 + 4,
  delay: Math.random() * 4,
  opacity: Math.random() * 0.5 + 0.1,
}));

export const HeroSection = () => {
  const [isExploding, setIsExploding] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleImageClick = () => {
    if (isExploding) return;
    setIsExploding(true);
    setTimeout(() => setIsExploding(false), 1200);
  };

  // Typewriter effect
  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const speed = isDeleting ? 40 : 80;

    if (!isDeleting && displayedText === currentRole) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    } else {
      timeoutRef.current = setTimeout(() => {
        setDisplayedText((prev) =>
          isDeleting ? prev.slice(0, -1) : currentRole.slice(0, prev.length + 1)
        );
      }, speed);
    }

    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
      id="home"
    >
      {/* Animated mesh background */}
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      {/* Gradient blobs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/6 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(262 83% 68% / 0.25), transparent 70%)" }}
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 right-1/6 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(186 85% 55% / 0.2), transparent 70%)" }}
      />

      {/* Floating particles */}
      {PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            background: p.id % 2 === 0
              ? "hsl(262 83% 68%)"
              : "hsl(186 85% 55%)",
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [p.opacity, p.opacity * 2, p.opacity],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-6 lg:w-1/2 text-center lg:text-left"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
            style={{
              background: "linear-gradient(135deg, hsl(262 83% 68% / 0.15), hsl(186 85% 55% / 0.15))",
              border: "1px solid hsl(262 83% 68% / 0.3)",
              color: "hsl(262 83% 80%)",
            }}
          >
            <Sparkles size={14} className="animate-pulse" />
            Available for Opportunities
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg font-medium text-muted-foreground"
          >
            Hello, I'm 👋
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
          >
            <span className="gradient-text">Nandkumar</span>
            <br />
            <span className="text-foreground/90">Birgad</span>
          </motion.h1>

          {/* Typewriter Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl font-semibold text-muted-foreground min-h-[2rem]"
          >
            <span
              className="typing-cursor"
              style={{ color: "hsl(262 83% 75%)" }}
            >
              {displayedText}
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-muted-foreground max-w-xl mx-auto lg:mx-0 text-base leading-relaxed"
          >
            Building scalable and modern web applications with a passion for
            clean code, innovative solutions, and seamless user experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
          >
            <HireMeModal />
            <motion.a
              href="#projects"
              className="px-6 py-3 rounded-xl font-semibold border border-border/60 text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              View My Work →
            </motion.a>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-muted-foreground hover:text-foreground border border-border/40 hover:border-accent/40 hover:bg-accent/5 transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Download size={16} />
              Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center justify-center lg:justify-start gap-3 pt-2"
          >
            {[
              { href: "https://github.com/NandkumarBirgad", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/nandkumar-birgad-3ba58a361", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:nandkumarbirgad5@gmail.com", icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="w-11 h-11 rounded-xl flex items-center justify-center border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:w-1/2 flex justify-center lg:justify-end relative"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px]">
            {/* Outer rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 rounded-full"
              style={{
                background: "conic-gradient(from 0deg, hsl(262 83% 68%), hsl(186 85% 55%), hsl(262 83% 68%))",
                padding: "2px",
                borderRadius: "50%",
                opacity: 0.5,
              }}
            >
              <div className="w-full h-full rounded-full bg-background" />
            </motion.div>

            {/* Inner counter-rotating ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-2 rounded-full"
              style={{
                background: "conic-gradient(from 180deg, hsl(186 85% 55% / 0.6), transparent, hsl(186 85% 55% / 0.6))",
                opacity: 0.4,
              }}
            />

            {/* Pulsing glow */}
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 40px hsl(262 83% 68% / 0.3)",
                  "0 0 80px hsl(262 83% 68% / 0.6), 0 0 120px hsl(186 85% 55% / 0.2)",
                  "0 0 40px hsl(262 83% 68% / 0.3)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full"
            />

            {/* Floating image */}
            <motion.div
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-full cursor-pointer"
              onClick={handleImageClick}
            >
              {/* Explosion particles */}
              <AnimatePresence>
                {isExploding &&
                  [...Array(16)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 1, x: 0, y: 0, scale: 0 }}
                      animate={{
                        opacity: 0,
                        x: (Math.random() - 0.5) * 500,
                        y: (Math.random() - 0.5) * 500,
                        scale: Math.random() * 2 + 0.5,
                      }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full z-20"
                      style={{
                        backgroundColor: `hsl(${Math.random() > 0.5 ? 262 : 186} 83% ${Math.random() * 30 + 55}%)`,
                        boxShadow: "0 0 10px currentColor",
                      }}
                    />
                  ))}
              </AnimatePresence>

              <img
                src="/photo.jpg"
                alt="Nandkumar Birgad"
                className="w-full h-full object-cover rounded-full relative z-10 transition-all duration-300"
                style={{
                  border: "3px solid transparent",
                  backgroundClip: "padding-box",
                  boxShadow: isExploding
                    ? "0 0 0 4px hsl(262 83% 68%), 0 0 40px hsl(262 83% 68%)"
                    : "0 0 0 3px hsl(262 83% 68% / 0.3)",
                }}
              />
            </motion.div>

            {/* Floating badge: Experience */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
              className="absolute -bottom-2 -left-6 glass-card px-4 py-2 flex items-center gap-2 rounded-xl z-20"
              style={{ border: "1px solid hsl(262 83% 68% / 0.3)" }}
            >
              <span className="text-2xl">💻</span>
              <div>
                <div className="text-xs text-muted-foreground">Projects</div>
                <div className="font-bold text-sm gradient-text-static">5+ Built</div>
              </div>
            </motion.div>

            {/* Floating badge: Stack */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, type: "spring" }}
              className="absolute -top-2 -right-6 glass-card px-4 py-2 flex items-center gap-2 rounded-xl z-20"
              style={{ border: "1px solid hsl(186 85% 55% / 0.3)" }}
            >
              <span className="text-2xl">🚀</span>
              <div>
                <div className="text-xs text-muted-foreground">Stack</div>
                <div className="font-bold text-sm" style={{ color: "hsl(186 85% 60%)" }}>MERN</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDown size={18} />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
