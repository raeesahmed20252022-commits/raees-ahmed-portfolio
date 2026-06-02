import React, { useEffect, useRef, useState } from 'react';

function useReveal() {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); obs.disconnect(); } }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, v];
}

const contactItems = [
  { icon:'📧', label:'Email', value:'raeesahmed20252022@gmail.com', href:'mailto:raeesahmed20252022@gmail.com', color:'#6366f1' },
  { icon:'📞', label:'Phone', value:'+92 314 455 1419', href:'tel:+923144551419', color:'#a855f7' },
  { icon:'🌍', label:'Location', value:'Islamabad, Pakistan', href:null, color:'#06b6d4' },
  { icon:'💼', label:'LinkedIn', value:'raees-ahmed-b32002356', href:'https://www.linkedin.com/in/raees-ahmed-b32002356/', color:'#0ea5e9' },
  { icon:'🐙', label:'GitHub', value:'github.com/raeesahmed20252022-commits', href:'https://github.com/raeesahmed20252022-commits', color:'#94a3b8' },
];

const whyMe = [
  { icon:'🚀', title:'Production-First', desc:'I ship code that works — clean architecture, tested, and ready to scale.' },
  { icon:'🌍', title:'Global Experience', desc:'Projects in Pakistan, UAE, and Canada — fluent in remote workflows.' },
  { icon:'📱', title:'Full-Stack + Mobile', desc:'End-to-end: web frontend, backend APIs, and cross-platform Flutter apps.' },
];

