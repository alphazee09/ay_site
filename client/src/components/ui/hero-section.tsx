import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import ayLogo from "@assets/ay_logo_1752445125865.png";

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // GSAP-like animations using CSS transitions and transforms
    const hero = heroRef.current;
    if (!hero) return;

    const elements = hero.querySelectorAll('.animate-on-load');
    elements.forEach((element, index) => {
      const el = element as HTMLElement;
      el.style.transform = 'translateY(100px)';
      el.style.opacity = '0';
      
      setTimeout(() => {
        el.style.transition = 'all 1s ease-out';
        el.style.transform = 'translateY(0)';
        el.style.opacity = '1';
      }, index * 200);
    });
  }, []);

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="min-h-screen relative flex items-center justify-center pt-20"
    >
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-8 animate-float animate-on-load" data-speed="0.02">
          <div className="relative mx-auto w-40 h-40 mb-6">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-ay-gold via-cyber-purple to-electric-aqua p-1 animate-pulse-gold">
              <div className="w-full h-full rounded-full bg-ay-black flex items-center justify-center">
                <img 
                  src={ayLogo} 
                  alt="AY Group Logo" 
                  className="h-24 w-auto" 
                />
              </div>
            </div>
            {/* Neon moving border */}
            <div className="absolute inset-0 rounded-full border-4 border-transparent animate-spin" 
                 style={{ 
                   background: 'linear-gradient(45deg, var(--ay-gold), var(--cyber-purple), var(--electric-aqua), var(--ay-gold))',
                   backgroundSize: '400% 400%',
                   animation: 'spin 3s linear infinite, neon-border 4s ease-in-out infinite',
                   WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                   WebkitMaskComposite: 'xor',
                   maskComposite: 'exclude'
                 }} />
            {/* Orbital rings */}
            <div className="absolute inset-0 rounded-full border border-ay-gold opacity-30 animate-ping" style={{ animationDuration: '2s' }} />
            <div className="absolute inset-2 rounded-full border border-cyber-purple opacity-20 animate-ping" style={{ animationDuration: '2.5s' }} />
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-orbitron font-black mb-6 hero-text animate-glow animate-on-load" style={{ fontFamily: "'Orbitron', monospace" }}>
          ALWAYS YOU
        </h1>
        
        <h2 className="text-2xl md:text-4xl font-orbitron font-semibold mb-8 text-ay-gold animate-on-load">
          ASPIRE YOUR WAY
        </h2>
        
        <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed animate-on-load font-orbitron">
          Empowering <span className="text-ay-gold">Diverse Solutions</span> for a{" "}
          <span className="text-cyber-purple">Dynamic World</span>
        </p>
        
        <p className="text-lg mb-12 max-w-3xl mx-auto text-ay-gray animate-on-load font-orbitron">
          From Finance Analysis, Planning, Software Development to Legal, Automotive, Tourism, and Health – We've Got You Covered!
        </p>
        
        <div className="animate-on-load">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-ay-gold to-cyber-purple text-ay-black hover:scale-110 transition-transform duration-300 animate-pulse-gold px-12 py-6 text-lg font-orbitron font-semibold rounded-full"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            EXPLORE THE FUTURE
          </Button>
        </div>
      </div>
      
      {/* Floating geometric elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-20 h-20 border-2 border-ay-gold opacity-30 animate-spin" />
        <div className="absolute top-40 right-32 w-16 h-16 border-2 border-cyber-purple opacity-40 animate-pulse" />
        <div className="absolute bottom-32 left-40 w-24 h-24 border-2 border-electric-aqua opacity-20 animate-bounce" />
        
        {/* Matrix-style elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-ay-gold rounded-full animate-matrix-rain" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cyber-purple rounded-full animate-matrix-rain" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 bg-electric-aqua rounded-full animate-matrix-rain" style={{ animationDelay: '2s' }} />
        
        {/* Data flow lines */}
        <div className="absolute top-1/2 left-0 w-32 h-px bg-gradient-to-r from-transparent via-ay-gold to-transparent animate-data-flow" />
        <div className="absolute top-1/3 right-0 w-24 h-px bg-gradient-to-l from-transparent via-cyber-purple to-transparent animate-data-flow" style={{ animationDelay: '1.5s' }} />
      </div>
    </section>
  );
}
