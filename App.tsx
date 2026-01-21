
import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import FeedbackForm from './components/FeedbackForm';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import TeamPage from './pages/TeamPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage'; // Import the new component
import ContactPage from './pages/ContactPage';
import FaqPage from './pages/FaqPage';
import HelpSupportPage from './pages/HelpSupportPage';
import IsoPage from './pages/IsoPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import AffiliateProgramPage from './pages/AffiliateProgramPage';


const App: React.FC = () => {
  return (
    <div className="bg-light text-dark font-sans">
      <ScrollToTop />
      <Header />
      <main className="min-h-screen pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Navigate to="/services/custom-software-dev" replace />} />
          <Route path="/services/:categoryId" element={<ServicesPage />} />
          <Route path="/service/:id" element={<ServiceDetailPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPostPage />} /> {/* Add new route */}
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/help-support" element={<HelpSupportPage />} />
          <Route path="/iso-certification" element={<IsoPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
          <Route path="/affiliate-program" element={<AffiliateProgramPage />} />
        </Routes>
      </main>
      <ChatBot />
      <FeedbackForm />
      <Footer />
    </div>
  );
};

export default App;