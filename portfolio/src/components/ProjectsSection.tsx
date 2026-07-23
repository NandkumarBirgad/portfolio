import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Zap, Users, FileText, Folder, Shield, Video } from "lucide-react";

const projects = [
  {
    title: "Smart Resume – AI-Powered Resume Builder",
    description:
      "AI-powered resume enhancement platform with smart suggestions, scoring, and a responsive interface. Built with Next.js and deployed on Vercel.",
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript", "MongoDB"],
    icon: FileText,
    github: "https://github.com/NandkumarBirgad/smart-resume",
    demo: "https://smart-resume-eh3u.vercel.app",
    gradient: "from-purple-500/20 to-violet-600/10",
    accentColor: "hsl(262 83% 68%)",
    label: "AI / SaaS",
  },
  {
    title: "Media Sync App",
    description:
      "A real-time media synchronization platform where users can watch videos and listen to audio together. One host controls playback while others stay perfectly in sync.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Cloudinary", "Docker"],
    icon: Video,
    github: "https://github.com/NandkumarBirgad/Media-Sync-App.git",
    demo: "https://media-sync-app-nsau.vercel.app",
    gradient: "from-cyan-500/20 to-teal-600/10",
    accentColor: "hsl(186 85% 55%)",
    label: "Real-Time",
  },
  {
    title: "Raisina Study Centre ERP",
    description:
      "A comprehensive ERP system for managing study centre operations including student records, attendance, fee management and role-based access control.",
    tech: ["React", "Node.js", "MongoDB", "JWT", "Tailwind", "REST API"],
    icon: Folder,
    github: "https://github.com/NandkumarBirgad/Raisina_Study_Centre_ERP.git",
    demo: "https://raisina-study-centre-erp.vercel.app",
    gradient: "from-pink-500/20 to-rose-600/10",
    accentColor: "hsl(330 85% 65%)",
    label: "Full Stack",
  },
  {
    title: "Notes Sharing Platform",
    description:
      "A collaborative platform for sharing and organizing digital notes with real-time updates, user authentication, and intuitive UI.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "Tailwind"],
    icon: Zap,
    github: "https://github.com/NandkumarBirgad/Notes-sharing.git",
    demo: "https://notes-sharing-two.vercel.app/",
    gradient: "from-yellow-500/20 to-orange-600/10",
    accentColor: "hsl(45 95% 60%)",
    label: "Collaboration",
  },
  {
    title: "DeepFake Detection System",
    description:
      "A deep learning-based system for detecting deepfake videos, images, and AI-generated content, providing accurate results with a clean user-friendly interface.",
    tech: ["Python", "Deep Learning", "Flask", "React", "TensorFlow"],
    icon: Shield,
    github: "https://github.com/NandkumarBirgad/deepguard-ai.git",
    demo: "https://deepguard-ai-3.onrender.com",
    gradient: "from-red-500/20 to-rose-600/10",
    accentColor: "hsl(0 85% 65%)",
    label: "AI / ML",
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-36 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <motion.div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(186 85% 55% / 0.07), transparent 70%)" }}
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
            — What I've Built —
          </p>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full mt-4" style={{ background: "linear-gradient(90deg, hsl(262 83% 68%), hsl(186 85% 55%))" }} />
          <p className="mt-5 text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills across the full stack
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="group relative"
            >
              {/* Card */}
              <div
                className="h-full flex flex-col rounded-2xl border border-border/50 overflow-hidden transition-all duration-400 relative"
                style={{
                  background: "rgba(12, 10, 24, 0.7)",
                  backdropFilter: "blur(20px)",
                }}
              >
                {/* Gradient Header */}
                <div
                  className={`h-28 bg-gradient-to-br ${project.gradient} relative flex items-center justify-center overflow-hidden`}
                >
                  {/* Grid pattern */}
                  <div className="absolute inset-0 bg-grid opacity-30" />
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center relative z-10 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `${project.accentColor}20`,
                      border: `1px solid ${project.accentColor}40`,
                      boxShadow: `0 8px 32px ${project.accentColor}20`,
                    }}
                  >
                    <project.icon size={26} style={{ color: project.accentColor }} />
                  </div>
                  {/* Label badge */}
                  <span
                    className="absolute top-3 right-3 text-xs px-2.5 py-1 rounded-full font-semibold"
                    style={{
                      background: `${project.accentColor}20`,
                      border: `1px solid ${project.accentColor}40`,
                      color: project.accentColor,
                    }}
                  >
                    {project.label}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <h3
                    className="text-lg font-bold font-heading mb-2 transition-colors duration-200 line-clamp-2"
                    style={{ color: "hsl(220 20% 96%)" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-0.5 rounded-md font-medium"
                        style={{
                          background: `${project.accentColor}12`,
                          border: `1px solid ${project.accentColor}25`,
                          color: `${project.accentColor}`,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-sm font-semibold border border-border/60 text-muted-foreground hover:text-foreground hover:border-border transition-all duration-200"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Github size={15} />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-sm font-semibold text-white transition-all duration-200"
                      style={{
                        background: `linear-gradient(135deg, ${project.accentColor}, ${project.accentColor}cc)`,
                        boxShadow: `0 4px 16px ${project.accentColor}30`,
                      }}
                      whileHover={{ scale: 1.03, boxShadow: `0 6px 24px ${project.accentColor}50` }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <ExternalLink size={15} />
                      Live Demo
                    </motion.a>
                  </div>
                </div>

                {/* Hover border glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
                  style={{ boxShadow: `inset 0 0 0 1px ${project.accentColor}30` }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-14"
        >
          <p className="text-muted-foreground mb-4">Want to see more of my work?</p>
          <motion.a
            href="https://github.com/NandkumarBirgad"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3 rounded-xl font-semibold border border-border/60 text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <Github size={18} />
            View All on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
