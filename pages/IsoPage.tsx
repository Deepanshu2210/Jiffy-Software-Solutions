
import React, { useState } from 'react';
import TypingEffect from '../components/TypingEffect';

// Define the data for the certifications locally
const certifications = [
    {
        title: "ISO 9001 (2015)",
        standard: "Quality Management System",
        description: "This certification demonstrates our commitment to consistently providing products and services that meet customer and regulatory requirements, and our dedication to continuous improvement.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        bgGradient: 'from-primary to-secondary',
    },
    {
        title: "ISO 20000-1 (2018)",
        standard: "IT Service Management",
        description: "This standard validates that our IT service management processes are aligned with international best practices, ensuring efficient, reliable, and high-quality IT services for our clients.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
        ),
        bgGradient: 'from-accent to-red-700',
    },
    {
        title: "ISO 27001 (2022)",
        standard: "Information Security Management",
        description: "This certification confirms that we have a systematic approach to managing sensitive company and customer information, ensuring its confidentiality, integrity, and availability through robust security controls.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.955a11.955 11.955 0 0118-8.618c0-1.033-.134-2.033-.382-3.016z" />
            </svg>
        ),
        bgGradient: 'from-dark to-gray-800',
    }
];

const IsoPage: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="animate-fade-in-up -mt-20">
             <header
                className="relative text-white flex items-center justify-center text-center overflow-hidden pt-32 pb-20"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center -z-10"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=1920&auto=format&fit=crop')` }}
                />
                <div className="absolute inset-0 bg-primary/70 -z-10"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-bold">ISO Certification</h1>
                    <TypingEffect text="JIFFY Software Solutions is proud to be certified against internationally recognized standards, ensuring excellence in everything we do." />
                </div>
            </header>

            <section className="py-20 bg-light">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="flex flex-col md:flex-row md:h-[32rem] rounded-xl overflow-hidden shadow-2xl bg-dark">
                        {certifications.map((cert, index) => (
                            <div
                                key={cert.title}
                                onMouseEnter={() => setActiveIndex(index)}
                                className={`
                                    relative p-8 text-white cursor-pointer transition-all duration-700 ease-in-out overflow-hidden
                                    ${activeIndex === index ? 'flex-grow-[4]' : 'flex-grow-[1]'}
                                    bg-gradient-to-br ${cert.bgGradient}
                                `}
                            >
                                <div className="h-full flex flex-col justify-center items-center md:items-start">
                                    <div className="transition-all duration-500 mb-4">
                                      {cert.icon}
                                    </div>
                                    <div className={`
                                        transition-all duration-700 ease-in-out
                                        ${activeIndex === index ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'}
                                    `}>
                                        <h2 className="text-3xl font-extrabold">{cert.title}</h2>
                                        <h3 className="text-xl font-bold text-white/80 mt-2 mb-4">{cert.standard}</h3>
                                        <p className="text-white/90 leading-relaxed max-w-md">{cert.description}</p>
                                    </div>

                                    {/* Collapsed view title */}
                                     <div className={`
                                        absolute bottom-8 left-1/2 -translate-x-1/2 w-full text-center
                                        md:left-auto md:w-auto md:top-1/2 md:-translate-y-1/2 md:right-4 md:translate-x-0
                                        transition-opacity duration-500
                                        ${activeIndex === index ? 'opacity-0' : 'opacity-100'}
                                     `}>
                                        <h2 className="text-2xl font-bold md:transform md:-rotate-90 md:whitespace-nowrap">{cert.title}</h2>
                                     </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default IsoPage;
