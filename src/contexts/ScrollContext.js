import React, { createContext, useEffect, useState } from 'react';

// const isServer = typeof window === 'undefined';

export const ScrollContext = createContext({
  isTop: 0,
  isScrollDown: false,
  scrollY: 0,
});

export const ScrollProvider = ({ children }) => {
  const [scrollStatus, setScrollStatus] = useState({
    isTop: true,
    isScrollDown: false,
    oldScrollY: 0,
  });
  const handleScroll = () => {
    const { oldScrollY } = scrollStatus;
    setScrollStatus({
      isTop: window.scrollY === 0,
      isScrollDown: oldScrollY < window.scrollY,
      oldScrollY: window.scrollY,
    });
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
  return (
    <ScrollContext.Provider
      value={scrollStatus}
    >
      {children}
    </ScrollContext.Provider>
  );
};

export const ScrollConsumer = ScrollContext.Consumer;
