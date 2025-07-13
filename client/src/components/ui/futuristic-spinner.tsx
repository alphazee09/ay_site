import { useEffect, useState } from "react";

interface FuturisticSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function FuturisticSpinner({ size = 'md', className = '' }: FuturisticSpinnerProps) {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 5) % 360);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      {/* Outer rotating ring */}
      <div 
        className="absolute inset-0 rounded-full border-2 border-transparent border-t-ay-gold animate-spin"
        style={{ animationDuration: '1s' }}
      />
      
      {/* Middle ring */}
      <div 
        className="absolute inset-1 rounded-full border-2 border-transparent border-r-cyber-purple animate-spin"
        style={{ animationDuration: '1.5s', animationDirection: 'reverse' }}
      />
      
      {/* Inner ring */}
      <div 
        className="absolute inset-2 rounded-full border-2 border-transparent border-l-electric-aqua animate-spin"
        style={{ animationDuration: '0.8s' }}
      />
      
      {/* Center dot */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-ay-gold rounded-full animate-pulse" />
      
      {/* Orbital particles */}
      <div 
        className="absolute inset-0 rounded-full"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-ay-gold rounded-full animate-pulse" />
        <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-1 h-1 bg-cyber-purple rounded-full animate-pulse" />
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-electric-aqua rounded-full animate-pulse" />
        <div className="absolute top-1/2 -left-1 transform -translate-y-1/2 w-1 h-1 bg-ay-silver rounded-full animate-pulse" />
      </div>
    </div>
  );
}