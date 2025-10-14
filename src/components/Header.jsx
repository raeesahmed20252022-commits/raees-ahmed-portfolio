import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';

const Header = () => {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;
  
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
            <Link 
              to="/" 
              className={`font-medium transition-colors duration-200 px-3 py-2 rounded-lg ${
                isActive('/') 
                  ? 'text-white bg-green-600' 
                  : 'text-gray-700 hover:text-white hover:bg-green-600'
              }`}
              style={{ 
                textDecoration: 'none',
                backgroundColor: isActive('/') ? '#059669' : 'transparent',
                color: isActive('/') ? 'white' : '#374151'
              }}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors duration-200 px-3 py-2 rounded-lg ${
                isActive('/about') 
                  ? 'text-white bg-green-600' 
                  : 'text-gray-700 hover:text-white hover:bg-green-600'
              }`}
              style={{ 
                textDecoration: 'none',
                backgroundColor: isActive('/about') ? '#059669' : 'transparent',
                color: isActive('/about') ? 'white' : '#374151'
              }}
            >
              About
            </Link>
            <Link 
              to="/projects" 
              className={`font-medium transition-colors duration-200 px-3 py-2 rounded-lg ${
                isActive('/projects') 
                  ? 'text-white bg-green-600' 
                  : 'text-gray-700 hover:text-white hover:bg-green-600'
              }`}
              style={{ 
                textDecoration: 'none',
                backgroundColor: isActive('/projects') ? '#059669' : 'transparent',
                color: isActive('/projects') ? 'white' : '#374151'
              }}
            >
              Projects
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium transition-colors duration-200 px-3 py-2 rounded-lg ${
                isActive('/contact') 
                  ? 'text-white bg-green-600' 
                  : 'text-gray-700 hover:text-white hover:bg-green-600'
              }`}
              style={{ 
                textDecoration: 'none',
                backgroundColor: isActive('/contact') ? '#059669' : 'transparent',
                color: isActive('/contact') ? 'white' : '#374151'
              }}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
