import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ServicesPage from './components/pages/ServicesPage';
import ProductsPage from './components/pages/ProductsPage';
import CareersPage from './components/pages/CareersPage';
import ContactPage from './components/pages/ContactPage';
import KnowledgeHubPage from './components/pages/KnowledgeHubPage';
import ConsultantModal from './components/ConsultantModal';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [isConsultantModalOpen, setConsultantModalOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return <HomePage />;
      case Page.About:
        return <AboutPage />;
      case Page.Expertise:
        return <ServicesPage />;
      case Page.OurWork:
        return <ProductsPage />;
      case Page.KnowledgeHub:
        return <KnowledgeHubPage />;
      case Page.Careers:
        return <CareersPage />;
      case Page.Contact:
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="bg-aeonsbyte-dark text-aeonsbyte-light-gray min-h-screen flex flex-col">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} openConsultantModal={() => setConsultantModalOpen(true)} />
      <ConsultantModal isOpen={isConsultantModalOpen} onClose={() => setConsultantModalOpen(false)} />
    </div>
  );
};

export default App;