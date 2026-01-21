
import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
    {children}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Brand Info */}
          <div className="lg:col-span-3">
            <Link to="/" className="inline-block mb-6">
              <div className="flex flex-col">
                  <span className="text-4xl font-extrabold leading-none text-white">
                      <span>JIFF</span>
                      <span className="text-accent">Y</span>
                  </span>
                  <span className="text-xs font-light text-gray-300 tracking-[0.2em] -mt-1">SOFTWARE SOLUTIONS</span>
              </div>
            </Link>
            <p className="text-gray-400 max-w-xs mb-6">
              Innovative IT and telecom solutions tailored to drive sustainable growth and long-term success.
            </p>
            <div className="flex space-x-4">
              <SocialIcon href="#"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19.102 3h-14.204c-1.048 0-1.898.85-1.898 1.898v14.204c0 1.048.85 1.898 1.898 1.898h14.204c1.048 0 1.898-.85 1.898-1.898v-14.204c0-1.048-.85-1.898-1.898-1.898zm-11.433 16.035h-2.835v-9.33h2.835v9.33zm-1.42-10.564c-.93 0-1.685-.755-1.685-1.685s.755-1.685 1.685-1.685 1.685.755 1.685 1.685-.755 1.685-1.685 1.685zm12.184 10.564h-2.83v-4.575c0-1.09-.02-2.49-1.515-2.49-1.515 0-1.75.95-1.75 2.41v4.655h-2.835v-9.33h2.715v1.24h.04c.375-.71 1.29-1.45 2.675-1.45 2.86 0 3.39 1.88 3.39 4.325v4.975z" clipRule="evenodd"></path></svg></SocialIcon>
              <SocialIcon href="#"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.585-.069-4.85c.149-3.225 1.664 4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 2.122c-3.116 0-3.485.01-4.7.068-2.68.122-3.858 1.312-3.98 3.98-.058 1.215-.068 1.584-.068 4.7s.01 3.485.068 4.7c.122 2.67 1.3 3.858 3.98 3.98 1.215.058 1.584.068 4.7.068s3.485-.01 4.7-.068c2.68-.122 3.858-1.312 3.98-3.98.058-1.215-.068-1.584-.068-4.7s-.01-3.485-.068-4.7c-.122-2.67-1.3-3.858-3.98-3.98-1.215-.058-1.584-.068-4.7-.068zm0 4.865a3.84 3.84 0 100 7.68 3.84 3.84 0 000-7.68zm0 6.162a2.323 2.323 0 110-4.646 2.323 2.323 0 010 4.646zm4.965-7.799a.96.96 0 100 1.92.96.96 0 000-1.92z" clipRule="evenodd"></path></svg></SocialIcon>
              <SocialIcon href="#"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zm-1.653 19.57h2.61L6.486 3.24H3.737l13.512 17.484z"></path></svg></SocialIcon>
              <SocialIcon href="#"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg></SocialIcon>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8">
            
            <div>
              <h3 className="font-semibold mb-4 text-white uppercase tracking-wider">Services</h3>
              <ul className="space-y-2">
                <li><Link to="/service/website-development" className="text-gray-400 hover:text-white transition-colors">Custom Software</Link></li>
                <li><Link to="/service/cloud-solutions-devops" className="text-gray-400 hover:text-white transition-colors">Cloud Solutions</Link></li>
                <li><Link to="/service/mobile-app-development" className="text-gray-400 hover:text-white transition-colors">Mobile Apps</Link></li>
                <li><Link to="/service/ai-solutions" className="text-gray-400 hover:text-white transition-colors">AI & ML</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors font-semibold">View All &rarr;</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white uppercase tracking-wider">Company</h3>
              <ul className="space-y-2">
                 {NAV_LINKS.map(link => (
                     <li key={link.name}><Link to={link.path.startsWith('/#') ? `/${link.path}`: link.path} className="text-gray-400 hover:text-white transition-colors">{link.name}</Link></li>
                  ))}
                <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
                <li><Link to="/help-support" className="text-gray-400 hover:text-white transition-colors">Help Center</Link></li>
                <li><Link to="/affiliate-program" className="text-accent font-medium hover:text-white transition-colors">Affiliate Program</Link></li>
              </ul>
            </div>

          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4">
            <h3 className="font-semibold mb-4 text-white uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4 text-gray-400">
                <li className="flex items-start">
                    <svg className="w-6 h-6 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    <span>A-171, Defence Enclave, Kankarkhera, Meerut, Uttar Pradesh 250001, IN</span>
                </li>
                <li className="flex items-start">
                    <svg className="w-6 h-6 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    <div>
                        <a href="mailto:deepanshu.yadav@jiffysoftwares.net" className="hover:text-white transition-colors">deepanshu.yadav@jiffysoftwares.net</a><br />
                        <a href="mailto:rishi@jiffysoftwares.in" className="hover:text-white transition-colors">rishi@jiffysoftwares.in</a>
                    </div>
                </li>
                 <li className="flex items-start">
                    <svg className="w-6 h-6 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    <div>
                        <a href="tel:7300942165" className="hover:text-white transition-colors">7300942165</a><br />
                        <a href="tel:7668276355" className="hover:text-white transition-colors">7668276355</a>
                    </div>
                </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} JIFFY Software Solutions. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
