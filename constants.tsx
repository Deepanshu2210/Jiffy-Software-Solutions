

import React from 'react';
// FIX: Import CaseStudy type to support the new CASE_STUDIES constant.
import { Service, BlogPost, FaqItem, CaseStudy } from './types';

// NOTE: This interface is defined locally because the global TeamMember type
// in types.ts does not match the hierarchical structure required here.
// FIX: Add optional 'bio' property to allow for member biographies on the About page.
interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  hoverImageUrl: string;
  dream: string;
  bio?: string;
}

interface TeamStructure {
  founder: TeamMember[];
  advisor: TeamMember[];
  management: TeamMember[];
  experts: TeamMember[];
  engineers: TeamMember[];
}

// New interfaces for the redesigned Services Page
export interface SubService {
  id: string;
  title: string;
  icon: React.ReactNode;
  shortDescription: string;
}

export interface ServicePageCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  services: SubService[];
}


// FIX: Update icon components to accept a className prop to allow overriding styles.
const CodeIcon = ({ className = "h-8 w-8 text-white" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>;
const CloudIcon = ({ className = "h-8 w-8 text-white" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>;
const MobileIcon = ({ className = "h-8 w-8 text-white" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>;
const DataIcon = ({ className = "h-8 w-8 text-white" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10m16-10v10M9 3v18m6-18v18" /></svg>;
const AiIcon = ({ className = "h-8 w-8 text-white" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V4m0 16v-2M8 8l1.414-1.414M14.586 14.586L16 16m-1.414 1.414L16 16m-5.414-2.586L8 8m6.586 6.586l1.414 1.414" /></svg>;
const SecurityIcon = ({ className = "h-8 w-8 text-white" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.955a11.955 11.955 0 0118-8.618c0-1.033-.134-2.033-.382-3.016z" /></svg>;
const CommunicationIcon = ({ className = "h-8 w-8 text-white" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V4a2 2 0 012-2h8a2 2 0 012 2v4z" /></svg>;
const ApiIcon = ({ className = "h-8 w-8 text-white" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>;
const CmsIcon = ({ className = "h-8 w-8 text-white" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
const WebsiteIcon = ({ className = "h-8 w-8 text-white" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.25 9.172V14.83m1.42-11.662L12 12m6.33-9.528L12 12m0 0v9.878m-6.33-9.528L12 12" /></svg>;
const DesktopIcon = ({ className = "h-8 w-8 text-white" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const CrmIcon = ({ className = "h-8 w-8 text-white" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const ChatbotIcon = ({ className = "h-8 w-8 text-white" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>;
const VideoIcon = ({ className = "h-8 w-8 text-white" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>;
const VasIcon = ({ className = "h-8 w-8 text-white" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>;
const PlatformIcon = ({ className = "h-8 w-8" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>;

// New Icons for Benefits Section
const GrowthIcon = ({ className = "h-8 w-8 text-white" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>;
const EfficiencyIcon = ({ className = "h-8 w-8 text-white" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
const EngagementIcon = ({ className = "h-8 w-8 text-white" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>;
const InsightIcon = ({ className = "h-8 w-8 text-white" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>;
const CostIcon = ({ className = "h-8 w-8 text-white" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 10v-1m0 0c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const ChannelIcon = ({ className = "h-8 w-8 text-white" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>;


export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Service', path: '/services/custom-software-dev' },
  { name: 'Team', path: '/team' },
  { name: 'Blogs', path: '/blog' },
  { name: 'ISO Certification', path: '/iso-certification' },
];

export const ALL_SERVICES_DATA: Service[] = [
    // Custom Software Development
    {
        id: 'website-development',
        title: 'Website Development',
        icon: <WebsiteIcon />,
        shortDescription: 'Responsive, high-performance websites built with modern technologies by a leading website development company to elevate your online presence.',
        longDescription: 'We build compelling, user-friendly websites that serve as the digital forefront of your business. From corporate sites to complex web applications, we focus on responsive design, performance, and SEO best practices to ensure your site engages visitors and achieves its business goals.',
        features: ['Responsive Design', 'SEO Optimization', 'E-commerce Integration', 'CMS Integration', 'Web Application Development'],
        techStack: ['React', 'Next.js', 'TailwindCSS', 'Node.js', 'WordPress'],
        benefits: [
            {
                icon: <GrowthIcon />,
                title: 'Increased Brand Credibility',
                description: 'A professional, modern website builds trust and credibility, serving as the digital storefront for your brand and making a strong first impression.'
            },
            {
                icon: <ChannelIcon />,
                title: 'Broader Audience Reach',
                description: 'Optimized for search engines (SEO), your website becomes discoverable to a global audience, attracting organic traffic and potential customers.'
            },
            {
                icon: <EngagementIcon />,
                title: 'Higher Conversion Rates',
                description: 'Through strategic UI/UX design and clear calls-to-action, we build websites that guide visitors towards becoming customers, boosting your leads and sales.'
            },
            {
                icon: <InsightIcon />,
                title: 'Improved Customer Insights',
                description: 'Integrated analytics provide valuable data on user behavior, helping you understand your audience and make informed business decisions.'
            }
        ]
    },
    {
        id: 'mobile-app-development',
        title: 'Mobile App Development',
        icon: <MobileIcon />,
        shortDescription: 'Engaging and high-performance native and cross-platform mobile apps for iOS and Android, powered by our expert mobile app development services',
        longDescription: 'Connect with your customers on the go with a beautifully designed and intuitive mobile application. We build both native (Swift, Kotlin) and cross-platform (React Native, Flutter) apps that deliver seamless user experiences. Our focus is on performance, security, and creating an app that your users will love.',
        features: ['Native iOS & Android', 'Cross-Platform Development', 'Push Notifications', 'Offline Functionality', 'App Store Submission'],
        techStack: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Firebase'],
        benefits: [
            {
                icon: <EngagementIcon />,
                title: 'Enhanced Customer Engagement',
                description: 'A mobile app provides a direct and constant connection to your customers, fostering loyalty through push notifications and personalized content.'
            },
            {
                icon: <ChannelIcon />,
                title: 'Direct Marketing Channel',
                description: 'Leverage your app to communicate directly with users about promotions, new products, and updates, bypassing crowded marketing channels.'
            },
            {
                icon: <GrowthIcon />,
                title: 'Increased Brand Recognition',
                description: 'A well-designed app strengthens your brand identity and keeps your business top-of-mind, as your logo is always visible on the user\'s device.'
            },
            {
                icon: <EfficiencyIcon />,
                title: 'Improved Customer Service',
                description: 'Streamline customer support with in-app messaging, helpdesks, and easy access to information, improving user satisfaction and retention.'
            }
        ]
    },
    {
        id: 'desktop-software-development',
        title: 'Desktop Software Development',
        icon: <DesktopIcon />,
        shortDescription: 'Powerful and reliable desktop applications for Windows, macOS, and Linux to meet complex business needs.',
        longDescription: 'We create robust, high-performance desktop applications that run independently on user machines. Ideal for tasks requiring significant processing power and offline capabilities, our desktop solutions offer enhanced security and deep integration with operating system features.',
        features: ['Cross-Platform Compatibility', 'Offline Functionality', 'High Performance', 'OS Integration', 'Secure Data Storage'],
        techStack: ['Electron', 'Qt', '.NET', 'JavaFX', 'C++'],
        benefits: [
             {
                icon: <EfficiencyIcon />,
                title: 'Enhanced Performance & Speed',
                description: 'Desktop apps leverage the full power of the host machine, delivering superior speed and performance for computationally intensive tasks.'
            },
            {
                icon: <SecurityIcon />,
                title: 'Improved Security',
                description: 'Data is stored locally, providing an additional layer of security and reducing reliance on internet connectivity for sensitive operations.'
            },
            {
                icon: <CloudIcon />,
                title: 'Full Offline Access',
                description: 'Users can work without an internet connection, ensuring uninterrupted productivity in any environment.'
            },
            {
                icon: <ApiIcon />,
                title: 'Deep OS Integration',
                description: 'Take advantage of native OS features, notifications, and hardware integrations for a seamless and powerful user experience.'
            }
        ]
    },
    {
        id: 'crm-development',
        title: 'CRM Development',
        icon: <CrmIcon />,
        shortDescription: 'Custom CRM solutions to streamline your sales, marketing, and customer service processes.',
        longDescription: 'A custom Customer Relationship Management (CRM) system can revolutionize how you interact with your clients. We build tailored CRM platforms that automate workflows, manage customer data, track sales pipelines, and provide actionable insights, all designed around your specific business processes.',
        features: ['Sales Pipeline Management', 'Contact & Lead Management', 'Marketing Automation', 'Custom Reporting & Dashboards', 'Third-Party Integrations'],
        techStack: ['Salesforce', 'Zoho CRM', 'Node.js', 'React', 'PostgreSQL'],
        benefits: [
            {
                icon: <DataIcon />,
                title: 'Centralized Customer Data',
                description: 'Gain a 360-degree view of your customers by consolidating all interactions and data into a single, accessible platform.'
            },
            {
                icon: <EngagementIcon />,
                title: 'Improved Customer Retention',
                description: 'Personalize communication and anticipate customer needs, leading to stronger relationships and increased loyalty.'
            },
            {
                icon: <EfficiencyIcon />,
                title: 'Streamlined Sales Process',
                description: 'Automate repetitive tasks, manage leads effectively, and track your sales pipeline to close more deals, faster.'
            },
            {
                icon: <InsightIcon />,
                title: 'Actionable Business Insights',
                description: 'Utilize powerful reporting and analytics to make data-driven decisions and identify opportunities for growth.'
            }
        ]
    },
    {
        id: 'api-development',
        title: 'API Development',
        icon: <ApiIcon />,
        shortDescription: 'Custom API development and integration services to connect your applications and data securely.',
        longDescription: 'We design, build, and manage robust, secure, and scalable APIs that enable seamless communication between your software components, as well as with third-party services. Follow RESTful and GraphQL best practices for optimal performance.',
        features: ['RESTful & GraphQL APIs', 'API Gateway Management', 'Authentication & Authorization (OAuth, JWT)', 'API Documentation (Swagger/OpenAPI)', 'Microservices Architecture'],
        techStack: ['Node.js', 'Go', 'GraphQL', 'Postman', 'AWS API Gateway'],
        benefits: [
             {
                icon: <ApiIcon />,
                title: 'Increased Interoperability',
                description: 'Seamlessly connect disparate systems, applications, and data sources, breaking down silos and enabling integrated workflows.'
            },
            {
                icon: <EfficiencyIcon />,
                title: 'Faster Innovation Cycles',
                description: 'APIs allow developers to build new products and features more quickly by leveraging existing functionalities.'
            },
            {
                icon: <GrowthIcon />,
                title: 'New Revenue Streams',
                description: 'Monetize your data or services by offering them to partners and third-party developers through a secure API.'
            },
            {
                icon: <SecurityIcon />,
                title: 'Enhanced Security & Control',
                description: 'APIs provide a controlled gateway to your data, allowing you to manage access, enforce policies, and monitor usage.'
            }
        ]
    },
    {
        id: 'chatbot-development',
        title: 'Chatbot Development',
        icon: <ChatbotIcon />,
        shortDescription: 'Intelligent AI-powered chatbots to automate customer support and enhance user engagement.',
        longDescription: 'Automate customer interactions and provide 24/7 support with a custom AI chatbot. We develop intelligent, conversational bots for websites, messaging apps, and internal platforms that can answer questions, qualify leads, and streamline user workflows, improving efficiency and customer satisfaction.',
        features: ['Natural Language Processing (NLP)', 'Multi-platform Integration', 'Lead Generation & Qualification', '24/7 Automated Support', 'CRM Integration'],
        techStack: ['Google Dialogflow', 'Rasa', 'Node.js', 'Python', 'WebSocket'],
        benefits: [
            {
                icon: <EfficiencyIcon />,
                title: '24/7 Customer Support',
                description: 'Provide instant, round-the-clock assistance to your customers, answering their queries anytime, anywhere.'
            },
            {
                icon: <CostIcon />,
                title: 'Reduced Operational Costs',
                description: 'Automate routine inquiries, freeing up your human agents to focus on more complex issues and reducing support overhead.'
            },
            {
                icon: <GrowthIcon />,
                title: 'Improved Lead Generation',
                description: 'Engage website visitors proactively, qualify leads in real-time, and schedule appointments automatically.'
            },
            {
                icon: <EngagementIcon />,
                title: 'Personalized User Experiences',
                description: 'Deliver tailored responses and recommendations based on user behavior and preferences, enhancing engagement.'
            }
        ]
    },
    // Enterprise Communication
    {
        id: 'hosted-ivr',
        title: 'Hosted IVR Solution',
        icon: <CommunicationIcon />,
        shortDescription: 'Answer, route, and manage customer calls automatically with our Hosted IVR platform.',
        longDescription: 'Our Hosted Interactive Voice Response (IVR) system allows businesses to manage large volumes of calls efficiently. Create personalized customer journeys with dynamic menus, intelligent call routing, and integration with your CRM and backend systems.',
        features: ['Drag-and-Drop Call Flow Designer', 'Text-to-Speech & Speech Recognition', 'CRM Integration', 'Real-time Analytics', 'Scalable Cloud Infrastructure'],
        techStack: ['Asterisk', 'Twilio', 'Node.js', 'WebSockets', 'Google Cloud Speech-to-Text'],
        benefits: [
             {
                icon: <EfficiencyIcon />,
                title: 'Enhanced Call Management',
                description: 'Automate call routing and handling to direct customers to the right department or information quickly and efficiently.'
            },
            {
                icon: <EngagementIcon />,
                title: 'Improved First-Contact Resolution',
                description: 'Empower customers with self-service options, enabling them to resolve their issues without speaking to an agent.'
            },
            {
                icon: <CostIcon />,
                title: 'Reduced Agent Workload',
                description: 'Filter and handle common queries automatically, allowing your support agents to focus on high-value interactions.'
            },
            {
                icon: <CloudIcon />,
                title: 'Scalability on Demand',
                description: 'Our cloud-based solution effortlessly scales to handle fluctuations in call volume without infrastructure investments.'
            }
        ]
    },
    {
        id: 'outbound-dialer',
        title: 'Outbound Dialer',
        icon: <CommunicationIcon />,
        shortDescription: 'Reach more customers in less time using our automated voice broadcasting platform',
        longDescription: 'Launch automated outbound calling campaigns for reminders, promotions, surveys, and more. Our OBD solution offers features like predictive dialing, call scheduling, and detailed campaign performance tracking to maximize your outreach.',
        features: ['Predictive & Progressive Dialing', 'Campaign Management Dashboard', 'Answering Machine Detection', 'DNC List Management', 'API for Integration'],
        techStack: ['Kamailio', 'FreeSWITCH', 'Python', 'Redis', 'PostgreSQL'],
        benefits: [
             {
                icon: <EfficiencyIcon />,
                title: 'Increased Agent Productivity',
                description: 'Automate the dialing process, connecting agents only to live calls, which significantly reduces idle time and boosts efficiency.'
            },
            {
                icon: <GrowthIcon />,
                title: 'Higher Connection Rates',
                description: 'Utilize predictive and progressive dialing algorithms to maximize the number of connections and customer interactions.'
            },
            {
                icon: <InsightIcon />,
                title: 'Improved Campaign Management',
                description: 'Easily manage calling lists, schedules, and scripts while monitoring performance with real-time analytics and reporting.'
            },
            {
                icon: <ChannelIcon />,
                title: 'Personalized Mass Outreach',
                description: 'Deliver targeted voice messages for appointment reminders, promotions, and surveys to a large audience efficiently.'
            }
        ]
    },
    {
        id: 'contact-center-solution',
        title: 'Contact Center Solution',
        icon: <CommunicationIcon />,
        shortDescription: 'Improve customer satisfaction and agent performance with one powerful contact center platform',
        longDescription: 'Equip your support and sales teams with a modern, omnichannel contact center. Our solution integrates voice, email, chat, and social media into a single agent interface, providing a seamless experience for both your agents and your customers.',
        features: ['ACD & Skill-based Routing', 'WebRTC Agent Desktop', 'Call Recording & Quality Monitoring', 'Live Dashboards & Reporting', 'Third-party Integrations'],
        techStack: ['WebRTC', 'OpenSIPS', 'React', 'Elixir', 'Kubernetes'],
        benefits: [
            {
                icon: <ChannelIcon />,
                title: 'Unified Omnichannel View',
                description: 'Manage all customer interactions from voice, email, chat, and social media in a single, unified interface for a seamless experience.'
            },
            {
                icon: <EfficiencyIcon />,
                title: 'Improved Agent Efficiency',
                description: 'Empower agents with tools like skill-based routing, CRM integration, and a unified desktop to resolve issues faster.'
            },
            {
                icon: <EngagementIcon />,
                title: 'Enhanced Customer Satisfaction',
                description: 'Provide consistent and contextual support across all channels, leading to higher customer satisfaction and loyalty.'
            },
            {
                icon: <InsightIcon />,
                title: 'Data-Driven Decision Making',
                description: 'Leverage real-time dashboards, call recording, and comprehensive reporting to monitor performance and optimize operations.'
            }
        ]
    },
    {
        id: 'bulk-sms-services',
        title: 'Bulk SMS Services',
        icon: <CommunicationIcon />,
        shortDescription: 'High-speed, reliable bulk SMS gateway for promotional and transactional messaging.',
        longDescription: 'Communicate with thousands of customers instantly. Our platform provides high-throughput, reliable delivery for transactional and promotional messages. Use our powerful API or user-friendly dashboard to manage your campaigns.',
        features: ['High Throughput SMS Gateway', 'API & Dashboard Access', 'Two-way Messaging', 'Personalization Tags', 'Delivery Reports & Analytics'],
        techStack: ['Kannel', 'SMPP', 'RabbitMQ', 'Go', 'MySQL'],
        benefits: [
            {
                icon: <EfficiencyIcon />,
                title: 'Instantaneous Delivery',
                description: 'Reach your audience in seconds. SMS messages are delivered almost instantly, making it ideal for time-sensitive communications.'
            },
            {
                icon: <GrowthIcon />,
                title: 'Exceptional Open Rates',
                description: 'With open rates as high as 98%, SMS is one of the most effective ways to ensure your message is seen by your customers.'
            },
            {
                icon: <CostIcon />,
                title: 'Cost-Effective Marketing',
                description: 'Engage a large audience at a fraction of the cost of traditional marketing channels, maximizing your ROI.'
            },
            {
                icon: <ChannelIcon />,
                title: 'Wide Audience Reach',
                description: 'Communicate with customers directly on their mobile devices, a platform they use and check constantly throughout the day.'
            }
        ]
    },
    {
        id: 'whatsapp-messaging-meta',
        title: 'WhatsApp Messaging (META)',
        icon: <CommunicationIcon />,
        shortDescription: 'Send messages, alerts, and updates with verified WhatsApp Business Messaging.',
        longDescription: 'Engage with your customers on the world\'s most popular messaging app using the official WhatsApp Business API. We help you get verified and integrate the API to send notifications, provide customer support, and build rich conversational experiences.',
        features: ['Official Business API', 'Verified Green Tick Profile', 'Template & Session Messaging', 'Rich Media Support', 'CRM Integration'],
        techStack: ['WhatsApp Business API', 'Docker', 'Node.js', 'PostgreSQL'],
        benefits: [
            {
                icon: <EngagementIcon />,
                title: 'Engage on a Trusted Platform',
                description: 'Connect with over 2 billion users on an app they use daily, building trust with a verified business profile.'
            },
            {
                icon: <ChannelIcon />,
                title: 'Build Richer Conversations',
                description: 'Go beyond text. Send images, videos, documents, and interactive messages to create engaging customer experiences.'
            },
            {
                icon: <EfficiencyIcon />,
                title: 'Automate Customer Support',
                description: 'Integrate with chatbots to provide 24/7 automated support and handle customer queries efficiently.'
            },
            {
                icon: <SecurityIcon />,
                title: 'Secure & Reliable Communication',
                description: 'Leverage end-to-end encryption and the official META infrastructure for secure and dependable messaging.'
            }
        ]
    },
    {
        id: 'whatsapp-messaging-virtual',
        title: 'WhatsApp Messaging (Virtual)',
        icon: <CommunicationIcon />,
        shortDescription: 'Flexible WhatsApp messaging solutions using virtual numbers for quick and easy setup.',
        longDescription: 'A cost-effective solution for businesses to leverage WhatsApp for communication without going through the full Business API verification process. Ideal for smaller-scale operations, marketing campaigns, and quick deployments.',
        features: ['Quick Setup', 'Virtual Number Provided', 'API Access', 'Campaign Management', 'Cost-Effective Solution'],
        techStack: ['Third-party APIs', 'Python', 'Flask', 'Redis'],
        benefits: [
            {
                icon: <EfficiencyIcon />,
                title: 'Rapid Deployment',
                description: 'Get started with WhatsApp messaging quickly without the lengthy verification process of the official Business API.'
            },
            {
                icon: <CostIcon />,
                title: 'Low Barrier to Entry',
                description: 'A cost-effective solution perfect for small businesses, startups, and specific campaigns to test WhatsApp as a channel.'
            },
            {
                icon: <GrowthIcon />,
                title: 'Flexible Campaigning',
                description: 'Ideal for marketing blasts, event reminders, and short-term communication needs with easy setup and management.'
            },
            {
                icon: <SecurityIcon />,
                title: 'Maintain Business Privacy',
                description: 'Use a virtual number to keep your personal and business communications separate and professional.'
            }
        ]
    },
    // AI & Data Solutions
    {
        id: 'ai-solutions',
        title: 'AI Solutions',
        icon: <AiIcon />,
        shortDescription: 'Integrate intelligent automation and predictive capabilities into your business processes.',
        longDescription: 'Harness the power of Artificial Intelligence to automate tasks, enhance customer experiences, and create innovative products. We develop and integrate AI/ML solutions, including natural language processing (NLP), computer vision, and recommendation engines, to give you a competitive edge.',
        features: ['Natural Language Processing', 'Computer Vision', 'Recommendation Engines', 'Chatbot Development', 'Process Automation'],
        techStack: ['Python', 'Scikit-learn', 'spaCy', 'OpenCV', 'Google AI Platform'],
        benefits: [
            {
                icon: <EfficiencyIcon />,
                title: 'Intelligent Process Automation',
                description: 'Automate complex, repetitive tasks with intelligent systems that learn and adapt, drastically improving efficiency and reducing errors.'
            },
            {
                icon: <InsightIcon />,
                title: 'Predictive Insights for Strategy',
                description: 'Leverage machine learning models to forecast trends, anticipate customer behavior, and make proactive, data-driven decisions.'
            },
            {
                icon: <EngagementIcon />,
                title: 'Enhanced Customer Personalization',
                description: 'Deliver highly personalized experiences, product recommendations, and content that resonate with individual customer needs.'
            },
            {
                icon: <GrowthIcon />,
                title: 'Creation of Innovative Products',
                description: 'Build new, intelligent products and services that were previously impossible, creating new markets and competitive advantages.'
            }
        ]
    },
    {
        id: 'data-analytics',
        title: 'Data & AI Analytics',
        icon: <DataIcon />,
        shortDescription: 'Turn your data into actionable insights with our advanced analytics and business intelligence solutions.',
        longDescription: 'Data is your most valuable asset. We help you collect, process, and visualize your data to uncover trends, predict outcomes, and make smarter business decisions. Our services range from setting up data warehouses to building custom machine learning models that solve complex business problems.',
        features: ['Business Intelligence Dashboards', 'Data Warehousing', 'ETL Pipelines', 'Predictive Analytics', 'Machine Learning Models'],
        techStack: ['Python', 'R', 'TensorFlow', 'PyTorch', 'Tableau', 'Power BI', 'Snowflake'],
        benefits: [
            {
                icon: <InsightIcon />,
                title: 'Data-Driven Decision Making',
                description: 'Transform raw data into clear, interactive dashboards and reports, empowering your team to make informed decisions with confidence.'
            },
            {
                icon: <GrowthIcon />,
                title: 'Uncover Hidden Opportunities',
                description: 'Identify patterns, correlations, and trends in your data that reveal new opportunities for growth, efficiency, and innovation.'
            },
            {
                icon: <EfficiencyIcon />,
                title: 'Optimize Business Performance',
                description: 'Pinpoint inefficiencies in your operations, supply chain, and marketing efforts to optimize processes and reduce costs.'
            },
            {
                icon: <SecurityIcon />,
                title: 'Forecast Future Trends',
                description: 'Utilize predictive analytics and machine learning to forecast demand, anticipate market shifts, and mitigate risks proactively.'
            }
        ]
    },
    // DevOps & Cloud
    {
        id: 'cloud-solutions-devops',
        title: 'DevOps and Cloud',
        icon: <CloudIcon />,
        shortDescription: 'We help you design, deploy, and manage cloud systems for seamless performance.',
        longDescription: 'Unlock scalability, reliability, and cost-efficiency with our comprehensive cloud solutions. We help businesses migrate to the cloud, optimize existing infrastructure, and implement robust DevOps practices to accelerate development cycles and improve deployment quality. From AWS to Azure and GCP, our certified experts have you covered.',
        features: ['Cloud Migration Strategy', 'Infrastructure as Code (IaC)', 'CI/CD Pipeline Automation', 'Kubernetes & Containerization', 'Cost Optimization'],
        techStack: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
        benefits: [
            {
                icon: <EfficiencyIcon />,
                title: 'Increased Agility & Speed-to-Market',
                description: 'Automate your build, test, and deployment pipelines to release new features faster and more reliably than your competitors.'
            },
            {
                icon: <GrowthIcon />,
                title: 'Improved System Reliability',
                description: 'Leverage Infrastructure as Code (IaC) and automated monitoring to build resilient, self-healing systems with maximum uptime.'
            },
            {
                icon: <CloudIcon />,
                title: 'Scalable Infrastructure',
                description: 'Utilize the power of the cloud to automatically scale your resources up or down based on demand, paying only for what you use.'
            },
            {
                icon: <CostIcon />,
                title: 'Reduced Operational Costs',
                description: 'Optimize your cloud spending and reduce manual overhead through automation, leading to a lower total cost of ownership (TCO).'
            }
        ]
    },
    // Platforms & Specialized Solutions
    {
        id: 'integrative-video-platform',
        title: 'Integrative Video Platform',
        icon: <VideoIcon />,
        shortDescription: 'Build custom real-time video applications for communication, streaming, and collaboration.',
        longDescription: 'We provide the tools and expertise to build high-quality, real-time video solutions. Whether for video conferencing, live streaming, or secure video calls, our platforms are scalable, reliable, and can be integrated seamlessly into your existing applications.',
        features: ['WebRTC Streaming', 'Live Broadcasting', 'Video Conferencing', 'Recording & Playback', 'Screen Sharing'],
        techStack: ['WebRTC', 'Janus', 'Node.js', 'Kurento', 'React'],
        benefits: [
            {
                icon: <EngagementIcon />,
                title: 'Enhanced Collaboration',
                description: 'Enable face-to-face communication and screen sharing for remote teams, virtual events, and online learning.'
            },
            {
                icon: <GrowthIcon />,
                title: 'Engaging User Experiences',
                description: 'Integrate live video to create more dynamic and interactive experiences for telehealth, customer support, and social applications.'
            },
            {
                icon: <SecurityIcon />,
                title: 'Secure Communication Channels',
                description: 'Build on secure, end-to-end encrypted WebRTC technology to protect sensitive conversations and data.'
            },
            {
                icon: <CloudIcon />,
                title: 'Scalable for Global Reach',
                description: 'Our video platforms are designed to scale, supporting everything from one-on-one calls to large-scale broadcasts.'
            }
        ]
    },
    {
        id: 'online-charging-gateway',
        title: 'Online Charging Gateway (OCG)',
        icon: <DataIcon />,
        shortDescription: 'Real-time charging solutions for telecom operators, enabling flexible and dynamic billing.',
        longDescription: 'Our OCG solution provides a real-time, convergent charging system for telecom service providers. It allows for flexible rating of voice, data, and content services, enabling innovative business models and pricing strategies.',
        features: ['Convergent Charging', 'Diameter & RADIUS support', 'Real-time Balance Management', 'Voucher & Top-up Management', 'High Availability & Scalability'],
        techStack: ['Erlang/OTP', 'Diameter Protocol', 'MySQL Cluster', 'In-memory Database'],
        benefits: [
             {
                icon: <GrowthIcon />,
                title: 'Flexible Monetization Models',
                description: 'Quickly launch innovative and complex pricing plans, bundles, and promotions to stay competitive and meet market demand.'
            },
            {
                icon: <EfficiencyIcon />,
                title: 'Real-time Revenue Assurance',
                description: 'Eliminate revenue leakage with precise, real-time balance management and charging for all services.'
            },
            {
                icon: <ChannelIcon />,
                title: 'Reduced Time-to-Market',
                description: 'A flexible and convergent platform that allows you to configure and deploy new services and offers rapidly.'
            },
            {
                icon: <EngagementIcon />,
                title: 'Enhanced Subscriber Experience',
                description: 'Provide subscribers with real-time balance notifications, transparent billing, and personalized offers.'
            }
        ]
    },
    {
        id: 'cms-development',
        title: 'Content Management System',
        icon: <CmsIcon />,
        shortDescription: 'Develop powerful, flexible, and easy-to-use content management systems tailored to your needs.',
        longDescription: 'Take control of your digital content with a custom CMS. We build headless and traditional content management systems that are intuitive for your non-technical teams to use, while providing the flexibility your developers need.',
        features: ['Headless CMS Architecture', 'Custom Content Models', 'User Roles & Permissions', 'Multi-language Support', 'Integration with Frontend Frameworks'],
        techStack: ['Strapi', 'Contentful', 'Sanity.io', 'Next.js', 'Gatsby'],
        benefits: [
            {
                icon: <EfficiencyIcon />,
                title: 'Empower Content Creators',
                description: 'An intuitive interface allows your marketing and content teams to create, manage, and publish content without developer assistance.'
            },
            {
                icon: <ChannelIcon />,
                title: 'Ensure Brand Consistency',
                description: 'Maintain a consistent brand voice and visual identity across all your digital channels with structured content and templates.'
            },
            {
                icon: <GrowthIcon />,
                title: 'Improve SEO Performance',
                description: 'Custom CMS solutions provide granular control over metadata, URL structures, and other on-page SEO factors to improve rankings.'
            },
            {
                icon: <ApiIcon />,
                title: 'Future-Proof Content Strategy',
                description: 'A headless CMS decouples your content from the presentation layer, allowing you to deliver it to any platform—websites, apps, and future devices.'
            }
        ]
    },
    {
        id: 'subscription-manager',
        title: 'Subscription Manager',
        icon: <SecurityIcon />,
        shortDescription: 'Manage customer subscriptions, billing cycles, and recurring payments with our robust platform.',
        longDescription: 'Automate your subscription lifecycle from sign-up to renewal. Our platform handles complex billing logic, dunning management, and revenue recognition, allowing you to focus on growing your subscription-based business.',
        features: ['Recurring Billing & Invoicing', 'Plan & Add-on Management', 'Dunning & Churn Reduction', 'Payment Gateway Integration', 'Subscription Analytics'],
        techStack: ['Stripe', 'Braintree', 'Ruby on Rails', 'Sidekiq', 'Vue.js'],
        benefits: [
            {
                icon: <GrowthIcon />,
                title: 'Automate Recurring Revenue',
                description: 'Streamline your billing process and ensure predictable, recurring revenue with automated invoicing and payments.'
            },
            {
                icon: <EngagementIcon />,
                title: 'Reduce Customer Churn',
                description: 'Implement automated dunning management to handle failed payments gracefully and retain customers.'
            },
            {
                icon: <EfficiencyIcon />,
                title: 'Simplify Billing Complexity',
                description: 'Easily manage different subscription plans, add-ons, trials, and discounts from a centralized platform.'
            },
            {
                icon: <InsightIcon />,
                title: 'Gain Subscription Analytics',
                description: 'Track key metrics like MRR, churn rate, and customer lifetime value to make informed decisions about your business.'
            }
        ]
    },
    {
        id: 'value-added-service',
        title: 'Value Added Service (VAS)',
        icon: <VasIcon />,
        shortDescription: 'Innovative Value Added Services for telecom operators to enhance customer engagement and revenue.',
        longDescription: 'We develop and deploy a range of Value Added Services (VAS) for the telecom industry, including content services, USSD applications, and loyalty programs. Our solutions help operators increase ARPU and reduce churn by providing engaging services to their subscribers.',
        features: ['USSD Menu-based Services', 'Content Subscription Platforms', 'Mobile Marketing', 'Loyalty & Reward Programs', 'Carrier Billing Integration'],
        techStack: ['USSD Gateway', 'SMPP', 'Python', 'Go', 'Redis'],
        benefits: [
             {
                icon: <GrowthIcon />,
                title: 'Increase Average Revenue Per User (ARPU)',
                description: 'Introduce new, non-core services that generate additional revenue streams from your existing subscriber base.'
            },
            {
                icon: <EngagementIcon />,
                title: 'Enhance Customer Loyalty',
                description: 'Offer unique and engaging services that increase customer satisfaction and reduce churn.'
            },
            {
                icon: <ChannelIcon />,
                title: 'Differentiate from Competitors',
                description: 'Stand out in a competitive market by providing a diverse portfolio of value-added services that others don\'t offer.'
            },
            {
                icon: <EfficiencyIcon />,
                title: 'Rapid Service Deployment',
                description: 'Our flexible platforms enable the quick development and launch of new VAS, allowing you to capitalize on market trends.'
            }
        ]
    }
];


export const SERVICES_PAGE_DATA: ServicePageCategory[] = [
    {
        id: 'custom-software-dev',
        title: 'Custom Software Development',
        icon: <CodeIcon />,
        description: 'As a leading software development company, we architect and engineer bespoke solutions that are scalable, secure, and perfectly aligned with your business objectives. From intricate web platforms to high-performance desktop and mobile apps, our process is tailored to deliver excellence.',
        services: ALL_SERVICES_DATA.filter(s => ['website-development', 'mobile-app-development', 'desktop-software-development', 'crm-development', 'api-development', 'chatbot-development'].includes(s.id))
    },
    {
        id: 'enterprise-communication',
        title: 'Enterprise Communication',
        icon: <CommunicationIcon />,
        description: 'Our enterprise communication solutions empower businesses to connect with their customers efficiently. From automated voice systems to bulk messaging, we offer scalable and secure platforms for seamless multi-channel engagement.',
        services: ALL_SERVICES_DATA.filter(s => ['hosted-ivr', 'outbound-dialer', 'contact-center-solution', 'bulk-sms-services', 'whatsapp-messaging-meta', 'whatsapp-messaging-virtual'].includes(s.id))
    },
    {
        id: 'ai-solutions',
        title: 'AI & Data Solutions',
        icon: <AiIcon />,
        description: 'Reimagine business intelligence through our AI and data science services. We design adaptive systems that automate complex processes, uncover patterns, and forecast opportunities with precision.',
        services: ALL_SERVICES_DATA.filter(s => ['ai-solutions', 'data-analytics'].includes(s.id))
    },
    {
        id: 'video-platform',
        title: 'Integrative Video Platform',
        icon: <VideoIcon />,
        description: 'Build high-quality, real-time video solutions for communication, streaming, and collaboration, seamlessly integrated into your applications.',
        services: ALL_SERVICES_DATA.filter(s => ['integrative-video-platform'].includes(s.id))
    },
    {
        id: 'devops-cloud',
        title: 'DevOps & Cloud',
        icon: <CloudIcon />,
        description: 'Accelerate your development lifecycle and enhance operational efficiency with our DevOps and cloud solutions. We implement robust CI/CD pipelines, manage scalable cloud infrastructure, and ensure your applications are reliable and performant.',
        services: ALL_SERVICES_DATA.filter(s => ['cloud-solutions-devops'].includes(s.id))
    },
    {
        id: 'digital-service-platforms',
        title: 'Digital Service Platform Solutions',
        icon: <PlatformIcon />,
        description: 'Comprehensive platform solutions including online charging, content management, subscription handling, and value-added services to empower your digital ecosystem.',
        services: ALL_SERVICES_DATA.filter(s => ['online-charging-gateway', 'cms-development', 'subscription-manager', 'value-added-service'].includes(s.id))
    }
];


export const TEAM_DATA: TeamStructure = {
    founder: [
        { name: 'Jane Doe', role: 'Founder & CEO', imageUrl: 'https://picsum.photos/seed/founder/400/400', hoverImageUrl: 'https://picsum.photos/seed/founder_dream/400/400?grayscale&blur=2', dream: 'an Astronaut', bio: 'Visionary leader with over 15 years of experience in the tech industry, driving innovation and growth.' },
    ],
    advisor: [
        { name: 'John Smith', role: 'Business Advisor (Our Mentor)', imageUrl: 'https://picsum.photos/seed/advisor/400/400', hoverImageUrl: 'https://picsum.photos/seed/advisor_dream/400/400?grayscale&blur=2', dream: 'a Rockstar' },
    ],
    management: [
        { name: 'Emily White', role: 'Chief Technology Officer', imageUrl: 'https://picsum.photos/seed/manage1/400/400', hoverImageUrl: 'https://picsum.photos/seed/manage1_dream/400/400?grayscale&blur=2', dream: 'a Scientist', bio: 'A technology evangelist with a passion for building scalable and robust systems. Expert in cloud and AI.' },
        { name: 'Michael Brown', role: 'VP of Product', imageUrl: 'https://picsum.photos/seed/manage2/400/400', hoverImageUrl: 'https://picsum.photos/seed/manage2_dream/400/400?grayscale&blur=2', dream: 'a Detective', bio: 'Product strategist focused on creating user-centric products that solve real-world problems and delight customers.' },
        { name: 'Sarah Green', role: 'Director of Operations', imageUrl: 'https://picsum.photos/seed/manage3/400/400', hoverImageUrl: 'https://picsum.photos/seed/manage3_dream/400/400?grayscale&blur=2', dream: 'a Pilot' },
        { name: 'David Black', role: 'Head of Human Resources', imageUrl: 'https://picsum.photos/seed/manage4/400/400', hoverImageUrl: 'https://picsum.photos/seed/manage4_dream/400/400?grayscale&blur=2', dream: 'a Chef' },
    ],
    experts: [
        { name: 'Expert One', role: 'Lead Cloud Architect', imageUrl: 'https://picsum.photos/seed/expert1/400/400', hoverImageUrl: 'https://picsum.photos/seed/expert1_dream/400/400?grayscale&blur=2', dream: 'a Magician' },
        { name: 'Expert Two', role: 'Principal AI Researcher', imageUrl: 'https://picsum.photos/seed/expert2/400/400', hoverImageUrl: 'https://picsum.photos/seed/expert2_dream/400/400?grayscale&blur=2', dream: 'a Novelist' },
        { name: 'Expert Three', role: 'Head of UX/UI Design', imageUrl: 'https://picsum.photos/seed/expert3/400/400', hoverImageUrl: 'https://picsum.photos/seed/expert3_dream/400/400?grayscale&blur=2', dream: 'an Artist' },
        { name: 'Expert Four', role: 'Cybersecurity Analyst', imageUrl: 'https://picsum.photos/seed/expert4/400/400', hoverImageUrl: 'https://picsum.photos/seed/expert4_dream/400/400?grayscale&blur=2', dream: 'a Secret Agent' },
        { name: 'Expert Five', role: 'Lead Data Scientist', imageUrl: 'https://picsum.photos/seed/expert5/400/400', hoverImageUrl: 'https://picsum.photos/seed/expert5_dream/400/400?grayscale&blur=2', dream: 'an Explorer' },
        { name: 'Engineer One', role: 'Senior Software Engineer', imageUrl: 'https://picsum.photos/seed/eng1/400/400', hoverImageUrl: 'https://picsum.photos/seed/eng1_dream/400/400?grayscale&blur=2', dream: 'a Race Car Driver' },
        { name: 'Engineer Two', role: 'Senior Software Engineer', imageUrl: 'https://picsum.photos/seed/eng2/400/400', hoverImageUrl: 'https://picsum.photos/seed/eng2_dream/400/400?grayscale&blur=2', dream: 'a Firefighter' },
        { name: 'Engineer Three', role: 'DevOps Engineer', imageUrl: 'https://picsum.photos/seed/eng3/400/400', hoverImageUrl: 'https://picsum.photos/seed/eng3_dream/400/400?grayscale&blur=2', dream: 'a Video Game Designer' },
        { name: 'Engineer Four', role: 'Frontend Engineer', imageUrl: 'https://picsum.photos/seed/eng4/400/400', hoverImageUrl: 'https://picsum.photos/seed/eng4_dream/400/400?grayscale&blur=2', dream: 'a Musician' },
        { name: 'Engineer Five', role: 'Backend Engineer', imageUrl: 'https://picsum.photos/seed/eng5/400/400', hoverImageUrl: 'https://picsum.photos/seed/eng5_dream/400/400?grayscale&blur=2', dream: 'an Architect' },
        { name: 'Engineer Six', role: 'QA Engineer', imageUrl: 'https://picsum.photos/seed/eng6/400/400', hoverImageUrl: 'https://picsum.photos/seed/eng6_dream/400/400?grayscale&blur=2', dream: 'a Film Director' },
        { name: 'Engineer Seven', role: 'Mobile App Developer', imageUrl: 'https://picsum.photos/seed/eng7/400/400', hoverImageUrl: 'https://picsum.photos/seed/eng7_dream/400/400?grayscale&blur=2', dream: 'a Photographer' },
        { name: 'Engineer Eight', role: 'Software Engineer', imageUrl: 'https://picsum.photos/seed/eng8/400/400', hoverImageUrl: 'https://picsum.photos/seed/eng8_dream/400/400?grayscale&blur=2', dream: 'a Veterinarian' },
        { name: 'Engineer Nine', role: 'Software Engineer', imageUrl: 'https://picsum.photos/seed/eng9/400/400', hoverImageUrl: 'https://picsum.photos/seed/eng9_dream/400/400?grayscale&blur=2', dream: 'a Teacher' },
        { name: 'Engineer Ten', role: 'Software Engineer', imageUrl: 'https://picsum.photos/seed/eng10/400/400', hoverImageUrl: 'https://picsum.photos/seed/eng10_dream/400/400?grayscale&blur=2', dream: 'a Pro Gamer' },
        { name: 'Engineer Eleven', role: 'Junior Engineer', imageUrl: 'https://picsum.photos/seed/eng11/400/400', hoverImageUrl: 'https://picsum.photos/seed/eng11_dream/400/400?grayscale&blur=2', dream: 'a Superhero' },
        { name: 'Engineer Twelve', role: 'Junior Engineer', imageUrl: 'https://picsum.photos/seed/eng12/400/400', hoverImageUrl: 'https://picsum.photos/seed/eng12_dream/400/400?grayscale&blur=2', dream: 'a Ninja' },
    ],
    engineers: [],
};


export const BLOG_POSTS: BlogPost[] = [
  { 
    id: '1', 
    title: 'The Future of AI in Business: A 1500-Word Exploration', 
    author: 'Jane Doe', 
    date: 'August 15, 2023', 
    imageUrl: 'https://picsum.photos/seed/blog1/1200/800', 
    excerpt: 'Explore how artificial intelligence is reshaping industries, from process automation to predictive analytics, and what it means for your business strategy in the coming years.',
    readingTime: '8 min read',
    tags: ['AI', 'Business Strategy', 'Innovation'],
    content: [
      { type: 'paragraph', content: "Artificial Intelligence (AI) is no longer a futuristic concept confined to science fiction; it is a powerful, present-day reality that is fundamentally transforming industries from healthcare and finance to retail and manufacturing. At its core, AI encompasses a range of technologies that enable machines to learn from experience, adapt to new inputs, and perform tasks that typically require human intelligence. For businesses, this translates into unprecedented opportunities to automate processes, derive deep insights from data, and create highly personalized customer experiences. The strategic integration of AI is rapidly becoming a key differentiator between market leaders and laggards." },
      { type: 'heading', content: "Understanding the Core Pillars of AI in Business" },
      { type: 'paragraph', content: "To grasp the impact of AI, it’s essential to understand its main subfields. Machine Learning (ML) is a subset of AI where algorithms are trained on large datasets to recognize patterns and make predictions without being explicitly programmed. Natural Language Processing (NLP) allows machines to understand, interpret, and generate human language, powering everything from chatbots to sentiment analysis tools. Computer Vision enables machines to interpret and act on visual information from the world, a technology crucial for autonomous vehicles and quality control in manufacturing." },
      { type: 'image', src: 'https://picsum.photos/seed/blog1-img1/1200/600', alt: 'Abstract visualization of a neural network' },
      { type: 'heading', content: "AI-Powered Automation: Redefining Efficiency" },
      { type: 'paragraph', content: "One of the most significant and immediate impacts of AI is in the realm of automation. Repetitive, rule-based tasks that once required significant human intervention can now be handled by AI systems with superior speed, accuracy, and consistency. This shift doesn't just reduce operational costs; it liberates human workers from monotonous labor, allowing them to focus on more complex, strategic, and creative endeavors that require critical thinking and emotional intelligence. For example, in manufacturing, AI-powered robots are not only assembling products but also using computer vision to identify defects in real-time. In customer service, intelligent chatbots are handling a high volume of routine inquiries 24/7, which allows human agents to dedicate their time to resolving more complex and sensitive customer issues, thereby improving overall service quality." },
       { type: 'paragraph', content: "This wave of automation extends to back-office functions as well. Robotic Process Automation (RPA), enhanced with AI capabilities, can automate tasks like data entry, invoice processing, and report generation, minimizing errors and accelerating business processes. The result is a more agile and efficient organization, capable of responding more quickly to market changes." },
      { type: 'quote', content: "The best way to predict the future is to invent it. AI is the tool that allows us to invent a more efficient, intelligent, and responsive future.", author: "Alan Kay (paraphrased for context)" },
      { type: 'heading', content: "Data-Driven Insights: The New Competitive Advantage" },
      { type: 'paragraph', content: "The digital era has created an explosion of data, a resource often referred to as the 'new oil.' However, raw data is of little value. The real value lies in the ability to process and analyze it to uncover actionable insights. This is where AI and ML algorithms excel. They can sift through vast and complex datasets—from customer behavior and market trends to operational metrics—to identify patterns, predict future outcomes, and provide insights that would be virtually impossible for humans to discover on their own. This data-driven approach empowers companies to make smarter, more informed decisions across all departments. Marketing teams can personalize campaigns with unprecedented precision, supply chain managers can optimize logistics by predicting demand fluctuations, and financial institutions can detect fraudulent transactions in real-time." },
      { type: 'image', src: 'https://picsum.photos/seed/blog1-img2/1200/600', alt: 'Data visualization dashboards on a screen' },
       { type: 'paragraph', content: "Furthermore, predictive analytics, a key application of AI, allows businesses to move from a reactive to a proactive stance. Instead of just analyzing past performance, companies can now forecast future trends, anticipate customer needs, and identify potential risks before they materialize. This foresight provides a powerful competitive advantage." },
       { type: 'heading', content: "The Road Ahead: Challenges and Ethical Considerations" },
       { type: 'paragraph', content: "As we forge ahead, it's crucial to acknowledge that the integration of AI is not without its challenges. Issues of data privacy, algorithmic bias, and the impact on the workforce require careful consideration. Building trust in AI systems is paramount, which means ensuring they are transparent, fair, and accountable. As we look to the future, the role of AI in business will only continue to expand. Companies that embrace AI strategically, integrating it into their core operations and culture while navigating the ethical landscape responsibly, will be the ones best positioned to innovate, compete, and thrive in an increasingly digital and intelligent world. The key is to approach AI not merely as a technological tool, but as a fundamental catalyst for business transformation and human augmentation." }
    ]
  },
  { 
    id: '2', 
    title: 'Why Your Next Application Should be Cloud-Native', 
    author: 'John Smith', 
    date: 'August 10, 2023', 
    imageUrl: 'https://picsum.photos/seed/blog2/1200/800', 
    excerpt: 'A deep dive into the benefits of cloud-native architecture, from scalability and resilience to faster development cycles.',
    readingTime: '5 min read',
    tags: ['Cloud', 'DevOps', 'Architecture'],
    content: [
      { type: 'paragraph', content: "In today's fast-paced digital landscape, building applications that are scalable, resilient, and agile is paramount. This is where cloud-native architecture comes in. Being \"cloud-native\" isn't just about running applications in the cloud; it's an approach to building and running applications that fully exploits the advantages of the cloud computing delivery model." },
      { type: 'heading', content: "Core Principles of Cloud-Native" },
      { type: 'paragraph', content: "Cloud-native architecture is based on several key principles, including microservices, containerization, and continuous integration/continuous delivery (CI/CD)." },
      { type: 'paragraph', content: "By adopting these principles, businesses can build applications that are not only highly scalable and resilient but can also be updated frequently and predictably with minimal risk. This agility is a critical advantage in a market where customer expectations and business needs are constantly evolving." }
    ]
  },
  { 
    id: '3', 
    title: '5 UI/UX Principles for Building Apps People Love', 
    author: 'Sarah Green', 
    date: 'August 5, 2023', 
    imageUrl: 'https://picsum.photos/seed/blog3/1200/800', 
    excerpt: 'Learn the core design principles that can elevate your application from functional to unforgettable.',
    readingTime: '4 min read',
    tags: ['UI/UX', 'Design', 'Development'],
    content: [
      { type: 'paragraph', content: "A great application is more than just functional code; it's about creating an experience that is intuitive, enjoyable, and seamless for the user. This is where User Interface (UI) and User Experience (UX) design come into play. Here are five core principles to keep in mind." },
      { type: 'heading', content: "1. Clarity and Simplicity" },
      { type: 'paragraph', content: "The best interfaces are clean and easy to understand. Avoid clutter and unnecessary elements. Every element on the screen should have a clear purpose. Simplicity makes the user's journey straightforward and reduces cognitive load." }
    ]
  },
  { 
    id: '4', 
    title: 'Demystifying DevOps: A Beginner\'s Guide', 
    author: 'Michael Brown', 
    date: 'July 28, 2023', 
    imageUrl: 'https://picsum.photos/seed/blog4/1200/800', 
    excerpt: 'Understand the culture, practices, and tools that make up DevOps and how it can transform your software development lifecycle.',
    readingTime: '6 min read',
    tags: ['DevOps', 'CI/CD', 'Culture'],
    content: [
      { type: 'paragraph', content: "DevOps is a term you hear a lot in the tech world, but what does it really mean? It's not just a role or a tool; it's a culture, a set of practices, and a philosophy that aims to shorten the software development life cycle and provide continuous delivery with high software quality." },
      { type: 'heading', content: "The Core Idea: Breaking Down Silos" },
      { type: 'paragraph', content: "Traditionally, development (Dev) and operations (Ops) teams worked in separate silos. Developers would write code and \"throw it over the wall\" to the operations team to deploy and maintain. This often led to miscommunication, delays, and conflicts. DevOps aims to break down these silos by merging the teams, skills, and responsibilities." }
    ]
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    title: "Inventory Management Software",
    client: "Sanso Pipes",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop",
    clientLogoUrl: "https://ui-avatars.com/api/?name=Sanso+Pipes&background=0D8ABC&color=fff",
    challenge: "Sanso Pipes faced inefficiencies due to an outdated inventory system causing errors, overstocking, and delayed orders.",
    solution: "JIFFY implemented a customized inventory management software with real-time tracking, automated alerts, and ERP integration, ensuring smooth adoption with training.",
    result: "Improved inventory accuracy, enhanced order fulfillment efficiency, and reduced operational costs, enabling scalable operations.",
    keyMetrics: [
      { label: 'Accuracy', value: 'Improved' },
      { label: 'Efficiency', value: 'Enhanced' },
      { label: 'Costs', value: 'Reduced' }
    ]
  },
  {
    id: '2',
    title: "CMS and OCG",
    client: "JMVAS Telecommunications PVT LTD",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600&auto=format&fit=crop",
    clientLogoUrl: "https://ui-avatars.com/api/?name=JMVAS&background=bb1237&color=fff",
    challenge: "The client faced high operational costs and delays in service deployment due to a fragmented CMS and an outdated OCG system, which hindered workflow efficiency and real-time charging.",
    solution: "JIFFY implemented a customized CMS and a cost-effective OCG solution, designed to streamline workflows, enhance integration, and enable real-time charging capabilities.",
    result: "The solution reduced operational costs, significantly improved service deployment speed, and provided a scalable foundation for seamless operations.",
    keyMetrics: [
      { label: 'OpEx', value: 'Reduced' },
      { label: 'Deployment', value: 'Faster' },
      { label: 'Scalability', value: 'High' }
    ]
  },
  {
    id: '3',
    title: "IVR (Story Box)",
    client: "Premium Mobile Solutions LTD",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop",
    clientLogoUrl: "https://ui-avatars.com/api/?name=PMS&background=001f92&color=fff",
    challenge: "The client needed a tailored IVR solution with advanced features, real-time updates, and scalability, which their existing system lacked.",
    solution: "Developed a customized \"Story Box\" IVR with interactive features and seamless integration with their infrastructure.",
    result: "Enhanced customer interaction, streamlined service delivery, and a scalable platform for growth.",
    keyMetrics: [
      { label: 'Interaction', value: 'Enhanced' },
      { label: 'Delivery', value: 'Streamlined' },
      { label: 'Platform', value: 'Scalable' }
    ]
  },
  {
    id: '4',
    title: "Cruise Booking Engine",
    client: "Avaista",
    imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=600&auto=format&fit=crop",
    clientLogoUrl: "https://ui-avatars.com/api/?name=Avaista&background=10b981&color=fff",
    challenge: "Complex booking process, manual operations, lack of real-time updates, and scalability issues during peak seasons.",
    solution: "Developed a user-friendly engine with real-time inventory updates, automated processes, and a scalable cloud-based architecture.",
    result: "Ongoing project; initial results show higher customer satisfaction, reduced errors, and successful handling of traffic spikes.",
    keyMetrics: [
      { label: 'Satisfaction', value: 'Higher' },
      { label: 'Errors', value: 'Reduced' },
      { label: 'Traffic', value: 'Stable' }
    ]
  },
  {
    id: '5',
    title: "CMS and OCG",
    client: "Mobilart",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
    clientLogoUrl: "https://ui-avatars.com/api/?name=Mobilart&background=f59e0b&color=fff",
    challenge: "Mobilart faced fragmented content management and lacked real-time charging capabilities, resulting in high operational costs, delays in service deployment, and inefficiencies in meeting growing demands.",
    solution: "JIFFY delivered a tailored solution by integrating a robust CMS with an optimized OCG system. This ensured seamless workflows, real-time charging, and improved performance.",
    result: "The unified system reduced operational costs, accelerated service deployment, and streamlined processes, enabling efficient scaling and enhanced customer experiences.",
    keyMetrics: [
      { label: 'Costs', value: 'Reduced' },
      { label: 'Deployment', value: 'Faster' },
      { label: 'Process', value: 'Lean' }
    ]
  }
];

export const FAQS: FaqItem[] = [
    {
        question: 'What is custom software development?',
        answer: 'Custom software development is the process of designing, creating, deploying, and maintaining software for a specific set of users, functions, or organizations. Unlike off-the-shelf software, custom solutions are tailored to your specific requirements.'
    },
    {
        question: 'How long does a typical project take?',
        answer: 'The timeline for a project varies greatly depending on its complexity, scope, and features. A simple project might take a few months, while a large-scale enterprise application could take a year or more. We follow an agile methodology, delivering value in increments and providing clear timelines after an initial discovery phase.'
    },
    {
        question: 'Do you offer support and maintenance after the project is launched?',
        answer: 'Yes, we offer a range of support and maintenance packages to ensure your application remains secure, up-to-date, and performs optimally. We believe in building long-term partnerships with our clients.'
    },
    {
        question: 'Which industries do you specialize in?',
        answer: 'We have extensive experience across various industries, including FinTech, Healthcare, E-commerce, and Education. Our agile approach allows us to adapt our expertise to the unique challenges of any business sector.'
    },
    {
        question: 'How do you ensure the security of the software you build?',
        answer: 'Security is a top priority in our development process. We follow best practices like secure coding standards, conduct regular code reviews, perform vulnerability assessments, and integrate security into every stage of the CI/CD pipeline.'
    }
];


export const TECHNOLOGIES = [
  'Java', 'JavaScript', 'ReactJS', 'React Native', 'PHP', 'Laravel', 'NodeJS',
  'Spring Boot', '.NET', 'Flutter', 'MySQL', 'PostgreSQL', 'MongoDB',
  'Firebase', 'AWS', 'GitHub Actions', 'Blockchain', 'Linux', 'Shell Scripting'
];

export const CORE_EXPERTISE = [
  {
    icon: <CodeIcon />,
    title: 'Custom Software Development',
    description: 'Building scalable, secure, and tailor-made software solutions from scratch.'
  },
  {
    icon: <CloudIcon />,
    title: 'Cloud & DevOps',
    description: 'Automating pipelines and managing cloud infrastructure for optimal performance.'
  },
  {
    icon: <CommunicationIcon />,
    title: 'Enterprise Communication',
    description: 'Developing robust IVR, OBD, and messaging platforms for seamless communication.'
  },
  {
    icon: <AiIcon />,
    title: 'AI & Data Analytics',
    description: 'Leveraging AI and data to unlock insights and drive intelligent automation.'
  },
   {
    icon: <MobileIcon />,
    title: 'Mobile App Development',
    description: 'Creating intuitive and high-performance native and cross-platform mobile applications.'
  },
  {
    icon: <SecurityIcon />,
    title: 'System Security & Architecture',
    description: 'Designing resilient systems with a strong focus on security and best practices.'
  }
];

export const SERVICE_QUOTE_OPTIONS = [
    'Custom Software Development',
    'Website Development',
    'Mobile App Development',
    'CRM Development',
    'API Development',
    'Chatbot / AI Solution',
    'Enterprise Communication (IVR, Bulk SMS, WhatsApp)',
    'Cloud / DevOps',
    'Integrative Video Platform',
    'Digital Platform Solutions (OCG, CMS, Subscription, VAS)',
];

export const COUNTRIES = [
    'United States', 'Canada', 'United Kingdom', 'Australia', 'Germany', 'France', 'India', 'Singapore', 'Other'
];

export const TIMEZONE_OPTIONS = [
    '(GMT-12:00) International Date Line West',
    '(GMT-11:00) Midway Island, Samoa',
    '(GMT-10:00) Hawaii',
    '(GMT-09:00) Alaska',
    '(GMT-08:00) Pacific Time (US & Canada)',
    '(GMT-07:00) Mountain Time (US & Canada)',
    '(GMT-06:00) Central Time (US & Canada)',
    '(GMT-05:00) Eastern Time (US & Canada)',
    '(GMT-04:00) Atlantic Time (Canada)',
    '(GMT-03:00) Buenos Aires, Georgetown',
    '(GMT-02:00) Mid-Atlantic',
    '(GMT-01:00) Cape Verde Is.',
    '(GMT+00:00) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London',
    '(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna',
    '(GMT+02:00) Athens, Bucharest, Istanbul',
    '(GMT+03:00) Moscow, St. Petersburg, Volgograd',
    '(GMT+04:00) Abu Dhabi, Muscat',
    '(GMT+05:00) Islamabad, Karachi, Tashkent',
    '(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi',
    '(GMT+06:00) Almaty, Novosibirsk',
    '(GMT+07:00) Bangkok, Hanoi, Jakarta',
    '(GMT+08:00) Beijing, Perth, Singapore, Hong Kong',
    '(GMT+09:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk',
    '(GMT+10:00) Brisbane, Canberra, Melbourne, Sydney',
    '(GMT+11:00) Magadan, Solomon Is., New Caledonia',
    '(GMT+12:00) Auckland, Wellington',
    '(GMT+13:00) Nuku\'alofa',
    '(GMT+14:00) Kiritimati Island',
];

export const HOW_HEARD_OPTIONS = [
    'Search Engine (Google, Bing)',
    'Social Media (LinkedIn, Twitter)',
    'Referral from a friend/colleague',
    'Online Advertisement',
    'Blog or Publication',
    'Event or Conference',
    'Other'
];