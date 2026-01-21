
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ALL_SERVICES_DATA, SERVICES_PAGE_DATA } from '../constants';
import { Service } from '../types';

// --- THEME-SPECIFIC GRAPHICS ---
const CustomSoftwareGraphic: React.FC<{ color: string }> = ({ color }) => (
    <svg width="100%" height="100%" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="30" width="160" height="100" rx="8" fill="rgba(230, 230, 240, 0.5)"/>
        <rect x="20" y="30" width="40" height="100" fill={color} style={{ opacity: 0.2 }}/>
        <line x1="70" y1="50" x2="160" y2="50" stroke={color} strokeWidth="4" strokeLinecap="round"/>
        <line x1="70" y1="65" x2="140" y2="65" stroke={color} strokeWidth="4" strokeLinecap="round" style={{ opacity: 0.6 }}/>
        <rect x="70" y="85" width="50" height="25" rx="4" fill={color} />
        <rect x="130" y="85" width="30" height="25" rx="4" fill={color} style={{ opacity: 0.4 }}/>
    </svg>
);

const CommunicationGraphic: React.FC<{ color: string }> = ({ color }) => (
    <svg width="100%" height="100%" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="75" r="50" stroke={color} strokeWidth="2" strokeDasharray="4 4"/>
        <circle cx="100" cy="75" r="10" fill={color}/>
        <path d="M100 75C60 25 60 125 100 75Z" stroke={color} strokeWidth="2" transform="rotate(45 100 75)"/>
        <path d="M100 75C140 25 140 125 100 75Z" stroke={color} strokeWidth="2" transform="rotate(-45 100 75)"/>
        <circle cx="45" cy="45" r="5" fill={color} style={{ opacity: 0.6 }}/>
        <circle cx="155" cy="45" r="5" fill={color} style={{ opacity: 0.6 }}/>
        <circle cx="45" cy="105" r="5" fill={color} style={{ opacity: 0.6 }}/>
        <circle cx="155" cy="105" r="5" fill={color} style={{ opacity: 0.6 }}/>
    </svg>
);

const AiGraphic: React.FC<{ color: string }> = ({ color }) => (
    <svg width="100%" height="100%" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M80 40 Q100 20, 120 40 T160 40" stroke={color} strokeWidth="2" fill="none"/>
        <path d="M80 110 Q100 130, 120 110 T160 110" stroke={color} strokeWidth="2" fill="none"/>
        <path d="M70 45 V105" stroke={color} strokeWidth="2" />
        <path d="M130 45 V105" stroke={color} strokeWidth="2" />
        <circle cx="50" cy="75" r="4" fill={color}/>
        <circle cx="150" cy="75" r="4" fill={color}/>
        <line x1="50" y1="75" x2="70" y2="60" stroke={color} strokeWidth="1.5"/>
        <line x1="50" y1="75" x2="70" y2="90" stroke={color} strokeWidth="1.5"/>
        <line x1="130" y1="60" x2="150" y2="75" stroke={color} strokeWidth="1.5"/>
        <line x1="130" y1="90" x2="150" y2="75" stroke={color} strokeWidth="1.5"/>
    </svg>
);

const VideoGraphic: React.FC<{ color: string }> = ({ color }) => (
    <svg width="100%" height="100%" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="30" y="30" width="140" height="90" rx="8" stroke={color} strokeWidth="2"/>
        <path d="M85 60 L125 75 L85 90 Z" fill={color}/>
        <rect x="40" y="40" width="20" height="70" fill={color} style={{ opacity: 0.1 }}/>
        <rect x="140" y="40" width="20" height="70" fill={color} style={{ opacity: 0.1 }}/>
    </svg>
);

const CloudGraphic: React.FC<{ color: string }> = ({ color }) => (
    <svg width="100%" height="100%" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M70 90 Q50 90, 50 70 Q50 50, 70 50 Q90 50, 90 70 T110 70 Q130 70, 130 90 Z" fill={color} style={{ opacity: 0.2 }}/>
        <path d="M100 80 Q90 80, 90 70 Q90 60, 100 60 Q120 60, 120 70 T140 70 Q150 70, 150 80 Q150 90, 140 90 Z" fill={color} style={{ opacity: 0.5 }}/>
        <path d="M80 60 L100 40 L120 60" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M100 40 V 110" stroke={color} strokeWidth="3" strokeLinecap="round"/>
    </svg>
);

