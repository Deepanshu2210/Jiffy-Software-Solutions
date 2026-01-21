import React from 'react';
import { Link } from 'react-router-dom';

const SupportCard: React.FC<{ title: string; description: string; linkTo: string; linkText: string; icon: React.ReactNode }> = ({ title, description, linkTo, linkText, icon }) => (
    <div className="bg-white rounded-lg shadow-lg p-8 text-center flex flex-col items-center">
        <div className="bg-accent text-white rounded-full p-4 mb-4">
            {icon}
        </div>
        <h3 className="text-2xl font-bold text-dark mb-3">{title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{description}</p>
        <Link to={linkTo} className="bg-primary text-white font-semibold py-2 px-6 rounded-full hover:bg-secondary transition-colors">
            {linkText}
        </Link>
    </div>
);

const HelpSupportPage: React.FC = () => {
    return (
        <div className="animate-fade-in-up -mt-20">
            <header
                className="relative text-white flex items-center justify-center text-center overflow-hidden pt-32 pb-20"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center -z-10"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1553775282-20af8077921a?q=80&w=1920&auto=format&fit=crop')` }}
                />
                <div className="absolute inset-0 bg-primary/70 -z-10"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-bold">Help & Support</h1>
                    <p className="mt-4 text-lg max-w-3xl mx-auto">
                        We're here to help. Find the resources you need to get the most out of our services.
                    </p>
                </div>
            </header>
            
            <section className="py-20 bg-light">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                         <SupportCard 
                            title="FAQs" 
                            description="Find answers to common questions about our services, processes, and company."
                            linkTo="/faq"
                            linkText="View FAQs"
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.79 4 4 0 1.105-.448 2.105-1.172 2.828a4 4 0 01-2.828 1.172A4.015 4.015 0 018.228 13c0-1.105.448-2.105 1.172-2.828A4 4 0 0112 9.172c-1.742 0-3.223.835-3.772 2zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" /></svg>}
                        />
                         <SupportCard 
                            title="Contact Support" 
                            description="Have a specific issue or question? Get in touch with our dedicated support team."
                            linkTo="/contact"
                            linkText="Contact Us"
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                        />
                         <SupportCard 
                            title="Documentation" 
                            description="Explore our technical documentation, guides, and API references (coming soon)."
                            linkTo="#"
                            linkText="Browse Docs"
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HelpSupportPage;