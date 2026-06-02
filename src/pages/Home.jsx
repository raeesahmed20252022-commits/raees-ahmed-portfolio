import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

/* ── Typewriter hook ── */
function useTypewriter(words, speed = 100, deleteSpeed = 55, pause = 2000) {
  const [text, setText] = useState('');
  const [wi, setWi] = useState(0);
  const [ci, setCi] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const word = words[wi % words.length];
    const t = setTimeout(() => {
      if (!deleting) {
        setText(word.slice(0, ci + 1));
        if (ci + 1 === word.length) setTimeout(() => setDeleting(true), pause);
        else setCi(c => c + 1);
      } else {
        setText(word.slice(0, ci - 1));
        if (ci <= 1) { setDeleting(false); setWi(w => w + 1); setCi(0); }
        else setCi(c => c - 1);
      }
    }, deleting ? deleteSpeed : speed);
    return () => clearTimeout(t);
  }, [ci, deleting, wi, words, speed, deleteSpeed, pause]);
  return text;
}

/* ── Scroll reveal hook ── */
function useReveal(delay = 0) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); obs.disconnect(); } }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, v, delay];
}

const ROLES = ['Full-Stack Developer', 'Flutter Engineer', 'Next.js Expert', 'Mobile App Builder'];

const services = [
  { icon: '📱', title: 'Mobile Development', desc: 'Flutter & Dart — cross-platform iOS/Android apps with native-level performance and beautiful UX.' },
  { icon: '🌐', title: 'Web Development', desc: 'Next.js, React.js & TypeScript — fast, SEO-optimized, scalable web platforms built to production standards.' },
  { icon: '⚙️', title: 'Backend & APIs', desc: 'Node.js, Express, Firebase — robust REST APIs, real-time services, and cloud-native backend architecture.' },
];

const stats = [
  { value: '5+', label: 'Years Experience', icon: '📅' },
  { value: '16+', label: 'Projects Shipped', icon: '🚀' },
  { value: '3', label: 'Countries Served', icon: '🌍' },
  { value: '100%', label: 'Client Focus', icon: '🎯' },
];

const techStack = ['Flutter', 'Next.js', 'React.js', 'Node.js', 'Firebase', 'TypeScript', 'MongoDB', 'Tailwind CSS'];

