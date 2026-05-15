import { motion } from 'motion/react';
import { ExternalLink, Award, Shield, Cpu, Code, Download } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

const certificates = [
  {
    title: 'Innovation Hackathon',
    issuer: 'Digital Excellence Award',
    image: '/certificates/Hackathon.jpg',
    id: 'HACK-01',
    icon: <Code className="text-gold" size={20} />
  },
  {
    title: 'Professional Code Mastery',
    issuer: 'HC Engineering',
    image: '/certificates/HCcertificate.jpg',
    id: 'HC-77',
    icon: <Shield className="text-gold" size={20} />
  },
  {
    title: 'Summer School on Math & AI',
    issuer: 'Harbin Institute of Technology',
    image: '/certificates/ChinaCertificate.jpg',
    id: 'CH-01',
    icon: <Award className="text-gold" size={20} />
  },
  {
    title: 'International Tech Forum',
    issuer: 'School of Mathematics and AI',
    image: '/certificates/ChinaPersonal.jpg',
    id: 'IF-2024',
    icon: <Cpu className="text-gold" size={20} />
  },
  {
    title: 'Red Bull Partnership',
    issuer: 'Red Bull International',
    image: '/certificates/Red_BullPartnyorship.jpg',
    id: 'RB-P1',
    icon: <Award className="text-gold" size={20} />
  },
  {
    title: 'Red Bull Basement',
    issuer: 'Candidate Certification',
    image: '/certificates/Red_Bullcandidate.jpg',
    id: 'RB-C2',
    icon: <Shield className="text-gold" size={20} />
  },
  {
    title: 'Vibe Coding Excellence',
    issuer: 'Innovation Award',
    image: '/certificates/vibe_coding.jpg',
    id: 'VC-01',
    icon: <Code className="text-gold" size={20} />
  }
];

export default function Certificates() {
  const { t } = useTranslation();

  return (
    <div className="pt-40 pb-40 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-24">
        <span className="text-gold font-bold uppercase tracking-[0.3em] text-sm mb-6 block">{t('certificates.hero_tag')}</span>
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-10 leading-tight tracking-tight">
          <Trans i18nKey="certificates.hero_title" components={[<span key="gallery" className="text-gradient">Gallery</span>]}>
            Professional <br /> Showcase Gallery
          </Trans>
        </h1>
        <p className="text-xl text-text-secondary max-w-2xl mx-auto">
          {t('certificates.hero_desc')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {certificates.map((cert, idx) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className="group relative"
          >
            <div className="aspect-[3/2] rounded-[32px] overflow-hidden glass mb-8 relative">
               <img 
                 src={cert.image} 
                 alt={cert.title} 
                 className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
               />
               <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-md p-2 rounded-xl border border-white/10 group-hover:bg-gold transition-colors duration-500">
                  {cert.icon}
               </div>
            </div>
            
            <div className="px-2">
               <div className="flex justify-between items-start mb-2">
                 <h3 className="text-2xl font-bold">{cert.title}</h3>
                 <span className="text-xs font-mono text-text-secondary mt-1 tracking-widest">{cert.id}</span>
               </div>
               <p className="text-text-secondary font-medium">{cert.issuer}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-32 p-16 rounded-[40px] glass text-center relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-gold/20 transition-all duration-1000"></div>
        <h2 className="text-3xl font-display font-bold mb-6 italic">{t('certificates.looking_skill')}</h2>
        <p className="text-text-secondary mb-10 max-w-lg mx-auto">{t('certificates.skill_desc')}</p>
        <a 
          href="https://t.me/+998774555882?text=I would like to request your Portfolio PDF"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-3 bg-gold/10 hover:bg-gold text-gold hover:text-white px-10 py-5 rounded-2xl font-bold border border-gold/20 transition-all"
        >
          <Download size={20} />
          <span>{t('certificates.request_pdf')}</span>
        </a>
      </div>
    </div>
  );
}
