import React, { useState } from 'react';
import { FAQS } from '../constants';
import { FaqItem } from '../types';

const FaqItemComponent: React.FC<{ item: FaqItem }> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left py-4 px-2"
            >
                <span className="font-semibold text-lg text-dark">{item.question}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </span>
            </button>
            {isOpen && (
                <div className="px-2 pb-4 text-gray-600">
                    <p>{item.answer}</p>
                </div>
            )}
        </div>
    );
};

const FaqPage: React.FC = () => {
    return (
        <div className="animate-fade-in-up -mt-20">
            <header
                className="relative text-white flex items-center justify-center text-center overflow-hidden pt-32 pb-20"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center -z-10"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1509869175154-0d3a57697654?q=80&w=1920&auto=format&fit=crop')` }}
                />
                <div className="absolute inset-0 bg-primary/70 -z-10"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-bold">Frequently Asked Questions</h1>
                    <p className="mt-4 text-lg max-w-3xl mx-auto">
                        Have questions? We've got answers. Find what you're looking for below.
                    </p>
                </div>
            </header>

            <section className="py-20 bg-light">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        {FAQS.map((faq, index) => (
                            <FaqItemComponent key={index} item={faq} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FaqPage;