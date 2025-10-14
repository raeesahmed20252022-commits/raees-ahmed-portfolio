import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Header = () => {
  return (
    <header className="glass border-b border-border sticky top-0 z-50 animate-fadeInUp">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-text-primary animate-fadeInLeft">
              Atif Ali
            </h1>
          </div>
          <nav className="flex space-x-4 animate-fadeInRight">
            <Link to="/">
              <Button variant="ghost" size="small">
                Home
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="ghost" size="small">
                About
              </Button>
            </Link>
            <Link to="/projects">
              <Button variant="ghost" size="small">
                Projects
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="ghost" size="small">
                Contact
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
