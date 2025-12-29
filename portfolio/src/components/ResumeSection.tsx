import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileDown, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ResumeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32 relative bg-secondary/20" ref={ref}>
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            My <span className="gradient-text">Resume</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-8 md:p-12 text-center"
          >
            <div className="flex justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Briefcase className="text-primary" size={20} />
                <span>Experience</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <GraduationCap className="text-primary" size={20} />
                <span>Education</span>
              </div>
            </div>

            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Download my resume to learn more about my experience, education, 
              certifications, and the projects I've worked on.
            </p>

            <Button variant="hero" size="xl" asChild>
              <a href="/resume.pdf" download className="flex items-center gap-3">
                <FileDown size={22} />
                Download Resume
              </a>
            </Button>

            <p className="text-sm text-muted-foreground mt-6">
              PDF format • Updated December 2024
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
