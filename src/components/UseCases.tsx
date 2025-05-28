
import React from 'react';
import { Building2, ShoppingCart, Heart, Truck, Users, TrendingUp, Clock, DollarSign } from 'lucide-react';

const UseCases = () => {
  const cases = [
    {
      icon: Building2,
      industry: 'Finanzdienstleistungen',
      title: 'Automatisierte Kreditprüfung',
      challenge: 'Manuelle Bearbeitung von Kreditanträgen dauerte 5-7 Tage',
      solution: 'KI-Agent für automatisierte Risikobewertung und Dokumentenanalyse',
      results: [
        { icon: Clock, text: 'Bearbeitungszeit: 2 Stunden' },
        { icon: TrendingUp, text: 'Effizienzsteigerung: 90%' },
        { icon: DollarSign, text: 'Kosteneinsparung: 70%' }
      ]
    },
    {
      icon: ShoppingCart,
      industry: 'E-Commerce',
      title: 'Intelligenter Kundenservice-Bot',
      challenge: 'Überlasteter Kundensupport mit langen Wartezeiten',
      solution: 'KI-Chatbot für 24/7 Kundensupport mit natürlicher Sprachverarbeitung',
      results: [
        { icon: Users, text: 'Kundenzufriedenheit: +45%' },
        { icon: Clock, text: 'Antwortzeit: Sofort' },
        { icon: TrendingUp, text: 'Auflösungsrate: 85%' }
      ]
    },
    {
      icon: Heart,
      industry: 'Gesundheitswesen',
      title: 'Patientendaten-Management',
      challenge: 'Zeitaufwändige manuelle Erfassung und Analyse von Patientendaten',
      solution: 'KI-System für automatische Dokumentenverarbeitung und Trend-Analyse',
      results: [
        { icon: Clock, text: 'Zeitersparnis: 80%' },
        { icon: TrendingUp, text: 'Genauigkeit: 98%' },
        { icon: Users, text: 'Mehr Zeit für Patienten' }
      ]
    },
    {
      icon: Truck,
      industry: 'Logistik',
      title: 'Optimierte Routenplanung',
      challenge: 'Ineffiziente Lieferrouten führten zu hohen Kosten',
      solution: 'KI-Agent für dynamische Routenoptimierung und Vorhersage-Algorithmen',
      results: [
        { icon: DollarSign, text: 'Kraftstoffeinsparung: 35%' },
        { icon: Clock, text: 'Lieferzeit: -25%' },
        { icon: TrendingUp, text: 'Kundenzufriedenheit: +30%' }
      ]
    }
  ];

  return (
    <section id="cases" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Erfolgreiche <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Use Cases</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entdecken Sie, wie unsere KI-Agenten und Automatisierungslösungen bereits 
            anderen Unternehmen zu außergewöhnlichen Effizienzsteigerungen verholfen haben.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {cases.map((useCase, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg mr-4">
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm font-medium text-blue-600 uppercase tracking-wide">{useCase.industry}</div>
                  <h3 className="text-xl font-bold text-gray-900">{useCase.title}</h3>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Herausforderung:</h4>
                  <p className="text-gray-600">{useCase.challenge}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">KI-Lösung:</h4>
                  <p className="text-gray-600">{useCase.solution}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Ergebnisse:</h4>
                  <div className="grid grid-cols-1 gap-3">
                    {useCase.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                        <result.icon className="w-5 h-5 text-green-600 mr-3" />
                        <span className="text-gray-700 font-medium">{result.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold text-center mb-8">
              Beeindruckende Ergebnisse durch KI-Automatisierung
            </h3>
            
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="opacity-90">Durchschnittliche Effizienzsteigerung</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">60%</div>
                <div className="opacity-90">Kosteneinsparung im Durchschnitt</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="opacity-90">Verfügbarkeit der KI-Agenten</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">98%</div>
                <div className="opacity-90">Genauigkeit bei Automatisierung</div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Was unsere <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Kunden sagen</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="mb-6">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-600 italic">
                  "Die KI-Agenten haben unsere Prozessoptimierung revolutioniert. Wir sparen täglich 
                  8 Stunden Arbeitszeit und können uns auf strategische Aufgaben konzentrieren."
                </p>
              </div>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                  alt="Thomas Schmidt" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">Thomas Schmidt</div>
                  <div className="text-gray-600 text-sm">Geschäftsführer, TechCorp GmbH</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="mb-6">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-600 italic">
                  "Unglaubliche Effizienzsteigerung! Der Chatbot beantwortet 85% aller Kundenanfragen 
                  automatisch. Unsere Mitarbeiter können sich auf komplexere Fälle fokussieren."
                </p>
              </div>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" 
                  alt="Maria Weber" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">Maria Weber</div>
                  <div className="text-gray-600 text-sm">Leiterin Kundenservice, OnlineShop AG</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ihr Erfolg ist unser nächstes Projekt
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam analysieren, wie KI-Agenten und intelligente Automatisierung 
              auch in Ihrem Unternehmen für eine drastische Effizienzsteigerung sorgen können.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Kostenlose Potentialanalyse
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
