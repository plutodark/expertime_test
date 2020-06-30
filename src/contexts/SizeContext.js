import React, { createContext, useEffect, useState } from 'react';

const tabletMinWidth = 768;
const tabletMaxWidth = 1024;

export const SizeContext = createContext({
  dimensions: {
    width: 0,
    height: 0,
    isMobile: false,
  },
});

export const SizeProvider = ({ children }) => {
  const [dimensions, setDimensions] = useState({
    height: 0,
    width: 320,
    isMobile: false,
    isTablet: false,
  });


  useEffect(() => {
    const getInitialSize = () => {
      const width = window.innerWidth;
      const height = window.screen.availHeight;

      const isMobile = width < tabletMinWidth;
      const isTablet = width < tabletMaxWidth && width >= tabletMinWidth;
      setDimensions({
        width,
        height,
        isMobile,
        isTablet,
      });
    };
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      console.log('window', window);
      console.log('width', width);
      const isMobile = width < tabletMinWidth;
      const isTablet = width < tabletMaxWidth && width >= tabletMinWidth;
      setDimensions({
        width,
        height,
        isMobile,
        isTablet,
      });
    };
    window.addEventListener('resize', handleResize);
    getInitialSize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <SizeContext.Provider value={dimensions}>{children}</SizeContext.Provider>;
};

export const SizeConsumer = SizeContext.Consumer;
