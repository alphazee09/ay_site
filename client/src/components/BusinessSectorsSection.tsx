import { useLanguage } from '@/hooks/useLanguage';
import { getTranslation } from '@/lib/i18n';
import { 
  Building2, 
  Code, 
  Hammer, 
  Truck, 
  Smartphone, 
  Globe, 
  Plane,
  ArrowRight 
} from 'lucide-react';

export const BusinessSectorsSection = () => {
  const { language } = useLanguage();

  const sectors = [
    {
      icon: Building2,
      key: 'ayBusinessCenter',
      descKey: 'ayBusinessCenterDesc',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50'
    },
    {
      icon: Code,
      key: 'aySoftLabs',
      descKey: 'aySoftLabsDesc',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50'
    },
    {
      icon: Hammer,
      key: 'construction',
      descKey: 'constructionDesc',
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50'
    },
    {
      icon: Truck,
      key: 'logistics',
      descKey: 'logisticsDesc',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50'
    },
    {
      icon: Smartphone,
      key: 'digitalInnovators',
      descKey: 'digitalInnovatorsDesc',
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'from-indigo-50 to-blue-50'
    },
    {
      icon: Globe,
      key: 'importExport',
      descKey: 'importExportDesc',
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'from-teal-50 to-cyan-50'
    },
    {
      icon: Plane,
      key: 'malaysiaTours',
      descKey: 'malaysiaToursDesc',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'from-yellow-50 to-orange-50'
    }
  ];

  return (
    <section id="sectors" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {getTranslation('businessSectors', language)}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {language === 'en' 
                ? 'Diversified business sectors delivering comprehensive solutions across multiple industries.'
                : 'قطاعات أعمال متنوعة تقدم حلولاً شاملة عبر صناعات متعددة.'
              }
            </p>
          </div>

          {/* Sectors Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => {
              const IconComponent = sector.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${sector.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10 p-8">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${sector.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                      {getTranslation(sector.key, language)}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                      {getTranslation(sector.descKey, language)}
                    </p>
                    
                    {/* Learn More Button */}
                    <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300">
                      <span className="mr-2">
                        {getTranslation('learnMore', language)}
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">
                {language === 'en' ? 'Ready to Partner with Us?' : 'هل أنت مستعد للشراكة معنا؟'}
              </h3>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                {language === 'en' 
                  ? 'Discover how our diverse business sectors can help your organization grow and succeed.'
                  : 'اكتشف كيف يمكن لقطاعات أعمالنا المتنوعة مساعدة مؤسستك على النمو والنجاح.'
                }
              </p>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300">
                {getTranslation('getInTouch', language)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};