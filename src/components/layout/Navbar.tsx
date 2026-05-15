import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { Menu, X, Languages } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', name: 'EN' },
  { code: 'uz', name: 'UZ' },
  { code: 'ru', name: 'RU' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLangs, setShowLangs] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.certificates'), path: '/certificates' },
    { name: t('nav.pricing'), path: '/pricing' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setShowLangs(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass px-8 py-4 rounded-full">
        <Link to="/" className="text-xl font-display font-bold tracking-tighter text-white">
          MUKHARRAM<span className="text-gold">.RASULEVA</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-gold",
                location.pathname === link.path ? "text-gold" : "text-text-secondary"
              )}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Language Switcher */}
          <div 
            className="relative"
            onMouseEnter={() => setShowLangs(true)}
            onMouseLeave={() => setShowLangs(false)}
          >
            <button 
              onClick={() => setShowLangs(!showLangs)}
              className="flex items-center space-x-1 text-sm font-medium text-text-secondary hover:text-gold transition-colors cursor-pointer"
            >
              <Languages size={18} />
              <span>{i18n.language.toUpperCase()}</span>
            </button>
            <AnimatePresence>
              {showLangs && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full mt-4 right-0 glass rounded-2xl overflow-hidden min-w-[120px]"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={cn(
                        "w-full text-left px-6 py-3 text-sm transition-colors hover:bg-white/5",
                        i18n.language === lang.code ? "text-gold" : "text-white"
                      )}
                    >
                      {lang.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/contact"
            className="bg-gold text-black px-6 py-2 rounded-full text-sm font-semibold transition-transform active:scale-95 hover:bg-gold-hover"
          >
            {t('nav.get_project')}
          </Link>
        </div>

        {/* Mobile Toggle & Lang */}
        <div className="flex items-center space-x-4 md:hidden">
          <button 
            onClick={() => setShowLangs(!showLangs)}
            className="text-text-secondary"
          >
            <Languages size={20} />
          </button>
          <button
            className="text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Language Selector */}
      <AnimatePresence>
        {showLangs && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="md:hidden fixed top-24 right-6 glass p-2 rounded-2xl flex flex-col z-[60]"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={cn(
                  "px-6 py-3 text-sm font-medium rounded-xl transition-colors",
                  i18n.language === lang.code ? "bg-gold text-black" : "text-white hover:bg-white/5"
                )}
              >
                {lang.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-x-0 top-20 bg-body/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col space-y-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-lg font-medium py-2 border-b border-white/5",
                  location.pathname === link.path ? "text-gold" : "text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-gold text-black text-center py-4 rounded-xl font-bold"
            >
              {t('nav.get_project')}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
