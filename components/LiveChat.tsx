
"use client";

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const LiveChat: React.FC = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Only load Tawk.to if we are not in the admin section
    if (pathname && pathname.startsWith('/admin')) {
      // If Tawk widget was previously loaded, we might want to hide it
      if ((window as any).Tawk_API && (window as any).Tawk_API.hideWidget) {
        (window as any).Tawk_API.hideWidget();
      }
      return;
    }

    // If widget exists but was hidden, show it
    if ((window as any).Tawk_API && (window as any).Tawk_API.showWidget) {
      (window as any).Tawk_API.showWidget();
      return;
    }

    // Standard Tawk.to Script Injection
    const script = document.createElement("script");
    script.async = true;
    // Using a generic placeholder for property ID - typically user would provide this
    script.src = 'https://embed.tawk.to/generic/default'; 
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    
    // Error handling for script load
    script.onerror = () => {
      console.warn("Tawk.to script failed to load. Check property ID configuration.");
    };

    document.body.appendChild(script);

    return () => {
      // Clean up if needed, though Tawk.to usually stays for the session
    };
  }, [pathname]);

  return null;
};

export default LiveChat;
