import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import ayLogo from "@assets/ay_logo_1752445125865.png";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 w-full z-50 glass-morphism">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-ay-gold to-ay-gray p-0.5 animate-pulse">
                <div className="w-full h-full rounded-full bg-ay-black flex items-center justify-center">
                  <img src={ayLogo} alt="AY Group Logo" className="h-8 w-auto" />
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
            <div className="text-ay-gold font-orbitron font-bold text-xl tracking-wider">
              AY GROUP
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="nav-link font-orbitron hover:text-ay-gold transition-colors">
              HOME
            </a>
            <a href="#services" className="nav-link font-orbitron hover:text-ay-gold transition-colors">
              SERVICES
            </a>
            <a href="#about" className="nav-link font-orbitron hover:text-ay-gold transition-colors">
              ABOUT
            </a>
            <a href="#contact" className="nav-link font-orbitron hover:text-ay-gold transition-colors">
              CONTACT
            </a>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <Phone className="h-4 w-4 text-ay-gold" />
            <span className="text-sm">+968 22512731</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-ay-gold hover:text-ay-silver transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-ay-gray border-opacity-20">
            <div className="flex flex-col space-y-4 mt-4">
              <a 
                href="#home" 
                className="font-orbitron hover:text-ay-gold transition-colors"
                onClick={toggleMenu}
              >
                HOME
              </a>
              <a 
                href="#services" 
                className="font-orbitron hover:text-ay-gold transition-colors"
                onClick={toggleMenu}
              >
                SERVICES
              </a>
              <a 
                href="#about" 
                className="font-orbitron hover:text-ay-gold transition-colors"
                onClick={toggleMenu}
              >
                ABOUT
              </a>
              <a 
                href="#contact" 
                className="font-orbitron hover:text-ay-gold transition-colors"
                onClick={toggleMenu}
              >
                CONTACT
              </a>
              <div className="flex items-center space-x-2 pt-4 border-t border-ay-gray border-opacity-20">
                <Phone className="h-4 w-4 text-ay-gold" />
                <span className="text-sm">+968 22512731</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
