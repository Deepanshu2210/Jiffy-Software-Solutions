
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const heroSlides = [
    {
        headline: "Innovative Custom Solutions for Every Industry",
        imageUrl: "https://images.unsplash.com/photo-155043۹۰۶۲-۶۰۹e1531270e?q=80&w=1920&auto=format&fit=crop"
    },
    {
        headline: "Future-ready digital solutions for smarter business growth",
        imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1920&auto=format&fit=crop"
    },
    {
        headline: "Modern solutions for a connected digital world",
        imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1920&auto=format&fit=crop"
    }
];

const clients = [
    { name: 'Innovate Corp', logoUrl: "https://picsum.photos/seed/logo1/158/48" },
    { name: 'Quantum Solutions', logoUrl: "https://picsum.photos/seed/logo2/158/48" },
    { name: 'Apex Industries', logoUrl: "https://picsum.photos/seed/logo3/158/48" },
    { name: 'Stellar Tech', logoUrl: "https://picsum.photos/seed/logo4/158/48" },
    { name: 'Synergy Systems', logoUrl: "https://picsum.photos/seed/logo5/158/48" },
    { name: 'Nexus Enterprises', logoUrl: "https://picsum.photos/seed/logo6/158/48" },
    { name: 'Momentum Dynamics', logoUrl: "https://picsum.photos/seed/logo7/158/48" },
];


const ChooseUsCard: React.FC<{ icon: React.ReactNode; title: string; text: string; }> = ({ icon, title, text }) => (
    <div className="group relative p-8 rounded-lg overflow-hidden bg-dark/50 border border-secondary/30 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/20">
        <div className="absolute top-0 left-0 w-full h-full bg-secondary/10 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center">
            <div className="flex justify-center mb-6">
                <div className="bg-primary text-white rounded-full p-4 transition-all duration-300 group-hover:bg-accent group-hover:scale-110">
                    {icon}
                </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
            <p className="text-gray-400 leading-relaxed">{text}</p>
        </div>
    </div>
);


