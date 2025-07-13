import { useEffect, useRef } from "react";

export default function ParticleSystem() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const particleCount = 50;
    const matrixCount = 20;

    // Create regular particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 8 + 's';
      particle.style.animationDuration = (Math.random() * 3 + 5) + 's';
      container.appendChild(particle);
    }

    // Create matrix-style data streams
    for (let i = 0; i < matrixCount; i++) {
      const stream = document.createElement('div');
      stream.className = 'fixed w-px h-20 bg-gradient-to-b from-transparent via-ay-gold to-transparent animate-matrix-rain';
      stream.style.left = Math.random() * 100 + '%';
      stream.style.animationDelay = Math.random() * 3 + 's';
      stream.style.animationDuration = (Math.random() * 2 + 3) + 's';
      container.appendChild(stream);
    }

    // Create data flow lines
    for (let i = 0; i < 10; i++) {
      const dataFlow = document.createElement('div');
      dataFlow.className = 'fixed w-32 h-px bg-gradient-to-r from-transparent via-cyber-purple to-transparent animate-data-flow';
      dataFlow.style.top = Math.random() * 100 + '%';
      dataFlow.style.animationDelay = Math.random() * 4 + 's';
      dataFlow.style.animationDuration = (Math.random() * 2 + 2) + 's';
      container.appendChild(dataFlow);
    }

    // Mouse movement parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      document.querySelectorAll('.animate-float').forEach(element => {
        const el = element as HTMLElement;
        const speed = parseFloat(el.dataset.speed || '0.02');
        const x = (mouseX - 0.5) * speed * 100;
        const y = (mouseY - 0.5) * speed * 100;
        el.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      // Clean up particles
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0"
      id="particles-container"
    />
  );
}
