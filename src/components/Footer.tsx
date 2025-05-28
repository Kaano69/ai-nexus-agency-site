
import React from 'react';
import { Bot, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">AI-Solutions</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Ihre Experten für KI-Agenten, intelligente Automatisierung und 
              Prozessoptimierung. Steigern Sie Ihre Effizienz mit künstlicher Intelligenz.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Unsere Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">KI-Agenten Entwicklung</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Chatbots & Automatisierung</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Prozessoptimierung</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Datenanalyse & KI</a></li>
              <li><a href="#" className="hover:text-white transition-colors">KI-Beratung</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Unternehmen</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">Über uns</Link></li>
              <li><Link to="/cases" className="hover:text-white transition-colors">Referenzen</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Karriere</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Presse</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3" />
                <span>kontakt@ai-solutions.de</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3" />
                <span>+49 (0) 30 12345678</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 mt-1" />
                <span>
                  Technologiepark 15<br />
                  10115 Berlin, Deutschland
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 AI-Solutions. Alle Rechte vorbehalten.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
              <a href="#" className="hover:text-white transition-colors">Impressum</a>
              <a href="#" className="hover:text-white transition-colors">AGB</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>

        {/* Keywords for SEO */}
        <div className="hidden">
          KI-Agenten, Bots, Automatisierung, Effizienzsteigerung, Prozessoptimierung, 
          Künstliche Intelligenz für Unternehmen, KI-Beratung, Workflow-Automatisierung
        </div>
      </div>
    </footer>
  );
};

export default Footer;
