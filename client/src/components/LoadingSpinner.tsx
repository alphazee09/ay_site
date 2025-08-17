import { useLanguage } from '@/hooks/useLanguage';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: 'blue' | 'purple' | 'indigo';
}

export const LoadingSpinner = ({ 
  size = 'medium', 
  color = 'blue' 
}: LoadingSpinnerProps) => {
  const { language } = useLanguage();

  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16'
  };

  const colorClasses = {
    blue: 'border-blue-500',
    purple: 'border-purple-500',
    indigo: 'border-indigo-500'
  };

  return (
    <div className="flex items-center justify-center">
      <div 
        className={`${sizeClasses[size]} ${colorClasses[color]} border-4 border-t-transparent rounded-full animate-spin`}
        role="status"
        aria-label={language === 'en' ? 'Loading' : 'جاري التحميل'}
      >
        <span className="sr-only">
          {language === 'en' ? 'Loading...' : 'جاري التحميل...'}
        </span>
      </div>
    </div>
  );
};