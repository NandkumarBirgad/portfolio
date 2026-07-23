import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Calendar, Award, CheckCircle2 } from "lucide-react";

const certifications = [
  {
    title: "Full Stack Development & Programming",
    issuer: "Coding Seekho",
    date: "2025",
    credentialUrl: "https://drive.google.com/file/d/1A3JL69H6XcdPJmmi6xOGwBHaR034rInG/view?usp=drive_link",
    description: "Trained in core programming and full stack web development using MERN Stack with hands-on project experience.",
    emoji: "🏅",
    color: "hsl(262 83% 68%)",
    type: "Certificate",
  },
  {
    title: "Software Developer Intern",
    issuer: "Humming Byte Technologies Pvt. Ltd.",
    date: "Dec 2024 – May 2025",
    credentialUrl: "https://drive.google.com/file/d/13zyY0FIvlM-IeELx3FSFvWBNj4Vy_lOC/view?usp=drive_link",
    description: "6 months of practical experience in development tasks, professional software practices, and team collaboration.",
    emoji: "💼",
    color: "hsl(186 85% 55%)",
    type: "Internship",
  },
  {
    title: "Python Coder",
    issuer: "Kaggle",
    date: "November 2025",
    credentialUrl: "https://drive.google.com/file/d/1nsr2h0BSMxUjb1XpPkgj-rfDD8-M0M_I/view?usp=sharing",
    description: "Recognized as a Kaggle Community Member for active participation with datasets, notebooks, and the data science community.",
    emoji: "🐍",
    color: "hsl(45 95% 60%)",
    type: "Certificate",
  },
];

export const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24 md:py-36 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, transparent, hsl(230 22% 7% / 0.5), transparent)" }} />
      <motion.div
        className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(186 85% 55% / 0.08), transparent 70%)" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "hsl(262 83% 75%)" }}>
            — My Achievements —
          </p>
          <h2 className="section-title">
            <span className="gradient-text">Certifications</span> & Experience
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full mt-4" style={{ background: "linear-gradient(90deg, hsl(262 83% 68%), hsl(186 85% 55%))" }} />
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
            Professional certifications and experiences that validate my skills
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div
                className="h-full flex flex-col rounded-2xl border border-border/50 p-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-2"
                style={{
                  background: "rgba(12, 10, 24, 0.7)",
                  backdropFilter: "blur(20px)",
                }}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                  style={{ background: `linear-gradient(90deg, ${cert.color}, ${cert.color}55)` }}
                />

                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `${cert.color}15`,
                      border: `1px solid ${cert.color}30`,
                    }}
                  >
                    {cert.emoji}
                  </div>
                  <div className="flex flex-col items-end gap-1.5">
                    <span
                      className="text-xs px-2.5 py-1 rounded-full font-semibold"
                      style={{ background: `${cert.color}15`, color: cert.color, border: `1px solid ${cert.color}30` }}
                    >
                      {cert.type}
                    </span>
                    <div className="flex items-center gap-1 text-muted-foreground text-xs">
                      <Calendar size={11} />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="text-base font-bold font-heading mb-1 group-hover:text-primary transition-colors line-clamp-2"
                >
                  {cert.title}
                </h3>

                {/* Issuer */}
                <div className="flex items-center gap-1.5 mb-3">
                  <CheckCircle2 size={13} style={{ color: cert.color }} />
                  <p className="text-sm font-semibold" style={{ color: cert.color }}>
                    {cert.issuer}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
                  {cert.description}
                </p>

                {/* CTA Button */}
                <motion.a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-300"
                  style={{
                    background: `${cert.color}15`,
                    border: `1px solid ${cert.color}30`,
                    color: cert.color,
                  }}
                  whileHover={{
                    scale: 1.02,
                    background: `${cert.color}25`,
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink size={14} />
                  View Credential
                </motion.a>

                {/* Hover border */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
                  style={{ boxShadow: `inset 0 0 0 1px ${cert.color}25` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
