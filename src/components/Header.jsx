import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const isActive = p => pathname === p;

  return (
    <header className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(5,11,24,0.92)' : 'rgba(5,11,24,0.6)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: scrolled ? '1px solid rgba(99,102,241,0.12)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.4)' : 'none',
      }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between" style={{ height:'64px' }}>

          {/* Logo */}
          <Link to="/" style={{ textDecoration:'none' }}>
            <span className="font-heading font-extrabold"
              style={{ fontSize:'1.3rem', background:'var(--grad-text)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
              Raees Ahmed
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ to, label }) => (
              <Link key={to} to={to} style={{ textDecoration:'none' }}>
                <span className="relative px-4 py-2 rounded-lg font-medium text-sm block transition-all duration-200"
                  style={{ color: isActive(to) ? '#c4b5fd' : '#64748b', background: isActive(to) ? 'rgba(99,102,241,0.12)' : 'transparent' }}
                  onMouseEnter={e => { if (!isActive(to)) { e.currentTarget.style.color='#94a3b8'; e.currentTarget.style.background='rgba(255,255,255,0.04)'; } }}
                  onMouseLeave={e => { if (!isActive(to)) { e.currentTarget.style.color='#64748b'; e.currentTarget.style.background='transparent'; } }}>
                  {label}
                  {isActive(to) && (
                    <span className="absolute rounded-full" style={{ bottom:'4px', left:'50%', transform:'translateX(-50%)', width:'16px', height:'2px', background:'var(--grad)' }} />
                  )}
                </span>
              </Link>
            ))}
            <a href="mailto:raeesahmed20252022@gmail.com" style={{ textDecoration:'none', marginLeft:'0.75rem' }}>
              <span className="btn-primary px-5 py-2 rounded-lg font-semibold text-sm" style={{ display:'inline-block' }}>
                Hire Me
              </span>
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button className="md:hidden flex flex-col items-center justify-center gap-1.5 p-2 rounded-lg"
            style={{ background: menuOpen ? 'rgba(99,102,241,0.12)' : 'transparent', border: 'none', cursor: 'pointer' }}
            onClick={() => setMenuOpen(m => !m)} aria-label="Toggle menu">
            {[0,1,2].map(i => (
              <span key={i} style={{
                display:'block', width:'20px', height:'2px', borderRadius:'2px', background:'#94a3b8',
                transition:'all .25s ease',
                transform: menuOpen ? (i===0?'rotate(45deg) translate(3px,3px)':i===2?'rotate(-45deg) translate(3px,-3px)':'scaleX(0)') : 'none',
                opacity: menuOpen && i===1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div style={{
        overflow:'hidden', maxHeight: menuOpen ? '320px' : '0', transition:'max-height .35s cubic-bezier(0.16,1,0.3,1)',
        background:'rgba(5,11,24,0.98)', borderTop: menuOpen ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
      }}>
        <nav className="px-4 py-3 space-y-1">
          {navLinks.map(({ to, label }) => (
            <Link key={to} to={to} style={{ textDecoration:'none', display:'block' }}>
              <span className="block px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200"
                style={{ color: isActive(to) ? '#c4b5fd' : '#64748b', background: isActive(to) ? 'rgba(99,102,241,0.12)' : 'transparent' }}>
                {label}
              </span>
            </Link>
          ))}
          <a href="mailto:raeesahmed20252022@gmail.com" style={{ textDecoration:'none', display:'block', marginTop:'.5rem' }}>
            <span className="btn-primary block text-center py-3 rounded-xl font-semibold text-sm">Hire Me</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
