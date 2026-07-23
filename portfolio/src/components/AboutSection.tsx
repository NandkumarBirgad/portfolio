import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import { Code2, Rocket, Brain, Coffee } from "lucide-react";

const stats = [
  { label: "Projects Built", value: 5, suffix: "+", icon: "🚀" },
  { label: "Technologies", value: 12, suffix: "+", icon: "⚡" },
  { label: "Months Experience", value: 6, suffix: "+", icon: "💼" },
  { label: "Cups of Coffee", value: 500, suffix: "+", icon: "☕" },
];

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "Building end-to-end web applications with React, Node.js, and MongoDB",
    gradient: "from-purple-500 to-violet-600",
    glow: "hsl(262 83% 68%)",
  },
  {
    icon: Rocket,
    title: "Innovation Driven",
    description: "Passionate about creating scalable, efficient, and modern solutions",
    gradient: "from-cyan-500 to-teal-500",
    glow: "hsl(186 85% 55%)",
  },
  {
    icon: Brain,
    title: "Continuous Learner",
    description: "Always exploring new technologies — currently diving deep into AWS Cloud",
    gradient: "from-pink-500 to-rose-500",
    glow: "hsl(330 85% 65%)",
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 60, stiffness: 200 });
  const displayValue = useTransform(springValue, (v) => Math.floor(v));
  const [display, setDisplay] = useRef<[string, (v: string) => void]>(["0", () => {}] as any).current;

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.onChange((v) => {
      const el = ref.current as HTMLElement | null;
      if (el) el.textContent = Math.floor(v) + suffix;
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-36 relative" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <motion.div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(262 83% 68% / 0.06), transparent 70%)" }}
        animate={{ x: [-20, 20, -20], y: [-10, 10, -10] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "hsl(262 83% 75%)" }}>
            — Who Am I —
          </p>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full mt-4" style={{ background: "linear-gradient(90deg, hsl(262 83% 68%), hsl(186 85% 55%))" }} />
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="stat-card hover:scale-105 transition-transform duration-300 cursor-default"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold mb-1 gradient-text-static">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Hi there! I'm{" "}
                <span className="font-semibold gradient-text-static">Nandkumar Birgad</span>,
                a motivated Full Stack Developer and Computer Science engineering student with
                a strong interest in building modern, scalable, and user-friendly web applications.
              </p>
              <p>
                I work across the full stack using technologies such as{" "}
                <span className="font-semibold" style={{ color: "hsl(262 83% 75%)" }}>
                  React, Node.js, Express, MongoDB, and MySQL
                </span>
                . I enjoy developing clean user interfaces, designing secure backend APIs, and
                understanding how different parts of an application work together efficiently.
              </p>
              <p>
                Currently, I'm expanding my knowledge in{" "}
                <span className="font-semibold" style={{ color: "hsl(186 85% 60%)" }}>
                  Cloud Computing and AWS
                </span>{" "}
                to build more scalable and reliable applications. I strongly believe in writing
                clean, maintainable code and continuously improving my skills.
              </p>
            </div>

            {/* Tech stack pills */}
            <div className="pt-2">
              <p className="text-sm font-semibold text-foreground mb-3">Core Technologies</p>
              <div className="flex flex-wrap gap-2">
                {["React", "Node.js", "Express", "MongoDB", "MySQL", "TypeScript", "AWS", "Docker", "Git"].map((tech) => (
                  <motion.span
                    key={tech}
                    className="tag-chip"
                    whileHover={{ scale: 1.08 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.12 }}
                className="glass-card-hover p-5 cursor-default group"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${item.glow}25, ${item.glow}15)`,
                      border: `1px solid ${item.glow}30`,
                      boxShadow: `0 4px 20px ${item.glow}15`,
                    }}
                  >
                    <item.icon
                      size={22}
                      style={{ color: item.glow }}
                      className="group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-1 text-foreground group-hover:gradient-text transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};