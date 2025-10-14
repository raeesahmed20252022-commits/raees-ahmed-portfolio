import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Atif Ali
            </h1>
          </div>
          <nav className="flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-green-50">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-green-50">
              About
            </Link>
            <Link to="/projects" className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-green-50">
              Projects
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-green-50">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
