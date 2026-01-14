import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "Northeastern University",
    location: "San Jose, California",
    period: "Sep 2023 – May 2025",
    gpa: "3.83/4.0",
    highlights: [
      "Focus on AI/ML and software engineering",
    ],
  },
  {
    degree: "B.S. Cognitive Science + B.S. Computer Science",
    school: "Rensselaer Polytechnic Institute",
    location: "Troy, New York",
    period: "Sep 2016 – May 2020",
    gpa: null,
    highlights: [],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <GraduationCap className="w-6 h-6 text-primary" />
          <h2 className="text-2xl md:text-3xl font-bold">Education</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {education.map((edu) => (
            <motion.div
              key={edu.degree}
              variants={cardVariants}
              className="glass rounded-2xl p-6 hover:scale-[1.01] transition-transform"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <p className="text-primary font-medium">{edu.school}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted mt-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    {edu.highlights.length > 0 && (
                      <ul className="mt-3 space-y-1">
                        {edu.highlights.map((item, i) => (
                          <li key={i} className="text-sm text-muted flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {edu.gpa && (
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium shrink-0 ml-16 md:ml-0">
                    <Award className="w-4 h-4" />
                    <span>GPA: {edu.gpa}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
