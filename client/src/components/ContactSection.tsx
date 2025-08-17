import { useLanguage } from '@/hooks/useLanguage';
import { getTranslation } from '@/lib/i18n';
import { 
  MapPin, 
  Phone, 
  Globe, 
  Mail, 
  Facebook, 
  Instagram, 
  Linkedin,
  Send 
} from 'lucide-react';

export const ContactSection = () => {
  const { language } = useLanguage();

  const contactInfo = [
    {
      icon: MapPin,
      label: getTranslation('address', language),
      value: getTranslation('address', language),
      href: '#'
    },
    {
      icon: Phone,
      label: language === 'en' ? 'Phone' : 'الهاتف',
      value: getTranslation('phone', language),
      href: `tel:${getTranslation('phone', language)}`
    },
    {
      icon: Globe,
      label: language === 'en' ? 'Website' : 'الموقع الإلكتروني',
      value: getTranslation('website', language),
      href: `https://${getTranslation('website', language)}`
    },
    {
      icon: Mail,
      label: language === 'en' ? 'Email' : 'البريد الإلكتروني',
      value: getTranslation('email', language),
      href: `mailto:${getTranslation('email', language)}`
    }
  ];

  const socialMedia = [
    {
      icon: Facebook,
      name: 'Facebook',
      href: 'https://www.facebook.com/aygroupinv',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: Instagram,
      name: 'Instagram',
      href: 'https://www.instagram.com/aygroupin',
      color: 'from-pink-500 to-purple-600'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/ay-group-for-investments/',
      color: 'from-blue-700 to-blue-800'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {getTranslation('contactTitle', language)}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {language === 'en' 
                ? 'Get in touch with us to discuss your business needs and explore partnership opportunities.'
                : 'تواصل معنا لمناقشة احتياجات أعمالك واستكشاف فرص الشراكة.'
              }
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {language === 'en' ? 'Contact Information' : 'معلومات الاتصال'}
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900 mb-1">
                            {info.label}
                          </div>
                          <a 
                            href={info.href}
                            className="text-blue-600 hover:text-blue-700 transition-colors duration-300"
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {getTranslation('followUs', language)}
                </h3>
                
                <div className="grid grid-cols-3 gap-4">
                  {socialMedia.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group bg-gradient-to-br ${social.color} rounded-xl p-4 text-white text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
                      >
                        <IconComponent className="w-6 h-6 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                        <div className="text-sm font-medium">{social.name}</div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {language === 'en' ? 'Send us a Message' : 'أرسل لنا رسالة'}
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'en' ? 'First Name' : 'الاسم الأول'}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder={language === 'en' ? 'Enter your first name' : 'أدخل اسمك الأول'}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'en' ? 'Last Name' : 'اسم العائلة'}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder={language === 'en' ? 'Enter your last name' : 'أدخل اسم العائلة'}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'en' ? 'Email' : 'البريد الإلكتروني'}
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder={language === 'en' ? 'Enter your email' : 'أدخل بريدك الإلكتروني'}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'en' ? 'Subject' : 'الموضوع'}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder={language === 'en' ? 'Enter subject' : 'أدخل الموضوع'}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'en' ? 'Message' : 'الرسالة'}
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder={language === 'en' ? 'Enter your message' : 'أدخل رسالتك'}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {language === 'en' ? 'Send Message' : 'إرسال الرسالة'}
                </button>
              </form>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {language === 'en' ? 'Visit Our Office' : 'زر مكتبنا'}
              </h3>
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl p-12">
                <div className="text-6xl mb-4">📍</div>
                <p className="text-xl text-gray-700 mb-4">
                  {getTranslation('address', language)}
                </p>
                <p className="text-gray-600">
                  {language === 'en' 
                    ? 'We welcome visitors during business hours'
                    : 'نرحب بالزوار خلال ساعات العمل'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};