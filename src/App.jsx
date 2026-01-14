import React from 'react';
import './App.css';
import logo from './assets/ncvp.logo.png';
import banner from './assets/ncvp-banner.png';

function App() {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real production app, you would use a service like Formspree or a custom backend here.
    // For this prototype, we're simulating a successful direct submission.
    setSubmitted(true);
  };

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
          <a href="#contact-form">Contact</a>
          <a href="https://secure.ngpvan.com/kWG5AkQWTEyPe-n5a6irCA2" className="btn btn-donate" target="_blank" rel="noopener noreferrer">Donate</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero" id="home">
        <div className="hero-blobs">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
          <div className="blob blob-4"></div>
        </div>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', flex: 1 }}>
          <div className="hero-content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
            <h1>Building a more inclusive democracy by empowering every voice at the ballot box</h1>
            <div className="hero-btns">
              <a href="#contact-form" className="btn btn-blue">Contact Us</a>
              <a href="https://secure.ngpvan.com/kWG5AkQWTEyPe-n5a6irCA2" className="btn btn-red" target="_blank" rel="noopener noreferrer">Donate</a>
            </div>
          </div>
        </div>
      </header>

      <div className="hero-banner-container">
        <div className="hero-banner">
          <img src={banner} alt="NCVP Banner" />
        </div>
      </div>

      {/* About Section */}
      <section className="about container" id="about">
        <div className="about-content">
          <h2>About us.</h2>
          <p>
            Our mission is to build a more inclusive and representative democracy in North Carolina by expanding access to the ballot box for historically marginalized and underrepresented communities. At our core, we are an evidence-based organization experimenting with techniques to improve voter participation. We envision a state where every eligible voter—regardless of race, zip code, or socioeconomic status—has the resources and protection needed to exercise their fundamental right to vote. By innovating traditional voter registration methods, we seek to dismantle systemic barriers and provide direct education and advocacy to North Carolinians who are most underrepresented in our electoral system. We Educate, Register, and Empower North Carolinians to vote through text campaigns, social media campaigns, in person events, and the Future Voters Network high school program.
          </p>
        </div>
        <div className="about-divider"></div>
        <div className="about-actions">
          <a href="https://vt.ncsbe.gov/reglkup/" target="_blank" rel="noopener noreferrer" className="action-card action-card-blue">
            <div className="action-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            </div>
            <div className="action-info">
              <h4>Check Registration</h4>
              <p>Verify your voter status and lookup your polling place.</p>
            </div>
          </a>

          <a href="https://secure.ngpvan.com/Pek3hlIihEqidJlHWncGbw2" target="_blank" rel="noopener noreferrer" className="action-card action-card-red">
            <div className="action-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
            </div>
            <div className="action-info">
              <h4>Register to Vote</h4>
              <p>Quickly and securely register to vote online in North Carolina.</p>
            </div>
          </a>
        </div>
      </section>

      {/* Bottom CTA and Disclaimer */}
      <div className="container">
        <section className="contact-section" id="contact-form">
          <div className="contact-card">
            {submitted ? (
              <div className="success-message" style={{ textAlign: 'center', padding: '2rem 0' }}>
                <h2 style={{ marginBottom: '1rem' }}>Thank You!</h2>
                <p style={{ color: 'var(--text-light)', fontSize: '1.25rem' }}>Your message has been sent successfully. We'll get back to you soon.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-blue"
                  style={{ marginTop: '2rem', width: 'fit-content' }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h2>Contact Us</h2>
                <p className="contact-subtitle">Have questions or want to get involved? Send us a message.</p>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <input type="text" name="name" placeholder="Full Name" required />
                    </div>
                    <div className="form-group">
                      <input type="email" name="email" placeholder="Email Address" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <select name="subject" required defaultValue="">
                      <option value="">Select a Subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Media Inquiry">Media Inquiry</option>
                      <option value="Volunteer Opportunity">Volunteer Opportunity</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <textarea name="message" placeholder="Message" rows="3" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-blue">Send Message</button>
                </form>
              </>
            )}
          </div>
        </section>

        <p className="disclaimer">
          North Carolina Voter Project (NCVP) is a nonpartisan, nonprofit organization that uses research, evidence-based data, organizing, and advocacy to strengthen democratic structures, build civic efficacy among disenfranchised communities, and inspire confidence in a democratic political process that works for all. North Carolina Voter Project is a 501(c)(3) nonprofit organization. Contributions are tax-deductible to the extent allowed by law.
        </p>
      </div>

      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>NC Voter Project</h2>

            </div>
            <div className="footer-col">
              <h3>Navigation</h3>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact-form">Contact</a></li>
              </ul>
            </div>
            <div className="footer-col footer-contact">
              <h3>Contact</h3>
              <p>3822 Haworth Dr</p>
              <p>Raleigh, NC 27609</p>
              <p>(919) 782-4411</p>
              <p>info@ncvoterproject.org</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} North Carolina Voter Project. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
