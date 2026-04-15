import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaWhatsapp, FaArrowLeft } from 'react-icons/fa';
import logo from './assets/logo.jpeg';
import './App.css';

// This tiny component ensures the page scrolls to the top when you click "Explore More"
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// --- MAIN HOME PAGE COMPONENT ---
function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="portfolio-container">
      {/* Navigation & Hamburger Menu */}
      <nav className="navbar">
        <div className="nav-logo">
          <a href="#home" className="logo-link">
            <img src={logo} alt="Aman Furniture" />
            <span className="nav-company-name">AMAN FURNITURE</span>
          </a>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? <FiX size={30} color="#bf9b74" /> : <FiMenu size={30} color="#303133" />}
        </div>
      </nav>

      {/* Full Screen Menu Overlay */}
      <div className={`menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        <ul className="menu-links">
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#portfolio" onClick={closeMenu}>Portfolio</a></li>
          <li><a href="#clients" onClick={closeMenu}>Clientele</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </div>

      {/* Hero Section */}
      <section id="home" className="section hero">
        <div className="hero-content">
          <img src={logo} alt="Aman Furniture Logo" className="hero-logo" />
          <h1 className="hero-title">Bespoke Furniture for the Extraordinary.</h1>
          <p className="hero-subtitle">Elevating interiors with uncompromising craftsmanship and timeless design in Gurugram and beyond.</p>
          <a href="#portfolio" className="btn-primary">Explore Our Work</a>
        </div>
      </section>

      {/* Portfolio / Work Section */}
      <section id="portfolio" className="section light-section">
        <div className="section-header">
          <h2>Selected Works</h2>
          <div className="divider"></div>
        </div>
        <div className="gallery-grid">
          <div className="gallery-item"><img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80" alt="Luxury Sofa" /></div>
          <div className="gallery-item"><img src="https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=800&q=80" alt="Dining Table" /></div>
          <div className="gallery-item"><img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80" alt="Modern Chair" /></div>
          <div className="gallery-item"><img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80" alt="Bedroom Set" /></div>
        </div>
        
        {/* NEW EXPLORE MORE BUTTON */}
        <div className="explore-more-container">
          <Link to="/gallery" className="btn-secondary">Explore Full Gallery</Link>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="section dark-section">
        <div className="section-header text-light">
          <h2>Distinguished Clientele</h2>
          <div className="divider gold"></div>
        </div>
        <div className="clients-content">
          <p className="clients-text">
            Trusted by architectural visionaries and private estates, our commissions are defined by a dedication to flawless execution.
          </p>
          <div className="testimonial">
            <p>"Aman Furniture delivered pieces that transcend mere utility. They are genuine works of art that anchor my living space."</p>
            <span>— Private Residence, DLF Magnolias</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section light-section">
        <div className="section-header">
          <h2>Commission a Piece</h2>
          <div className="divider"></div>
        </div>
        
        <div className="contact-container">
          {/* Formspree Integration */}
          <form className="contact-form" action="https://formspree.io/f/your-formspree-id" method="POST">
            <div className="input-group">
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className="input-group">
              <input type="email" name="email" placeholder="Your Email Address" required />
            </div>
            {/* NEW PHONE NUMBER FIELD */}
            <div className="input-group">
              <input type="tel" name="phone" placeholder="Your Phone Number" required />
            </div>
            <div className="input-group">
              <textarea name="message" rows="5" placeholder="Tell us about your project..." required></textarea>
            </div>
            <button type="submit" className="btn-primary form-btn">Send Inquiry</button>
          </form>

          <div className="contact-sidebar">
            <h3>Direct Contact</h3>
            <p>Prefer to discuss your vision immediately?</p>
            <a href="https://wa.me/910000000000" target="_blank" rel="noreferrer" className="whatsapp-btn">
              <FaWhatsapp size={24} /> Connect via WhatsApp
            </a>
            <div className="contact-details">
              <p>Gurugram, Haryana, India</p>
              <p>By Appointment Only</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Aman Furniture. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

// --- NEW FULL GALLERY PAGE COMPONENT ---
function GalleryPage() {
  return (
    <div className="full-gallery-page">
      <nav className="navbar">
        <div className="nav-logo">
          <Link to="/" className="logo-link">
            <img src={logo} alt="Aman Furniture" />
            <span className="nav-company-name">AMAN FURNITURE</span>
          </Link>
        </div>
      </nav>

      <div className="gallery-page-content">
        <Link to="/" className="back-btn"><FaArrowLeft /> Back to Home</Link>
        
        <div className="section-header">
          <h2>Complete Portfolio</h2>
          <div className="divider"></div>
        </div>

        <div className="gallery-grid full-grid">
          {/* Add as many images as you want here */}
          <div className="gallery-item"><img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80" alt="Project 1" /></div>
          <div className="gallery-item"><img src="https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=800&q=80" alt="Project 2" /></div>
          <div className="gallery-item"><img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80" alt="Project 3" /></div>
          <div className="gallery-item"><img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80" alt="Project 4" /></div>
          <div className="gallery-item"><img src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80" alt="Project 5" /></div>
          <div className="gallery-item"><img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80" alt="Project 6" /></div>
        </div>
      </div>
      
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Aman Furniture. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

// --- APP ROUTER ---
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;