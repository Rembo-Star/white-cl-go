// MS Clarity Analytics Helper - Optimized
// Project: Chilean Casino Prelanding
// Clarity ID: ufq3clrf2z

declare global {
  interface Window {
    clarity?: (action: string, key: string, value: any) => void;
  }
}

/**
 * Initialize MS Clarity tracking (lazy loaded)
 */
export function initClarity(): void {
  if (typeof window === 'undefined' || window.clarity) return;

  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.innerHTML = `
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/ufq3clrf2z";
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "ufq3clrf2z");
  `;
  document.head.appendChild(script);
  
  // Check if Clarity loaded successfully
  setTimeout(() => {
    if (window.clarity) {
      console.log('✅ MS Clarity loaded successfully! Project ID: ufq3clrf2z');
    } else {
      console.warn('⚠️ MS Clarity failed to load. Check: 1) AdBlock disabled, 2) Internet connection, 3) Firewall settings');
    }
  }, 2000);
}

/**
 * Track CTA click (most important event)
 */
export function trackCTAClick(ctaName: string): void {
  if (typeof window !== 'undefined') {
    if (window.clarity) {
      window.clarity('set', `cta_${ctaName}`, true);
      console.log('✅ Clarity tracked:', `cta_${ctaName}`);
    } else {
      console.warn('⚠️ Clarity not loaded yet for:', `cta_${ctaName}`);
      // Queue the event for when Clarity loads
      setTimeout(() => {
        if (window.clarity) {
          window.clarity('set', `cta_${ctaName}`, true);
          console.log('✅ Clarity tracked (delayed):', `cta_${ctaName}`);
        }
      }, 500);
    }
  }
}

/**
 * Track redirect to main offer
 */
export function trackRedirectToOffer(source: string = 'unknown'): void {
  if (typeof window !== 'undefined') {
    if (window.clarity) {
      window.clarity('set', `redirect_${source}`, true);
      console.log('✅ Clarity tracked redirect:', `redirect_${source}`);
    } else {
      console.warn('⚠️ Clarity not loaded yet for redirect:', `redirect_${source}`);
    }
  }
}