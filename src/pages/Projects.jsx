import React, { useState, useEffect, useRef } from 'react';
import ProjectModal from '../components/ProjectModal';

function useReveal() {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); obs.disconnect(); } }, { threshold: 0.05 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, v];
}

const CAT_STYLES = {
  'Real Estate':       { bg:'rgba(34,197,94,0.1)',   color:'#4ade80', border:'rgba(34,197,94,0.25)' },
  'Healthcare':        { bg:'rgba(6,182,212,0.1)',   color:'#22d3ee', border:'rgba(6,182,212,0.25)' },
  'Service Marketplace':{ bg:'rgba(245,158,11,0.1)', color:'#fbbf24', border:'rgba(245,158,11,0.25)' },
  'Job Platform':      { bg:'rgba(99,102,241,0.1)',  color:'#818cf8', border:'rgba(99,102,241,0.25)' },
  'AI Platform':       { bg:'rgba(236,72,153,0.1)',  color:'#f472b6', border:'rgba(236,72,153,0.25)' },
  'Social / Dating App':{ bg:'rgba(236,72,153,0.1)',  color:'#f472b6', border:'rgba(236,72,153,0.25)' },
  'Mobile App':        { bg:'rgba(59,130,246,0.1)',  color:'#60a5fa', border:'rgba(59,130,246,0.25)' },
  'E-commerce':        { bg:'rgba(249,115,22,0.1)',  color:'#fb923c', border:'rgba(249,115,22,0.25)' },
  'Service Platform':  { bg:'rgba(20,184,166,0.1)',  color:'#2dd4bf', border:'rgba(20,184,166,0.25)' },
  'AI Tool':           { bg:'rgba(139,92,246,0.1)',  color:'#a78bfa', border:'rgba(139,92,246,0.25)' },
  'Utility App':       { bg:'rgba(100,116,139,0.1)', color:'#94a3b8', border:'rgba(100,116,139,0.25)' },
  'Social Media':      { bg:'rgba(14,165,233,0.1)',  color:'#38bdf8', border:'rgba(14,165,233,0.25)' },
};
const defaultStyle = { bg:'rgba(99,102,241,0.1)', color:'#818cf8', border:'rgba(99,102,241,0.25)' };

