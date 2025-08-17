import { useLanguage } from '@/hooks/useLanguage';
import { getTranslation } from '@/lib/i18n';
import { Building, Users, Globe, Code, Home, Award } from 'lucide-react';

export const ClientsSection = () => {
  const { language } = useLanguage();

  const clientTypes = [
    {
      icon: Building,
      key: 'client1',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      key: 'client2',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Globe,
      key: 'client3',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Code,
      key: 'client4',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Award,
      key: 'client5',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Home,
      key: 'client6',
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  return (
    <section id="clients" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {getTranslation('clientsTitle', language)}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {getTranslation('clientsDesc', language)}
            </p>
          </div>

          {/* Client Types Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {clientTypes.map((client, index) => {
              const IconComponent = client.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${client.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {getTranslation(client.key, language)}
                  </h3>
                  
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4"></div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {language === 'en' 
                      ? 'Trusted partnerships delivering exceptional results and mutual growth.'
                      : 'شراكات موثوقة تقدم نتائج استثنائية ونمو متبادل.'
                    }
                  </p>
                </div>
              );
            })}
          </div>

          {/* Partnership Showcase */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">
                  {language === 'en' ? 'Building Strong Partnerships' : 'بناء شراكات قوية'}
                </h3>
                <p className="text-xl opacity-90 mb-8 leading-relaxed">
                  {language === 'en' 
                    ? 'We believe in the power of collaboration. Our partnerships span across government institutions, private corporations, SMEs, and international trade partners, creating a network of excellence and innovation.'
                    : 'نؤمن بقوة التعاون. تمتد شراكاتنا عبر المؤسسات الحكومية والشركات الخاصة والشركات الصغيرة والمتوسطة وشركاء التجارة الدولية، مما يخلق شبكة من التميز والابتكار.'
                  }
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">100+</div>
                    <div className="text-sm opacity-75">
                      {language === 'en' ? 'Partners' : 'شريك'}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">50+</div>
                    <div className="text-sm opacity-75">
                      {language === 'en' ? 'Countries' : 'دولة'}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/20 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold mb-2">Government</div>
                      <div className="text-sm opacity-75">
                        {language === 'en' ? 'Institutions' : 'المؤسسات'}
                      </div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold mb-2">Private</div>
                      <div className="text-sm opacity-75">
                        {language === 'en' ? 'Corporations' : 'الشركات'}
                      </div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold mb-2">SMEs</div>
                      <div className="text-sm opacity-75">
                        {language === 'en' ? '& Entrepreneurs' : 'ورواد الأعمال'}
                      </div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold mb-2">International</div>
                      <div className="text-sm opacity-75">
                        {language === 'en' ? 'Partners' : 'الشركاء'}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-80"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full opacity-80"></div>
              </div>
            </div>
          </div>

          {/* Testimonials Placeholder */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              {language === 'en' ? 'What Our Partners Say' : 'ماذا يقول شركاؤنا'}
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="text-4xl text-blue-600 mb-4">"</div>
                <p className="text-gray-700 mb-4 italic">
                  {language === 'en' 
                    ? 'AY Group has been an exceptional partner in our growth journey.'
                    : 'كانت مجموعة AY شريكاً استثنائياً في رحلة نمونا.'
                  }
                </p>
                <div className="font-semibold text-gray-900">
                  {language === 'en' ? 'Government Partner' : 'شريك حكومي'}
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="text-4xl text-purple-600 mb-4">"</div>
                <p className="text-gray-700 mb-4 italic">
                  {language === 'en' 
                    ? 'Their innovative solutions have transformed our business operations.'
                    : 'حلولهم المبتكرة حولت عمليات أعمالنا.'
                  }
                </p>
                <div className="font-semibold text-gray-900">
                  {language === 'en' ? 'Private Corporation' : 'شركة خاصة'}
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="text-4xl text-green-600 mb-4">"</div>
                <p className="text-gray-700 mb-4 italic">
                  {language === 'en' 
                    ? 'Professional, reliable, and results-driven partnership.'
                    : 'شراكة مهنية وموثوقة ومرتكزة على النتائج.'
                  }
                </p>
                <div className="font-semibold text-gray-900">
                  {language === 'en' ? 'SME Partner' : 'شريك شركة صغيرة ومتوسطة'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};