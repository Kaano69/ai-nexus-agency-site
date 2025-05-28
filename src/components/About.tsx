
import React from 'react';
import { Users, Target, Lightbulb, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'Unternehmen durch innovative KI-Lösungen zu befähigen, ihre Effizienz zu maximieren und Wettbewerbsvorteile zu schaffen.'
    },
    {
      icon: Lightbulb,
      title: 'Vision',
      description: 'Eine Zukunft, in der jedes Unternehmen das volle Potenzial künstlicher Intelligenz nutzt, um nachhaltigen Erfolg zu erzielen.'
    },
    {
      icon: Award,
      title: 'Werte',
      description: 'Innovation, Qualität, Vertrauen und partnerschaftliche Zusammenarbeit stehen im Mittelpunkt unseres Handelns.'
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Mueller',
      role: 'CEO & KI-Strategin',
      description: 'Expertin für maschinelles Lernen mit 10+ Jahren Erfahrung in der Entwicklung von KI-Agenten.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Marcus Weber',
      role: 'CTO & Bot-Entwickler',
      description: 'Spezialist für Automatisierung und intelligente Systeme mit Fokus auf Prozessoptimierung.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Lisa Chen',
      role: 'Lead Data Scientist',
      description: 'Expertin für Datenanalyse und KI-Modellierung mit Schwerpunkt auf Business Intelligence.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Über <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AI-Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wir sind ein junges, dynamisches Team von KI-Experten, das Unternehmen dabei hilft, 
            durch innovative Automatisierung und intelligente KI-Agenten ihre Effizienz zu steigern.
          </p>
        </div>

        {/* Company Story */}
        <div className="mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Unsere Geschichte</h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Gegründet 2023 mit der Vision, künstliche Intelligenz für Unternehmen jeder Größe 
                    zugänglich zu machen. Wir erkannten das immense Potenzial von KI-Agenten zur 
                    Prozessoptimierung und Effizienzsteigerung.
                  </p>
                  <p>
                    Unser Team kombiniert jahrelange Erfahrung in der KI-Entwicklung mit einem 
                    tiefen Verständnis für die Herausforderungen moderner Unternehmen. Wir glauben 
                    daran, dass Automatisierung nicht nur Kosten spart, sondern auch Mitarbeitern 
                    ermöglicht, sich auf wertschöpfende Tätigkeiten zu konzentrieren.
                  </p>
                </div>
                
                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-blue-600">50+</div>
                    <div className="text-gray-600">Erfolgreiche Projekte</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600">95%</div>
                    <div className="text-gray-600">Kundenzufriedenheit</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Team bei der Arbeit" 
                  className="rounded-xl shadow-lg"
                />
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-lg shadow-lg">
                  <Users className="w-6 h-6 mb-2" />
                  <div className="font-semibold">Innovation & Teamwork</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Was uns <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">antreibt</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Unser <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expertenteam</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h4>
                  <div className="text-blue-600 font-medium mb-4">{member.role}</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Bereit für die KI-Revolution?
            </h3>
            <p className="mb-6 opacity-90 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam herausfinden, wie KI-Agenten und intelligente Automatisierung 
              Ihr Unternehmen auf das nächste Level bringen können.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105">
              Jetzt Kontakt aufnehmen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
