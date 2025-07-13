import { useEffect, useRef } from "react";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.about-card');
            cards.forEach((card, index) => {
              const cardEl = card as HTMLElement;
              cardEl.style.transform = 'translateY(50px)';
              cardEl.style.opacity = '0';
              
              setTimeout(() => {
                cardEl.style.transition = 'all 0.8s ease-out';
                cardEl.style.transform = 'translateY(0)';
                cardEl.style.opacity = '1';
              }, index * 300);
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
    <section ref={sectionRef} id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-orbitron font-bold mb-6 text-ay-gold">
            ABOUT AY GROUP
          </h2>
          <p className="text-xl text-ay-gray max-w-4xl mx-auto leading-relaxed">
            We are a constellation of <span className="text-ay-gold">powerful</span>,{" "}
            <span className="text-cyber-purple">experienced</span>, and{" "}
            <span className="text-electric-aqua">creative</span> professionals,
            crafting the future of business solutions with unparalleled expertise and innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="about-card text-center glass-morphism rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
            <div className="text-6xl font-orbitron font-bold text-ay-gold mb-4">
              2050
            </div>
            <h3 className="text-xl font-orbitron font-semibold mb-2 text-ay-silver">
              FUTURE READY
            </h3>
            <p className="text-ay-gray">
              Designing solutions for tomorrow's challenges
            </p>
          </div>
          
          <div className="about-card text-center glass-morphism rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
            <div className="text-6xl font-orbitron font-bold text-cyber-purple mb-4">
              ∞
            </div>
            <h3 className="text-xl font-orbitron font-semibold mb-2 text-ay-silver">
              LIMITLESS
            </h3>
            <p className="text-ay-gray">
              Boundless creativity and innovation
            </p>
          </div>
          
          <div className="about-card text-center glass-morphism rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
            <div className="text-6xl font-orbitron font-bold text-electric-aqua mb-4">
              ⚡
            </div>
            <h3 className="text-xl font-orbitron font-semibold mb-2 text-ay-silver">
              POWERED
            </h3>
            <p className="text-ay-gray">
              Energized by expertise and passion
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
