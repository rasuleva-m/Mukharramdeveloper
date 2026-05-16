import { motion } from 'motion/react';
import { ArrowRight, Bot, Globe, Smartphone, ShoppingCart, MessageSquare, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import { assetUrl } from '../utils/assetUrl';

export default function Home() {
  const { t } = useTranslation();
  const heroImageUrl = assetUrl('Portfoliomainimage.png');

  const services = [
    {
      title: t('services.ai.title', 'AI Websites'),
      desc: t('services.ai.desc', 'Smart, automated web experiences driven by Gemini & GPT models.'),
      icon: <Bot className="text-gold" />,
      link: '/services'
    },
    {
      title: t('services.standard.title', 'Standard Websites'),
      desc: t('services.standard.desc', 'Premium, high-performance business sites with bespoke design.'),
      icon: <Globe className="text-gold" />,
      link: '/services'
    },
    {
      title: t('services.bots.title', 'Telegram Bots'),
      desc: t('services.bots.desc', 'Custom automation for customer support, sales, and workflows.'),
      icon: <MessageSquare className="text-gold" />,
      link: '/services'
    },
    {
      title: t('services.mobile.title', 'Mobile Apps'),
      desc: t('services.mobile.desc', 'Cross-platform Flutter apps with focus on native-feel UX.'),
      icon: <Smartphone className="text-gold" />,
      link: '/services'
    }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImageUrl} 
            alt="Mukharram Rasuleva - Founder & CEO" 
            className="w-full h-full object-cover object-[center_20%] md:object-[center_top] opacity-60 md:opacity-80 mix-blend-normal"
            onError={(e) => {
              (e.target as HTMLImageElement).src = heroImageUrl;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-body via-body/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-body"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20 pb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-semibold tracking-widest text-gold uppercase mb-8">
              {t('home.hero_tag')}
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] tracking-tight mb-8">
              <Trans 
                i18nKey="home.hero_title"
                components={[
                  <span key="smart" className="text-gradient">Smart</span>,
                  <span key="grow" className="text-gold">Grow</span>,
                  <br key="break" />
                ]}
              >
                I Build Smart Digital <br /> Products That Grow <br /> Your Business
              </Trans>
            </h1>
            <p className="text-xl text-text-secondary mb-12 max-w-xl leading-relaxed">
              {t('home.hero_desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                to="/contact"
                className="bg-gold text-black px-10 py-5 rounded-full text-lg font-bold flex items-center justify-center space-x-2 transition-transform active:scale-95 group"
              >
                <span>{t('nav.get_project')}</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <span className="text-gold font-semibold uppercase tracking-[0.2em] text-sm mb-4 block">{t('home.expertise_tag')}</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold">{t('home.expertise_title')}</h2>
            </div>
            <p className="text-text-secondary max-w-md text-lg leading-relaxed">
              {t('home.expertise_desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group glass p-10 rounded-3xl transition-all hover:border-gold/30 hover:bg-white/[0.05]"
              >
                <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-text-secondary mb-8 leading-relaxed">{service.desc}</p>
                <Link to={service.link} className="flex items-center space-x-2 text-gold font-semibold group-hover:underline">
                  <span>{t('home.cta_view_work')}</span>
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Performance */}
      <section className="py-32 px-6 border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 blur-[120px] rounded-full -mr-1/4"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-10 leading-tight">
              <Trans 
                i18nKey="home.ai_title"
                components={[
                  <span key="expertise" className="text-gold">AI Expertise</span>,
                  <br key="break" />
                ]}
              >
                Intelligence, Trust, <br /> and Modern <span className="text-gold">AI Expertise</span>
              </Trans>
            </h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 glass rounded-xl"><ShieldCheck className="text-gold" /></div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{t('home.ai_desc1_title', 'Confidence & Results')}</h4>
                  <p className="text-text-secondary">{t('home.ai_desc1')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 glass rounded-xl"><Zap className="text-gold" /></div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{t('home.ai_desc2_title', 'High-End Performance')}</h4>
                  <p className="text-text-secondary">{t('home.ai_desc2')}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full max-w-md">
            <div className="glass p-12 rounded-[40px] relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50"></div>
               <div className="text-6xl font-bold mb-4">100%</div>
               <div className="text-text-secondary text-xl font-medium tracking-wide uppercase">{t('home.client_satisfaction', 'Client Satisfaction')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto glass p-20 rounded-[60px] text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-8 leading-[1.1] max-w-4xl mx-auto">
            <Trans
              i18nKey="home.cta_ready"
              components={[
                <span key="scaling" className="text-gold">isn't scaling</span>,
                <span key="failing" className="text-gradient">systems are failing</span>
              ]}
            >
              If Your Business <span className="text-gold">Isn’t Scaling</span>, Your <span className="text-gradient">Systems Are Failing</span>
            </Trans>
          </h2>
          <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed">
            {t('home.cta_ready_desc')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/contact"
              className="bg-gold text-black px-12 py-6 rounded-full text-xl font-bold hover:scale-105 active:scale-95 transition-all flex items-center justify-center space-x-3 shadow-xl shadow-gold/20"
            >
              <span>{t('nav.get_project')}</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
