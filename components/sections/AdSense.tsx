'use client';

import { useEffect } from 'react';
import { ANALYTICS } from '@/lib/constants';

export default function AdSense() {
  useEffect(() => {
    // Ensure we're in the browser environment
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    // Load AdSense script only after a delay to improve initial page load
    const loadAdSense = () => {
      const scriptId = `adsbygoogle-${ANALYTICS.adsenseClientId}`;
      
      // Check if script already exists
      if (document.getElementById(scriptId)) {
        return;
      }

      const script = document.createElement('script');
      script.id = scriptId;
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ANALYTICS.adsenseClientId}`;
      script.async = true;
      script.crossOrigin = 'anonymous';
      script.setAttribute('data-ad-client', ANALYTICS.adsenseClientId);
      
      // Append to head (AdSense requires it in head)
      document.head.appendChild(script);
    };

    // Delay AdSense loading to prioritize page content
    const timer = setTimeout(loadAdSense, 2000);

    return () => {
      clearTimeout(timer);
      // Cleanup on unmount
      const existingScript = document.getElementById(`adsbygoogle-${ANALYTICS.adsenseClientId}`);
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
    };
  }, []);

  return null;
}
