import ayLogo from "@assets/ay_logo_1752445125865.png";
import aysoftLogo from "@assets/aysoft_1752445630045.png";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-ay-gray border-opacity-20">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-6">
            <div className="relative mx-auto w-20 h-20 mb-4">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-ay-gold to-ay-gray p-0.5 animate-pulse">
                <div className="w-full h-full rounded-full bg-ay-black flex items-center justify-center">
                  <img 
                    src={ayLogo} 
                    alt="AY Group Logo" 
                    className="h-12 w-auto" 
                  />
                </div>
              </div>
              {/* Neon moving border */}
              <div className="absolute inset-0 rounded-full border-2 border-transparent animate-spin" 
                   style={{ 
                     background: 'linear-gradient(45deg, var(--ay-gold), var(--ay-silver), var(--ay-gray), var(--ay-gold))',
                     backgroundSize: '200% 200%',
                     animation: 'spin 2s linear infinite, neon-border 3s ease-in-out infinite',
                     WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                     WebkitMaskComposite: 'xor',
                     maskComposite: 'exclude'
                   }} />
            </div>
            <p className="text-ay-gold font-orbitron font-semibold text-2xl">
              AY GROUP FOR INVESTMENTS
            </p>
          </div>
          
          <div className="flex justify-center items-center space-x-4 mb-6 flex-wrap">
            <span className="text-ay-gray">Crafted & Created By</span>
            <span className="text-ay-gold font-orbitron font-semibold">
              MazinYahia
            </span>
            <span className="text-ay-gray">|</span>
            <img 
              src={aysoftLogo} 
              alt="AY Soft Logo" 
              className="h-8 w-auto" 
            />
            <span className="text-ay-silver font-orbitron font-semibold">
              AY SOFT
            </span>
          </div>
          
          <div className="text-ay-gray text-sm font-orbitron">
            <p>&copy; 2024 AY Group For Investments. All rights reserved.</p>
            <p className="mt-2">Designing the future, one solution at a time.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
