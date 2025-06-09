
import React from 'react';
import { Bot, MessageSquare, BarChart3, Cog, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: 'Intelligente KI-Agenten',
      description: 'Entwicklung maßgeschneiderter KI-Agenten zur Automatisierung komplexer Geschäftsprozesse und Effizienzsteigerung.',
      features: ['Prozessoptimierung', 'Kosteneinsparung bis 60%', '24/7 Verfügbarkeit']
    },
    {
      icon: MessageSquare,
      title: 'Chatbots & Kundenservice',
      description: 'Intelligente Bots für automatisierten Kundensupport mit natürlicher Sprachverarbeitung und kontinuierlichem Lernen.',
      features: ['Mehrsprachiger Support', 'Sofortige Antworten', 'Kundenzufriedenheit +40%']
    },
    {
      icon: BarChart3,
      title: 'Datenanalyse & Insights',
      description: 'KI-gestützte Analyse großer Datenmengen zur Gewinnung wertvoller Geschäftserkenntnisse und Entscheidungsunterstützung.',
      features: ['Predictive Analytics', 'Real-time Monitoring', 'Automatische Berichte']
    },
    {
      icon: Cog,
      title: 'Workflow-Automatisierung',
      description: 'Vollständige Automatisierung wiederkehrender Aufgaben und Optimierung von Arbeitsabläufen durch intelligente Systeme.',
      features: ['Zeitersparnis 80%', 'Fehlerreduktion', 'Skalierbare Lösungen']
    },
    {
      icon: Zap,
      title: 'KI-Integration',
      description: 'Nahtlose Integration von KI-Lösungen in bestehende Unternehmenssysteme und Infrastrukturen.',
      features: ['API-Schnittstellen', 'Cloud & On-Premise', 'Individueller Support']
    },
    {
      icon: Shield,
      title: 'KI-Beratung & Strategie',
      description: 'Strategische Beratung zur optimalen Nutzung von künstlicher Intelligenz für Ihre Unternehmensziele.',
      features: ['Potentialanalyse', 'Roadmap-Entwicklung', 'Change Management']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Unsere <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Leistungen</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entdecken Sie unser umfassendes Portfolio an KI-Agenten, Bots und Automatisierungslösungen 
            für maximale Effizienzsteigerung und Prozessoptimierung in Ihrem Unternehmen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 p-8 border border-gray-100 flex flex-col h-full">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg w-fit mb-6">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="mt-auto w-full bg-gray-50 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white text-gray-700 py-3 rounded-lg font-medium transition-all duration-300">
                Mehr erfahren
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Maßgeschneiderte KI-Lösungen für Ihr Unternehmen
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Jedes Unternehmen ist einzigartig. Wir entwickeln individuelle KI-Agenten und 
              Automatisierungslösungen, die perfekt zu Ihren spezifischen Anforderungen passen.
            </p>
            <Link 
              to="/contact"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Individuelle Lösung anfragen
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
