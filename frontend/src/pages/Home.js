// Home.js
import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <nav className="navigation">
          <div className="logo">
            <h1>MyWebApp</h1>
          </div>
          <ul className="nav-links">
            <li><a href="/" className="active">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Our Platform</h1>
          <p>Building innovative solutions for tomorrow's challenges</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      <section className="features-section">
        <h2>Our Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Fast Performance</h3>
            <p>Our platform is built for speed and efficiency.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3>Secure & Reliable</h3>
            <p>Security is our top priority with 24/7 monitoring.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Responsive Design</h3>
            <p>Works perfectly on all devices and screen sizes.</p>
          </div>
        </div>
      </section>

      <footer className="home-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>We are dedicated to providing the best experience for our users.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: info@mywebapp.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2025 MyWebApp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;