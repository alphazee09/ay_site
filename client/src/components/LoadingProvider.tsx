import { createContext, useContext, ReactNode } from 'react';
import { useLoading } from '@/hooks/useLoading';
import { LoadingScreen } from './LoadingScreen';

interface LoadingContextType {
  isLoading: boolean;
  startLoading: () => void;
  stopLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoadingContext = () => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoadingContext must be used within a LoadingProvider');
  }
  return context;
};

interface LoadingProviderProps {
  children: ReactNode;
}

export const LoadingProvider = ({ children }: LoadingProviderProps) => {
  const { isLoading, isInitialLoad, startLoading, stopLoading, completeInitialLoad } = useLoading();

  const handleLoadingComplete = () => {
    completeInitialLoad();
  };

  return (
    <LoadingContext.Provider value={{ isLoading, startLoading, stopLoading }}>
      {isInitialLoad ? (
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      ) : (
        children
      )}
    </LoadingContext.Provider>
  );
};