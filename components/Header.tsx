import React, { useState } from 'react';
import { Page } from '../types';
import { AeonsbyteLogo } from './Icons';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = Object.values(Page);

  const NavLink: React.FC<{ page: Page }> = ({ page }) => (
    <button
      onClick={() => {
        setCurrentPage(page);
        setIsMenuOpen(false);
      }}
      className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-300 ${
        currentPage === page
          ? 'text-white bg-aeonsbyte-purple'
          : 'text-aeonsbyte-light-gray hover:text-white'
      }`}
    >
      {page}
    </button>
  );

  return (
    <header className="bg-aeonsbyte-dark/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
             <AeonsbyteLogo className="h-8 w-auto text-white cursor-pointer" onClick={() => setCurrentPage(Page.Home)} />
          </div>
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((page) => (
              <NavLink key={page} page={page} />
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-aeonsbyte-light-dark focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            {navLinks.map((page) => (
              <NavLink key={page} page={page} />
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;