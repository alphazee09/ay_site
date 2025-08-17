import { useEffect, useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { LoadingGIF } from './LoadingGIF';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const { language } = useLanguage();
  const [loadingText, setLoadingText] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const loadingMessages = language === 'en' 
      ? [
          'Loading AY Group...',
          'Preparing your experience...',
          'Setting up business sectors...',
          'Connecting to our services...',
          'Almost ready...'
        ]
      : [
          'جاري تحميل مجموعة AY...',
          'إعداد تجربتك...',
          'إعداد قطاعات الأعمال...',
          'الاتصال بخدماتنا...',
          'تقريباً جاهز...'
        ];

    let currentIndex = 0;
    let currentProgress = 0;

    const textInterval = setInterval(() => {
      if (currentIndex < loadingMessages.length) {
        setLoadingText(loadingMessages[currentIndex]);
        currentIndex++;
      }
    }, 800);

    const progressInterval = setInterval(() => {
      currentProgress += Math.random() * 15;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(progressInterval);
        clearInterval(textInterval);
        
        // Wait a bit more before completing
        setTimeout(() => {
          onLoadingComplete();
        }, 500);
      }
      setProgress(Math.min(currentProgress, 100));
    }, 200);

    return () => {
      clearInterval(textInterval);
      clearInterval(progressInterval);
    };
  }, [language, onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Logo */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl">
            <span className="text-white font-bold text-3xl">AY</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            {language === 'en' ? 'AY Group' : 'مجموعة AY'}
          </h1>
          <p className="text-blue-200 text-lg">
            {language === 'en' ? 'Your Business Success Partner' : 'شريك نجاح أعمالك'}
          </p>
        </div>

        {/* Loading GIF */}
        <div className="mb-8">
          <LoadingGIF size="large" className="mx-auto" />
        </div>

        {/* Loading Text */}
        <div className="mb-6">
          <p className="text-white text-lg font-medium mb-2">
            {loadingText}
          </p>
          <div className="w-64 h-2 bg-gray-700 rounded-full mx-auto overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-blue-300 text-sm mt-2">
            {Math.round(progress)}%
          </p>
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-purple-500/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-indigo-500/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
};