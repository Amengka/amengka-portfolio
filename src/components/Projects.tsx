import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, MapPin, FolderGit2 } from 'lucide-react';
import { useLanguage } from '../i18n';

export default function Projects() {
  const { t } = useLanguage();

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
          <h2 className="text-2xl md:text-3xl font-bold">{t.projects.heading}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {t.projects.items.map((project, index) => (
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

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

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
                      {t.projects.code}
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
                      {t.projects.liveDemo}
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
