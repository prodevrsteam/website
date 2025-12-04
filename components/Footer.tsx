import React from 'react';
import { FacebookIcon, InstagramIcon, LinkedInIcon, YoutubeIcon } from './Icons';
import { Page } from '../types';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
  openConsultantModal: () => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage, openConsultantModal }) => {
  const importantLinks = [Page.About, Page.Expertise, Page.OurWork, Page.Careers, Page.Contact];
  
  return (
    <footer className="bg-aeonsbyte-light-dark text-aeonsbyte-gray">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
            <h2 className="text-lg font-semibold text-aeonsbyte-light-gray">GET IN TOUCH</h2>
            <p className="mt-2 text-3xl md:text-4xl font-bold text-white">
                START YOUR DIGITAL TRANSFORMATION JOURNEY WITH US.
            </p>
            <button 
              onClick={openConsultantModal}
              className="mt-6 bg-aeonsbyte-purple text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-80 transition duration-300">
                Speak to a consultant
            </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
          <div>
            <h3 className="font-semibold text-white uppercase tracking-wider">Important Links</h3>
            <ul className="mt-4 space-y-2">
              {importantLinks.map(page => (
                <li key={page}>
                  <button onClick={() => setCurrentPage(page)} className="hover:text-white transition-colors">{page}</button>
                </li>
              ))}
            </ul>
          </div>
          <div>
             <h3 className="font-semibold text-white uppercase tracking-wider">Get in touch</h3>
             <p className="mt-4">info@aeonsbyte.com</p>
             <p>+91 00000-00000</p>
          </div>
          <div>
            <h3 className="font-semibold text-white uppercase tracking-wider">Our Office</h3>
            <p className="mt-4">
                Delhi, India
            </p>
          </div>
          <div>
             <h3 className="font-semibold text-white uppercase tracking-wider">Follow us</h3>
             <div className="flex mt-4 space-x-4">
                <a href="https://www.facebook.com/aeonsbyte" aria-label="Facebook" className="hover:text-white transition-colors"><FacebookIcon className="h-6 w-6"/></a>
                <a href="https://www.instagram.com/aeonsbyte_official" aria-label="Instagram" className="hover:text-white transition-colors"><InstagramIcon className="h-6 w-6"/></a>
                <a href="https://www.linkedin.com/company/aeonsbyte" aria-label="LinkedIn" className="hover:text-white transition-colors"><LinkedInIcon className="h-6 w-6"/></a>
                <a href="https://www.youtube.com/channel/aeonsbyte" aria-label="YouTube" className="hover:text-white transition-colors"><YoutubeIcon className="h-6 w-6"/></a>
             </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-6 py-4 text-center text-xs">
          <p>Copyright © {new Date().getFullYear()} Aeonsbyte Digital Communications. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;