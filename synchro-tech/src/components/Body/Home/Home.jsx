import React from 'react';
import './Home.css';
import JSLogo from "../../Sync_Files/JSLogo.png";
import CSSLogo from "../../Sync_Files/CSSLogo.png";
import HTMLLogo from "../../Sync_Files/HTMLLogo.png";
import ReactJSLogo from "../../Sync_Files/ReactLogo.png";
import NodeJSLogo from "../../Sync_Files/NodeJSLogo.png";
import GithubLogo from "../../Sync_Files/GithubLogo.png";
import VercelLogo from "../../Sync_Files/VercelLogo.png";
import CharlesPic from '../../Sync_Files/CharlesPic.jpg';
import JohnAxelPic from '../../Sync_Files/JohnAxelPic.jpg';
import Project1 from '../../Sync_Files/AboutSikat.jpg';
import Project2 from '../../Sync_Files/Project1.png';
import Project3 from '../../Sync_Files/Project 3.jpg';



const Home = () => {
  const [displayedText, setDisplayedText] = React.useState('');
  const fullText = "Specializing in Web Development. We design and deliver intelligent digital solutions that streamline workflows and elevate user experiences.";
  
  React.useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 55);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
   <section className="hero" id="home">
        <div className="hero-content">
          <h1 className="hero-title">
  <span className="white-text">Hello! We are</span> SynchroTech IT Solutions
</h1>
          <p className="hero-description">
            {displayedText}<span className="cursor">|</span>
          </p>
          
          {/* Logo Section */}
       <div className="logo-container">
  <img src={JSLogo} alt="JS Logo" className="logo-circle" />
  <img src={CSSLogo} alt="CSS Logo" className="logo-circle" />
  <img src={HTMLLogo} alt="HTML Logo" className="logo-circle" />
  <img src={ReactJSLogo} alt="ReactJS Logo" className="logo-circle" />
  <img src={NodeJSLogo} alt="NodeJS Logo" className="logo-circle" />
  <img src={GithubLogo} alt="Github Logo" className="logo-circle" />
  <img src={VercelLogo} alt="Vercel Logo" className="logo-circle" />
</div>

        </div>
      </section>

      {/* Services Section */}
<section className="about-us" id="about">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        <div className="about-grid">
          <div className="team-member">
            <img src={CharlesPic} alt="Charles" className="team-img" />
            <h3>Charles</h3>
            <p>Fullstack Developer</p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="social-icon" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" className="social-icon" />
              </a>
            </div>
          </div>
          <div className="divider"></div>
          <div className="team-member">
            <img src={JohnAxelPic} alt="John Axel" className="team-img" />
            <h3>John Axel</h3>
            <p>Frontend Developer</p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="social-icon" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Featured Projects Section */}
    <section className="projects" id="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <img src={Project1} alt="Project 1" />
              </div>
              <div className="project-content">
                <h3 className="project-title">BPSU Sikat TBI Website</h3>
                <p className="project-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="project-tags">
                  <span className="tag">HTML</span>
                  <span className="tag">CSS</span>
                  <span className="tag">Visual Studio</span>
                  <span className="tag">Node JS</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src={Project2} alt="Project 2" />
              </div>
              <div className="project-content">
                <h3 className="project-title">Healthcare Management System</h3>
                <p className="project-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="project-tags">
                  <span className="tag">React</span>
                  <span className="tag">Node.js</span>
                  <span className="tag">Visual Studio</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src={Project3} alt="Project 3" />
              </div>
              <div className="project-content">
                <h3 className="project-title">Financial Dashboard</h3>
                <p className="project-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="project-tags">
                  <span className="tag">React</span>
                  <span className="tag">Node.js</span>
                  <span className="tag">Visual Studio</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

 {/* CTA Section */}
<section className="cta" id="contact">
  <div className="container">
    <h2>Contact</h2>
    <p>Want to collaborate with your next project?</p>
    <div className="contact-wrapper">
      <div className="contact-grid">
        <div className="contact-item">
          <div className="contact-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          <div className="contact-text">
            <h3>Location</h3>
            <p>Balanga City, Bataan, Philippines</p>
          </div>
        </div>
        <div className="contact-item">
          <div className="contact-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
          </div>
          <div className="contact-text">
            <h3>Email</h3>
            <p>synchrotech@gmail.com</p>
          </div>
        </div>
      </div>
      <button className="btn-email">Send an Email</button>
    </div>
  </div>
</section>
    </div>
  );
};

export default Home;