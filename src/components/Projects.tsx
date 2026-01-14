import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, MapPin, FolderGit2 } from 'lucide-react';

const projects = [
  {
    title: 'F1-RAFTBot',
    period: 'Mar 2025 – Apr 2025',
    location: 'Sunnyvale, CA',
    description: 'A domain-specific chatbot for Formula 1 using the RAFT (Retrieval-Augmented Fine-Tuning) framework to enhance factual accuracy and mitigate hallucinations in large language models.',
    highlights: [
      'Developed domain-specific chatbot using RAFT framework',
      'Responsible for corpus collection and model training',
      'Enhanced factual accuracy in LLM responses',
    ],
    tech: ['Python', 'LLMs', 'RAFT', 'Fine-tuning', 'NLP'],
    github: null,
    live: null,
  },
  {
    title: 'Etsy Recommendation Service',
    period: 'Sep 2024 – Dec 2024',
    location: 'Sunnyvale, CA',
    description: 'A Python-based recommendation prototype that samples Etsy product suggestions from a cloud-stored probability distribution with optimized data access.',
    highlights: [
      'Developed recommendation prototype sampling from probability distributions',
      'Designed data management pipeline with cloud infrastructure',
      'Configured Redis and optimized database access latency',
    ],
    tech: ['Python', 'Redis', 'Cloud Infrastructure', 'Data Pipeline'],
    github: null,
    live: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <FolderGit2 className="w-6 h-6 text-primary" />
          <h2 className="text-2xl md:text-3xl font-bold">Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 hover:scale-[1.02] transition-transform"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-muted mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{project.period}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{project.location}</span>
                </div>
              </div>

              <p className="text-sm text-muted mb-4">{project.description}</p>

              <ul className="space-y-2">
                {project.highlights.map((item, i) => (
                  <li key={i} className="text-sm text-muted flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {(project.github || project.live) && (
                <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-muted hover:text-foreground transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-muted hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
