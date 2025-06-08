
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Cookies = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Cookie-Richtlinie</span>
            </h1>

            <div className="space-y-8 text-gray-600">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Was sind Cookies?</h2>
                <p>Cookies sind kleine Textdateien, die von Ihrem Webbrowser auf Ihrem Endgerät zur Speicherung bestimmter Informationen abgelegt werden. Durch die gespeicherten und zurückgesandten Informationen erkennt die jeweilige Webseite, dass Sie diese mit dem Browser Ihres Endgeräts bereits aufgerufen und besucht haben.</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Warum verwenden wir Cookies?</h2>
                <p>Diese Informationen nutzen wir, um Ihnen die Webseite gemäß Ihren Präferenzen optimal gestalten und anzeigen zu können. Dabei wird lediglich das Cookie selbst auf Ihrem Endgerät identifiziert. Eine Speicherung von personenbezogenen Daten erfolgt nur nach Ihrer ausdrücklichen Zustimmung oder wenn dies technisch unbedingt erforderlich ist, um den von Ihnen gewünschten Dienst nutzen zu können.</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Arten von Cookies</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Technisch notwendige Cookies</h3>
                    <p>Diese Cookies sind für die ordnungsgemäße Funktion der Website erforderlich und können daher nicht deaktiviert werden. Sie werden normalerweise nur als Reaktion auf von Ihnen durchgeführte Aktionen gesetzt, die einer Anforderung von Diensten entsprechen, wie z.B. das Festlegen Ihrer Datenschutzeinstellungen, das Anmelden oder das Ausfüllen von Formularen.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Performance-Cookies</h3>
                    <p>Diese Cookies sammeln Informationen darüber, wie Besucher unsere Website nutzen, z.B. welche Seiten am häufigsten besucht werden und ob Benutzer Fehlermeldungen von Webseiten erhalten. Diese Cookies sammeln keine Informationen, die einen Besucher identifizieren. Alle von diesen Cookies gesammelten Informationen werden aggregiert und sind daher anonym.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Funktionalitäts-Cookies</h3>
                    <p>Diese Cookies ermöglichen es der Website, erweiterte Funktionalität und Personalisierung bereitzustellen. Sie können von uns oder von Drittanbietern gesetzt werden, deren Dienste wir auf unseren Seiten hinzugefügt haben.</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Cookie-Verwaltung</h2>
                <p>Sie können Cookies in Ihrem Browser verwalten und löschen. Beachten Sie jedoch, dass das Deaktivieren bestimmter Cookies die Funktionalität und das Benutzererlebnis dieser Website beeinträchtigen kann.</p>
                
                <div className="mt-4 space-y-2">
                  <p><strong>Chrome:</strong> Einstellungen → Erweitert → Datenschutz und Sicherheit → Cookies und andere Website-Daten</p>
                  <p><strong>Firefox:</strong> Einstellungen → Datenschutz & Sicherheit → Cookies und Website-Daten</p>
                  <p><strong>Safari:</strong> Einstellungen → Datenschutz → Cookies und Website-Daten verwalten</p>
                  <p><strong>Edge:</strong> Einstellungen → Cookies und Websiteberechtigungen → Cookies und gespeicherte Daten</p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Ihre Rechte</h2>
                <p>Sie haben das Recht, Ihre Einwilligung zur Verwendung von Cookies jederzeit zu widerrufen. Sie können dies tun, indem Sie Ihre Browser-Einstellungen ändern oder uns über die im Impressum angegebenen Kontaktdaten kontaktieren.</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Kontakt</h2>
                <p>Wenn Sie Fragen zu unserer Verwendung von Cookies haben, können Sie uns gerne kontaktieren:</p>
                <div className="mt-2 space-y-1">
                  <p>E-Mail: kontakt@pk-prozessautomatisierung.de</p>
                  <p>Telefon: +49 (0) 6224 9999999</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Stand: Januar 2025
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cookies;
