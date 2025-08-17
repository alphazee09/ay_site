import { useLanguage } from '@/hooks/useLanguage';
import { getTranslation } from '@/lib/i18n';
import { Target, Eye, Heart, Award } from 'lucide-react';

export const AboutSection = () => {
  const { language } = useLanguage();

  const values = [
    {
      icon: Heart,
      title: 'Partnership',
      titleAr: 'الشراكة',
      description: 'Building strong relationships with our partners and stakeholders',
      descriptionAr: 'بناء علاقات قوية مع شركائنا وأصحاب المصلحة'
    },
    {
      icon: Target,
      title: 'Innovation',
      titleAr: 'الابتكار',
      description: 'Embracing new technologies and creative solutions',
      descriptionAr: 'تبني التقنيات الجديدة والحلول الإبداعية'
    },
    {
      icon: Award,
      title: 'Excellence',
      titleAr: 'التميز',
      description: 'Delivering outstanding quality in everything we do',
      descriptionAr: 'تقديم جودة متميزة في كل ما نقوم به'
    },
    {
      icon: Eye,
      title: 'Sustainability',
      titleAr: 'الاستدامة',
      description: 'Creating long-term value for future generations',
      descriptionAr: 'خلق قيمة طويلة المدى للأجيال القادمة'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {getTranslation('whoWeAre', language)}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {getTranslation('whoWeAreDesc', language)}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Vision & Mission */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {getTranslation('vision', language)}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {getTranslation('visionDesc', language)}
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {getTranslation('values', language)}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {getTranslation('valuesDesc', language)}
                </p>
              </div>
            </div>

            {/* Image/Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <div className="text-center">
                  <div className="text-6xl font-bold mb-4">AY</div>
                  <div className="text-xl opacity-90">
                    {language === 'en' ? 'Group' : 'مجموعة'}
                  </div>
                  <div className="text-sm opacity-75 mt-2">
                    {language === 'en' ? 'Investment & Innovation' : 'الاستثمار والابتكار'}
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full opacity-80"></div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    {language === 'en' ? value.title : value.titleAr}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {language === 'en' ? value.description : value.descriptionAr}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};