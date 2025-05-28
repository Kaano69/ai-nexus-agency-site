
import React from 'react';
import Navigation from '../components/Navigation';
import UseCases from '../components/UseCases';
import Footer from '../components/Footer';

const CasesPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <UseCases />
      </div>
      <Footer />
    </div>
  );
};

export default CasesPage;
