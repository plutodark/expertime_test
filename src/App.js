import React from 'react';
import { SizeProvider } from './contexts/SizeContext';
import { ScrollProvider } from './contexts/ScrollContext';
import HomePage from './pages/Home';

function App() {
  return (
    <ScrollProvider>
      <SizeProvider>
        <HomePage />
      </SizeProvider>
    </ScrollProvider>
  );
}

export default App;
