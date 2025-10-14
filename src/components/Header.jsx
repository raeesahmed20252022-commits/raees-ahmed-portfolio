import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Header = () => {
  return (
    <header className="glass border-b border-border sticky top-0 z-50 animate-fadeInUp mobile-viewport-fix">
      <div className="container mobile-container-fix">
        <div className="flex justify-between items-center h-16 mobile-flex-column">
          <div className="flex items-center">
            <h1 className="mobile-heading text-2xl font-bold text-text-primary animate-fadeInLeft mobile-text-visible">
              Atif Ali
            </h1>
          </div>
          <nav className="mobile-nav-fix flex space-x-4 animate-fadeInRight">
            <Link to="/">
              <Button variant="ghost" size="small" className="mobile-nav-link">
                Home
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="ghost" size="small" className="mobile-nav-link">
                About
              </Button>
            </Link>
            <Link to="/projects">
              <Button variant="ghost" size="small" className="mobile-nav-link">
                Projects
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="ghost" size="small" className="mobile-nav-link">
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
