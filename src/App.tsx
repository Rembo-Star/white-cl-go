import { useEffect } from 'react';
import { PrelandingPage } from './components/PrelandingPage';
import { initClarity } from './utils/clarity';

export default function App() {
  useEffect(() => {
    document.title = 'Welcome';
    
    // DNS prefetch and preconnect for Clarity
    const prefetch = document.createElement('link');
    prefetch.rel = 'dns-prefetch';
    prefetch.href = 'https://www.clarity.ms';
    document.head.appendChild(prefetch);
    
    const preconnect = document.createElement('link');
    preconnect.rel = 'preconnect';
    preconnect.href = 'https://www.clarity.ms';
    preconnect.crossOrigin = 'anonymous';
    document.head.appendChild(preconnect);
    
    // Lazy load Clarity after critical render
    const timer = setTimeout(() => initClarity(), 100);
    return () => clearTimeout(timer);
  }, []);

  return <PrelandingPage />;
}