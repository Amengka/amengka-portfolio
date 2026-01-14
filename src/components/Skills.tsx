import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

const skillCategories = [
  {
    name: 'Languages',
    icon: '💻',
    skills: ['Python', 'Java', 'C++', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    name: 'Frontend',
    icon: '🎨',
    skills: ['React', 'Next.js', 'Vue.js', 'TailwindCSS', 'HTML5', 'CSS3'],
  },
  {
    name: 'Backend',
    icon: '⚙️',
    skills: ['Django', 'Flask', 'Node.js', 'REST APIs', 'Supabase'],
  },
  {
    name: 'Database',
    icon: '🗄️',
    skills: ['PostgreSQL', 'Redis', 'MySQL'],
  },
  {
    name: 'Cloud & DevOps',
    icon: '☁️',
    skills: ['Google Cloud Platform', 'Docker', 'Git'],
  },
  {
    name: 'AI & Tools',
    icon: '🤖',
    skills: ['Claude AI', 'Codex'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <Code2 className="w-6 h-6 text-primary" />
          <h2 className="text-2xl md:text-3xl font-bold">Skills</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.name}
              variants={cardVariants}
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="font-semibold">{category.name}</h3>
              </div>

              <motion.div
                variants={containerVariants}
                className="flex flex-wrap gap-2"
              >
                {category.skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    variants={tagVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3 py-1.5 text-sm rounded-full bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:shadow-sm transition-colors cursor-default"
                    style={{ transitionDelay: `${index * 0.05}s` }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
