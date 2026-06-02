import React, { useEffect } from 'react';

const CAT_COLORS = {
  'Real Estate':'#22c55e','Healthcare':'#06b6d4','Service Marketplace':'#f59e0b',
  'Job Platform':'#6366f1','AI Platform':'#ec4899','Social / Dating App':'#ec4899',
  'Mobile App':'#3b82f6','E-commerce':'#f97316','Service Platform':'#14b8a6',
  'AI Tool':'#8b5cf6','Utility App':'#64748b','Social Media':'#0ea5e9',
};

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = ''; };
    }
  }, [isOpen]);

  if (!isOpen || !project) return null;
  const cc = CAT_COLORS[project.category] || '#6366f1';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background:'rgba(0,0,0,0.75)', backdropFilter:'blur(10px)', WebkitBackdropFilter:'blur(10px)' }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}>

      <div className="relative w-full max-w-2xl overflow-y-auto rounded-2xl animate-scaleIn"
        style={{ background:'#080e1c', border:'1px solid rgba(99,102,241,0.2)', maxHeight:'92vh', boxShadow:'0 0 60px rgba(99,102,241,0.15), 0 40px 80px rgba(0,0,0,0.6)' }}>

        {/* Top accent line */}
        <div className="rounded-t-2xl h-1 w-full" style={{ background:`linear-gradient(90deg, ${cc}, var(--indigo), var(--purple))` }} />

        {/* Header */}
        <div className="sticky top-0 px-7 pt-5 pb-5 z-10"
          style={{ background:'#080e1c', borderBottom:'1px solid rgba(255,255,255,0.05)' }}>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <span style={{ display:'inline-flex', alignItems:'center', padding:'.25rem .75rem', borderRadius:'9999px', fontSize:'.7rem', fontWeight:700, background:`${cc}18`, color:cc, border:`1px solid ${cc}30`, marginBottom:'.75rem' }}>
                {project.category}
              </span>
              <h2 className="font-heading font-bold text-2xl" style={{ color:'#f1f5f9' }}>{project.title}</h2>
            </div>
            <button onClick={onClose}
              className="rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200"
              style={{ width:'36px', height:'36px', background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.08)', color:'#64748b', fontSize:'1rem', cursor:'pointer', marginTop:'4px' }}
              onMouseEnter={e=>{e.currentTarget.style.background='rgba(236,72,153,0.12)';e.currentTarget.style.color='#f472b6';}}
              onMouseLeave={e=>{e.currentTarget.style.background='rgba(255,255,255,0.05)';e.currentTarget.style.color='#64748b';}}>
              ✕
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="px-7 py-6 space-y-6">
          <div>
            <h3 className="font-heading font-semibold mb-3 text-sm" style={{ color:'#94a3b8', textTransform:'uppercase', letterSpacing:'.08em' }}>Overview</h3>
            <p style={{ color:'#64748b', lineHeight:1.75, fontSize:'.9rem' }}>{project.detailedDescription || project.description}</p>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-3 text-sm" style={{ color:'#94a3b8', textTransform:'uppercase', letterSpacing:'.08em' }}>Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(t => (
                <span key={t} style={{ padding:'.3rem .75rem', borderRadius:'9999px', fontSize:'.78rem', fontWeight:500, background:'rgba(99,102,241,0.1)', color:'#a5b4fc', border:'1px solid rgba(99,102,241,0.2)' }}>{t}</span>
              ))}
            </div>
          </div>

          {project.features && (
            <div>
              <h3 className="font-heading font-semibold mb-3 text-sm" style={{ color:'#94a3b8', textTransform:'uppercase', letterSpacing:'.08em' }}>Key Features</h3>
              <ul className="space-y-2">
                {project.features.map((f,i) => (
                  <li key={i} style={{ display:'flex', alignItems:'flex-start', gap:'.625rem', color:'#64748b', fontSize:'.875rem', lineHeight:1.6 }}>
                    <span style={{ color:cc, flexShrink:0, marginTop:'.1rem' }}>▹</span>{f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {(project.challenges || project.results) && (
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem' }}>
              {project.challenges && (
                <div className="rounded-xl p-4" style={{ background:'rgba(99,102,241,0.06)', border:'1px solid rgba(99,102,241,0.14)' }}>
                  <h3 className="font-heading font-semibold text-xs mb-3" style={{ color:'#94a3b8', textTransform:'uppercase', letterSpacing:'.08em' }}>Challenges</h3>
                  <ul className="space-y-2">{project.challenges.map((c,i) => <li key={i} style={{ color:'#64748b', fontSize:'.8rem' }}>• {c}</li>)}</ul>
                </div>
              )}
              {project.results && (
                <div className="rounded-xl p-4" style={{ background:'rgba(34,197,94,0.06)', border:'1px solid rgba(34,197,94,0.14)' }}>
                  <h3 className="font-heading font-semibold text-xs mb-3" style={{ color:'#94a3b8', textTransform:'uppercase', letterSpacing:'.08em' }}>Results</h3>
                  <ul className="space-y-2">{project.results.map((r,i) => <li key={i} style={{ color:'#64748b', fontSize:'.8rem' }}>📈 {r}</li>)}</ul>
                </div>
              )}
            </div>
          )}

          {project.role && (
            <div className="rounded-xl p-4" style={{ background:'rgba(168,85,247,0.06)', border:'1px solid rgba(168,85,247,0.14)' }}>
              <h3 className="font-heading font-semibold text-xs mb-2" style={{ color:'#94a3b8', textTransform:'uppercase', letterSpacing:'.08em' }}>My Role</h3>
              <p style={{ color:'#64748b', fontSize:'.875rem' }}>{project.role}</p>
            </div>
          )}
        </div>

        {/* Footer buttons */}
        <div className="px-7 pb-7 flex flex-wrap gap-3"
          style={{ borderTop:'1px solid rgba(255,255,255,0.05)', paddingTop:'1.5rem' }}>
          {(project.url || project.liveUrl) && (
            <a href={project.url || project.liveUrl} target="_blank" rel="noopener noreferrer"
              className="btn-primary flex-1 py-3 rounded-xl font-semibold text-sm text-center" style={{ minWidth:'110px', textDecoration:'none' }}>
              🌐 Visit Live Site
            </a>
          )}
          {project.appUrl && (
            <a href={project.appUrl} target="_blank" rel="noopener noreferrer"
              className="btn-outline flex-1 py-3 rounded-xl font-semibold text-sm text-center" style={{ minWidth:'90px', textDecoration:'none' }}>
              📱 Open App
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
              className="btn-ghost flex-1 py-3 rounded-xl font-semibold text-sm text-center" style={{ minWidth:'90px', textDecoration:'none' }}>
              💻 Source Code
            </a>
          )}
          <button onClick={onClose} className="btn-ghost flex-1 py-3 rounded-xl font-semibold text-sm" style={{ minWidth:'70px', cursor:'pointer' }}>
            ✕ Close
          </button>
        </div>
      </div>
    </div>
  );
}
