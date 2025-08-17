import { useLanguage } from '@/hooks/useLanguage';
import { getTranslation } from '@/lib/i18n';
import { CheckCircle, TrendingUp, Users, Handshake } from 'lucide-react';

export const StrategySection = () => {
  const { language } = useLanguage();

  const strategies = [
    {
      icon: CheckCircle,
      key: 'strategy1',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: TrendingUp,
      key: 'strategy2',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      key: 'strategy3',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Handshake,
      key: 'strategy4',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="strategy" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {getTranslation('strategyTitle', language)}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {getTranslation('strategyDesc', language)}
            </p>
          </div>

          {/* Strategy Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {strategies.map((strategy, index) => {
              const IconComponent = strategy.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${strategy.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${strategy.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {getTranslation(strategy.key, language)}
                    </h3>
                    
                    <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4"></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Strategy Visualization */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Strategy Process */}
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-8">
                  {language === 'en' ? 'Our Strategic Process' : 'عمليةنا الاستراتيجية'}
                </h3>
                
                <div className="space-y-6">
                  {strategies.map((strategy, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`w-8 h-8 bg-gradient-to-br ${strategy.color} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}>
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {getTranslation(strategy.key, language)}
                        </h4>
                        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Visual Representation */}
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
                  <div className="text-4xl font-bold mb-4">
                    {language === 'en' ? 'Horizontal' : 'أفقي'}
                  </div>
                  <div className="text-2xl mb-4">
                    {language === 'en' ? 'Expansion' : 'التوسع'}
                  </div>
                  <div className="text-sm opacity-90">
                    {language === 'en' ? 'Model' : 'النموذج'}
                  </div>
                  
                  {/* Strategy indicators */}
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="bg-white/20 rounded-lg p-3">
                      <div className="text-lg font-semibold">SMEs</div>
                      <div className="text-xs opacity-75">
                        {language === 'en' ? 'Small & Medium' : 'الصغيرة والمتوسطة'}
                      </div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3">
                      <div className="text-lg font-semibold">
                        {language === 'en' ? 'Large Scale' : 'الواسعة النطاق'}
                      </div>
                      <div className="text-xs opacity-75">
                        {language === 'en' ? 'Projects' : 'المشاريع'}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-6 h-6 bg-yellow-400 rounded-full opacity-80"></div>
                <div className="absolute -bottom-4 -left-4 w-4 h-4 bg-green-400 rounded-full opacity-80"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};