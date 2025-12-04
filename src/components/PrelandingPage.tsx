import React, { useCallback } from 'react';
import { ChevronRight, Zap } from 'lucide-react';
import { trackCTAClick, trackRedirectToOffer } from '../utils/clarity';

// 🎯 CONFIGURATION: Replace with your actual landing page URL
const LANDING_URL = 'https://fresh-blrs10.com/c8212cb08';

export function PrelandingPage() {
  // Simple CTA click handler - optimized
  const handleCTAClick = useCallback(() => {
    trackCTAClick('main_continuar');
    trackRedirectToOffer();
    window.location.href = LANDING_URL;
  }, []);

  // Logo click handler
  const handleLogoClick = useCallback(() => {
    trackCTAClick('logo_chile_access');
    window.location.href = LANDING_URL;
  }, []);

  // Tag click handler
  const handleExclusivoClick = useCallback(() => {
    trackCTAClick('tag_exclusivo_hoy');
    window.location.href = LANDING_URL;
  }, []);

  return (
    <div 
      className="h-screen overflow-hidden bg-gradient-to-b from-[#0C0E12] via-[#0F111A] to-[#111827] relative flex flex-col"
      data-clarity-region="prelanding_main"
    >
      {/* Simplified background - no heavy blur */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-15%] right-[-8%] w-[700px] h-[700px] bg-[#A3F73B] opacity-[0.06] rounded-full"></div>
        <div className="absolute bottom-[-20%] left-[-15%] w-[800px] h-[800px] bg-[#27C7E6] opacity-[0.05] rounded-full"></div>
      </div>

      <style>{`
        /* Remove global cursor pointer */
        
        /* Optimized button - no heavy animations */
        .button-cta {
          background: linear-gradient(180deg, #F5FFB3 0%, #D4FF7A 15%, #A3F73B 50%, #8FE01F 85%, #7BC91A 100%);
          border: 2px solid rgba(200, 255, 94, 0.6);
          box-shadow: 0 0 20px rgba(163, 247, 59, 0.25), 0 20px 50px rgba(0, 0, 0, 0.3);
          transition: transform 0.15s ease;
          will-change: transform;
          cursor: pointer;
        }
        
        .button-cta:active {
          transform: scale(0.98);
        }
        
        /* Simple glass effect - no backdrop-filter */
        .glass-simple {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        }
        
        /* Clickable elements */
        .clickable-element {
          cursor: pointer;
          transition: opacity 0.15s ease;
        }
        
        .clickable-element:hover {
          opacity: 0.9;
        }
        
        /* Performance optimizations */
        .logo-gradient {
          background: linear-gradient(135deg, #A3F73B 0%, #27C7E6 100%);
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        }
        
        .text-shadow-sm {
          text-shadow: 0 1px 4px rgba(0,0,0,0.6);
        }
        
        .text-shadow-md {
          text-shadow: 0 2px 8px rgba(0,0,0,0.6);
        }
        
        .text-shadow-lg {
          text-shadow: 0 4px 20px rgba(0,0,0,0.7);
        }
        
        .text-shadow-glow {
          text-shadow: 0 0 18px rgba(163,247,59,0.6), 0 2px 10px rgba(0,0,0,0.7);
        }
        
        .text-shadow-cta {
          text-shadow: 0 3px 6px rgba(255,255,255,0.9), 0 -1px 3px rgba(0,0,0,0.5);
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #A3F73B 0%, #27C7E6 50%, #93FB58 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 0 20px rgba(79,212,235,0.35));
          letter-spacing: -0.02em;
        }
      `}</style>

      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <header className="px-4 py-3 sm:px-6 sm:py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={handleLogoClick}
              className="flex items-center gap-2 cursor-pointer bg-transparent border-none clickable-element"
              data-clarity-click="cta_logo"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center logo-gradient">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-[#0C0E12]" fill="currentColor" />
              </div>
              <span className="text-white text-sm sm:text-base hidden sm:block text-shadow-sm" style={{
                textShadow: '0 1px 4px rgba(0,0,0,0.6)'
              }}>BonusChile</span>
            </button>
            
            {/* Tag */}
            <button
              onClick={handleExclusivoClick}
              className="glass-simple px-3 sm:px-4 py-1.5 sm:py-2 rounded-full cursor-pointer border-none clickable-element"
              data-clarity-click="cta_exclusivo"
            >
              <span className="text-white text-xs sm:text-sm text-shadow-sm" style={{
                textShadow: '0 1px 4px rgba(0,0,0,0.6)'
              }}>
                🔥 Bono especial activo
              </span>
            </button>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto w-full text-center">

            {/* Headline - no animations */}
            <div className="mb-6 sm:mb-8">
              <h1 className="text-white leading-tight mb-3 sm:mb-4">
                <span className="block text-3xl sm:text-5xl lg:text-6xl mb-2 sm:mb-3 text-shadow-lg" style={{
                  textShadow: '0 4px 20px rgba(0,0,0,0.7)',
                  letterSpacing: '-0.02em'
                }}>
                  <span 
                    onClick={handleCTAClick}
                    className="clickable-element inline-block"
                    data-clarity-click="cta_slot_emoji"
                  >
                    🎯
                  </span> Tu oportunidad está lista
                </span>
                <span className="block text-4xl sm:text-6xl lg:text-7xl gradient-text">
                  Multiplica tu diversión + 100 Rondas Gratis
                </span>
              </h1>
              <p className="text-white/95 text-base sm:text-xl lg:text-2xl max-w-2xl mx-auto px-4 mt-4 sm:mt-5 text-shadow-md" style={{
                textShadow: '0 2px 12px rgba(0,0,0,0.6)',
                lineHeight: '1.4'
              }}>
                Accede a beneficios exclusivos hasta $100.000 CLP<br className="hidden sm:block" />
                <span className="text-white/80 text-sm sm:text-lg">Disponible solo para usuarios chilenos verificados</span>
              </p>
              
              {/* Subheadline - clickable */}
              <p
                onClick={handleCTAClick}
                className="clickable-element text-[#A3F73B] text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4 mt-4 sm:mt-5 flex items-center justify-center gap-2 text-shadow-glow"
                style={{
                  fontWeight: '500'
                }}
                data-clarity-click="cta_gift_line"
              >
                🎁 Obtén 50 Rondas Gratis + Bono de bienvenida hasta $100.000 CLP
              </p>
            </div>

            {/* CTA Section - no animations */}
            <div className="mb-6 sm:mb-8">
              <div className="relative mb-5 sm:mb-6">
                {/* Main CTA Button */}
                <button
                  onClick={handleCTAClick}
                  className="button-cta px-14 sm:px-28 lg:px-36 py-5 sm:py-7 lg:py-8 rounded-2xl sm:rounded-3xl text-xl sm:text-3xl lg:text-4xl w-full sm:w-auto max-w-3xl mx-auto block overflow-hidden cursor-pointer touch-manipulation text-[#0C0E12] relative"
                  style={{ fontWeight: '600' }}
                  data-clarity-click="cta_main"
                >
                  <span className="relative flex items-center justify-center gap-3 sm:gap-4 text-shadow-cta" style={{
                    textShadow: '0 3px 6px rgba(255,255,255,0.9), 0 -1px 3px rgba(0,0,0,0.5)'
                  }}>
                    <span className="tracking-wide">Activar Mi Bono Ahora</span>
                    <ChevronRight className="w-7 h-7 sm:w-9 sm:h-9 lg:w-11 lg:h-11" style={{
                      filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.7))'
                    }} />
                  </span>
                </button>
              </div>
              
              {/* Social proof - clickable */}
              <div 
                onClick={handleCTAClick}
                className="mb-4 sm:mb-5 clickable-element inline-block"
                data-clarity-click="cta_social_proof"
              >
                <p className="text-white/85 text-sm sm:text-base text-shadow-md" style={{
                  textShadow: '0 2px 8px rgba(0,0,0,0.6)'
                }}>
                  <span className="text-[#27C7E6]">⭐</span> Más de 12.000 usuarios chilenos ya disfrutaron esta semana
                </p>
              </div>

              {/* Benefits - clickable */}
              <div className="flex flex-col items-center justify-center gap-3">
                <div 
                  onClick={handleCTAClick}
                  className="clickable-element glass-simple px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-white/75 text-xs sm:text-sm" 
                  style={{
                    textShadow: '0 1px 4px rgba(0,0,0,0.5)',
                    maxWidth: '85%'
                  }}
                  data-clarity-click="cta_benefits"
                >
                  💳 Acepta Webpay · Retiros 24hrs · Depósito desde $5.000
                </div>
                
                {/* Urgency tag */}
                <div className="text-white/60 text-xs sm:text-sm flex items-center gap-2">
                  ⏰ Oferta válida por tiempo limitado
                </div>
              </div>
            </div>

          </div>
        </main>

        {/* Footer - clickable */}
        <footer 
          onClick={handleCTAClick}
          className="clickable-element px-4 sm:px-6 lg:px-8 py-3 sm:py-4"
          data-clarity-click="cta_footer"
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-1.5 sm:mb-2 text-white/50 text-[10px] sm:text-xs">
              <div>18+</div>
              <div className="w-1 h-1 rounded-full bg-white/30"></div>
              <div>Entretenimiento responsable</div>
              <div className="w-1 h-1 rounded-full bg-white/30"></div>
              <div>Plataforma verificada en Chile</div>
            </div>
            <p className="text-white/40 text-[9px] sm:text-[11px] max-w-2xl mx-auto">
              Contenido de entretenimiento para adultos (18+). No garantiza ningún resultado.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}