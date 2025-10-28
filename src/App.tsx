import { useState } from 'react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className="app">
      {/* Menu Overlay */}
      <div 
        className={`menu-overlay ${isMenuOpen ? 'active' : ''}`}
        onClick={closeMenu}
      ></div>

      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <h1>AppDost</h1>
            <p className="tagline">Complete IT Solution</p>
          </div>
          
          {/* Hamburger Menu Button */}
          <button 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Navigation */}
          <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#portfolio" onClick={closeMenu}>Portfolio</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="container">
          <h1 className="hero-title">Transform Your Ideas Into Digital Reality</h1>
          <h2 className="hero-subtitle">Your Trusted Partner for Complete Digital Transformation</h2>
          <p className="hero-description">
            AppDost is your trusted partner for complete digital transformation. We are a dynamic, 
            innovation-driven IT solutions provider specializing in turning visionary ideas into powerful, 
            market-ready products. Our mission is to empower businesses with cutting-edge technology 
            solutions that drive growth, enhance user experiences, and create lasting digital impact.
          </p>
          <a href="#contact" className="cta-button">Start Your Project</a>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">📱</div>
              <h3>Android App Development</h3>
              <p>Custom Android applications built with the latest technologies to bring your ideas to life.</p>
              <ul>
                <li>Native & Hybrid Apps</li>
                <li>Play Store Deployment</li>
                <li>Maintenance & Support</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">🌐</div>
              <h3>Web Development</h3>
              <p>Responsive and scalable web applications tailored to your business needs.</p>
              <ul>
                <li>Responsive Design</li>
                <li>E-commerce Solutions</li>
                <li>Progressive Web Apps</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">🎨</div>
              <h3>UI/UX Development</h3>
              <p>Beautiful, intuitive user interfaces that enhance user experience and engagement.</p>
              <ul>
                <li>User Research</li>
                <li>Wireframing</li>
                <li>Brand Identity</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">💼</div>
              <h3>CRM Software</h3>
              <p>Comprehensive CRM solutions to manage customer relationships and boost productivity.</p>
              <ul>
                <li>Custom Development</li>
                <li>Integration Services</li>
                <li>Training & Support</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">☁️</div>
              <h3>Cloud Solutions</h3>
              <p>Scalable cloud infrastructure and migration services for modern businesses.</p>
              <ul>
                <li>AWS, Azure, GCP</li>
                <li>Migration Services</li>
                <li>Performance Tuning</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">🔒</div>
              <h3>Cybersecurity</h3>
              <p>Protect your business with robust security solutions and best practices.</p>
              <ul>
                <li>Security Audits</li>
                <li>Penetration Testing</li>
                <li>Compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio" id="portfolio">
        <div className="container">
          <h2 className="section-title">Our Featured Projects</h2>
          <div className="portfolio-grid">
            <div className="project-card">
              <h3>BEU Mate - Bihar Engineering</h3>
              <p>An AI-powered study companion for B.Tech students offering personalized learning, career guidance, and placement preparation.</p>
              <div className="project-links">
                <a href="https://play.google.com/store/apps/details?id=com.priyesranjan.beumate" target="_blank" rel="noopener noreferrer">📱 Play Store</a>
                <a href="https://beumate.app/" target="_blank" rel="noopener noreferrer">🌐 Website</a>
              </div>
            </div>

            <div className="project-card">
              <h3>Devskillquest</h3>
              <p>An interactive learning platform designed for aspiring developers to master coding skills through hands-on projects.</p>
              <div className="project-links">
                <a href="https://devskillquest.com" target="_blank" rel="noopener noreferrer">🌐 Website</a>
              </div>
            </div>

            <div className="project-card">
              <h3>The Weddings Chapter</h3>
              <p>A premium wedding planning platform connecting couples with top vendors, venues, and services.</p>
              <div className="project-links">
                <a href="https://theweddingschapter.com" target="_blank" rel="noopener noreferrer">🌐 Website</a>
              </div>
            </div>

            <div className="project-card">
              <h3>DeepFake Detection</h3>
              <p>Advanced deep learning model for detecting manipulated media using computer vision and neural networks.</p>
              <div className="project-links">
                <a href="https://github.com/priyesranjan/DeepFake" target="_blank" rel="noopener noreferrer">View on GitHub →</a>
              </div>
            </div>

            <div className="project-card">
              <h3>NooBot</h3>
              <p>Smart automation bot built with Python for task scheduling, data processing, and intelligent workflow automation.</p>
              <div className="project-links">
                <a href="https://github.com/priyesranjan/NooBot" target="_blank" rel="noopener noreferrer">View on GitHub →</a>
              </div>
            </div>

            <div className="project-card">
              <h3>EduTools</h3>
              <p>Collection of educational tools and utilities for students and teachers. Interactive learning resources and study aids.</p>
              <div className="project-links">
                <a href="https://github.com/priyesranjan/edutools" target="_blank" rel="noopener noreferrer">View on GitHub →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <h2 className="section-title">Ready to Start Your Project?</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Contact Info</h3>
              <div className="contact-item">
                <span className="icon">📧</span>
                <a href="mailto:contact@appdost.in">contact@appdost.in</a>
              </div>
              <div className="contact-item">
                <span className="icon">📞</span>
                <div>
                  <a href="tel:+917635075422">+91 76350 75422</a> / <a href="tel:+911169290750">+91 11 6929 0750</a>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon">🕒</span>
                <span>Mon - Sat: 9:00 AM - 6:00 PM IST</span>
              </div>
              <div className="contact-item">
                <span className="icon">📍</span>
                <span>3 Offices: Banka (HQ), Motihari, Patna</span>
              </div>
            </div>
          </div>
          <a href="https://wa.me/911169290750?text=Hi%20AppDost!%20I'm%20interested%20in%20your%20services." 
             className="whatsapp-button" 
             target="_blank" 
             rel="noopener noreferrer">
            💬 Chat with us on WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2025 AppDost - Complete IT Solution. All rights reserved.</p>
          <p className="built-with">Built with ❤️ in India</p>
        </div>
      </footer>
    </div>
  )
}

export default App
