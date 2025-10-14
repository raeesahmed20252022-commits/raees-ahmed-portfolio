import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Atif Ali
            </h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
              About
            </Link>
            <Link to="/projects" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
              Projects
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
              Contact
            </Link>
          </nav>
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
