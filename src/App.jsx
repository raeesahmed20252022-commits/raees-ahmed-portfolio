import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function PageTransition({ children }) {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const prev = useRef(location.pathname);

  useEffect(() => {
    setShow(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const t = requestAnimationFrame(() => {
      requestAnimationFrame(() => setShow(true));
    });
    prev.current = location.pathname;
    return () => cancelAnimationFrame(t);
  }, [location.pathname]);

  return (
    <div style={{ opacity: show ? 1 : 0, transform: show ? 'translateY(0)' : 'translateY(12px)', transition: 'opacity 0.45s ease, transform 0.45s ease' }}>
      {children}
    </div>
  );
}

function AppInner() {
  return (
    <>
      <Header />
      <main style={{ flexGrow: 1 }}>
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </PageTransition>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router basename="/raees-ahmed-portfolio">
      <div className="min-h-screen flex flex-col">
        <AppInner />
      </div>
    </Router>
  );
}

export default App;
