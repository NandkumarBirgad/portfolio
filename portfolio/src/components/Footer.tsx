import { Github, Linkedin, Mail, Heart, ArrowUp, Code2 } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-12 pb-8 border-t border-border/30 overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to top, hsl(230 25% 4%), transparent)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Logo + Name */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Code2 size={16} className="text-white" />
            </div>
            <div>
              <p className="font-heading font-bold text-lg gradient-text">Nandkumar Birgad</p>
              <p className="text-xs text-muted-foreground">Full Stack Developer</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
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
                className="w-10 h-10 rounded-xl flex items-center justify-center border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={17} />
              </motion.a>
            ))}
          </div>

          {/* Scroll to Top */}
          <motion.button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl flex items-center justify-center border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={17} />
          </motion.button>
        </div>

        {/* Divider */}
        <div
          className="h-px w-full mb-6 rounded-full"
          style={{ background: "linear-gradient(90deg, transparent, hsl(262 83% 68% / 0.3), transparent)" }}
        />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span>Built with</span>
            <Heart size={14} className="text-red-400 fill-red-400 animate-pulse" />
            <span>by</span>
            <span className="font-semibold gradient-text-static">Nandkumar</span>
          </div>
          <p>© {currentYear} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};