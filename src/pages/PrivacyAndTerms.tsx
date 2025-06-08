
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PrivacyAndTerms = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Datenschutz & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Allgemeine Geschäftsbedingungen</span>
            </h1>

            {/* Datenschutz Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Datenschutzerklärung</h2>
              
              <div className="space-y-6 text-gray-600">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Datenschutz auf einen Blick</h3>
                  <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Datenerfassung auf unserer Website</h3>
                  <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">3. Ihre Rechte</h3>
                  <p>Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">4. Kontaktformular</h3>
                  <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">5. SSL-Verschlüsselung</h3>
                  <p>Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-bzw. TLS-Verschlüsselung.</p>
                </div>
              </div>
            </section>

            {/* AGB Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Allgemeine Geschäftsbedingungen</h2>
              
              <div className="space-y-6 text-gray-600">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Geltungsbereich</h3>
                  <p>Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen PK Prozessautomatisierung und unseren Kunden über die Erbringung von KI-Beratungs- und Entwicklungsdienstleistungen.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Vertragsschluss</h3>
                  <p>Ein Vertrag kommt durch unsere schriftliche Auftragsbestätigung oder durch Beginn der Leistungserbringung zustande. Mündliche Nebenabreden sind unwirksam.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">3. Leistungsumfang</h3>
                  <p>Der Umfang unserer Leistungen ergibt sich aus der jeweiligen Auftragsbestätigung oder dem geschlossenen Vertrag. Zusätzliche Leistungen werden gesondert berechnet.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">4. Vergütung</h3>
                  <p>Die Vergütung richtet sich nach dem vereinbarten Honorar. Sofern nicht anders vereinbart, sind unsere Rechnungen innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug zur Zahlung fällig.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">5. Gewährleistung</h3>
                  <p>Wir gewährleisten, dass unsere Leistungen mit der vereinbarten Beschaffenheit übereinstimmen und frei von Rechtsmängeln sind. Die Gewährleistungsfrist beträgt 12 Monate ab Abnahme.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">6. Haftung</h3>
                  <p>Wir haften unbeschränkt für Vorsatz und grobe Fahrlässigkeit. Für leichte Fahrlässigkeit haften wir nur bei Verletzung wesentlicher Vertragspflichten und ist der Höhe nach auf den typischen und vorhersehbaren Schaden begrenzt.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">7. Geheimhaltung</h3>
                  <p>Wir verpflichten uns, alle uns im Rahmen des Auftrags überlassenen Informationen und Daten vertraulich zu behandeln und nicht an Dritte weiterzugeben.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">8. Anwendbares Recht</h3>
                  <p>Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist Heidelberg, sofern der Kunde Vollkaufmann ist.</p>
                </div>
              </div>
            </section>

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

export default PrivacyAndTerms;
