import React from 'react';
import { motion } from 'motion/react';
import { Bot, Globe, MessageSquare, Smartphone, ShoppingCart, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      id: 'ai-websites',
      title: t('services.ai.title', 'AI-Powered Websites'),
      category: t('services.ai.category', 'Intelligence'),
      desc: t('services.ai.desc', '“A website that works for you 24/7 using AI automation”'),
      features: [
        t('services.ai.f1', 'Custom AI Chatbots'),
        t('services.ai.f2', 'Smart Recommendations'),
        t('services.ai.f3', 'Automated Content Creation'),
        t('services.ai.f4', 'Gemini/GPT Integration')
      ],
      pricing: t('services.ai.pricing', '$1,500 – $3,500'),
      icon: <Bot className="w-10 h-10" />,
      styles: 'bg-gold/5 border-gold/20',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600'
    },
    {
      id: 'standard-websites',
      title: t('services.standard.title', 'Standard Websites'),
      category: t('services.standard.category', 'Performance'),
      desc: t('services.standard.desc', 'Clean, fast, and high-converting business sites tailored to your brand.'),
      features: [
        t('services.standard.f1', 'Ultra-fast Loading'),
        t('services.standard.f2', 'SEO Optimized'),
        t('services.standard.f3', 'Tailwind CSS Styling'),
        t('services.standard.f4', 'Responsive Design')
      ],
      pricing: t('services.standard.pricing', '$500 – $1,200'),
      icon: <Globe className="w-10 h-10" />,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600'
    },
    {
      id: 'telegram-bots',
      title: t('services.bots.title', 'Telegram Bots & Automation'),
      category: t('services.bots.category', 'Efficiency'),
      desc: t('services.bots.desc', 'Automate customer support, sales, and internal workflows seamlessly.'),
      features: [
        t('services.bots.f1', 'Custom Order Systems'),
        t('services.bots.f2', 'CRM Integration'),
        t('services.bots.f3', '24/7 Support Automation'),
        t('services.bots.f4', 'Real-time Notifications')
      ],
      pricing: t('services.bots.pricing', '$300 – $1,000'),
      icon: <MessageSquare className="w-10 h-10" />,
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1600'
    },
    {
      id: 'mobile-apps',
      title: t('services.mobile.title', 'Mobile Apps (Flutter)'),
      category: t('services.mobile.category', 'Experience'),
      desc: t('services.mobile.desc', 'Cross-platform mobile solutions with pixel-perfect modern UI.'),
      features: [
        t('services.mobile.f1', 'iOS & Android Apps'),
        t('services.mobile.f2', 'Cloud Sync'),
        t('services.mobile.f3', 'Push Notifications'),
        t('services.mobile.f4', 'API Integrations')
      ],
      pricing: t('services.mobile.pricing', '$1,500+'),
      icon: <Smartphone className="w-10 h-10" />,
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1600'
    },
    {
      id: 'ecommerce',
      title: t('services.ecommerce.title', 'E-commerce Systems'),
      category: t('services.ecommerce.category', 'Commerce'),
      desc: t('services.ecommerce.desc', 'Full online store systems with robust payment and admin logic.'),
      features: [
        t('services.ecommerce.f1', 'Stripe/Crypto Payments'),
        t('services.ecommerce.f2', 'Inventory Management'),
        t('services.ecommerce.f3', 'Admin Dashboard'),
        t('services.ecommerce.f4', 'Customer Analytics')
      ],
      pricing: t('services.ecommerce.pricing', '$1,500 – $4,000'),
      icon: <ShoppingCart className="w-10 h-10" />,
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1600'
    }
  ];

  return (
    <div className="relative overflow-hidden pt-40 pb-32">
      {/* Page Header Background */}
      <div className="absolute top-0 left-0 w-full h-[600px] z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070" 
          alt="Business Strategy" 
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-body via-body/60 to-body"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="mb-32">
          <span className="text-gold font-bold uppercase tracking-[0.3em] text-sm mb-6 block">{t('services.hero_tag')}</span>
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-8">
            <Trans i18nKey="services.hero_title" components={[<span key="power" className="text-gradient">Power</span>, <br key="break" />]}>
              Digital Power For <br /> Global Growth
            </Trans>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl leading-relaxed">
            {t('services.hero_desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`glass p-8 rounded-[40px] flex flex-col relative overflow-hidden group hover:border-gold/40 transition-all duration-500 ${service.styles || ''}`}
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                    {React.cloneElement(service.icon as React.ReactElement, { size: 24 })}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold px-3 py-1 glass rounded-full">{service.category}</span>
                </div>

                <h2 className="text-xl font-display font-bold mb-3 tracking-tight">{service.title}</h2>
                <p className="text-sm text-text-secondary mb-6 leading-relaxed line-clamp-2 h-10">{service.desc}</p>
                
                <div className="h-44 w-full mb-6 rounded-3xl overflow-hidden glass relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-body/60 to-transparent"></div>
                </div>

                <div className="space-y-3 mb-8 flex-1">
                   {service.features.map(feature => (
                     <div key={feature} className="flex items-center space-x-2">
                       <CheckCircle2 size={14} className="text-gold flex-shrink-0" />
                       <span className="font-medium text-xs text-text-secondary group-hover:text-white transition-colors">{feature}</span>
                     </div>
                   ))}
                </div>

                <div className="mt-auto">
                  <div className="text-lg font-bold text-gold mb-6">{service.pricing}</div>
                  <div className="flex gap-3">
                    <Link
                      to="/contact"
                      className="flex-1 bg-gold text-black py-3 rounded-xl font-bold text-xs text-center hover:bg-gold/90 transition-all active:scale-95"
                    >
                      {t('services.order_now')}
                    </Link>
                    <a
                      href="https://t.me/+998774555882"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass px-4 py-3 rounded-xl text-xs font-bold hover:bg-white/10 transition-all active:scale-95 flex items-center justify-center"
                    >
                      {t('services.free_quote')}
                    </a>
                  </div>
                </div>
              </div>

              {/* Background Accent */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-gold/5 blur-[80px] rounded-full group-hover:bg-gold/15 transition-all"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Philosophy Callout */}
      <section className="mt-40 px-6 max-w-5xl mx-auto text-center">
         <div className="h-20 w-[1px] bg-gold mx-auto mb-10"></div>
         <h3 className="text-3xl md:text-5xl font-display font-bold mb-10 italic">{t('services.philosophy_quote')}</h3>
         <p className="text-xl text-text-secondary mb-12">
           {t('services.philosophy_desc')}
         </p>
      </section>
    </div>
  );
}