const allProjects = [
  { id:1, featured:true, title:'Lamudi.pk', category:'Real Estate', url:'https://www.lamudi.pk',
    description:"Pakistan's leading property listing platform. Built advanced search, filters, and dynamic front-end modules using Next.js and React.js. Optimized SEO for high-traffic pages and integrated real-time APIs.",
    tags:['Next.js','React.js','SEO','REST APIs','High Traffic'],
    detailedDescription:"Contributed to Pakistan's leading property platform. Built advanced search & filter modules, optimized SEO for high-traffic pages, and integrated real-time property listing APIs.",
    features:['Advanced property search & filtering','SEO-optimized high-traffic pages','Real-time listing API integration','Responsive mobile-first UI'],
    challenges:['Scaling search for millions of listings','Maintaining SEO with dynamic rendering'],
    results:['Improved organic search traffic','Faster page loads with SSR'],
    role:'Front-End Developer — Next.js, React.js, SEO optimization.' },
  { id:2, featured:true, title:'Marham.pk', category:'Healthcare', url:'https://www.marham.pk',
    description:"Full-stack web platform for Pakistan's largest doctor booking service. Built responsive modules with Next.js and React.js, optimized SEO, and integrated Firebase for real-time updates.",
    tags:['Next.js','React.js','Node.js','Firebase','SEO'],
    detailedDescription:'A full-stack healthcare and doctor-booking platform. Delivered responsive modules, SEO optimization, and Firebase integration for real-time updates.',
    features:['Doctor search and booking flows','Real-time appointment updates','SEO-optimized content pages','Mobile-first responsive UI'],
    challenges:['SEO for dynamic healthcare content','Real-time availability updates'],
    results:['Improved page discoverability','Real-time data sync for better UX'],
    role:'Full-Stack Developer — Next.js, React.js, Node.js, Firebase.' },
  { id:3, featured:true, title:'GoMaidz.ai', category:'Service Marketplace', url:'https://www.gomaids.ai',
    description:'AI-powered service marketplace with Next.js and Node.js. Integrated Google Maps for location-based search, payment gateways for secure transactions, and Firebase for live booking notifications.',
    tags:['Next.js','Node.js','Firebase','Google Maps','Payments'],
    detailedDescription:'An on-demand service marketplace connecting users with home services. Google Maps integration, multiple payment gateways, and real-time booking notifications.',
    features:['Location-based search with Google Maps','Multiple payment gateway integration','Live booking notifications','Provider management dashboard'],
    challenges:['Integrating multiple payment providers','Real-time notifications at scale'],
    results:['Higher booking completion rates','Reliable live updates'],
    role:'Full-Stack Developer — marketplace, maps, payments, notifications.' },
  { id:4, featured:true, title:'Publish.jobs', category:'Job Platform', url:'https://publish.jobs',
    description:'Job publishing platform with Next.js, React.js, and Node.js. Designed admin dashboards, implemented automated posting workflows, and enhanced SEO visibility.',
    tags:['Next.js','React.js','Node.js','Automation','SEO'],
    detailedDescription:'A job publishing and recruitment platform with admin dashboards, automated workflows, and modern UX for job seekers.',
    features:['Job publishing and listing management','Admin dashboards for employers','Automated posting workflows','SEO-optimized job pages'],
    challenges:['Flexible admin workflows','Scalable job search and filtering'],
    results:['Efficient posting and candidate management','Organic traffic growth via SEO'],
    role:'Full-Stack Developer — architecture, dashboards, API design.' },
  { id:5, featured:true, title:'SmartCityPK', category:'Real Estate', url:'https://www.smartcitypk.com',
    description:'Real estate portal with booking forms, property pages, and CMS modules. Fast-loading UI with Next.js and Tailwind CSS — excellent mobile and desktop experience.',
    tags:['Next.js','Tailwind CSS','CMS','Responsive UI'],
    detailedDescription:'A real estate information portal with booking forms, property pages, and CMS-based content. Built for performance on both mobile and desktop.',
    features:['Property detail and booking pages','CMS-based content management','Tailwind CSS responsive UI','Fast loading with SSG'],
    challenges:['Content management at scale','Mobile-first performance optimization'],
    results:['Excellent mobile and desktop UX','Fast page loads with static generation'],
    role:'Front-End Developer — Next.js, Tailwind CSS, CMS integration.' },
  { id:6, featured:true, title:'MineChat.ai', category:'AI Platform', url:null,
    description:'AI-powered chat marketplace connecting creators, coaches, and experts. React, Firebase, and integrated AI APIs for intelligent conversations.',
    tags:['React','Firebase','AI APIs','Figma','Chat System'],
    detailedDescription:'AI-powered chat marketplace with advanced AI integration, sleek design system, and user flow optimization.',
    features:['AI-powered conversation matching','Real-time chat with Firebase','Creator dashboard with analytics','Smart conversation suggestions'],
    challenges:['Designing intuitive AI interaction flows','Integrating multiple AI APIs'],
    results:['50% increase in user engagement','90% conversation quality satisfaction'],
    role:'UI/UX Designer + Developer — full-stack, AI integration.' },
  { id:7, featured:true, title:'Moyya — Community App', category:'Social / Dating App', url:'https://moyya.co', appUrl:'https://app.moyya.co',
    description:'Community and connection platform — social/dating PWA. Built the landing site and progressive web app with React and Node.js. Features user profiles, matchmaking, and real-time chat.',
    tags:['React','Node.js','PWA','Real-time Chat','Community'],
    detailedDescription:'Moyya is a community connection platform based in Germany. Built the landing site (moyya.co) and full PWA (app.moyya.co) with matchmaking and real-time messaging.',
    features:['Progressive Web App for mobile-first UX','User profiles and matchmaking','Real-time chat and notifications','Landing site and onboarding flows'],
    challenges:['Offline-first PWA architecture','Real-time matchmaking at scale'],
    results:['Smooth onboarding and engagement','Reliable real-time messaging'],
    role:'Full-Stack Developer — landing site, PWA, real-time features.' },
  // More projects
  { id:8, title:'Notary & Notary Ping', category:'Mobile App',
    description:'Secure authentication & Google Maps integration for notary services with real-time location tracking.',
    tags:['Flutter','Firebase','Google Maps','Authentication'],
    detailedDescription:'A notary service platform with two apps — find notary services and manage requests with real-time GPS.',
    features:['Secure authentication','Real-time GPS tracking','Notary discovery within radius','Push notifications'],
    challenges:['Secure auth for sensitive data','Optimizing real-time location search'],
    results:['40% faster discovery','95% user satisfaction'],
    role:'Full-stack mobile developer.' },
  { id:9, title:'Fidelyz & Fidelyz Seller', category:'E-commerce',
    description:'End-to-end food ordering & tracking with seller dashboard and real-time order management.',
    tags:['Flutter','Node.js','Firebase','REST APIs'],
    detailedDescription:'Full food delivery ecosystem with customer app, seller dashboard, real-time tracking, and analytics.',
    features:['Real-time order tracking with GPS','Multiple payment gateways','Restaurant analytics','Inventory management'],
    challenges:['High-volume concurrent orders','Complex payment flows'],
    results:['60% efficiency increase','25% fewer cancellations'],
    role:'Lead developer — mobile app, backend, real-time tracking.' },
  { id:10, title:'AI Voice Changer', category:'AI Tool', liveUrl:'https://ai-voice-changer.vercel.app',
    description:'Real-time voice-to-text and text-to-voice AI web app with OpenAI Whisper and ElevenLabs.',
    tags:['React','Tailwind CSS','Node.js','OpenAI','ElevenLabs'],
    detailedDescription:'Real-time voice transformation — OpenAI Whisper for transcription, ElevenLabs for synthesis.',
    features:['Voice-to-text with Whisper','Text-to-voice with ElevenLabs','Multiple language support','Waveform visualization'],
    challenges:['Minimizing latency','Accessible UI'],
    results:['40% latency reduction','95% transcription accuracy'],
    role:'Product Designer + Developer.' },
  { id:11, title:'Blog App', category:'Social Media',
    description:'Daily blogging platform with Firebase authentication and real-time data storage.',
    tags:['Flutter','Firebase','Authentication','Real-time'],
    role:'Mobile Developer.' },
  { id:12, title:'PDF to Audio Converter', category:'Utility App',
    description:'Converts PDF documents into playable audio with Firebase storage and retrieval.',
    tags:['Flutter','PDF Processing','Audio Conversion','Firebase'],
    role:'Mobile Developer.' },
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); obs.disconnect(); } }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const cs = CAT_STYLES[project.category] || defaultStyle;

  return (
    <>
      <div ref={ref} className="project-card flex flex-col"
        style={{ borderRadius:'1.25rem', transition:`opacity .55s ease ${index*130}ms, transform .55s ease ${index*130}ms`, opacity:v?1:0, transform:v?'translateY(0)':'translateY(28px)', minHeight:'300px' }}
        onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>

        {/* Category */}
        <div className="p-6 pb-0">
          <span style={{ display:'inline-flex', alignItems:'center', padding:'.25rem .75rem', borderRadius:'9999px', fontSize:'.7rem', fontWeight:700, background:cs.bg, color:cs.color, border:`1px solid ${cs.border}`, letterSpacing:'.04em' }}>
            {project.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="font-heading font-bold text-lg mb-3" style={{ color: hovering ? '#c4b5fd' : '#f1f5f9', transition:'color .2s' }}>{project.title}</h3>
          <p style={{ color:'#64748b', fontSize:'.875rem', lineHeight:1.7, flexGrow:1, marginBottom:'1rem' }}>{project.description}</p>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.map(t => (
              <span key={t} style={{ padding:'.2rem .55rem', borderRadius:'9999px', fontSize:'.68rem', fontWeight:500, background:'rgba(99,102,241,0.1)', color:'#a5b4fc', border:'1px solid rgba(99,102,241,0.18)' }}>{t}</span>
            ))}
          </div>

          <div style={{ display:'flex', gap:'.625rem', marginTop:'auto', flexWrap:'wrap' }}>
            <button onClick={() => setModal(true)} className="btn-primary flex-1 py-2.5 rounded-xl" style={{ fontSize:'.82rem', fontWeight:600, minWidth:'100px' }}>
              🔍 Details
            </button>
            {(project.url || project.liveUrl) && (
              <a href={project.url || project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-outline flex-1 py-2.5 rounded-xl" style={{ fontSize:'.82rem', fontWeight:600, textDecoration:'none', textAlign:'center', minWidth:'80px' }}>
                🌐 Live
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost flex-1 py-2.5 rounded-xl" style={{ fontSize:'.82rem', fontWeight:600, textDecoration:'none', textAlign:'center', minWidth:'80px' }}>
                💻 Code
              </a>
            )}
          </div>
        </div>
      </div>

      {modal && <ProjectModal project={project} isOpen={modal} onClose={() => setModal(false)} />}
    </>
  );
}

