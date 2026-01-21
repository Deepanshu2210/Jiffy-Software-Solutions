

import React, { useState, useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { SERVICES_PAGE_DATA, TECHNOLOGIES, CORE_EXPERTISE, CASE_STUDIES } from '../constants';
import { SubService } from '../constants';
import TypingEffect from '../components/TypingEffect';

const SubServiceCard: React.FC<{ service: SubService }> = ({ service }) => (
    <Link 
        to={`/service/${service.id}`} 
        className="group block bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-200/80 hover:border-accent transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10 h-full flex flex-col"
    >
        <div className="flex items-center gap-4 mb-4">
            <div className="bg-primary text-white p-3 rounded-lg transition-colors duration-300 group-hover:bg-accent">
                {React.cloneElement(service.icon as React.ReactElement, { className: "h-6 w-6 text-white" })}
            </div>
            <h3 className="text-xl font-bold text-dark transition-colors duration-300 group-hover:text-accent">{service.title}</h3>
        </div>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{service.shortDescription}</p>
        <span className="font-bold text-primary text-sm transition-colors duration-300 group-hover:text-accent flex items-center mt-auto">
            Learn More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
        </span>
    </Link>
);

const CaseStudyCarousel: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const next = () => setActiveIndex((prev) => (prev + 1) % CASE_STUDIES.length);
    const prev = () => setActiveIndex((prev) => (prev - 1 + CASE_STUDIES.length) % CASE_STUDIES.length);

    useEffect(() => {
        let interval: ReturnType<typeof setInterval>;
        if (!isPaused) {
            interval = setInterval(() => {
                next();
            }, 2000);
        }
        return () => clearInterval(interval);
    }, [isPaused]);

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 relative">
                     <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4 relative z-10 inline-block">
                        <span className="relative z-10">Case Studies</span>
                        <span className="absolute bottom-1 left-0 w-full h-3 bg-accent/20 -z-10"></span>
                     </h2>
                </div>

                <div 
                    className="relative max-w-6xl mx-auto h-[500px] flex items-center justify-center"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Navigation Buttons */}
                     <button
                        onClick={prev}
                        className="absolute left-0 md:left-10 z-40 bg-white text-primary p-4 rounded-full shadow-xl border border-gray-100 hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110"
                        aria-label="Previous"
                    >
                         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>

                    <button
                        onClick={next}
                        className="absolute right-0 md:right-10 z-40 bg-white text-primary p-4 rounded-full shadow-xl border border-gray-100 hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110"
                        aria-label="Next"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>

                    <div className="relative w-full h-full flex justify-center items-center perspective-1000">
                        {CASE_STUDIES.map((study, index) => {
                            const length = CASE_STUDIES.length;
                            
                            let cardClass = 'hidden';
                            // Active
                            if (index === activeIndex) {
                                cardClass = 'z-30 scale-100 opacity-100 translate-x-0 shadow-2xl border-t-4 border-primary';
                            } 
                            // Next
                            else if (index === (activeIndex + 1) % length) {
                                cardClass = 'z-20 scale-90 opacity-50 translate-x-[40%] md:translate-x-[60%] cursor-pointer grayscale hover:grayscale-0 hover:opacity-70';
                            } 
                            // Prev
                            else if (index === (activeIndex - 1 + length) % length) {
                                cardClass = 'z-20 scale-90 opacity-50 -translate-x-[40%] md:-translate-x-[60%] cursor-pointer grayscale hover:grayscale-0 hover:opacity-70';
                            }

                            return (
                                <div
                                    key={study.id}
                                    onClick={() => {
                                        if (cardClass.includes('-translate-x')) prev();
                                        if (cardClass.includes('translate-x') && !cardClass.includes('-translate-x')) next();
                                    }}
                                    className={`absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 
                                        w-[300px] md:w-[400px] bg-white rounded-2xl
                                        transition-all duration-500 ease-out ${cardClass}`}
                                >
                                    <div className="flex flex-col h-full">
                                         {/* Card Header Image Area */}
                                        <div className="h-32 relative bg-light flex items-center justify-center overflow-hidden rounded-t-2xl">
                                            <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${study.imageUrl})` }}></div>
                                            <div className="absolute inset-0 bg-primary/10"></div>
                                            <img src={study.clientLogoUrl} alt={study.client} className="h-12 relative z-10 object-contain drop-shadow-md" />
                                        </div>

                                        {/* Card Body */}
                                        <div className="p-6 text-center bg-white flex flex-col flex-grow rounded-b-2xl shadow-[0_0_20px_rgba(0,0,0,0.05)]">
                                            <h3 className="text-xl font-bold text-dark mb-1 leading-tight">{study.client}</h3>
                                            <p className="text-xs font-bold text-primary mb-3 uppercase">{study.title}</p>
                                            <p className="text-sm text-gray-500 mb-4 line-clamp-3">{study.challenge}</p>
                                            
                                            <div className="my-auto bg-light/50 rounded-lg p-3 mb-6 border border-gray-100">
                                                <p className="text-accent font-bold text-sm leading-tight">{study.result}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

const ServicesPage: React.FC = () => {
    const { categoryId } = useParams<{ categoryId: string }>();
    const activeCategory = SERVICES_PAGE_DATA.find(c => c.id === categoryId);

    if (!activeCategory) {
        return <Navigate to={`/services/${SERVICES_PAGE_DATA[0].id}`} replace />;
    }

    return (
        <div className="animate-fade-in-up -mt-20">
            {/* Hero Section */}
            <header 
                className="relative text-white flex items-center justify-center text-center overflow-hidden pt-32 pb-20"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center -z-10"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1920&auto=format&fit=crop')` }}
                />
                <div className="absolute inset-0 bg-primary/70 -z-10"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
                    <TypingEffect text="Where technology meets innovation — explore solutions that fuel your business growth." />
                </div>
            </header>

            {/* Main Content Area */}
            <main className="bg-light py-20">
                <div className="container mx-auto px-4">
                     <div className="grid lg:grid-cols-12 gap-16">
                        {/* Sidebar Navigation */}
                        <aside className="lg:col-span-3">
                            <nav className="sticky top-28 flex flex-col gap-2 bg-white p-4 rounded-lg shadow-md">
                                {SERVICES_PAGE_DATA.map(category => (
                                    <Link 
                                        key={category.id}
                                        to={`/services/${category.id}`} 
                                        className={`flex items-center gap-4 py-3 px-4 rounded-lg text-md font-medium transition-all duration-300 ${
                                            categoryId === category.id 
                                            ? 'bg-primary text-white shadow-lg' 
                                            : 'text-gray-800 hover:bg-primary/10 hover:text-primary'
                                        }`}
                                    >
                                        <span className={`${categoryId === category.id ? '[&>svg]:stroke-white' : '[&>svg]:stroke-primary'}`}>
                                            {React.cloneElement(category.icon as React.ReactElement<{ className?: string }>, { className: "h-6 w-6"})}
                                        </span>
                                        <span className="flex-1">{category.title}</span>
                                    </Link>
                                ))}
                            </nav>
                        </aside>

                         {/* Selected Category Content */}
                        <div className="lg:col-span-9">
                             <div key={activeCategory.id} className="animate-fade-in">
                                <div className="mb-12">
                                    <div className="inline-block bg-white p-4 rounded-2xl shadow-md mb-4 border">
                                        {React.cloneElement(activeCategory.icon as React.ReactElement<{ className?: string }>, { className: "h-12 w-12 text-primary"})}
                                    </div>
                                    <h2 className="text-4xl font-bold text-dark mb-4">{activeCategory.title}</h2>
                                    <p className="text-lg text-gray-600 leading-relaxed">{activeCategory.description}</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                                    {activeCategory.services.map(service => (
                                        <SubServiceCard key={service.id} service={service} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-12 text-dark">Technologies We Master</h2>
                    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                        {TECHNOLOGIES.map((tech) => (
                            <span key={tech} className="bg-light text-gray-700 font-medium py-2 px-5 rounded-full shadow-sm transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-md cursor-default">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Added Case Studies Carousel here */}
            <CaseStudyCarousel />

            <section className="py-20 bg-dark bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 to-dark">
                <div className="container mx-auto px-4">
                     <div className="relative text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wider">Why Choose Jiffy?</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {CORE_EXPERTISE.map((expertise) => (
                             <div key={expertise.title} className="group relative p-8 rounded-lg overflow-hidden bg-dark/50 border border-secondary/30 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/20">
                                <div className="relative z-10 text-center flex flex-col items-center">
                                    <div className="bg-primary text-white rounded-full p-4 mb-6 transition-all duration-300 group-hover:bg-accent group-hover:scale-110">
                                        {expertise.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{expertise.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{expertise.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;