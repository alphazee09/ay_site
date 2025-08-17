import { useState } from 'react';
import { LoadingSpinner } from './LoadingSpinner';

interface LoadingGIFProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export const LoadingGIF = ({ size = 'medium', className = '' }: LoadingGIFProps) => {
  const [gifLoaded, setGifLoaded] = useState(false);
  const [gifError, setGifError] = useState(false);

  const sizeClasses = {
    small: 'w-16 h-16',
    medium: 'w-24 h-24',
    large: 'w-32 h-32'
  };

  const handleGifLoad = () => {
    setGifLoaded(true);
  };

  const handleGifError = () => {
    setGifError(true);
  };

  if (gifError) {
    return (
      <div className={`${sizeClasses[size]} rounded-full shadow-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center ${className}`}>
        <LoadingSpinner size={size} color="blue" />
      </div>
    );
  }

  return (
    <div className={`${sizeClasses[size]} rounded-full shadow-lg overflow-hidden ${className}`}>
      <img 
        src="/src/assets/gif/loading.gif" 
        alt="Loading"
        className="w-full h-full object-cover"
        onLoad={handleGifLoad}
        onError={handleGifError}
        style={{ display: gifLoaded ? 'block' : 'none' }}
      />
      {!gifLoaded && !gifError && (
        <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
          <LoadingSpinner size={size} color="blue" />
        </div>
      )}
    </div>
  );
};