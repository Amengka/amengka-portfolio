import { motion } from 'framer-motion';
import { Trophy, Target, Users, TrendingUp, Clock, Gamepad2 } from 'lucide-react';

const achievements = [
  {
    title: 'Mythic+ Seasonal Title',
    game: 'World of Warcraft',
    stat: 'Top 0.1%',
    region: 'US & Oceania',
    description: 'Achieved top 0.1% Mythic+ rating in the region, earning the seasonal title through consistent high-level dungeon performance.',
    skills: [
      { icon: <Target className="w-4 h-4" />, label: 'Goal Execution', description: 'Season-long strategic planning' },
      { icon: <TrendingUp className="w-4 h-4" />, label: 'Optimization', description: 'Data-driven performance tuning' },
      { icon: <Users className="w-4 h-4" />, label: 'Team Synergy', description: 'Coordinated 5-player execution' },
    ],
  },
  {
    title: 'Cutting Edge Raider',
    game: 'World of Warcraft',
    stat: '2 Tiers',
    region: 'Limited Schedule',
    description: 'Cleared mythic raid content at the highest difficulty while maintaining an efficient raid schedule, demonstrating time management and rapid skill acquisition.',
    skills: [
      { icon: <Clock className="w-4 h-4" />, label: 'Efficiency', description: 'Achieved with minimal raid hours' },
      { icon: <Users className="w-4 h-4" />, label: 'Collaboration', description: '20-person coordinated encounters' },
      { icon: <TrendingUp className="w-4 h-4" />, label: 'Adaptability', description: 'Quick strategy iteration' },
    ],
  },
];

export default function BeyondCode() {
  return (
    <section id="beyond-code" className="py-24 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <Gamepad2 className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">Beyond Code</h2>
          </div>
          <p className="text-muted max-w-2xl">
            Competitive gaming has taught me valuable skills that translate directly to software engineering —
            goal execution, system optimization, and high-pressure team collaboration.
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 hover:scale-[1.02] transition-transform"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{achievement.title}</h3>
                    <p className="text-sm text-muted flex items-center gap-1">
                      <Gamepad2 className="w-3 h-3" />
                      {achievement.game}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-primary">{achievement.stat}</div>
                  <div className="text-xs text-muted">{achievement.region}</div>
                </div>
              </div>

              <p className="text-sm text-muted mb-4">{achievement.description}</p>

              <div className="space-y-2">
                {achievement.skills.map((skill) => (
                  <div
                    key={skill.label}
                    className="flex items-center gap-3 text-sm"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      {skill.icon}
                    </div>
                    <div>
                      <span className="font-medium">{skill.label}</span>
                      <span className="text-muted"> — {skill.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