export default function Contact() {
  const [headRef, headV] = useReveal();
  const [infoRef, infoV] = useReveal();
  const [whyRef, whyV] = useReveal();

  return (
    <div className="min-h-screen py-20 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div ref={headRef} className="text-center mb-20"
          style={{ transition:'opacity .7s ease, transform .7s ease', opacity:headV?1:0, transform:headV?'translateY(0)':'translateY(32px)' }}>
          <span className="badge mb-5" style={{ display:'inline-flex' }}>Contact</span>
          <h1 className="font-heading font-extrabold mb-5"
            style={{ fontSize:'clamp(2rem,5vw,3.5rem)', color:'#f1f5f9', lineHeight:1.1 }}>
            Let's <span className="gradient-text">Work Together</span>
          </h1>
          <div className="w-16 h-1 mx-auto mb-6 rounded-full" style={{ background:'var(--grad)' }} />
          <p style={{ color:'#64748b', maxWidth:'480px', margin:'0 auto', lineHeight:1.7 }}>
            Open to full-time roles and select freelance projects. I usually respond within 24 hours.
          </p>
        </div>

        {/* Main grid */}
        <div ref={infoRef} style={{ display:'grid', gridTemplateColumns:'1fr', gap:'1.5rem', marginBottom:'4rem' }}
          className="lg:grid-cols-2">

          {/* Contact info card */}
          <div className="glass-card rounded-2xl p-8 h-full"
            style={{ transition:'opacity .65s ease, transform .65s ease', opacity:infoV?1:0, transform:infoV?'translateY(0)':'translateY(28px)' }}>
            <h2 className="font-heading font-bold text-xl mb-8" style={{ color:'#f1f5f9' }}>Contact Information</h2>
            <div className="space-y-5">
              {contactItems.map(item => (
                <div key={item.label} className="flex items-center gap-4 group">
                  <div className="rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110"
                    style={{ width:'44px', height:'44px', background:`${item.color}15`, border:`1px solid ${item.color}25`, fontSize:'1.2rem' }}>
                    {item.icon}
                  </div>
                  <div>
                    <p style={{ color:'#475569', fontSize:'.7rem', fontWeight:600, textTransform:'uppercase', letterSpacing:'.08em' }}>{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer"
                        style={{ color: item.color, fontSize:'.9rem', fontWeight:500, textDecoration:'none', transition:'opacity .2s' }}
                        onMouseEnter={e=>e.target.style.opacity='.75'} onMouseLeave={e=>e.target.style.opacity='1'}>
                        {item.value}
                      </a>
                    ) : (
                      <p style={{ color:'#e2e8f0', fontSize:'.9rem', fontWeight:500 }}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl p-5"
              style={{ background:'rgba(99,102,241,0.07)', border:'1px solid rgba(99,102,241,0.15)' }}>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full" style={{ background:'#22c55e', boxShadow:'0 0 6px #22c55e' }} />
                <h3 className="font-semibold" style={{ color:'#f1f5f9', fontSize:'.9rem' }}>Available for Work</h3>
              </div>
              <p style={{ color:'#64748b', fontSize:'.85rem', marginBottom:'.75rem' }}>
                Open to full-time roles and select freelance projects.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Full-time','Freelance','Remote'].map(t => (
                  <span key={t} className="badge" style={{ fontSize:'.7rem' }}>{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Form card */}
          <div className="glass-card rounded-2xl p-8"
            style={{ transition:'opacity .65s ease .1s, transform .65s ease .1s', opacity:infoV?1:0, transform:infoV?'translateY(0)':'translateY(28px)' }}>
            <h2 className="font-heading font-bold text-xl mb-8" style={{ color:'#f1f5f9' }}>Send a Message</h2>
            <form action="mailto:raeesahmed20252022@gmail.com" method="POST" encType="text/plain" className="space-y-5">
              <div>
                <label style={{ display:'block', color:'#64748b', fontSize:'.8rem', fontWeight:600, textTransform:'uppercase', letterSpacing:'.06em', marginBottom:'.5rem' }}>Your Name</label>
                <input name="name" type="text" required placeholder="John Doe" className="form-input" style={{ padding:'.75rem 1rem' }} />
              </div>
              <div>
                <label style={{ display:'block', color:'#64748b', fontSize:'.8rem', fontWeight:600, textTransform:'uppercase', letterSpacing:'.06em', marginBottom:'.5rem' }}>Email Address</label>
                <input name="email" type="email" required placeholder="john@example.com" className="form-input" style={{ padding:'.75rem 1rem' }} />
              </div>
              <div>
                <label style={{ display:'block', color:'#64748b', fontSize:'.8rem', fontWeight:600, textTransform:'uppercase', letterSpacing:'.06em', marginBottom:'.5rem' }}>Subject</label>
                <input name="subject" type="text" placeholder="Project inquiry..." className="form-input" style={{ padding:'.75rem 1rem' }} />
              </div>
              <div>
                <label style={{ display:'block', color:'#64748b', fontSize:'.8rem', fontWeight:600, textTransform:'uppercase', letterSpacing:'.06em', marginBottom:'.5rem' }}>Message</label>
                <textarea name="message" rows="5" required placeholder="Tell me about your project..." className="form-input" style={{ padding:'.75rem 1rem', resize:'none' }} />
              </div>
              <button type="submit" className="btn-primary w-full py-4 rounded-xl font-semibold text-base" style={{ marginTop:'.5rem' }}>
                📩 Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Why Work With Me */}
        <div ref={whyRef} className="glass-card rounded-3xl p-10"
          style={{ background:'rgba(99,102,241,0.04)', borderColor:'rgba(99,102,241,0.12)', transition:'opacity .6s ease, transform .6s ease', opacity:whyV?1:0, transform:whyV?'translateY(0)':'translateY(28px)' }}>
          <h3 className="font-heading font-bold text-2xl mb-10 text-center" style={{ color:'#f1f5f9' }}>Why Work With Me?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyMe.map((item, i) => (
              <div key={item.title} className="text-center"
                style={{ transition:`opacity .5s ease ${i*120}ms, transform .5s ease ${i*120}ms`, opacity:whyV?1:0, transform:whyV?'translateY(0)':'translateY(16px)' }}>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="font-heading font-bold mb-2" style={{ color:'#f1f5f9' }}>{item.title}</h4>
                <p style={{ color:'#64748b', fontSize:'.9rem', lineHeight:1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
