
import React, { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';
import { Button } from './ui/button';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Prüfen ob bereits eine Entscheidung getroffen wurde
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 bg-white border border-gray-200 shadow-lg z-50 p-4 rounded-lg max-w-sm">
      <div className="flex items-start gap-3 mb-3">
        <Cookie className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
        <div className="flex-1">
          <p className="text-gray-700 text-sm leading-relaxed">
            Wir verwenden Cookies für eine bessere Nutzererfahrung. Akzeptieren Sie alle Cookies?
          </p>
        </div>
      </div>
      
      <div className="flex gap-2">
        <Button
          variant="outline"
          onClick={handleReject}
          className="text-gray-600 border-gray-300 hover:bg-gray-50 text-xs px-3 py-1 h-auto"
        >
          Ablehnen
        </Button>
        <Button
          onClick={handleAccept}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-xs px-3 py-1 h-auto"
        >
          Akzeptieren
        </Button>
      </div>
    </div>
  );
};

export default CookieBanner;
