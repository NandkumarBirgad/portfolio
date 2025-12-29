import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    title: "Full Stack Development & Programming Certification",
    issuer: "Coding Seekho",
    date: "2025",
    credentialUrl: "https://drive.google.com/file/d/1A3JL69H6XcdPJmmi6xOGwBHaR034rInG/view?usp=drive_link",
    description: "Trained in core programming and full stack web development using MERN Stack with hands-on project experience.",
  },
  {
    title: "Software Developer Intern",
    issuer: "Humming Byte Technologies Pvt. Ltd.",
    date: "December 2024 – May 2025",
    credentialUrl: "https://drive.google.com/file/d/13zyY0FIvlM-IeELx3FSFvWBNj4Vy_lOC/view?usp=drive_link",
    description: "Worked as a Software Developer Intern, gaining practical experience in development tasks and professional software practices.",
  },
  {
    title: "Python Coder",
    issuer: "Kaggle",
    date: "November 2025",
    credentialUrl: "https://drive.google.com/file/d/1nsr2h0BSMxUjb1XpPkgj-rfDD8-M0M_I/view?usp=sharing",
    description: "Recognized as a Kaggle Community Member for active participation on the Kaggle platform, engaging with datasets, notebooks, and the data science community.",
  },
];

export const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-20 md:py-32 relative" ref={ref}>
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Professional certifications that validate my skills and knowledge
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="glass-card h-full p-6 hover-glow flex flex-col">
                {/* Icon */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Award size={28} />
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <Calendar size={14} />
                    <span>{cert.date}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-heading font-semibold mb-1 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-primary/80 text-sm font-medium mb-3">
                  {cert.issuer}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                  {cert.description}
                </p>

                {/* Credential Link */}
                <Button variant="outline" size="sm" asChild className="w-full">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink size={16} />
                    View Credential
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
