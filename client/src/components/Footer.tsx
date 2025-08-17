import { Link } from 'wouter';
import { useLanguage } from '@/hooks/useLanguage';
import { getTranslation } from '@/lib/i18n';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  const { language } = useLanguage();

  const quickLinks = [
    { key: 'home', href: '/' },
    { key: 'about', href: '/#about' },
    { key: 'strategy', href: '/#strategy' },
    { key: 'sectors', href: '/#sectors' },
    { key: 'projects', href: '/#projects' },
    { key: 'clients', href: '/#clients' },
    { key: 'contact', href: '/#contact' },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: 'https://www.facebook.com/aygroupinv',
      label: 'Facebook'
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/aygroupin',
      label: 'Instagram'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/company/ay-group-for-investments/',
      label: 'LinkedIn'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">AY</span>
              </div>
              <span className="text-2xl font-bold">AY Group</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              {getTranslation('intro', language)}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              {language === 'en' ? 'Quick Links' : 'روابط سريعة'}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {getTranslation(link.key, language)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              {getTranslation('contactTitle', language)}
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  {getTranslation('address', language)}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a 
                  href={`tel:${getTranslation('phone', language)}`}
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  {getTranslation('phone', language)}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a 
                  href={`mailto:${getTranslation('email', language)}`}
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  {getTranslation('email', language)}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 AY Group. {language === 'en' ? 'All rights reserved.' : 'جميع الحقوق محفوظة.'}
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                {language === 'en' ? 'Privacy Policy' : 'سياسة الخصوصية'}
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                {language === 'en' ? 'Terms of Service' : 'شروط الخدمة'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};