const PlatformGraphic: React.FC<{ color: string }> = ({ color }) => (
    <svg width="100%" height="100%" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="40" y="100" width="120" height="20" rx="4" fill={color} style={{ opacity: 0.8 }}/>
        <rect x="60" y="70" width="80" height="20" rx="4" fill={color} style={{ opacity: 0.6 }}/>
        <rect x="80" y="40" width="40" height="20" rx="4" fill={color} style={{ opacity: 0.4 }}/>
    </svg>
);


// --- THEME CONFIGURATION ---
const categoryThemes = {
    'custom-software-dev': {
        heroImage: `url('https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1920&auto=format&fit=crop')`,
        accentColor: '#4338ca', // Indigo 700
        OverviewGraphic: CustomSoftwareGraphic
    },
    'enterprise-communication': {
        heroImage: `url('https://images.unsplash.com/photo-1586953208448-3151cf797f14?q=80&w=1920&auto=format&fit=crop')`,
        accentColor: '#047857', // Emerald 700
        OverviewGraphic: CommunicationGraphic
    },
    'ai-solutions': {
        heroImage: `url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1920&auto=format&fit=crop')`,
        accentColor: '#be185d', // Pink 700
        OverviewGraphic: AiGraphic
    },
    'video-platform': {
        heroImage: `url('https://images.unsplash.com/photo-1517411032315-54ef2cb484c9?q=80&w=1920&auto=format&fit=crop')`,
        accentColor: '#c2410c', // Orange 700
        OverviewGraphic: VideoGraphic
    },
    'devops-cloud': {
        heroImage: `url('https://images.unsplash.com/photo-1549451371-64aa9f7470c5?q=80&w=1920&auto=format&fit=crop')`,
        accentColor: '#52525b', // Zinc 600
        OverviewGraphic: CloudGraphic
    },
    'digital-service-platforms': {
        heroImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1920&auto=format&fit=crop')`,
        accentColor: '#1d4ed8', // Blue 700
        OverviewGraphic: PlatformGraphic
    }
};

type Theme = typeof categoryThemes[keyof typeof categoryThemes];


// --- REUSABLE ICONS ---
const DiscoveryIcon = ({ className = "h-8 w-8", style }: { className?: string; style?: React.CSSProperties }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} style={style} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>;
const DesignIcon = ({ className = "h-8 w-8", style }: { className?: string; style?: React.CSSProperties }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} style={style} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z" /></svg>;
const DevelopIcon = ({ className = "h-8 w-8", style }: { className?: string; style?: React.CSSProperties }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} style={style} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>;
const LaunchIcon = ({ className = "h-8 w-8", style }: { className?: string; style?: React.CSSProperties }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} style={style} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>;
const SupportIcon = ({ className = "h-8 w-8", style }: { className?: string; style?: React.CSSProperties }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} style={style} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;
const CheckIcon = ({ className = "h-5 w-5", style }: { className?: string; style?: React.CSSProperties }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} style={style} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>;

// New Process Icons
const AnalysisIcon = ({ className = "h-8 w-8", style }: { className?: string; style?: React.CSSProperties }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} style={style} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 21H7a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v6" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 3v4a1 1 0 001 1h4" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 13h5" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17h3" /><circle cx="17.5" cy="17.5" r="3.5" stroke="currentColor" strokeWidth="2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 20l-1.5-1.5" /></svg>;
const PrototypingIcon = ({ className = "h-8 w-8", style }: { className?: string; style?: React.CSSProperties }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} style={style} fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeWidth="2" /><line x1="3" y1="9" x2="21" y2="9" strokeWidth="2" /><line x1="9" y1="21" x2="9" y2="9" strokeWidth="2" /></svg>;
const BackendIcon = ({ className = "h-8 w-8", style }: { className?: string; style?: React.CSSProperties }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} style={style} fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" strokeWidth="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" strokeWidth="2" /><line x1="6" y1="6" x2="6" y2="6.01" strokeWidth="2" /><line x1="6" y1="18" x2="6" y2="18.01" strokeWidth="2" /></svg>;
const IntegrationIcon = ({ className = "h-8 w-8", style }: { className?: string; style?: React.CSSProperties }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} style={style} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>;
const QaIcon = ({ className = "h-8 w-8", style }: { className?: string; style?: React.CSSProperties }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} style={style} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.955a11.955 11.955 0 0118-8.618c0-1.033-.134-2.033-.382-3.016z" /></svg>;


