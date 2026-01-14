import { motion } from 'framer-motion';
import { MapPin, Mail, Github, Linkedin } from 'lucide-react';

export default function Intro() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Ziting Wang</h1>

          <p className="text-xl text-primary mb-6">Software Engineer</p>

          <div className="space-y-2 mb-8">
            <div className="flex items-center gap-3 text-muted">
              <MapPin className="w-4 h-4" />
              <span>Sunnyvale, California</span>
            </div>

            <a
              href="mailto:wang.zitin@northeastern.edu"
              className="flex items-center gap-3 text-muted hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>wang.zitin@northeastern.edu</span>
            </a>

            <a
              href="https://github.com/Amengka"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted hover:text-foreground transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/ziting-wang-2045b19a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted hover:text-foreground transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="border-l-4 border-primary bg-primary/5 rounded-r-lg px-6 py-4">
            <p className="text-muted">
              Developer with a focus on AI-powered applications, full-stack development, and building intelligent systems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
