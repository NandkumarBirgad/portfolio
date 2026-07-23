import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const skillCategories = [
  {
    title: "Frontend",
    emoji: "🎨",
    color: "hsl(262 83% 68%)",
    skills: [
      { name: "React.js", level: 85, logo: "⚛️" },
      { name: "JavaScript", level: 80, logo: "🟨" },
      { name: "TypeScript", level: 70, logo: "🔷" },
      { name: "HTML5 / CSS3", level: 90, logo: "🌐" },
      { name: "Tailwind CSS", level: 82, logo: "💨" },
    ],
  },
  {
    title: "Backend",
    emoji: "⚙️",
    color: "hsl(186 85% 55%)",
    skills: [
      { name: "Node.js", level: 78, logo: "🟢" },
      { name: "Express.js", level: 75, logo: "🚂" },
      { name: "REST APIs", level: 80, logo: "🔗" },
      { name: "Socket.io", level: 65, logo: "🔌" },
    ],
  },
  {
    title: "Database",
    emoji: "🗄️",
    color: "hsl(330 85% 65%)",
    skills: [
      { name: "MongoDB", level: 78, logo: "🍃" },
      { name: "MySQL", level: 70, logo: "🐬" },
      { name: "Mongoose", level: 75, logo: "📦" },
    ],
  },
  {
    title: "Tools & Cloud",
    emoji: "☁️",
    color: "hsl(45 95% 60%)",
    skills: [
      { name: "Git / GitHub", level: 85, logo: "🐙" },
      { name: "AWS (Learning)", level: 50, logo: "☁️" },
      { name: "Docker", level: 60, logo: "🐳" },
      { name: "VS Code", level: 95, logo: "💻" },
    ],
  },
];

function SkillBar({ name, level, logo, color, delay }: {
  name: string; level: number; logo: string; color: string; delay: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setWidth(level), delay * 1000 + 200);
      return () => clearTimeout(timer);
    }
  }, [isInView, level, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-base">{logo}</span>
          <span className="text-sm font-medium text-foreground/90 group-hover:text-foreground transition-colors">
            {name}
          </span>
        </div>
        <span className="text-xs font-bold tabular-nums" style={{ color }}>
          {level}%
        </span>
      </div>
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{
            width: `${width}%`,
            background: `linear-gradient(90deg, ${color}, ${color}aa)`,
            boxShadow: `0 0 8px ${color}50`,
          }}
        />
      </div>
    </motion.div>
  );
}

const techIcons = [
  { name: "React", emoji: "⚛️", bg: "hsl(195 100% 50% / 0.12)", border: "hsl(195 100% 50% / 0.3)" },
  { name: "Node.js", emoji: "🟢", bg: "hsl(120 60% 45% / 0.12)", border: "hsl(120 60% 45% / 0.3)" },
  { name: "TypeScript", emoji: "🔷", bg: "hsl(211 100% 50% / 0.12)", border: "hsl(211 100% 50% / 0.3)" },
  { name: "MongoDB", emoji: "🍃", bg: "hsl(120 40% 40% / 0.12)", border: "hsl(120 40% 40% / 0.3)" },
  { name: "AWS", emoji: "☁️", bg: "hsl(35 100% 50% / 0.12)", border: "hsl(35 100% 50% / 0.3)" },
  { name: "Docker", emoji: "🐳", bg: "hsl(200 90% 50% / 0.12)", border: "hsl(200 90% 50% / 0.3)" },
  { name: "Git", emoji: "🐙", bg: "hsl(0 70% 55% / 0.12)", border: "hsl(0 70% 55% / 0.3)" },
  { name: "Express", emoji: "🚂", bg: "hsl(0 0% 70% / 0.1)", border: "hsl(0 0% 70% / 0.2)" },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-36 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, transparent, hsl(230 22% 7% / 0.5), transparent)" }} />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(262 83% 68% / 0.08), transparent 70%)" }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
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
            — What I Know —
          </p>
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full mt-4" style={{ background: "linear-gradient(90deg, hsl(262 83% 68%), hsl(186 85% 55%))" }} />
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
            Technologies and tools I use to bring ideas to life — from UI to cloud
          </p>
        </motion.div>

        {/* Skill Progress Bars */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIdx * 0.12 }}
              className="glass-card p-6 hover:border-primary/30 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{cat.emoji}</span>
                <h3
                  className="text-lg font-bold font-heading"
                  style={{ color: cat.color }}
                >
                  {cat.title}
                </h3>
              </div>
              <div className="space-y-4">
                {cat.skills.map((skill, sIdx) => (
                  <SkillBar
                    key={skill.name}
                    {...skill}
                    color={cat.color}
                    delay={catIdx * 0.1 + sIdx * 0.08}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Icon Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground mb-6 font-medium">Also familiar with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techIcons.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + i * 0.06 }}
                whileHover={{ scale: 1.12, y: -3 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium cursor-default transition-all duration-200"
                style={{
                  background: tech.bg,
                  border: `1px solid ${tech.border}`,
                }}
              >
                <span>{tech.emoji}</span>
                <span className="text-foreground/80">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
