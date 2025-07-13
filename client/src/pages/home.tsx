import { useEffect } from "react";
import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import ServicesSection from "@/components/ui/services-section";
import AboutSection from "@/components/ui/about-section";
import ContactSection from "@/components/ui/contact-section";
import Footer from "@/components/ui/footer";
import ParticleSystem from "@/components/ui/particle-system";

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-ay-black text-ay-silver overflow-x-hidden">
      <ParticleSystem />
      
      {/* Cyber Grid Background */}
      <div className="fixed inset-0 cyber-grid opacity-20 pointer-events-none z-0" />
      
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
