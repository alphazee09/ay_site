import { useEffect, useRef } from "react";
import ServiceCard from "./service-card";
import { Building, Code, Globe, Calendar, TrendingUp, Rocket } from "lucide-react";

const services = [
  {
    id: 1,
    title: "AY BUSINESS CENTER",
    description: "Holographic office visualization and advanced business solutions for the modern enterprise",
    icon: Building,
    color: "ay-gold",
    buttonText: "EXPLORE",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 2,
    title: "AY SOFTLABS",
    description: "Matrix-style coding interface animations and cutting-edge software development solutions",
    icon: Code,
    color: "cyber-purple",
    buttonText: "DEVELOP",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 3,
    title: "AY TOURISM",
    description: "Immersive travel destination reveals and innovative tourism experiences",
    icon: Globe,
    color: "electric-aqua",
    buttonText: "DISCOVER",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 4,
    title: "EVENTS MANAGEMENT",
    description: "Dynamic event staging with advanced particle systems and memorable experiences",
    icon: Calendar,
    color: "ay-gold",
    buttonText: "ORCHESTRATE",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 5,
    title: "FINANCIAL PLANNING",
    description: "Data flow animations and advanced financial chart visualizations",
    icon: TrendingUp,
    color: "cyber-purple",
    buttonText: "ANALYZE",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 6,
    title: "INNOVATION LAB",
    description: "Cutting-edge research and development for tomorrow's solutions",
    icon: Rocket,
    color: "electric-aqua",
    buttonText: "INNOVATE",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  }
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.service-card');
            cards.forEach((card, index) => {
              const cardEl = card as HTMLElement;
              cardEl.style.transform = 'translateY(100px)';
              cardEl.style.opacity = '0';
              
              setTimeout(() => {
                cardEl.style.transition = 'all 1s ease-out';
                cardEl.style.transform = 'translateY(0)';
                cardEl.style.opacity = '1';
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-orbitron font-bold mb-6 text-ay-gold">
            OUR UNIVERSE
          </h2>
          <p className="text-xl text-ay-gray max-w-3xl mx-auto">
            Discover our constellation of services designed to propel your business into the future
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