export default function Home() {
  const role = useTypewriter(ROLES, 90, 50, 2200);
  const [heroRef, heroV] = useReveal(0);
  const [statsRef, statsV] = useReveal(0);
  const [servRef, servV] = useReveal(0);

  return (
    <div className="min-h-screen overflow-x-hidden">

      {/* ══ HERO ══ */}
      <section className="relative min-h-screen flex items-center py-24" ref={heroRef}>
        {/* Orbs */}
        <div className="orb w-96 h-96 -top-20 -left-20 opacity-30" style={{ background: 'radial-gradient(circle, #6366f1, transparent)', animationDuration:'14s' }} />
        <div className="orb w-80 h-80 -bottom-10 -right-10 opacity-20" style={{ background: 'radial-gradient(circle, #a855f7, transparent)', animationDuration:'18s', animationDelay:'-6s' }} />
        <div className="orb w-48 h-48 top-1/3 right-1/4 opacity-15" style={{ background: 'radial-gradient(circle, #06b6d4, transparent)', animationDuration:'22s', animationDelay:'-10s' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div style={{ display:'grid', gridTemplateColumns:'1fr', gap:'4rem', alignItems:'center' }}
            className="lg:grid-cols-2">

            {/* Left */}
            <div style={{ transition:'opacity 0.8s ease, transform 0.8s ease', opacity: heroV?1:0, transform: heroV?'translateY(0)':'translateY(40px)' }}>
              {/* Available badge */}
              <div className="badge animate-fadeInUp mb-6" style={{ display:'inline-flex' }}>
                <span className="w-2 h-2 rounded-full mr-2" style={{ background:'#22c55e', boxShadow:'0 0 8px #22c55e' }} />
                Available for work
              </div>

              {/* Headline */}
              <h1 className="font-heading font-black mb-4" style={{ fontSize:'clamp(2.5rem,6vw,5rem)', lineHeight:1.1, color:'#f1f5f9' }}>
                Hello, I'm{' '}
                <span className="gradient-text block" style={{ display:'block' }}>Raees Ahmed</span>
              </h1>

              {/* Typewriter */}
              <div className="font-heading font-semibold mb-6"
                style={{ fontSize:'clamp(1.25rem,3vw,1.75rem)', color:'#94a3b8', minHeight:'2.5rem' }}>
                <span style={{ color:'#a5b4fc' }}>{role}</span>
                <span className="cursor-blink" style={{ color:'#6366f1' }}>|</span>
              </div>

              <p className="mb-10" style={{ fontSize:'1.1rem', lineHeight:1.75, color:'#64748b', maxWidth:'520px' }}>
                I build fast, scalable, and user-focused web and mobile applications — from idea to production.
                5+ years delivering clean architecture across Pakistan, UAE, and Canada.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mb-10">
                <Link to="/projects" style={{ textDecoration:'none' }}>
                  <button className="btn-primary btn-pulse px-8 py-4 rounded-xl font-semibold text-base" style={{ fontSize:'1rem' }}>
                    🚀 View My Work
                  </button>
                </Link>
                <Link to="/contact" style={{ textDecoration:'none' }}>
                  <button className="btn-outline px-8 py-4 rounded-xl font-semibold" style={{ fontSize:'1rem' }}>
                    💬 Let's Talk
                  </button>
                </Link>
              </div>

              {/* Tech chips */}
              <div className="flex flex-wrap gap-2">
                {techStack.map(t => (
                  <span key={t} className="tag" style={{ fontSize:'0.75rem' }}>{t}</span>
                ))}
              </div>
            </div>

            {/* Right — floating card */}
            <div className="relative flex justify-center items-center"
              style={{ transition:'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s', opacity: heroV?1:0, transform: heroV?'translateY(0)':'translateY(40px)' }}>
              <div className="relative" style={{ maxWidth:'380px', width:'100%' }}>
                {/* Glow */}
                <div className="absolute inset-0 rounded-3xl blur-3xl opacity-20"
                  style={{ background:'linear-gradient(135deg, #6366f1, #a855f7, #ec4899)', transform:'scale(1.15)' }} />

                {/* Card */}
                <div className="relative rounded-3xl p-8 flex flex-col items-center text-center"
                  style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', backdropFilter:'blur(20px)', minHeight:'360px', justifyContent:'center' }}>

                  <div style={{ fontSize:'5rem', marginBottom:'1.5rem', filter:'drop-shadow(0 0 20px rgba(99,102,241,0.5))' }}>💻</div>
                  <h3 className="font-heading font-bold text-xl mb-2" style={{ color:'#f1f5f9' }}>Full-Stack Developer</h3>
                  <p style={{ color:'#94a3b8', fontSize:'.9rem', marginBottom:'1.5rem' }}>Web · Mobile · AI · Cloud</p>

                  {/* Mini stats */}
                  <div className="grid grid-cols-2 gap-3 w-full mt-2">
                    {[['5+','Years Exp'],['16+','Projects'],['3','Countries'],['100%','Dedicated']].map(([v,l]) => (
                      <div key={l} className="rounded-xl p-3 text-center"
                        style={{ background:'rgba(99,102,241,0.1)', border:'1px solid rgba(99,102,241,0.15)' }}>
                        <div className="font-heading font-bold" style={{ color:'#818cf8', fontSize:'1.25rem' }}>{v}</div>
                        <div style={{ color:'#64748b', fontSize:'0.65rem' }}>{l}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating decorations */}
                <div className="absolute -top-4 -right-4 rounded-xl flex items-center justify-center"
                  style={{ width:'48px', height:'48px', background:'rgba(99,102,241,0.2)', border:'1px solid rgba(99,102,241,0.3)', backdropFilter:'blur(8px)', animation:'floatB 8s ease-in-out infinite' }}>
                  <span style={{ fontSize:'1.5rem' }}>⚡</span>
                </div>
                <div className="absolute -bottom-4 -left-4 rounded-xl flex items-center justify-center"
                  style={{ width:'40px', height:'40px', background:'rgba(168,85,247,0.2)', border:'1px solid rgba(168,85,247,0.3)', backdropFilter:'blur(8px)', animation:'floatB 10s ease-in-out infinite reverse' }}>
                  <span style={{ fontSize:'1.25rem' }}>🎯</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1\/2 flex flex-col items-center gap-2" style={{ opacity: heroV ? 0.5 : 0, transition:'opacity 1s ease 1.5s' }}>
          <span style={{ color:'#475569', fontSize:'0.75rem' }}>Scroll</span>
          <div className="w-5 h-8 rounded-full flex items-start justify-center pt-2"
            style={{ border:'1px solid rgba(255,255,255,0.15)' }}>
            <div className="w-1 h-2 rounded-full" style={{ background:'#6366f1', animation:'scrollDot 1.8s ease-in-out infinite' }} />
          </div>
        </div>
        <style>{`@keyframes scrollDot{0%,100%{transform:translateY(0);opacity:1}80%{transform:translateY(10px);opacity:0}}`}</style>
      </section>

      {/* ══ STATS ══ */}
      <section ref={statsRef} style={{ borderTop:'1px solid rgba(255,255,255,0.05)', borderBottom:'1px solid rgba(255,255,255,0.05)' }} className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={s.label} className="stat-card p-6 text-center rounded-2xl"
                style={{ transition:`opacity .6s ease ${i*120}ms, transform .6s ease ${i*120}ms`, opacity: statsV?1:0, transform: statsV?'translateY(0)':'translateY(20px)' }}>
                <div style={{ fontSize:'1.75rem', marginBottom:'.5rem' }}>{s.icon}</div>
                <div className="font-heading font-extrabold" style={{ fontSize:'2.25rem', background:'var(--grad-text)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>{s.value}</div>
                <div style={{ color:'#64748b', fontSize:'.8rem', marginTop:'.25rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SERVICES ══ */}
      <section ref={servRef} className="py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16"
          style={{ transition:'opacity .7s ease, transform .7s ease', opacity: servV?1:0, transform: servV?'translateY(0)':'translateY(30px)' }}>
          <p className="badge mb-4" style={{ display:'inline-flex' }}>What I Do</p>
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl mb-4" style={{ color:'#f1f5f9' }}>My Expertise</h2>
          <p style={{ color:'#64748b', maxWidth:'480px', margin:'0 auto' }}>
            Turning complex requirements into clean, maintainable, scalable products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {services.map((s, i) => (
            <div key={s.title} className="service-card p-8"
              style={{ transition:`opacity .6s ease ${i*150}ms, transform .6s ease ${i*150}ms`, opacity: servV?1:0, transform: servV?'translateY(0)':'translateY(30px)' }}>
              <div className="rounded-2xl flex items-center justify-center mb-6"
                style={{ width:'56px', height:'56px', background:'rgba(99,102,241,0.12)', border:'1px solid rgba(99,102,241,0.2)', fontSize:'1.6rem' }}>
                {s.icon}
              </div>
              <h3 className="font-heading font-bold text-xl mb-3" style={{ color:'#f1f5f9' }}>{s.title}</h3>
              <p style={{ color:'#64748b', lineHeight:1.7, fontSize:'.925rem' }}>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="relative rounded-3xl p-10 text-center overflow-hidden"
          style={{ background:'rgba(99,102,241,0.06)', border:'1px solid rgba(99,102,241,0.15)' }}>
          <div className="absolute inset-0 opacity-5" style={{ background:'var(--grad)', borderRadius:'inherit' }} />
          <h3 className="font-heading font-bold text-3xl mb-3 relative" style={{ color:'#f1f5f9' }}>Ready to build something great?</h3>
          <p className="mb-8 relative" style={{ color:'#64748b' }}>Open to full-time roles and select freelance projects.</p>
          <div className="flex flex-wrap gap-4 justify-center relative">
            <Link to="/projects" style={{ textDecoration:'none' }}>
              <button className="btn-primary px-8 py-3 rounded-xl font-semibold">🗂️ See All Projects</button>
            </Link>
            <Link to="/contact" style={{ textDecoration:'none' }}>
              <button className="btn-outline px-8 py-3 rounded-xl font-semibold">📩 Get In Touch</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
