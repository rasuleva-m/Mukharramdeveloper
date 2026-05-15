import { motion } from 'motion/react';
import { Check, Info, Sparkles, Zap, Shield, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';

export default function Pricing() {
  const { t } = useTranslation();

  const tiers = [
    {
      name: t('pricing.tiers.start.name', 'Start'),
      price: t('pricing.tiers.start.price', '$300 – $700'),
      description: t('pricing.tiers.start.desc', 'Perfect for new ventures and personal brands.'),
      icon: <Zap className="w-8 h-8 text-white" />,
      features: (t('pricing.tiers.start.features', { returnObjects: true }) as string[]) || [],
      cta: t('pricing.tiers.start.cta', 'Launch My Website'),
      popular: false
    },
    {
      name: t('pricing.tiers.growth.name', 'Growth'),
      price: t('pricing.tiers.growth.price', '$1,200 – $2,500'),
      description: t('pricing.tiers.growth.desc', 'The popular choice for expanding businesses.'),
      icon: <Sparkles className="w-8 h-8 text-gold" />,
      features: (t('pricing.tiers.growth.features', { returnObjects: true }) as string[]) || [],
      cta: t('pricing.tiers.growth.cta', 'Grow My Business'),
      popular: true,
      tag: t('pricing.tiers.growth.tag', 'Popular Choice')
    },
    {
      name: t('pricing.tiers.scale.name', 'Scale'),
      price: t('pricing.tiers.scale.price', '$2,500 – $5,000+'),
      description: t('pricing.tiers.scale.desc', 'For brands ready to dominate their market.'),
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      features: (t('pricing.tiers.scale.features', { returnObjects: true }) as string[]) || [],
      cta: t('pricing.tiers.scale.cta', 'Scale My System'),
      popular: false
    },
    {
      name: t('pricing.tiers.enterprise.name', 'Enterprise'),
      price: t('pricing.tiers.enterprise.price', 'Custom'),
      description: t('pricing.tiers.enterprise.desc', 'Bespoke solutions for global operations.'),
      icon: <Shield className="w-8 h-8 text-white" />,
      features: (t('pricing.tiers.enterprise.features', { returnObjects: true }) as string[]) || [],
      cta: t('pricing.tiers.enterprise.cta', 'Contact for Global Solution'),
      popular: false
    }
  ];

  return (
    <div className="pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-gold font-bold uppercase tracking-[0.3em] text-sm mb-6 block">{t('pricing.hero_tag')}</span>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-10 leading-tight">
            <Trans i18nKey="pricing.hero_title" components={[<span key="transparent" className="text-gradient">Transparent</span>]}>
              Clear & <br /> Transparent Pricing
            </Trans>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto font-medium">
            {t('pricing.hero_desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32 items-stretch">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className={`relative glass p-8 rounded-[50px] flex flex-col transition-all duration-500 hover:-translate-y-2 ${tier.popular ? 'border-gold/40 bg-gold/5 shadow-[0_0_80px_rgba(245,158,11,0.15)] ring-1 ring-gold/20' : 'hover:border-white/20'}`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-black font-bold px-6 py-2 rounded-full uppercase tracking-widest text-[10px] whitespace-nowrap z-10">
                  {tier.tag || t('pricing.recommended')}
                </div>
              )}
              
              <div className="mb-8">
                 <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${tier.popular ? 'bg-gold/20' : 'glass'}`}>
                    {tier.icon}
                 </div>
                 <h3 className="text-2xl font-bold mb-2 tracking-tight">{tier.name}</h3>
                 <p className="text-sm text-text-secondary mb-8 leading-relaxed h-12 line-clamp-2">{tier.description}</p>
                 <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-bold tracking-tighter">{tier.price}</span>
                    <span className="text-xs text-text-secondary font-semibold uppercase">{t('pricing.usd')}</span>
                 </div>
              </div>

              <div className="flex-1 space-y-4 mb-10">
                 {tier.features.map((feature, fIdx) => (
                   <div key={fIdx} className="flex items-start space-x-3 group">
                     <Check size={16} className={`mt-0.5 shrink-0 ${tier.popular ? 'text-gold' : 'text-gold/60'}`} />
                     <span className="text-sm font-medium text-text-secondary group-hover:text-white transition-colors">{feature}</span>
                   </div>
                 ))}
              </div>

              <Link
                to={tier.name === t('pricing.tiers.enterprise.name', 'Enterprise') ? "/contact" : "/payment"}
                className={`w-full py-5 rounded-2xl font-bold text-center text-base transition-all ${tier.popular ? 'bg-gold text-black hover:bg-gold/90 scale-105 active:scale-100 shadow-lg shadow-gold/20' : 'glass hover:bg-white/10 active:scale-95'}`}
              >
                {tier.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* FAQ Preview */}
        <div className="max-w-4xl mx-auto glass p-16 rounded-[60px]">
           <div className="flex items-center space-x-3 mb-10">
              <Info className="text-gold" />
              <h3 className="text-2xl font-bold">{t('pricing.faq_title')}</h3>
           </div>
           <div className="space-y-10">
              <div>
                <h4 className="text-xl font-bold mb-4 italic">{t('pricing.faqs.q1')}</h4>
                <p className="text-text-secondary">{t('pricing.faqs.a1')}</p>
              </div>
              <div className="h-[1px] bg-white/5"></div>
              <div>
                <h4 className="text-xl font-bold mb-4 italic">{t('pricing.faqs.q2')}</h4>
                <p className="text-text-secondary">{t('pricing.faqs.a2')}</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
