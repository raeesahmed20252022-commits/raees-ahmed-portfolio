import React, { useEffect, useRef, useState } from 'react';

function useReveal(delay = 0) {
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

const skillGroups = [
  { label: 'Frontend',      icon: '🌐', color: '#6366f1', skills: ['Next.js', 'React.js', 'TypeScript', 'JavaScript ES6+', 'Tailwind CSS', 'Material UI', 'Redux', 'Context API'] },
  { label: 'Mobile',        icon: '📱', color: '#a855f7', skills: ['Flutter', 'Dart', 'GetX', 'Provider', 'Firebase Integration', 'REST APIs'] },
  { label: 'Backend',       icon: '⚙️', color: '#06b6d4', skills: ['Node.js', 'Express.js', 'RESTful APIs', 'Firebase Functions', 'JWT Auth'] },
  { label: 'Databases',     icon: '🗄️', color: '#14b8a6', skills: ['Firebase Firestore', 'MongoDB', 'MySQL', 'PostgreSQL'] },
  { label: 'Tools & DevOps',icon: '🛠️', color: '#f59e0b', skills: ['Git', 'GitHub', 'CI/CD', 'Docker', 'Postman', 'Jira', 'VS Code'] },
  { label: 'Testing',       icon: '✅', color: '#22c55e', skills: ['Jest', 'React Testing Library', 'ESLint', 'Prettier'] },
];

const experience = [
  { title:'Full-Stack Developer', company:'Ewarnet', duration:'Jan 2024 – Present', type:'Full-time', color:'#6366f1',
    desc:'Built SEO-optimized modules with Next.js SSR. Integrated Node.js APIs, optimized React state (Redux + Context API), collaborated with international teams via Slack and Jira.' },
  { title:'Web Developer', company:'CloudQuik', duration:'Feb 2022 – Jan 2024', type:'Remote', color:'#a855f7',
    desc:'Delivered responsive UIs with Next.js, React.js, Tailwind CSS. Integrated Firebase Auth and Cloud Firestore. Migrated legacy systems to modular Next.js — improved build time by 30%.' },
  { title:'Website Developer', company:'Tecrux Global', duration:'Mar 2020 – Feb 2022', type:'Remote', color:'#06b6d4',
    desc:'Developed and maintained REST APIs with Node.js and Express.js. Built dynamic admin dashboards and optimized backend query performance.' },
  { title:'Mobile App Developer', company:'OTS', duration:'Feb 2018 – Mar 2020', type:'On-site', color:'#14b8a6',
    desc:'Built Flutter apps for Android and iOS integrated with REST APIs. Managed production releases on App Store and Google Play.' },
];

export default function About() {
  const [headRef, headV] = useReveal();
  const [skillRef, skillV] = useReveal();
  const [expRef, expV] = useReveal();
  const [extraRef, extraV] = useReveal();

  return (
    <div className="min-h-screen py-20 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Heading ── */}
        <div ref={headRef} className="text-center mb-20"
          style={{ transition:'opacity .7s ease, transform .7s ease', opacity:headV?1:0, transform:headV?'translateY(0)':'translateY(32px)' }}>
          <span className="badge mb-5" style={{ display:'inline-flex' }}>About Me</span>
          <h1 className="font-heading font-extrabold mb-6"
            style={{ fontSize:'clamp(2.25rem,5vw,3.75rem)', color:'#f1f5f9', lineHeight:1.1 }}>
            Building products that{' '}
            <span className="gradient-text">actually scale</span>
          </h1>
          <div className="w-16 h-1 mx-auto mb-8 rounded-full" style={{ background:'var(--grad)' }} />
          <p style={{ color:'#64748b', maxWidth:'680px', margin:'0 auto', lineHeight:1.8, fontSize:'1.05rem' }}>
            I'm Raees Ahmed — a Full-Stack Developer with 5+ years building production-grade web and mobile
            applications for startups and established platforms across Pakistan, UAE, and Canada. My core
            stack is Flutter, Next.js, React.js, and Node.js. I specialize in turning complex requirements
            into clean, maintainable code that businesses can grow on.
          </p>
        </div>

        {/* ── Skills ── */}
        <div ref={skillRef} className="mb-24">
          <div className="text-center mb-12"
            style={{ transition:'opacity .6s ease, transform .6s ease', opacity:skillV?1:0, transform:skillV?'translateY(0)':'translateY(24px)' }}>
            <h2 className="font-heading font-bold text-3xl" style={{ color:'#f1f5f9' }}>Technical Skills</h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'1.25rem' }}>
            {skillGroups.map((g, gi) => (
              <div key={g.label} className="glass-card rounded-2xl p-6"
                style={{ transition:`opacity .55s ease ${gi*90}ms, transform .55s ease ${gi*90}ms`, opacity:skillV?1:0, transform:skillV?'translateY(0)':'translateY(24px)' }}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="rounded-xl flex items-center justify-center"
                    style={{ width:'40px', height:'40px', background:`${g.color}18`, border:`1px solid ${g.color}30`, fontSize:'1.25rem' }}>
                    {g.icon}
                  </div>
                  <h3 className="font-heading font-semibold" style={{ color:'#e2e8f0' }}>{g.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.skills.map(s => (
                    <span key={s} className="tag" style={{ background:`${g.color}12`, color:`${g.color}dd`, borderColor:`${g.color}28` }}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Experience ── */}
        <div ref={expRef} className="mb-24">
          <div className="text-center mb-12"
            style={{ transition:'opacity .6s ease, transform .6s ease', opacity:expV?1:0, transform:expV?'translateY(0)':'translateY(24px)' }}>
            <h2 className="font-heading font-bold text-3xl" style={{ color:'#f1f5f9' }}>Work Experience</h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="timeline-line hidden md:block" />
            <div className="space-y-6 md:pl-10">
              {experience.map((job, i) => (
                <div key={i} className="relative flex gap-4 md:gap-6"
                  style={{ transition:`opacity .6s ease ${i*120}ms, transform .6s ease ${i*120}ms`, opacity:expV?1:0, transform:expV?'translateX(0)':'translateX(-20px)' }}>
                  <div className="timeline-dot hidden md:flex mt-1 flex-shrink-0" style={{ background:`linear-gradient(135deg,${job.color},${job.color}aa)`, boxShadow:`0 0 12px ${job.color}66` }} />
                  <div className="glass-card rounded-2xl p-6 flex-1">
                    <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'space-between', alignItems:'flex-start', gap:'0.75rem', marginBottom:'0.75rem' }}>
                      <div>
                        <h3 className="font-heading font-bold text-lg" style={{ color:'#f1f5f9' }}>{job.title}</h3>
                        <p className="font-semibold mt-0.5" style={{ color: job.color }}>{job.company}</p>
                      </div>
                      <div style={{ textAlign:'right' }}>
                        <p style={{ color:'#64748b', fontSize:'.8rem' }}>{job.duration}</p>
                        <span className="badge mt-1" style={{ fontSize:'.7rem', background:`${job.color}12`, color:`${job.color}cc`, borderColor:`${job.color}28` }}>
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <p style={{ color:'#64748b', fontSize:'.9rem', lineHeight:1.7 }}>{job.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Extra: Education + Soft Skills + Languages ── */}
        <div ref={extraRef}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6"
            style={{ transition:'opacity .6s ease, transform .6s ease', opacity:extraV?1:0, transform:extraV?'translateY(0)':'translateY(28px)' }}>

            {/* Education */}
            <div className="glass-card rounded-2xl p-7">
              <h2 className="font-heading font-bold text-xl mb-6" style={{ color:'#f1f5f9' }}>🎓 Education</h2>
              <div className="flex items-start gap-4">
                <div className="rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ width:'48px', height:'48px', background:'rgba(99,102,241,0.12)', border:'1px solid rgba(99,102,241,0.2)', fontSize:'1.5rem' }}>🏫</div>
                <div>
                  <p className="font-heading font-bold" style={{ color:'#f1f5f9' }}>MSc Computer Science</p>
                  <p style={{ color:'#a5b4fc', marginTop:'.25rem' }}>Abbottabad University of Science & Technology</p>
                  <p style={{ color:'#64748b', fontSize:'.85rem', marginTop:'.2rem' }}>Abbottabad, Pakistan</p>
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="glass-card rounded-2xl p-7">
              <h2 className="font-heading font-bold text-xl mb-6" style={{ color:'#f1f5f9' }}>💡 Soft Skills</h2>
              <ul className="space-y-3">
                {['Strong analytical & problem-solving', 'Excellent communication & teamwork', 'Time management & multitasking', 'Passion for new technologies', 'Creativity & innovation'].map(s => (
                  <li key={s} className="flex items-center gap-3" style={{ color:'#94a3b8', fontSize:'.9rem' }}>
                    <span style={{ color:'#6366f1', flexShrink:0 }}>▹</span>{s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Languages */}
            <div className="glass-card rounded-2xl p-7">
              <h2 className="font-heading font-bold text-xl mb-6" style={{ color:'#f1f5f9' }}>🌐 Languages</h2>
              {[{ lang:'English', level:'Fluent', pct:90 },{ lang:'Urdu', level:'Native', pct:100 }].map(l => (
                <div key={l.lang} className="mb-5">
                  <div className="flex justify-between mb-2">
                    <span style={{ color:'#e2e8f0', fontWeight:500 }}>{l.lang}</span>
                    <span className="badge" style={{ fontSize:'.7rem' }}>{l.level}</span>
                  </div>
                  <div className="rounded-full overflow-hidden" style={{ height:'4px', background:'rgba(255,255,255,0.06)' }}>
                    <div className="rounded-full" style={{ width: extraV?`${l.pct}%`:'0%', height:'100%', background:'var(--grad)', transition:'width 1.2s cubic-bezier(0.34,1,0.64,1) 0.3s' }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="glass-card rounded-2xl p-7">
              <h2 className="font-heading font-bold text-xl mb-6" style={{ color:'#f1f5f9' }}>🏆 Certifications</h2>
              <ul className="space-y-4">
                {['Full Stack Mobile Development – Udemy', 'Advanced Flutter Development – Google Developer Certification'].map(c => (
                  <li key={c} className="flex items-start gap-3" style={{ color:'#94a3b8', fontSize:'.9rem' }}>
                    <span style={{ color:'#f59e0b', flexShrink:0, marginTop:'.1rem' }}>🎖️</span>{c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