// --- THEMED SUB-COMPONENTS ---
const Breadcrumbs: React.FC<{ category: { title: string, id: string } | undefined, service: Service }> = ({ category, service }) => (
    <nav className="text-sm text-gray-200 mb-4">
        <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
                <Link to="/" className="hover:text-white">Home</Link>
                <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 1L6 0H2v2h3.5L11 10l-5.5 8H2v2h4l1-1h1l6-8-6-8H7z"/></svg>
            </li>
            <li className="flex items-center">
                <Link to={`/services/${category?.id || 'custom-software-dev'}`} className="hover:text-white">{category?.title}</Link>
                <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 1L6 0H2v2h3.5L11 10l-5.5 8H2v2h4l1-1h1l6-8-6-8H7z"/></svg>
            </li>
            <li>
                <span className="text-white font-semibold">{service.title}</span>
            </li>
        </ol>
    </nav>
);

const ServiceHeroSection: React.FC<{ service: Service; theme: Theme; category: { title: string, id: string } | undefined }> = ({ service, theme, category }) => (
    <header className="relative h-[70vh] text-white flex items-center justify-center text-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: theme.heroImage }} />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-dark/80 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <Breadcrumbs category={category} service={service} />
            <div className="p-4 rounded-full mb-6" style={{ backgroundColor: `${theme.accentColor}40` }}>
                <div className="p-3 rounded-full" style={{ backgroundColor: theme.accentColor }}>
                    {React.cloneElement(service.icon as React.ReactElement<{ className?: string }>, { className: "h-10 w-10 text-white" })}
                </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">{service.title}</h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-200">{service.shortDescription}</p>
        </div>
    </header>
);

const ServiceOverviewSection: React.FC<{ service: Service; theme: Theme }> = ({ service, theme }) => (
    <section id="overview" className="scroll-mt-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose lg:prose-lg max-w-none text-gray-600">
                <h2 className="text-3xl font-bold text-dark mb-4">Transforming Your Business with {service.title}</h2>
                <p>{service.longDescription}</p>
            </div>
            <div className="h-64 flex items-center justify-center">
                <theme.OverviewGraphic color={theme.accentColor} />
            </div>
        </div>
    </section>
);

const KeyFeaturesSection: React.FC<{ service: Service; accentColor: string }> = ({ service, accentColor }) => (
    <section id="features">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark">Core Features</h2>
            <p className="text-gray-600 mt-2">Everything you get with our {service.title} service.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
                <div key={index} className="bg-light p-4 rounded-lg flex items-center space-x-3">
                    <div className="flex-shrink-0 rounded-full p-1" style={{ backgroundColor: `${accentColor}20` }}>
                        <CheckIcon className="h-5 w-5" style={{ color: accentColor }} />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                </div>
            ))}
        </div>
    </section>
);

