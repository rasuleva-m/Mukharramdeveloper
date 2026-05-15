import { Link } from 'react-router-dom';
import { Mail, Instagram, Linkedin, Phone, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-dark-surface border-t border-white/5 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="text-2xl font-display font-bold tracking-tighter text-white mb-6 block">
            MUKHARRAM<span className="text-gold">.RASULEVA</span>
          </Link>
          <p className="text-text-secondary max-w-sm mb-8 leading-relaxed">
            {t('footer.tagline')}
          </p>
          <div className="flex space-x-4">
            <a href="https://wa.me/+998774555882" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-text-secondary hover:text-white hover:border-gold/50 transition-all">
              <Phone size={18} />
            </a>
            <a href="https://www.instagram.com/r_muxarramoy?igsh=MXJiMGl0MGhhNnFhbg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-text-secondary hover:text-white hover:border-gold/50 transition-all">
              <Instagram size={18} />
            </a>
            <a href="https://www.linkedin.com/in/mukharram-rasuleva-228962355?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-text-secondary hover:text-white hover:border-gold/50 transition-all">
              <Linkedin size={18} />
            </a>
            <a href="https://t.me/+998774555882" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-text-secondary hover:text-white hover:border-gold/50 transition-all">
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">{t('footer.links.title')}</h4>
          <ul className="space-y-4">
            <li><Link to="/about" className="text-text-secondary hover:text-white transition-colors">{t('footer.links.about')}</Link></li>
            <li><Link to="/services" className="text-text-secondary hover:text-white transition-colors">{t('footer.links.services')}</Link></li>
            <li><Link to="/pricing" className="text-text-secondary hover:text-white transition-colors">{t('footer.links.pricing')}</Link></li>
            <li><Link to="/certificates" className="text-text-secondary hover:text-white transition-colors">{t('footer.links.certificates')}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">{t('footer.contact.title')}</h4>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3 text-text-secondary">
              <Mail size={16} />
              <span>mukharramdeveloper@gmail.com</span>
            </li>
            <li className="text-text-secondary leading-relaxed">
              {t('footer.contact.available')}
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-text-secondary">
        <p>© 2026 Mukharram Rasuleva. {t('footer.rights')}</p>
        <div className="flex space-x-8 mt-4 md:mt-0 font-light">
          <a href="#" className="hover:text-white">{t('footer.privacy')}</a>
          <a href="#" className="hover:text-white">{t('footer.terms')}</a>
        </div>
      </div>
    </footer>
  );
}
