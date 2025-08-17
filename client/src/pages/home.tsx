import { useEffect, useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { AboutSection } from '@/components/AboutSection';
import { StrategySection } from '@/components/StrategySection';
import { BusinessSectorsSection } from '@/components/BusinessSectorsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ClientsSection } from '@/components/ClientsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { SectionLoader } from '@/components/SectionLoader';
import { useLanguage } from '@/hooks/useLanguage';
import { useLoadingContext } from '@/components/LoadingProvider';

export default function Home() {
  const { language } = useLanguage();
  const { isLoading } = useLoadingContext();
  const [sectionsLoaded, setSectionsLoaded] = useState({
    hero: false,
    about: false,
    strategy: false,
    sectors: false,
    projects: false,
    clients: false,
    contact: false
  });

  useEffect(() => {
    // Set document direction based on language
    if (language === 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = 'en';
    }
  }, [language]);

  useEffect(() => {
    // Simulate section loading delays
    const loadSections = async () => {
      const delays = {
        hero: 500,
        about: 1000,
        strategy: 1500,
        sectors: 2000,
        projects: 2500,
        clients: 3000,
        contact: 3500
      };

      for (const [section, delay] of Object.entries(delays)) {
        await new Promise(resolve => setTimeout(resolve, delay));
        setSectionsLoaded(prev => ({ ...prev, [section]: true }));
      }
    };

    if (!isLoading) {
      loadSections();
    }
  }, [isLoading]);

  if (isLoading) {
    return <SectionLoader message={language === 'en' ? 'Loading AY Group...' : 'جاري تحميل مجموعة AY...'} size="large" />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {sectionsLoaded.hero ? (
          <Hero />
        ) : (
          <SectionLoader message={language === 'en' ? 'Loading hero section...' : 'جاري تحميل القسم الرئيسي...'} />
        )}
        
        {sectionsLoaded.about ? (
          <AboutSection />
        ) : (
          <SectionLoader message={language === 'en' ? 'Loading about section...' : 'جاري تحميل قسم من نحن...'} />
        )}
        
        {sectionsLoaded.strategy ? (
          <StrategySection />
        ) : (
          <SectionLoader message={language === 'en' ? 'Loading strategy section...' : 'جاري تحميل قسم الاستراتيجية...'} />
        )}
        
        {sectionsLoaded.sectors ? (
          <BusinessSectorsSection />
        ) : (
          <SectionLoader message={language === 'en' ? 'Loading business sectors...' : 'جاري تحميل قطاعات الأعمال...'} />
        )}
        
        {sectionsLoaded.projects ? (
          <ProjectsSection />
        ) : (
          <SectionLoader message={language === 'en' ? 'Loading projects section...' : 'جاري تحميل قسم المشاريع...'} />
        )}
        
        {sectionsLoaded.clients ? (
          <ClientsSection />
        ) : (
          <SectionLoader message={language === 'en' ? 'Loading clients section...' : 'جاري تحميل قسم العملاء...'} />
        )}
        
        {sectionsLoaded.contact ? (
          <ContactSection />
        ) : (
          <SectionLoader message={language === 'en' ? 'Loading contact section...' : 'جاري تحميل قسم الاتصال...'} />
        )}
      </main>
      <Footer />
    </div>
  );
}
