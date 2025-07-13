import { useEffect, useRef } from "react";
import { Globe as GlobeIcon } from "lucide-react";

export default function Globe() {
  const globeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple rotation animation for the globe icon
    const globe = globeRef.current?.querySelector('.globe-icon');
    if (globe) {
      let rotation = 0;
      const interval = setInterval(() => {
        rotation += 1;
        (globe as HTMLElement).style.transform = `rotate(${rotation}deg)`;
      }, 50);

      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div 
      ref={globeRef}
      className="w-full h-64 mb-8 rounded-lg overflow-hidden relative bg-gradient-to-b from-ay-black to-cyber-purple"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-ay-black to-cyber-purple opacity-30" />
      
      {/* Globe visualization */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-ay-gold to-electric-aqua mx-auto mb-4 flex items-center justify-center animate-pulse relative">
            <GlobeIcon className="globe-icon h-16 w-16 text-ay-black" />
            
            {/* Oman location pin */}
            <div className="absolute top-8 right-8 w-3 h-3 bg-ay-gold rounded-full animate-pulse shadow-lg">
              <div className="absolute -top-1 -left-1 w-5 h-5 bg-ay-gold rounded-full opacity-50 animate-ping" />
            </div>
          </div>
          
          <p className="text-ay-gold font-orbitron font-semibold text-lg">
            OMAN LOCATION
          </p>
          
          <div className="mt-4 text-sm text-ay-gray">
            <p>🌍 Rotating Globe View</p>
            <p>📍 Muscat, Al Azaiba</p>
          </div>
        </div>
      </div>
      
      {/* Orbital rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-48 h-48 border border-ay-gold opacity-20 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute w-40 h-40 border border-cyber-purple opacity-15 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
      </div>
    </div>
  );
}
