import { useState, useEffect } from 'react';

export const useLoading = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    // Simulate initial loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds minimum loading time

    return () => clearTimeout(timer);
  }, []);

  const startLoading = () => {
    setIsLoading(true);
  };

  const stopLoading = () => {
    setIsLoading(false);
  };

  const completeInitialLoad = () => {
    setIsInitialLoad(false);
  };

  return {
    isLoading,
    isInitialLoad,
    startLoading,
    stopLoading,
    completeInitialLoad
  };
};