const HomePage: React.FC = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [typedText, setTypedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    const typingSpeed = 100;
    const deletingSpeed = 50;
    const delayAfterTyping = 2000;

    useEffect(() => {
        const handleTyping = () => {
            const currentHeadline = heroSlides[slideIndex].headline;
            
            if (isDeleting) {
                // Handle deleting
                if (typedText.length > 0) {
                    setTypedText(currentHeadline.substring(0, typedText.length - 1));
                } else {
                    setIsDeleting(false);
                    setSlideIndex((prev) => (prev + 1) % heroSlides.length);
                }
            } else {
                // Handle typing
                if (typedText.length < currentHeadline.length) {
                    setTypedText(currentHeadline.substring(0, typedText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), delayAfterTyping);
                }
            }
        };

        const timeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
        
        return () => clearTimeout(timeout);
    }, [typedText, isDeleting, slideIndex]);

  return (
    <div className="animate-fade-in-up">
      {/* Hero Section */}
      <section className="relative h-[80vh] text-white flex items-center overflow-hidden -mt-20">
        {/* Background Images */}
        {heroSlides.map((slide, index) => (
            <div
                key={index}
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === slideIndex ? 'opacity-100' : 'opacity-0'}`}
                style={{ backgroundImage: `url('${slide.imageUrl}')` }}
            />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/70 to-accent/60 opacity-80"></div>
        
        {/* Text Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 text-left">
          <div className="max-w-3xl">
             <div className="min-h-[120px] md:min-h-[150px] flex items-center">
                <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
                    <span>{typedText}</span>
                    <span className="border-r-4 border-white animate-blink-caret" aria-hidden="true"></span>
                </h1>
            </div>
            <p className="text-lg md:text-xl font-light tracking-wider mb-8">
                Think Software Think Jiffy
            </p>
            <div className="flex flex-wrap gap-4">
                <Link 
                    to="/services" 
                    className="bg-accent text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:bg-red-700 hover:shadow-accent/30"
                >
                    Our Services
                </Link>
                <Link 
                    to="/contact" 
                    className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-white hover:text-primary shadow-lg hover:shadow-xl"
                >
                    Contact Us
                </Link>
                <Link 
                    to="/affiliate-program" 
                    className="bg-white text-primary font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 group"
                >
                    <span>Join Affiliate Program</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text uppercase tracking-wider">About Us</h2>
             <p className="text-gray-600 leading-relaxed mb-4">
              {"JIFFY Software Solutions is a leading provider of custom software development, DevOps, cloud solutions, and enterprise communication services. We specialise in agile, scalable, and secure technology solutions tailored to businesses across industries, helping them streamline operations, enhance engagement, and drive digital transformation.".split(' ').map((word, i) => (
                  <span key={i} className="inline-block transition-transform duration-200 ease-out hover:scale-110 hover:text-primary cursor-pointer">{word}&nbsp;</span>
              ))}
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
               {"With expertise in enterprise messaging (SMS, IVR, USSD, OCG), AI-driven automation, and full-cycle software development, JIFFY empowers businesses with cutting-edge IT solutions. Our DevOps and offshore development capabilities ensure seamless integration, optimised performance, and continuous innovation.".split(' ').map((word, i) => (
                  <span key={i} className="inline-block transition-transform duration-200 ease-out hover:scale-110 hover:text-primary cursor-pointer">{word}&nbsp;</span>
              ))}
            </p>
            <p className="text-gray-600 leading-relaxed">
               {"At JIFFY, we don’t just develop software—we create strategic technology solutions that enable businesses to scale, adapt, and thrive in an ever-evolving digital landscape.".split(' ').map((word, i) => (
                  <span key={i} className="inline-block transition-transform duration-200 ease-out hover:scale-110 hover:text-primary cursor-pointer">{word}&nbsp;</span>
              ))}
            </p>
          </div>
        </div>
      </section>

       {/* Mission & Vision Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="flex flex-col md:flex-row h-[32rem]"
          >
            <div 
              className="relative rounded-l-lg shadow-xl overflow-hidden text-center flex items-center justify-center cursor-pointer transition-transform duration-500 ease-in-out flex-grow hover:scale-105"
            >
               <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1920&auto=format&fit=crop" alt="Mission" className="absolute inset-0 w-full h-full object-cover"/>
               <div className="absolute inset-0 bg-primary/80"></div>
               <div className="relative z-10 p-8 text-white flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21a9 9 0 100-18 9 9 0 000 18z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14m-7-7h14" /></svg>
                    <h3 className="text-3xl font-bold mb-8">Mission</h3>
                    <p className="leading-relaxed">
                        {'To deliver innovative IT and telecom solutions tailored to our clients’ unique needs. With a strong focus on innovation, customer-centricity, and excellence, we go beyond expectations—driving sustainable growth and long-term success.'.split(' ').map((word, i) => (
                          <span key={i} className="inline-block transition-transform duration-200 ease-out hover:scale-110 cursor-pointer">{word}&nbsp;</span>
                        ))}
                    </p>
               </div>
            </div>
            <div 
              className="relative rounded-r-lg shadow-xl overflow-hidden text-center flex items-center justify-center cursor-pointer transition-transform duration-500 ease-in-out flex-grow hover:scale-105"
            >
               <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop" alt="Vision" className="absolute inset-0 w-full h-full object-cover"/>
               <div className="absolute inset-0 bg-accent/80"></div>
               <div className="relative z-10 p-8 text-white flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    <h3 className="text-3xl font-bold mb-8">Vision</h3>
                    <p className="leading-relaxed">
                        {'Redefining leadership in IT and telecommunications services worldwide. With an unwavering commitment to quality, integrity, and customer satisfaction, we set new industry benchmarks, drive continuous innovation, and deliver bespoke, end-to-end solutions.'.split(' ').map((word, i) => (
                           <span key={i} className="inline-block transition-transform duration-200 ease-out hover:scale-110 cursor-pointer">{word}&nbsp;</span>
                        ))}
                    </p>
               </div>
            </div>
          </div>
        </div>
      </section>


      {/* Why Choose Jiffy Section */}
      <section className="py-20 bg-dark bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 to-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wider">Why Choose Jiffy?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <ChooseUsCard 
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.289 2.72a3 3 0 01-4.682-2.72 9.094 9.094 0 013.741.479M12 12a3 3 0 100-6 3 3 0 000 6zm-7 8a7 7 0 0114 0H5z" /></svg>}
                    title="IT Experts"
                    text="Our IT experts deliver smart, scalable tech solutions that drive business efficiency. With deep industry knowledge, they ensure every project meets global standards."
                />
                <ChooseUsCard 
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                    title="Fast Delivery"
                    text="We ensure fast, reliable project delivery through agile methods and efficient workflows. Meet deadlines without compromising on quality or performance."
                />
                <ChooseUsCard 
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6m-2 0a2 2 0 104 0 2 2 0 10-4 0zM4 6h6m8 0h6M12 18m-2 0a2 2 0 104 0 2 2 0 10-4 0zM4 18h6m8 0h6M18 12m-2 0a2 2 0 104 0 2 2 0 10-4 0zM4 12h10m8 0h2" /></svg>}
                    title="Customised Services"
                    text="Our services are fully customised to match your brand goals and business needs. Every solution is tailored for maximum reach and impact."
                />
                <ChooseUsCard 
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4 4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                    title="Proven Track Record"
                    text="With a solid record of successful projects, we turn digital ambitions into measurable success. Businesses worldwide trust our consistency and results."
                />
            </div>
        </div>
      </section>

       {/* Global Clients Section */}
       <section className="py-20 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-bold mb-12 bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text uppercase tracking-wider">Global Clients</h2>
            <div
              className="relative w-full overflow-hidden"
              style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
            >
              <div className="flex w-max animate-scroll-left hover:[animation-play-state:paused]">
                {/* Render logos twice for seamless loop */}
                {[...clients, ...clients].map((client, index) => (
                  <div key={index} className="group relative flex-shrink-0 w-52 flex flex-col items-center justify-center gap-3 py-2 transition-all duration-300 hover:scale-110 hover:z-10 hover:bg-white hover:shadow-2xl rounded-lg">
                    <img src={client.logoUrl} alt={client.name} className="h-10 filter grayscale group-hover:grayscale-0 transition-all" />
                    <span className="text-sm text-gray-600 font-semibold transition-colors group-hover:text-primary">{client.name}</span>
                  </div>
                ))}
              </div>
            </div>
        </div>
       </section>

    </div>
  );
};

export default HomePage;
