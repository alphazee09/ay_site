import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { getTranslation } from '@/lib/i18n';
import { CheckCircle, Clock, ArrowRight, Calendar, Users, Target } from 'lucide-react';

export const ProjectsSection = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'completed' | 'running'>('completed');

  const completedProjects = [
    { key: 'completedProject1', icon: Calendar },
    { key: 'completedProject2', icon: Target },
    { key: 'completedProject3', icon: CheckCircle },
    { key: 'completedProject4', icon: Users }
  ];

  const runningProjects = [
    { key: 'runningProject1', icon: Clock },
    { key: 'runningProject2', icon: Target },
    { key: 'runningProject3', icon: Calendar },
    { key: 'runningProject4', icon: Users }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {getTranslation('projectsTitle', language)}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {language === 'en' 
                ? 'Explore our portfolio of successful projects and ongoing initiatives across various sectors.'
                : 'استكشف محفظة مشاريعنا الناجحة والمبادرات الجارية عبر قطاعات مختلفة.'
              }
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-xl p-2 shadow-lg border border-gray-100">
              <button
                onClick={() => setActiveTab('completed')}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'completed'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {getTranslation('completedProjects', language)}
              </button>
              <button
                onClick={() => setActiveTab('running')}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'running'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {getTranslation('runningProjects', language)}
              </button>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {(activeTab === 'completed' ? completedProjects : runningProjects).map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      activeTab === 'completed' 
                        ? 'bg-gradient-to-br from-green-500 to-emerald-500' 
                        : 'bg-gradient-to-br from-blue-500 to-cyan-500'
                    }`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        {getTranslation(project.key, language)}
                      </h3>
                      <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4"></div>
                      <div className="flex items-center text-sm text-gray-500">
                        <span className={`w-2 h-2 rounded-full mr-2 ${
                          activeTab === 'completed' ? 'bg-green-500' : 'bg-blue-500'
                        }`}></span>
                        {activeTab === 'completed' 
                          ? (language === 'en' ? 'Completed' : 'مكتمل')
                          : (language === 'en' ? 'In Progress' : 'قيد التنفيذ')
                        }
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Project Statistics */}
          <div className="mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">
                  {language === 'en' ? 'Projects Completed' : 'مشروع مكتمل'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
                <div className="text-gray-600">
                  {language === 'en' ? 'Active Projects' : 'مشروع نشط'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">100+</div>
                <div className="text-gray-600">
                  {language === 'en' ? 'Happy Clients' : 'عميل سعيد'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">7</div>
                <div className="text-gray-600">
                  {language === 'en' ? 'Business Sectors' : 'قطاع أعمال'}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">
                {language === 'en' ? 'Want to Start a Project?' : 'هل تريد بدء مشروع؟'}
              </h3>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                {language === 'en' 
                  ? 'Let\'s discuss how we can help bring your vision to life with our expertise across multiple sectors.'
                  : 'دعنا نناقش كيف يمكننا مساعدتك في تحقيق رؤيتك بخبرتنا عبر قطاعات متعددة.'
                }
              </p>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center mx-auto">
                {getTranslation('getInTouch', language)}
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};