'use client';

import Script from 'next/script';

export function KrakensAnalytics() {
  return (
    <Script
      src="https://krakens.nesohq.org/krakens.js"
      strategy="afterInteractive"
      onLoad={() => {
        if (typeof window !== 'undefined' && (window as any).Krakens) {
          (window as any).Krakens.init('hrd_2f181a4d20e8cfa185961c53d1f5fd6ad55b53ad5f21cf66ce3478ada571f0ae');
        }
      }}
    />
  );
}
