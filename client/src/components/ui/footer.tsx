import ayLogo from "@assets/ay_logo_1752445125865.png";
import aysoftLogo from "@assets/aysoft_1752445630045.png";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-ay-gray border-opacity-20">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-6">
            <img 
              src={ayLogo} 
              alt="AY Group Logo" 
              className="h-16 w-auto mx-auto mb-4" 
            />
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
            <span className="text-cyber-purple font-orbitron font-semibold">
              AY SOFT
            </span>
          </div>
          
          <div className="text-ay-gray text-sm">
            <p>&copy; 2024 AY Group For Investments. All rights reserved.</p>
            <p className="mt-2">Designing the future, one solution at a time.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
