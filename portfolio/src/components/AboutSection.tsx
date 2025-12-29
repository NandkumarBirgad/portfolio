import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Cloud, Rocket } from "lucide-react";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "Building end-to-end web applications with modern technologies",
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Passionate about creating scalable and efficient solutions",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hi there! I'm <span className="text-primary font-semibold">Nandkumar</span>, 
              a motivated Full Stack Developer and Computer Science
              engineering student with a strong interest in building modern, scalable, and
              user-friendly web applications.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I work across the full stack using technologies such as <span className="text-primary font-semibold">React,Node.js, Express,
              MongoDB, and MySQL</span> . I enjoy developing clean user interfaces, designing secure
              backend APIs, and understanding how different parts of an application work
              together efficiently.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently, I am expanding my knowledge in cloud computing and learning AWS to
              build more scalable and reliable applications. I strongly believe in writing
              clean, maintainable code and continuously improving my skills by learning new
              technologies and best development practices.
            </p>
          </motion.div>

          {/* Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="glass-card p-6 hover-glow group cursor-default"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
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