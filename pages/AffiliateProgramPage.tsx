
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BenefitCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 transform hover:-translate-y-1 group">
        <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
);

const StepCard: React.FC<{ number: string; title: string; description: string }> = ({ number, title, description }) => (
    <div className="relative pl-4 md:pl-0 md:text-center group">
        <div className="md:mx-auto w-16 h-16 bg-white border-2 border-primary/10 text-primary text-2xl font-bold rounded-full flex items-center justify-center mb-6 shadow-sm z-10 group-hover:border-accent group-hover:text-accent transition-all duration-300">
            {number}
        </div>
        {/* Connector Line for Desktop */}
        <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-100 -z-10"></div>
        
        <h3 className="text-xl font-bold text-dark mb-3">{title}</h3>
        <p className="text-gray-600 max-w-sm mx-auto leading-relaxed">{description}</p>
    </div>
);

const AffiliateProgramPage: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        companyName: '',
        website: '',
        promotionMethod: '',
        agreeToTerms: false
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            setSubmitted(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 1000);
    };

    return (
        <div className="animate-fade-in-up -mt-20">
            {/* Hero Section */}
            <header className="relative h-[70vh] min-h-[600px] flex items-center justify-center text-white overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center -z-10"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1920&auto=format&fit=crop')` }}
                />
                {/* Updated Gradient for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-primary/90 to-slate-900/80 -z-10"></div>
                
                <div className="container mx-auto px-4 text-center relative z-10 pt-20">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-sm mb-8 uppercase tracking-widest backdrop-blur-md">
                        Partnership Program
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
                        Partner with a Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">IT Leader</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Join our network of successful partners. Refer businesses needing premium IT services and build a substantial revenue stream.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#join-form" className="bg-accent text-white font-bold py-4 px-10 rounded-full shadow-lg shadow-accent/20 hover:bg-red-700 transition-all transform hover:-translate-y-1">
                            Become a Partner
                        </a>
                        <Link to="/contact" className="bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold py-4 px-10 rounded-full hover:bg-white hover:text-primary transition-all">
                            Contact Partner Team
                        </Link>
                    </div>
                </div>
            </header>

            {/* How It Works */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Simple Partnership Process</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">Designed for IT consultants, agencies, and business connectors.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto relative">
                        <StepCard 
                            number="01" 
                            title="Register" 
                            description="Complete the application form below to join our partner network." 
                        />
                        <StepCard 
                            number="02" 
                            title="Refer" 
                            description="Connect us with companies looking for Software Development, Cloud, or AI solutions." 
                        />
                        <StepCard 
                            number="03" 
                            title="Earn" 
                            description="Receive competitive commissions for every successful project handover." 
                        />
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
                    <svg className="absolute -left-20 top-20 w-96 h-96 text-primary" fill="currentColor" viewBox="0 0 200 200"><path d="M45,-76.4C58.9,-69.2,71.4,-59.1,81.3,-47.6C91.2,-36.1,98.6,-23.2,99.4,-9.9C100.2,3.3,94.5,17,86.4,29.3C78.3,41.6,67.8,52.5,56.1,61.7C44.5,70.9,31.7,78.4,18.1,81.8C4.5,85.2,-9.9,84.5,-23.3,80.1C-36.7,75.7,-49.1,67.6,-59.6,57.1C-70.1,46.6,-78.7,33.7,-82.6,19.7C-86.5,5.7,-85.7,-9.4,-79.5,-22.8C-73.3,-36.2,-61.7,-47.9,-49.2,-55.6C-36.7,-63.3,-23.3,-67,-10.2,-68.7C2.9,-70.4,15.8,-70.1,31.1,-83.6L45,-76.4Z" transform="translate(100 100)" /></svg>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Why Partner With JIFFY?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">We provide enterprise-grade resources that you can confidently recommend.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                        <BenefitCard 
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 10v-1m0 0c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                            title="High-Value Contracts"
                            description="IT projects often range from $10k to $100k+. Earn a percentage of substantial deal values."
                        />
                        <BenefitCard 
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                            title="Proven Delivery"
                            description="Refer with confidence. We have a track record of delivering complex solutions to global clients."
                        />
                        <BenefitCard 
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>}
                            title="Pre-Sales Support"
                            description="Leverage our technical resources and expert pre-sales team to help you close leads effectively."
                        />
                        <BenefitCard 
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                            title="Partner Success Manager"
                            description="Get direct access to a manager who understands the IT industry and helps optimize your strategy."
                        />
                        <BenefitCard 
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>}
                            title="Global Resource Pool"
                            description="Offer clients access to a vast pool of skilled developers, engineers, and AI experts worldwide."
                        />
                         <BenefitCard 
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>}
                            title="Transparent Reporting"
                            description="Track the status of your referred leads and commission payouts through clear reporting."
                        />
                    </div>
                </div>
            </section>

            {/* Registration Form Section */}
            <section id="join-form" className="py-24 bg-white relative">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                        <div className="bg-primary text-white p-8 md:p-10 text-center">
                            <h2 className="text-3xl font-bold mb-2">Partner Registration</h2>
                            <p className="text-blue-100">Fill out the form below to start referring projects.</p>
                        </div>

                        <div className="p-8 md:p-10">
                            {submitted ? (
                                <div className="text-center py-12">
                                    <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-dark mb-2">Application Received!</h3>
                                    <p className="text-gray-600 mb-8">Our partnership team will review your profile and get back to you within 24 hours.</p>
                                    <Link to="/" className="bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-secondary transition-colors">
                                        Return to Home
                                    </Link>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                            <input 
                                                type="text" 
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                required
                                                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent focus:bg-white outline-none transition-all"
                                                placeholder="John"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                            <input 
                                                type="text" 
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                required
                                                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent focus:bg-white outline-none transition-all"
                                                placeholder="Doe"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Business Email</label>
                                            <input 
                                                type="email" 
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent focus:bg-white outline-none transition-all"
                                                placeholder="john@company.com"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                            <input 
                                                type="tel" 
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent focus:bg-white outline-none transition-all"
                                                placeholder="+1 (555) 000-0000"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Company / Agency Name</label>
                                            <input 
                                                type="text" 
                                                name="companyName"
                                                value={formData.companyName}
                                                onChange={handleChange}
                                                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent focus:bg-white outline-none transition-all"
                                                placeholder="Your Company Ltd"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Website / LinkedIn Profile</label>
                                            <input 
                                                type="url" 
                                                name="website"
                                                value={formData.website}
                                                onChange={handleChange}
                                                required
                                                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent focus:bg-white outline-none transition-all"
                                                placeholder="https://..."
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Partner Type / Primary Promotion Method</label>
                                        <select 
                                            name="promotionMethod" 
                                            value={formData.promotionMethod}
                                            onChange={handleChange}
                                            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent focus:bg-white outline-none transition-all"
                                        >
                                            <option value="">Select partner type...</option>
                                            <option value="IT Consultancy">IT Consultancy</option>
                                            <option value="Digital Agency / Reseller">Digital Agency / Reseller</option>
                                            <option value="Business Consultant">Business Consultant</option>
                                            <option value="Tech Blogger / Influencer">Tech Blogger / Influencer</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>

                                    <div className="flex items-start gap-3 pt-2">
                                        <input 
                                            type="checkbox" 
                                            id="terms" 
                                            name="agreeToTerms"
                                            checked={formData.agreeToTerms}
                                            onChange={handleChange}
                                            required
                                            className="mt-1 h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                                        />
                                        <label htmlFor="terms" className="text-sm text-gray-600">
                                            I agree to the <Link to="/terms-and-conditions" className="text-primary font-medium hover:underline">Terms and Conditions</Link> and <Link to="/privacy-policy" className="text-primary font-medium hover:underline">Privacy Policy</Link>.
                                        </label>
                                    </div>

                                    <button 
                                        type="submit" 
                                        className="w-full bg-accent text-white font-bold py-4 px-8 rounded-lg hover:bg-red-700 shadow-lg hover:shadow-accent/30 transition-all transform hover:scale-[1.02]"
                                    >
                                        Submit Application
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AffiliateProgramPage;
