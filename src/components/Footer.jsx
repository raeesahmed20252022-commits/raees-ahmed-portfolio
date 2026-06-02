import React from 'react';
import { Link } from 'react-router-dom';

const links = [['Home','/'],['About','/about'],['Projects','/projects'],['Contact','/contact']];
const socials = [
  { icon:'🐙', href:'https://github.com/raeesahmed20252022-commits/raees-ahmed-portfolio', label:'GitHub' },
  { icon:'💼', href:'https://www.linkedin.com/in/raees-ahmed-b32002356/', label:'LinkedIn' },
  { icon:'📧', href:'mailto:raeesahmed20252022@gmail.com', label:'Email' },
];

export default function Footer() {
  return (
    <footer style={{ borderTop:'1px solid rgba(255,255,255,0.05)', background:'rgba(0,0,0,0.3)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div style={{ display:'grid', gridTemplateColumns:'1fr', gap:'2rem', alignItems:'center', textAlign:'center' }}
          className="md:grid-cols-3 md:text-left">

          {/* Brand */}
          <div>
            <p className="font-heading font-extrabold text-xl mb-1" style={{ background:'var(--grad-text)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
              Raees Ahmed
            </p>
            <p style={{ color:'#475569', fontSize:'.8rem' }}>Designed & Built by Raees Ahmed</p>
            <p className="badge mt-3" style={{ display:'inline-flex', fontSize:'.7rem' }}>
              Full-time · Freelance · Remote
            </p>
          </div>

          {/* Nav */}
          <nav style={{ display:'flex', gap:'1.5rem', justifyContent:'center', flexWrap:'wrap' }}>
            {links.map(([label, to]) => (
              <Link key={to} to={to} style={{ textDecoration:'none', color:'#475569', fontSize:'.875rem', transition:'color .2s' }}
                onMouseEnter={e=>e.target.style.color='#a5b4fc'} onMouseLeave={e=>e.target.style.color='#475569'}>
                {label}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <div style={{ display:'flex', gap:'.75rem', justifyContent:'center' }} className="md:justify-end">
            {socials.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                className="rounded-xl flex items-center justify-center text-lg transition-all duration-200"
                style={{ width:'40px', height:'40px', background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.06)' }}
                onMouseEnter={e=>{e.currentTarget.style.background='rgba(99,102,241,0.15)';e.currentTarget.style.borderColor='rgba(99,102,241,0.3)';e.currentTarget.style.transform='translateY(-2px)';}}
                onMouseLeave={e=>{e.currentTarget.style.background='rgba(255,255,255,0.04)';e.currentTarget.style.borderColor='rgba(255,255,255,0.06)';e.currentTarget.style.transform='none';}}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 text-center" style={{ borderTop:'1px solid rgba(255,255,255,0.04)' }}>
          <p style={{ color:'#1e293b', fontSize:'.78rem' }}>© 2026 Raees Ahmed. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
