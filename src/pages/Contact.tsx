import { motion } from 'motion/react';
import { Send, MessageCircle, Mail, CheckCircle2, Phone } from 'lucide-react';
import React, { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'AI-Powered Website',
    vision: ''
  });
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');

    // Construct the Telegram message
    const message = `🚀 *New Collaboration Request*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Project Type:* ${formData.projectType}%0A` +
      `*Vision:* ${formData.vision}`;

    // Use direct Telegram chat link for a smoother experience
    const telegramUrl = `https://t.me/+998774555882?text=${message}`;
    
    setTimeout(() => {
      window.open(telegramUrl, '_blank');
      setFormState('success');
    }, 1000);
  };

  if (formState === 'success') {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 px-6">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           className="glass p-16 rounded-[60px] text-center max-w-xl"
        >
          <div className="w-24 h-24 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-10 text-gold">
            <CheckCircle2 size={48} />
          </div>
          <h1 className="text-4xl font-display font-bold mb-6">{t('contact.success.title')}</h1>
          <p className="text-xl text-text-secondary mb-12">
            {t('contact.success.desc')}
          </p>
          <button 
            onClick={() => setFormState('idle')}
            className="text-gold font-bold uppercase tracking-widest text-sm border-b-2 border-gold pb-1"
          >
            {t('contact.success.another')}
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-40 pb-32">
       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
             <span className="text-gold font-bold uppercase tracking-[0.3em] text-sm mb-6 block">{t('contact.hero_tag')}</span>
             <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-8 font-sans">
                <Trans i18nKey="contact.hero_title" components={[<span key="powerful" className="text-gradient">Powerful</span>]}>
                  Let's Build Something Powerful Together.
                </Trans>
             </h1>
             <p className="text-xl text-text-secondary leading-relaxed mb-12">
               {t('contact.hero_desc')}
             </p>

             <div className="space-y-10">
                <a href="https://t.me/+998774555882" target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-6 p-8 glass rounded-3xl transition-all hover:bg-gold/10">
                   <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                      <MessageCircle size={32} />
                   </div>
                   <div>
                      <h4 className="text-2xl font-bold">{t('contact.telegram_title')}</h4>
                      <p className="text-text-secondary">{t('contact.telegram_desc')}</p>
                   </div>
                </a>
                <a href="https://wa.me/+998774555882" target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-6 p-8 glass rounded-3xl transition-all hover:bg-gold/10">
                   <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                      <Phone size={32} />
                   </div>
                   <div>
                      <h4 className="text-2xl font-bold">{t('contact.whatsapp_title')}</h4>
                      <p className="text-text-secondary">{t('contact.whatsapp_desc')}</p>
                   </div>
                </a>
                <div className="flex items-center space-x-6 p-8">
                   <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-text-secondary">
                      <Mail size={32} />
                   </div>
                   <div>
                      <h4 className="text-2xl font-bold text-white">mukharramdeveloper@gmail.com</h4>
                      <p className="text-text-secondary">{t('contact.email_desc')}</p>
                   </div>
                </div>
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass p-10 md:p-16 rounded-[60px] relative"
          >
             <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="space-y-4">
                   <label className="text-sm font-bold uppercase tracking-widest text-text-secondary ml-2">{t('contact.form.name')}</label>
                   <input 
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text" 
                    placeholder={t('contact.form.name_placeholder')} 
                    className="w-full bg-white/5 border border-white/10 p-6 rounded-2xl focus:outline-none focus:border-gold/50 transition-colors text-lg"
                   />
                </div>
                <div className="space-y-4">
                   <label className="text-sm font-bold uppercase tracking-widest text-text-secondary ml-2">{t('contact.form.email')}</label>
                   <input 
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email" 
                    placeholder={t('contact.form.email_placeholder')} 
                    className="w-full bg-white/5 border border-white/10 p-6 rounded-2xl focus:outline-none focus:border-gold/50 transition-colors text-lg"
                   />
                </div>
                <div className="space-y-4">
                   <label className="text-sm font-bold uppercase tracking-widest text-text-secondary ml-2">{t('contact.form.project_type')}</label>
                   <select 
                     name="projectType"
                     value={formData.projectType}
                     onChange={handleChange}
                     className="w-full bg-white/5 border border-white/10 p-6 rounded-2xl focus:outline-none focus:border-gold/50 transition-colors text-lg appearance-none cursor-pointer"
                   >
                      <option className="bg-body">AI-Powered Website</option>
                      <option className="bg-body">Standard Business Site</option>
                      <option className="bg-body">Telegram Automation</option>
                      <option className="bg-body">Mobile App (Flutter)</option>
                      <option className="bg-body">Full E-commerce System</option>
                   </select>
                </div>
                <div className="space-y-4">
                   <label className="text-sm font-bold uppercase tracking-widest text-text-secondary ml-2">{t('contact.form.vision')}</label>
                   <textarea 
                    required
                    name="vision"
                    value={formData.vision}
                    onChange={handleChange}
                    rows={4} 
                    placeholder={t('contact.form.vision_placeholder')} 
                    className="w-full bg-white/5 border border-white/10 p-6 rounded-2xl focus:outline-none focus:border-gold/50 transition-colors text-lg resize-none"
                   ></textarea>
                </div>
                <button 
                  disabled={formState === 'sending'}
                  className="w-full bg-gold text-black py-6 rounded-2xl font-bold text-xl flex items-center justify-center space-x-3 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50"
                >
                  {formState === 'sending' ? (
                    <motion.div 
                      animate={{ rotate: 360 }} 
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-6 h-6 border-4 border-black/30 border-t-black rounded-full"
                    />
                  ) : (
                    <>
                      <span>{t('contact.form.submit')}</span>
                      <Send size={20} />
                    </>
                  )}
                </button>
             </form>
          </motion.div>
       </div>
    </div>
  );
}
