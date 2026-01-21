
import React from 'react';
import { CASE_STUDIES } from '../constants';

const ChallengeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-red-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
const SolutionIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>;
const ResultsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>;


const CaseStudiesPage: React.FC = () => {
  return (
    <div className="animate-fade-in-up -mt-20">
      <header
          className="relative text-white flex items-center justify-center text-center overflow-hidden pt-32 pb-20"
      >
          <div
              className="absolute inset-0 bg-cover bg-center -z-10"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1920&auto=format&fit=crop')` }}
          />
          <div className="absolute inset-0 bg-primary/70 -z-10"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl md:text-5xl font-bold">Our Success Stories</h1>
              <p className="mt-4 text-lg max-w-3xl mx-auto">
                Discover how we transform complex challenges into tangible results and powerful solutions.
              </p>
          </div>
      </header>

      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CASE_STUDIES.map((study) => (
              <div key={study.id} className="group relative bg-dark rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 aspect-[3/4]">
                {/* Background Image & Overlay */}
                <img src={study.imageUrl} alt={study.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent transition-all duration-300 group-hover:from-black/95 group-hover:via-black/80"></div>

                {/* Initial Content (Logo & Title) */}
                <div className="relative h-full flex flex-col items-center justify-center text-center text-white p-6 transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:-translate-y-4">
                  <img src={study.clientLogoUrl} alt={`${study.client} Logo`} className="h-12 w-auto max-w-[150px] object-contain filter brightness-0 invert" />
                  <h2 className="text-2xl font-bold mt-6 drop-shadow-lg">{study.title}</h2>
                  <p className="mt-2 text-sm uppercase tracking-widest opacity-80">Hover to Explore</p>
                </div>

                {/* Hover Content (Details) */}
                <div className="absolute inset-0 flex flex-col justify-between text-white p-6 opacity-0 transform translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                  {/* Top Details */}
                  <div>
                    <img src={study.clientLogoUrl} alt={`${study.client} Logo`} className="h-8 w-auto max-w-[120px] object-contain filter brightness-0 invert mb-4" />
                    <h2 className="text-xl font-bold">{study.title}</h2>
                    <div className="mt-4 space-y-3 text-sm text-gray-200">
                      <div className="flex items-start">
                        <ChallengeIcon />
                        <span><strong>Challenge:</strong> {study.challenge}</span>
                      </div>
                      <div className="flex items-start">
                        <SolutionIcon />
                        <span><strong>Solution:</strong> {study.solution}</span>
                      </div>
                       <div className="flex items-start">
                        <ResultsIcon />
                        <span><strong>Result:</strong> {study.result}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Metrics */}
                  <div className="border-t border-white/20 mt-4 pt-4">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        {study.keyMetrics.map(metric => (
                          <div key={metric.label}>
                            <p className="text-xl font-extrabold text-white">{metric.value}</p>
                            <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">{metric.label}</p>
                          </div>
                        ))}
                      </div>
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

export default CaseStudiesPage;