export default function Projects() {
  const [headRef, headV] = useReveal();
  const [featRef, featV] = useReveal();
  const [moreRef, moreV] = useReveal();
  const [statsRef, statsV] = useReveal();

  const featured = allProjects.filter(p => p.featured);
  const more = allProjects.filter(p => !p.featured);

  return (
    <div className="min-h-screen py-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div ref={headRef} className="text-center mb-20"
          style={{ transition:'opacity .7s ease, transform .7s ease', opacity:headV?1:0, transform:headV?'translateY(0)':'translateY(32px)' }}>
          <span className="badge mb-5" style={{ display:'inline-flex' }}>Portfolio</span>
          <h1 className="font-heading font-extrabold mb-5"
            style={{ fontSize:'clamp(2.25rem,5vw,3.75rem)', color:'#f1f5f9', lineHeight:1.1 }}>
            Selected <span className="gradient-text">Work</span>
          </h1>
          <div className="w-16 h-1 mx-auto mb-6 rounded-full" style={{ background:'var(--grad)' }} />
          <p style={{ color:'#64748b', maxWidth:'520px', margin:'0 auto', lineHeight:1.7 }}>
            Production apps and platforms I've built and shipped — trusted by real users across Pakistan, UAE, and Canada.
          </p>
        </div>

        {/* Featured */}
        <div ref={featRef} className="mb-20">
          <div className="flex items-center gap-4 mb-8"
            style={{ transition:'opacity .5s ease, transform .5s ease', opacity:featV?1:0, transform:featV?'translateX(0)':'translateX(-16px)' }}>
            <h2 className="font-heading font-bold text-2xl" style={{ color:'#f1f5f9' }}>Featured Projects</h2>
            <div className="flex-1 h-px" style={{ background:'linear-gradient(to right, rgba(99,102,241,0.3), transparent)' }} />
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))', gap:'1.25rem' }}>
            {featured.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
          </div>
        </div>

        {/* More */}
        <div ref={moreRef} className="mb-20">
          <div className="flex items-center gap-4 mb-8"
            style={{ transition:'opacity .5s ease, transform .5s ease', opacity:moreV?1:0, transform:moreV?'translateX(0)':'translateX(-16px)' }}>
            <h2 className="font-heading font-bold text-2xl" style={{ color:'#f1f5f9' }}>More Projects</h2>
            <div className="flex-1 h-px" style={{ background:'linear-gradient(to right, rgba(99,102,241,0.3), transparent)' }} />
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))', gap:'1.25rem' }}>
            {more.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
          </div>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="glass-card rounded-3xl p-10 text-center"
          style={{ transition:'opacity .6s ease, transform .6s ease', opacity:statsV?1:0, transform:statsV?'translateY(0)':'translateY(24px)', background:'rgba(99,102,241,0.05)', borderColor:'rgba(99,102,241,0.15)' }}>
          <h3 className="font-heading font-bold text-2xl mb-10" style={{ color:'#f1f5f9' }}>By the Numbers</h3>
          <div className="grid grid-cols-3 gap-8">
            {[['16+','Projects Shipped'],['5+','Years Experience'],['3','Countries']].map(([v,l]) => (
              <div key={l}>
                <div className="font-heading font-extrabold mb-2" style={{ fontSize:'2.5rem', background:'var(--grad-text)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>{v}</div>
                <div style={{ color:'#64748b', fontSize:'.85rem' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
