import { motion } from 'motion/react';
import { Target, Code2, GraduationCap } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  const skills = [
    { name: t('about.skills.ai', 'Python & AI'), level: 98 },
    { name: t('about.skills.js', 'JavaScript / React'), level: 95 },
    { name: t('about.skills.mobile', 'Mobile (Flutter)'), level: 90 },
    { name: t('about.skills.db', 'Database PostgreSQL'), level: 85 },
    { name: t('about.skills.api', 'API & Microservices'), level: 92 },
  ];

  const timelineItems = [
    { 
      title: t('about.timeline.student.title'), 
      period: t('about.timeline.student.period'), 
      desc: t('about.timeline.student.desc'),
      icon: <GraduationCap className="text-gold" />
    },
    { 
      title: t('about.timeline.dev.title'), 
      period: t('about.timeline.dev.period'), 
      desc: t('about.timeline.dev.desc'),
      icon: <Code2 className="text-gold" />
    },
    { 
      title: t('about.timeline.builder.title'), 
      period: t('about.timeline.builder.period'), 
      desc: t('about.timeline.builder.desc'),
      icon: <Target className="text-gold" />
    }
  ];

  return (
    <div className="pt-32 pb-32">
      {/* Intro */}
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold font-semibold uppercase tracking-[0.2em] text-sm mb-6 block">{t('about.story_tag')}</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-8">
              <Trans 
                i18nKey="about.hero_title"
                components={[
                  <span key="complex" className="text-gradient">Complex Code</span>
                ]}
              >
                A Premium Mindset For Complex Code
              </Trans>
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              {t('about.hero_desc')}
            </p>
            <div className="glass p-8 rounded-3xl border-l-[6px] border-l-gold">
               <p className="italic text-lg text-white font-medium">
                 {t('about.quote')}
               </p>
            </div>
          </motion.div>
          <div className="relative">
             <div className="aspect-[4/5] rounded-[40px] overflow-hidden glass relative z-10">
                <img 
                  src="/Portfoliomainimage.png" 
                  alt="Mukharram Rasuleva" 
                  className="w-full h-full object-cover transition-all duration-700"
                />
             </div>
             <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gold/20 blur-[80px] rounded-full z-0"></div>
          </div>
        </div>
      </div>

      {/* Timeline/Experience */}
      <section className="bg-dark-surface py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">{t('about.execution_title')}</h2>
            <p className="text-text-secondary max-w-xl mx-auto">{t('about.execution_desc')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {timelineItems.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="glass p-12 rounded-[40px] hover:bg-white/[0.03] transition-colors group"
              >
                <div className="mb-6">{item.icon}</div>
                <span className="text-sm text-gold font-bold uppercase tracking-widest mb-2 block">{item.period}</span>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-text-secondary leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
           <div className="flex flex-col items-center">
              <div className="max-w-3xl w-full">
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 leading-tight text-center">
                  <Trans i18nKey="about.tech_stack_title" components={[<br key="break" />]}>
                    Advanced Tech Stack & Strategy
                  </Trans>
                </h2>
                <p className="text-xl text-text-secondary mb-12 text-center">{t('about.tech_stack_desc')}</p>
                <div className="space-y-8">
                   {skills.map(skill => (
                     <div key={skill.name}>
                       <div className="flex justify-between mb-4">
                         <span className="font-bold">{skill.name}</span>
                         <span className="text-gold font-bold">{skill.level}%</span>
                       </div>
                       <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                         <motion.div 
                           initial={{ width: 0 }} 
                           whileInView={{ width: `${skill.level}%` }} 
                           transition={{ duration: 1, ease: 'circOut' }}
                           className="h-full bg-gold"
                         />
                       </div>
                     </div>
                   ))}
                </div>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
}
