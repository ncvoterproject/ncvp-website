import React from 'react';
import './App.css';
import logo from './assets/ncvp.logo.png';

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="NCVP Logo" />
        </div>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
          <a href="#donate" className="btn btn-donate">Donate</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero" id="home">
        <div className="hero-background-blur"></div>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', flex: 1 }}>
          <div className="hero-content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
            <h1>Building a more inclusive democracy by empowering every voice at the ballot box</h1>
            <div className="hero-btns">
              <a href="#contact" className="btn btn-blue">Contact Us</a>
              <a href="#donate" className="btn btn-red">Donate</a>
            </div>
          </div>
        </div>
      </header>

      <div className="hero-banner-container">
        <div className="hero-banner">
          <span>[ Placeholder Banner Image ]</span>
        </div>
      </div>

      {/* About Section */}
      <section className="about container" id="about">
        <div className="about-content">
          <h2>About us.</h2>
          <p>
            Our mission is to build a more inclusive and representative democracy in North Carolina by
            expanding access to the ballot box for historically marginalized communities. We envision a
            state where every eligible voter—regardless of race, zip code, or socioeconomic status—has
            the resources and protection needed to exercise their fundamental right to vote. By
            dismantling systemic barriers and providing direct education and advocacy, we work to ensure
            that Black, Brown, and rural voices are not only heard but are central to the democratic process.
          </p>
        </div>
        <div className="about-divider"></div>
        <div className="team">
          <div className="team-member">
            <div className="member-avatar" style={{ backgroundColor: '#DBEAFE', color: '#1E40AF' }}>RB</div>
            <div className="member-info">
              <h4>Ryan Burley</h4>
              <p>Executive Director</p>
            </div>
          </div>
          <div className="team-member">
            <div className="member-avatar" style={{ backgroundColor: '#FFEDD5', color: '#9A3412' }}>SE</div>
            <div className="member-info">
              <h4>Sarah Elmore</h4>
              <p>Director of Programs</p>
            </div>
          </div>
          <div className="team-member">
            <div className="member-avatar" style={{ backgroundColor: '#F3E8FF', color: '#6B21A8' }}>LJ</div>
            <div className="member-info">
              <h4>Leonard T. Jernigan Jr.</h4>
              <p>Legal Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA and Disclaimer */}
      <div className="container">
        <div className="bottom-btns">
          <a href="#contact" className="btn btn-outline btn-outline-blue">Contact Us</a>
          <a href="#donate" className="btn btn-outline btn-outline-red">Donate</a>
        </div>
        <p className="disclaimer">
          NC Voter is brought to you by Democracy NC, a nonpartisan organization that uses research, organizing,
          and advocacy to strengthen democratic structures, build power among disenfranchised communities,
          and inspire confidence in a transformed political process that works for all. Democracy North Carolina
          is a 501(c)(3) nonprofit organization. Contributions are tax-deductible to the extent allowed by law.
        </p>
      </div>

      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>NC Voter Project</h2>
              <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>Amplifying unrepresented voices in North Carolina elections.</p>
            </div>
            <div className="footer-col">
              <h3>Navigation</h3>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#work">Our Work</a></li>
                <li><a href="#resources">Resources</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-col footer-contact">
              <h3>Contact</h3>
              <p>3822 Haworth Dr</p>
              <p>Raleigh, NC 27609</p>
              <p>(919) 782-4411</p>
              <p>info@ncvoterproject.org</p>
            </div>
            <div className="footer-col">
              <h3>Legal</h3>
              <ul>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Service</a></li>
                <li><a href="#rfps">RFPs & Job Postings</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 North Carolina Voter Project. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
