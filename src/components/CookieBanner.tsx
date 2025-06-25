
import React, { useState, useEffect } from 'react';
import { Cookie, Settings, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from './ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { Checkbox } from './ui/checkbox';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false,
  });

  useEffect(() => {
    // Prüfen ob bereits eine Entscheidung getroffen wurde
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowBanner(true);
    } else {
      // Laden der gespeicherten Präferenzen
      const savedPreferences = localStorage.getItem('cookiePreferences');
      if (savedPreferences) {
        setPreferences(JSON.parse(savedPreferences));
      }
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('cookieConsent', 'customized');
    localStorage.setItem('cookiePreferences', JSON.stringify(prefs));
    console.log('Cookie-Präferenzen gespeichert:', prefs);
    setShowBanner(false);
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    savePreferences(allAccepted);
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    };
    savePreferences(onlyNecessary);
  };

  const handleSaveCustom = () => {
    savePreferences(preferences);
  };

  const updatePreference = (key: keyof CookiePreferences, value: boolean) => {
    setPreferences(prev => ({
      ...prev,
      [key]: value
    }));
  };

  if (!showBanner) {
    return null;
  }

  if (showCustomize) {
    return (
      <div className="fixed bottom-4 left-4 bg-white border border-gray-200 shadow-lg z-50 p-6 rounded-lg max-w-md">
        <div className="flex items-start gap-3 mb-4">
          <Settings className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 mb-2">Cookie-Einstellungen anpassen</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Wählen Sie aus, welche Cookies Sie zulassen möchten. Sie können diese Einstellungen jederzeit ändern.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 text-sm">Notwendige Cookies</h4>
                <p className="text-xs text-gray-500 mt-1">
                  Erforderlich für die Grundfunktionen der Website
                </p>
              </div>
              <Checkbox 
                checked={preferences.necessary} 
                disabled={true}
                className="mt-1"
              />
            </div>

            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 text-sm">Analyse-Cookies</h4>
                <p className="text-xs text-gray-500 mt-1">
                  Helfen uns zu verstehen, wie Besucher unsere Website nutzen
                </p>
              </div>
              <Checkbox 
                checked={preferences.analytics}
                onCheckedChange={(checked) => updatePreference('analytics', !!checked)}
                className="mt-1"
              />
            </div>

            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 text-sm">Marketing-Cookies</h4>
                <p className="text-xs text-gray-500 mt-1">
                  Ermöglichen personalisierte Werbung und Inhalte
                </p>
              </div>
              <Checkbox 
                checked={preferences.marketing}
                onCheckedChange={(checked) => updatePreference('marketing', !!checked)}
                className="mt-1"
              />
            </div>

            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 text-sm">Funktionale Cookies</h4>
                <p className="text-xs text-gray-500 mt-1">
                  Speichern Ihre Präferenzen und Einstellungen
                </p>
              </div>
              <Checkbox 
                checked={preferences.functional}
                onCheckedChange={(checked) => updatePreference('functional', !!checked)}
                className="mt-1"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-2 mt-6">
          <Button
            variant="outline"
            onClick={() => setShowCustomize(false)}
            className="text-gray-600 border-gray-300 hover:bg-gray-50 text-xs px-3 py-1 h-auto flex-1"
          >
            Zurück
          </Button>
          <Button
            onClick={handleSaveCustom}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-xs px-3 py-1 h-auto flex-1"
          >
            Speichern
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 left-4 bg-white border border-gray-200 shadow-lg z-50 p-4 rounded-lg max-w-sm">
      <div className="flex items-start gap-3 mb-3">
        <Cookie className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
        <div className="flex-1">
          <p className="text-gray-700 text-sm leading-relaxed">
            Wir verwenden Cookies und ähnliche Technologien, um Ihnen eine optimale Nutzererfahrung zu bieten, unsere Website kontinuierlich zu verbessern und Ihnen relevante Inhalte anzuzeigen. Dazu gehören notwendige Cookies für den Betrieb der Website, Analyse-Cookies zur Verbesserung unserer Services und Marketing-Cookies für personalisierte Werbung.
          </p>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={handleRejectAll}
            className="text-gray-600 border-gray-300 hover:bg-gray-50 text-xs px-3 py-1 h-auto flex-1"
          >
            Nur notwendige
          </Button>
          <Button
            onClick={handleAcceptAll}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-xs px-3 py-1 h-auto flex-1"
          >
            Alle akzeptieren
          </Button>
        </div>
        <Button
          variant="outline"
          onClick={() => setShowCustomize(true)}
          className="w-full text-gray-600 border-gray-300 hover:bg-gray-50 text-xs px-3 py-1 h-auto"
        >
          <Settings className="h-3 w-3 mr-1" />
          Anpassen
        </Button>
      </div>
    </div>
  );
};

export default CookieBanner;
