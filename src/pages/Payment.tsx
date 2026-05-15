import { motion } from 'motion/react';
import { CreditCard, Copy, CheckCircle2, MessageSquare, ShieldCheck, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';

export default function Payment() {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  const cardNumber = "9860350140126995";
  const maskedCardNumber = "9860 3501 **** ****";

  const handleCopy = () => {
    navigator.clipboard.writeText(cardNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const steps = [
    {
      icon: <CreditCard className="text-gold" size={24} />,
      text: t('payment.instruction_step1')
    },
    {
      icon: <ShieldCheck className="text-gold" size={24} />,
      text: t('payment.instruction_step2')
    },
    {
      icon: <MessageSquare className="text-gold" size={24} />,
      text: t('payment.instruction_step3')
    }
  ];

  return (
    <div className="pt-40 pb-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold font-bold uppercase tracking-[0.3em] text-sm mb-6 block"
          >
            {t('payment.hero_tag')}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold mb-8 tracking-tight"
          >
            <Trans i18nKey="payment.hero_title" components={[<span key="gold" className="text-gold">Gateway</span>]}>
              Infrastructure & <span className="text-gold">Gateway</span> Setup
            </Trans>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-secondary max-w-2xl mx-auto"
          >
            {t('payment.hero_desc')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Card Display */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="glass p-10 rounded-[40px] border-gold/20 bg-gradient-to-br from-gold/10 to-transparent relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-gold/10 transition-all duration-1000"></div>
              
              <div className="flex justify-between items-start mb-16">
                <div>
                  <p className="text-gold font-bold uppercase tracking-widest text-xs mb-2">{t('payment.card_title')}</p>
                  <h3 className="text-2xl font-display font-bold italic tracking-wider">HUMO</h3>
                </div>
                <div className="w-12 h-8 bg-white/10 rounded-md backdrop-blur-sm border border-white/10"></div>
              </div>

              <div className="mb-12">
                <div className="flex items-center justify-between group/number cursor-pointer" onClick={handleCopy}>
                  <div>
                    <p className="text-white/40 uppercase tracking-widest text-[10px] mb-2">{t('payment.card_number')}</p>
                    <p className="text-2xl md:text-3xl font-mono tracking-[0.2em] font-medium text-white group-hover/number:text-gold transition-colors">
                      {maskedCardNumber}
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 group-hover/number:bg-gold/20 transition-all">
                    {copied ? <CheckCircle2 className="text-green-400" size={20} /> : <Copy className="text-white/60" size={20} />}
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-end">
                <div>
                  <p className="text-white/40 uppercase tracking-widest text-[10px] mb-1">{t('payment.card_holder')}</p>
                  <p className="text-lg font-bold tracking-tight uppercase">MUKHARRAM RASULEVA</p>
                </div>
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gold/20 blur-sm"></div>
                  <div className="w-8 h-8 rounded-full bg-white/10"></div>
                </div>
              </div>
            </div>

            {copied && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-green-500/20 text-green-400 px-6 py-2 rounded-full text-sm font-bold backdrop-blur-md border border-green-500/30"
              >
                {t('payment.copy_success')}
              </motion.div>
            )}
          </motion.div>

          {/* Instructions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold italic mb-6">{t('payment.instruction_title')}</h3>
            <div className="space-y-6">
              {steps.map((step, idx) => (
                <div key={idx} className="flex items-start space-x-4 p-6 rounded-3xl glass hover:border-gold/30 transition-all group">
                  <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center shrink-0 group-hover:bg-gold/10 transition-colors">
                    {step.icon}
                  </div>
                  <div>
                    <p className="text-text-secondary leading-relaxed font-medium group-hover:text-white transition-colors">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a 
              href="https://t.me/+998774555882"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-gold text-black px-10 py-5 rounded-2xl font-bold hover:bg-gold/90 transition-all w-full justify-center group"
            >
              <span>Contact Telegram for Receipt</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
