
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Form submission logic would go here
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Kontakt <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">aufnehmen</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bereit für den nächsten Schritt? Lassen Sie uns gemeinsam herausfinden, 
            wie KI-Agenten und intelligente Automatisierung Ihr Unternehmen transformieren können.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Sprechen Sie mit unseren KI-Experten
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Unser Team steht Ihnen für eine kostenlose Beratung zur Verfügung. 
                Erfahren Sie, wie unsere KI-Lösungen Ihre Prozessoptimierung und 
                Effizienzsteigerung voranbringen können.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg mr-4">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">E-Mail</div>
                  <div className="text-gray-600">kontakt@ai-solutions.de</div>
                </div>
              </div>

              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg mr-4">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Telefon</div>
                  <div className="text-gray-600">+49 (0) 30 12345678</div>
                </div>
              </div>

              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg mr-4">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Adresse</div>
                  <div className="text-gray-600">
                    Technologiepark 15<br />
                    10115 Berlin, Deutschland
                  </div>
                </div>
              </div>

              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg mr-4">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Geschäftszeiten</div>
                  <div className="text-gray-600">
                    Mo - Fr: 9:00 - 18:00 Uhr<br />
                    Sa: 10:00 - 14:00 Uhr
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Options */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
              <h4 className="font-semibold mb-4">Sofortiger Kontakt</h4>
              <div className="space-y-3">
                <button className="w-full bg-white/20 hover:bg-white/30 p-3 rounded-lg transition-all duration-300 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Live-Chat starten
                </button>
                <button className="w-full bg-white/20 hover:bg-white/30 p-3 rounded-lg transition-all duration-300 flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Rückruf anfordern
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Kostenlose KI-Beratung anfragen
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                    placeholder="Ihr vollständiger Name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                    placeholder="ihre.email@unternehmen.de"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Unternehmen
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                  placeholder="Ihr Unternehmen"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nachricht *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Beschreiben Sie Ihre Herausforderungen und wie wir Ihnen mit KI-Agenten helfen können..."
                />
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Was Sie erwartet:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Kostenlose 30-minütige Beratung</li>
                  <li>• Individuelle Potentialanalyse</li>
                  <li>• Konkrete Lösungsvorschläge</li>
                  <li>• ROI-Kalkulation für KI-Implementierung</li>
                </ul>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Kostenlose Beratung anfragen
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-500">
              Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Häufige <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Fragen</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-3">
                Wie lange dauert die Implementierung von KI-Agenten?
              </h4>
              <p className="text-gray-600">
                Je nach Komplexität zwischen 2-8 Wochen. Einfache Automatisierung 
                kann bereits in wenigen Tagen produktiv sein.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-3">
                Welche ROI kann ich erwarten?
              </h4>
              <p className="text-gray-600">
                Unsere Kunden erreichen durchschnittlich 60% Kosteneinsparung 
                und 95% Effizienzsteigerung binnen 6 Monaten.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-3">
                Ist eine Integration in bestehende Systeme möglich?
              </h4>
              <p className="text-gray-600">
                Ja, unsere KI-Lösungen sind darauf ausgelegt, nahtlos mit 
                Ihrer bestehenden IT-Infrastruktur zu funktionieren.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-3">
                Bieten Sie Schulungen für mein Team an?
              </h4>
              <p className="text-gray-600">
                Selbstverständlich! Wir bieten umfassende Schulungen und 
                kontinuierlichen Support für Ihr Team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
