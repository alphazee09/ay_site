import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  buttonText: string;
  image: string;
}

export default function ServiceCard({ 
  title, 
  description, 
  icon: Icon, 
  color, 
  buttonText, 
  image 
}: ServiceCardProps) {
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'ay-gold':
        return {
          text: 'text-ay-gold',
          bg: 'bg-ay-gold',
          textOnBg: 'text-ay-black'
        };
      case 'ay-gray':
        return {
          text: 'text-ay-gray',
          bg: 'bg-ay-gray',
          textOnBg: 'text-white'
        };
      case 'ay-silver':
        return {
          text: 'text-ay-silver',
          bg: 'bg-ay-silver',
          textOnBg: 'text-ay-black'
        };
      default:
        return {
          text: 'text-ay-gold',
          bg: 'bg-ay-gold',
          textOnBg: 'text-ay-black'
        };
    }
  };

  const colors = getColorClasses(color);

  return (
    <div className="service-card glass-morphism rounded-2xl p-8 holographic animate-hologram-flicker">
      <div className="text-center mb-6">
        <div className="relative">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-48 object-cover rounded-xl mb-4"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ay-black via-transparent to-transparent rounded-xl opacity-60" />
        </div>
        <Icon className={`h-12 w-12 mx-auto mb-4 ${colors.text}`} />
      </div>
      
      <h3 className={`text-2xl font-orbitron font-semibold mb-4 ${colors.text} animate-glow`}>
        {title}
      </h3>
      
      <p className="text-ay-gray mb-6 leading-relaxed font-orbitron">
        {description}
      </p>
      
      <div className="flex justify-center">
        <Button 
          className={`${colors.bg} ${colors.textOnBg} px-6 py-2 rounded-full font-orbitron font-semibold hover:scale-105 transition-transform duration-300`}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
}
