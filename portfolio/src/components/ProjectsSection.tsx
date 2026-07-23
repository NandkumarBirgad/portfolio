import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, MessageCircle, Users, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Smart Resume – AI-Powered Resume Builder",
    description:
      "AI-powered resume enhancement platform with smart suggestions, scoring, and aresponsive interface. Deployed on Vercel.",
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript", "MongoDB"],
    icon: MessageCircle,
    github: "https://github.com/NandkumarBirgad/smart-resume",
    demo: "https://smart-resume-eh3u.vercel.app",
    featured: true,
  },
  {
    title: "Media Sync App",
    description:
      "A real-time media synchronization platform where users can watch videos and listen to audio together. One host controls playback while others stay perfectly in sync.",
    tech: ["React","Node.js", "Express","MongoDb", "Socket.io", "Cloudinary","Docker"],
    icon: Users,
    github: "https://github.com/NandkumarBirgad/Media-Sync-App.git",
    demo: "https://media-sync-app-nsau.vercel.app",
    featured: true,
  },
  {
    title: "Raisina-Study-Centre-ERP",
    description:
      "",
    tech: ["React", "Node.js", "MongoDB", "JWT", "Tailwind","REST API"],
    icon: Users,     
    github: "https://github.com/NandkumarBirgad/Raisina_Study_Centre_ERP.git",
    demo: "https://raisina-study-centre-erp.vercel.app",
    featured: true,
  },
  {
    title: "Notes-Sharing Platform",
    description:
      "A platform for sharing and collaborating on digital notes with real-time updates.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "Tailwind"],
    icon: ShoppingCart,
    github: "https://github.com/NandkumarBirgad/Notes-sharing.git",
    demo: "https://notes-sharing-two.vercel.app/",
    featured: true,
  },
  {
    title: "DeepFake Detection System",
    description:" A deep learning-based system for detecting deepfake videos and images,and Ai-genreted video, images providing accurate results with a user-friendly interface.",
    tech:[],
    icon: Users,
    github:"https://github.com/NandkumarBirgad/deepguard-ai.git",
    demo:"https://deepguard-ai-3.onrender.com",
    featured: true,
  }

];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Some of the projects I've worked on to showcase my skills
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="glass-card h-full p-6 md:p-8 hover-glow flex flex-col">
                {/* Icon & Featured Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <project.icon size={28} />
                  </div>
                  {project.featured && (
                    <span className="text-xs px-3 py-1 rounded-full bg-accent/20 text-accent font-medium">
                      Featured
                    </span>
                  )}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded bg-secondary text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </Button>
                  <Button variant="hero" size="sm" asChild className="flex-1">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
