import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { CursorProvider } from './context/CursorContext';
import { ScrollToTop } from './components/layout/ScrollToTop/ScrollToTop';
import { PageTransition } from './components/layout/PageTransition/PageTransition';
import { Navbar } from './components/layout/Navbar/Navbar';
import { Footer } from './components/layout/Footer/Footer';
import { Cursor } from './components/ui/Cursor/Cursor';
import { GrainOverlay } from './components/ui/GrainOverlay/GrainOverlay';

// Pages
import Home from './pages/Home';
import Work from './pages/Work';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

function RouterSetup() {
  const location = useLocation();

  useEffect(() => {
    // Theme updates based on route, or let individual sections handle it via IntersectionObserver
    // as implemented in the hooks. We just ensure we scroll to top on route change.
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <PageTransition>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </PageTransition>
      <Footer />
    </>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <CursorProvider>
        <ScrollToTop />
        <Cursor />
        <GrainOverlay />
        <RouterSetup />
      </CursorProvider>
    </BrowserRouter>
  );
}
