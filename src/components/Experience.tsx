import { motion } from 'framer-motion';
import { Briefcase, Building2 } from 'lucide-react';

type ProjectGroup = {
  project: string;
  items: string[];
};

type Experience = {
  title: string;
  product: string;
  company: string;
  location: string;
  period: string;
  achievements: string[] | ProjectGroup[];
};

const experiences: Experience[] = [
  {
    title: 'Software Development Engineer Intern',
    product: 'Makeform.ai',
    company: 'Louerable Inc.',
    location: 'Sunnyvale, California',
    period: 'Oct 2025 - Present',
    achievements: [
      'Contributed to an AI-powered form builder for creating and managing online forms.',
      'Developed and shipped production features using Next.js/TypeScript and Supabase (PostgreSQL).',
      'Leveraged AI-assisted development tools (e.g., Claude) to accelerate prototyping, testing, and debugging during feature development.',
    ],
  },
  {
    title: 'Software Engineer Intern',
    product: 'ArmUI & Bin-picking',
    company: 'Megvii Technology Limited',
    location: 'Beijing, China',
    period: 'Jul 2021 - Sep 2022',
    achievements: [
      {
        project: 'ArmUI',
        items: [
          'Developed a full-stack Vue.js + Python application displaying real-time robot palletizer status and historical task data.',
          'Built data visualization features, palletizer calibration tools, and automated data/image acquisition workflows for model training.',
          'Delivered an early version showcased at CeMAT Asia 2021 as part of Megvii\'s Smart Warehouse Solution.',
        ],
      },
      {
        project: 'Bin-picking',
        items: [
          'Implemented a Python workstation enabling robotic arm bin-picking using eye-in-hand stereo camera with calibration and motion planning.',
          'Presented demo at MegTech Open Day 2022, attracting 300+ employees and media visitors.',
        ],
      },
    ],
  },
];

function isProjectGroup(item: string | ProjectGroup): item is ProjectGroup {
  return typeof item === 'object' && 'project' in item;
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <Briefcase className="w-6 h-6 text-primary" />
          <h2 className="text-2xl md:text-3xl font-bold">Work Experience</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-0 w-0.5 bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-4 h-4 rounded-full border-2 border-border bg-background" />

                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold">
                    {exp.title} - {exp.product} | <span className="text-primary">{exp.company}</span>
                  </h3>
                  <p className="text-muted">{exp.location}</p>
                  <p className="text-muted/70 text-sm">{exp.period}</p>
                </div>

                {/* Achievements box */}
                <div className="glass rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Building2 className="w-4 h-4 text-primary" />
                    <span className="font-medium">Key Achievements</span>
                  </div>

                  {exp.achievements.length > 0 && isProjectGroup(exp.achievements[0]) ? (
                    // Grouped achievements by project
                    <div className="space-y-4">
                      {(exp.achievements as ProjectGroup[]).map((group) => (
                        <div key={group.project}>
                          <h4 className="text-sm font-medium text-primary mb-2">{group.project}</h4>
                          <ul className="space-y-2">
                            {group.items.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-sm text-muted">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    // Simple list of achievements
                    <ul className="space-y-2">
                      {(exp.achievements as string[]).map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