const KeyBenefitsSection: React.FC<{ service: Service; accentColor: string }> = ({ service, accentColor }) => (
    <section id="benefits">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark">Key Benefits</h2>
            <p className="text-gray-600 mt-2">How our {service.title} service drives value for your business.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-1 transition-transform duration-300 flex items-start space-x-4 border-l-4" style={{ borderLeftColor: accentColor }}>
                    <div className="flex-shrink-0 text-white rounded-full p-3 mt-1" style={{ backgroundColor: accentColor }}>
                        {React.cloneElement(benefit.icon as React.ReactElement<{ className?: string }>, { className: "h-6 w-6 text-white" })}
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-dark mb-1">{benefit.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

const OurProcessSection: React.FC<{ accentColor: string }> = ({ accentColor }) => {
    const processSteps = [
        { icon: <DiscoveryIcon />, title: 'Discovery & Strategy', description: 'Understanding your goals to craft a tailored strategy.' },
        { icon: <AnalysisIcon />, title: 'Requirement Analysis', description: 'Gathering and documenting detailed requirements to ensure a clear project scope.' },
        { icon: <PrototypingIcon />, title: 'Prototyping & Wireframing', description: 'Creating interactive mockups and visual blueprints of the user interface.' },
        { icon: <DesignIcon />, title: 'UI/UX Design', description: 'Designing intuitive, user-centric interfaces for a seamless user experience.' },
        { icon: <BackendIcon />, title: 'Backend Development', description: 'Building the robust server-side logic, database, and APIs that power your application.' },
        { icon: <DevelopIcon />, title: 'Frontend Development', description: 'Bringing the user interface to life with clean, efficient, and responsive code.' },
        { icon: <IntegrationIcon />, title: 'Integration & APIs', description: 'Connecting all parts of the system and third-party services for unified functionality.' },
        { icon: <QaIcon />, title: 'Quality Assurance', description: 'Rigorous manual and automated testing for a bug-free, high-performance launch.' },
        { icon: <LaunchIcon />, title: 'Deployment & Launch', description: 'Seamlessly deploying your application to a live production environment.' },
        { icon: <SupportIcon />, title: 'Support & Iteration', description: 'Providing ongoing support, monitoring, and planning for future enhancements.' },
    ];
    const [activeStep, setActiveStep] = useState(0);
    const activeStepDetails = processSteps[activeStep];
    const HOVER_COLOR = '#bb1237';

    return (
        <section id="process">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-dark">Our Approach to Excellence</h2>
                <p className="text-gray-600 mt-2">A proven process for delivering outstanding results.</p>
            </div>
            
            <div className="relative min-h-[32rem] flex items-center justify-center">
                {/* Central Content Hub */}
                <div 
                    key={activeStep} 
                    className="absolute z-10 flex flex-col items-center justify-center text-center w-64 h-64 bg-white rounded-full shadow-2xl p-4 animate-fade-in"
                >
                    <div className="flex-shrink-0 p-3 rounded-full bg-light mb-2">
                         {React.cloneElement(activeStepDetails.icon, {
                            className: 'h-8 w-8',
                            style: { color: accentColor }
                        })}
                    </div>
                    <p className="font-bold text-sm uppercase tracking-wider" style={{ color: HOVER_COLOR }}>STEP {activeStep + 1}</p>
                    <h3 className="text-lg font-bold text-dark mt-1">{activeStepDetails.title}</h3>
                </div>

                {/* Orbiting Icons */}
                <div className="absolute w-full h-full group">
                    {processSteps.map((step, index) => (
                        <button
                            key={index}
                            onMouseEnter={() => setActiveStep(index)}
                            className={`absolute top-1/2 left-1/2 -mt-8 -ml-8 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer animate-orbit group-hover:[animation-play-state:paused]`}
                            style={{
                                animationDelay: `-${index * 3}s`, // 30s duration / 10 items = 3s delay per item
                                backgroundColor: activeStep === index ? HOVER_COLOR : 'white',
                                boxShadow: '0 4px 14px rgba(0,0,0,0.1)',
                                border: `2px solid ${activeStep === index ? HOVER_COLOR : '#e5e7eb'}`
                            }}
                            aria-label={`Step ${index + 1}: ${step.title}`}
                        >
                            {React.cloneElement(step.icon, {
                                className: 'h-7 w-7',
                                style: { color: activeStep === index ? 'white' : accentColor }
                            })}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};


const TechStackSection: React.FC<{ service: Service; accentColor: string }> = ({ service, accentColor }) => (
    <section id="tech-stack">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark">Technology Stack</h2>
            <p className="text-gray-600 mt-2">The powerful tools and technologies we use to build your solution.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
            {service.techStack.map((tech, index) => (
                <span key={index} className="font-medium py-2 px-4 rounded-md text-sm border-2" style={{ borderColor: `${accentColor}40`, backgroundColor: `${accentColor}1A`, color: accentColor }}>
                    {tech}
                </span>
            ))}
        </div>
    </section>
);

const Sidebar: React.FC<{ service: Service; accentColor: string; categoryId: string; }> = ({ service, accentColor, categoryId }) => {
    const category = SERVICES_PAGE_DATA.find(cat => cat.id === categoryId);
    const relatedServices = category ? category.services.filter(s => s.id !== service.id).slice(0, 4) : [];

    return (
    <div className="space-y-8">
        <div className="bg-gradient-to-br from-primary to-secondary text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-2">Have a Project in Mind?</h3>
            <p className="mb-6 text-gray-200">Let's build something great together.</p>
            <Link to="/contact" className="text-white font-bold py-3 px-8 rounded-full inline-block transition-transform transform hover:scale-105 shadow-md hover:shadow-lg" style={{ backgroundColor: accentColor }}>
                Get a Free Consultation
            </Link>
        </div>

        {relatedServices.length > 0 && (
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-dark mb-4 border-b pb-2">Related Services</h3>
                <ul className="space-y-3">
                    {relatedServices.map((related) => (
                        <li key={related.id}>
                            <Link to={`/service/${related.id}`} className="flex items-center text-gray-700 hover:text-primary transition-colors group" style={{ '--hover-color': accentColor } as React.CSSProperties}>
                               <svg className="w-4 h-4 mr-3 flex-shrink-0 text-gray-400 group-hover:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                                <span>{related.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        )}
    </div>
    );
};

const ServiceNavigation: React.FC<{ prev: Service; next: Service; accentColor: string }> = ({ prev, next, accentColor }) => (
    <div className="bg-white border-t">
        <div className="container mx-auto px-4 grid grid-cols-2">
            <Link to={`/service/${prev.id}`} className="group p-8 text-left border-r hover:bg-light transition-colors duration-300">
                <p className="text-sm text-gray-500">Previous Service</p>
                <div className="flex items-center mt-2 font-bold text-lg text-dark group-hover:text-primary" style={{ '--hover-color': accentColor } as React.CSSProperties}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 transition-transform duration-300 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                    <span>{prev.title}</span>
                </div>
            </Link>
            <Link to={`/service/${next.id}`} className="group p-8 text-right hover:bg-light transition-colors duration-300">
                <p className="text-sm text-gray-500">Next Service</p>
                <div className="flex items-center justify-end mt-2 font-bold text-lg text-dark group-hover:text-primary" style={{ '--hover-color': accentColor } as React.CSSProperties}>
                    <span>{next.title}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
            </Link>
        </div>
    </div>
);


// --- MAIN PAGE COMPONENT ---
const ServiceDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const serviceIndex = ALL_SERVICES_DATA.findIndex(s => s.id === id);
  const service = ALL_SERVICES_DATA[serviceIndex];

  // Determine the service's category to apply the correct theme
  const category = SERVICES_PAGE_DATA.find(cat => cat.services.some(s => s.id === id));
  const categoryId = category ? category.id : 'custom-software-dev';
  const theme: Theme = categoryThemes[categoryId as keyof typeof categoryThemes] || categoryThemes['custom-software-dev'];

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold">Service not found</h1>
        <Link to="/services/custom-software-dev" className="text-accent mt-4 inline-block">← Back to Services</Link>
      </div>
    );
  }

  const prevService = ALL_SERVICES_DATA[(serviceIndex - 1 + ALL_SERVICES_DATA.length) % ALL_SERVICES_DATA.length];
  const nextService = ALL_SERVICES_DATA[(serviceIndex + 1) % ALL_SERVICES_DATA.length];

  return (
    <div className="animate-fade-in-up bg-light -mt-20">
      <ServiceHeroSection service={service} theme={theme} category={category} />

      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12">
            <main className="lg:col-span-8">
                <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg space-y-20">
                    <ServiceOverviewSection service={service} theme={theme} />
                    <KeyFeaturesSection service={service} accentColor={theme.accentColor} />
                    <KeyBenefitsSection service={service} accentColor={theme.accentColor} />
                    <OurProcessSection accentColor={theme.accentColor} />
                    <TechStackSection service={service} accentColor={theme.accentColor} />
                </div>
            </main>

            <aside className="lg:col-span-4 lg:sticky top-28 self-start">
                <Sidebar service={service} accentColor={theme.accentColor} categoryId={categoryId} />
            </aside>
        </div>
      </div>

      <ServiceNavigation prev={prevService} next={nextService} accentColor={theme.accentColor} />
    </div>
  );
};

export default ServiceDetailPage;