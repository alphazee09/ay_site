import { useLanguage } from '@/hooks/useLanguage';
import { LoadingGIF } from './LoadingGIF';

interface SectionLoaderProps {
  message?: string;
  size?: 'small' | 'medium' | 'large';
}

export const SectionLoader = ({ 
  message, 
  size = 'medium' 
}: SectionLoaderProps) => {
  const { language } = useLanguage();

  const defaultMessage = language === 'en' 
    ? 'Loading content...' 
    : 'جاري تحميل المحتوى...';

  const sizeClasses = {
    small: 'w-16 h-16',
    medium: 'w-24 h-24',
    large: 'w-32 h-32'
  };

  return (
    <div className="flex flex-col items-center justify-center py-12">
      {/* Loading GIF */}
      <div className="mb-4">
        <LoadingGIF size={size} />
      </div>

      {/* Loading Text */}
      <p className="text-gray-600 text-center font-medium">
        {message || defaultMessage}
      </p>

      {/* Loading Dots */}
      <div className="flex justify-center space-x-2 mt-4">
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>
    </div>
  );
};