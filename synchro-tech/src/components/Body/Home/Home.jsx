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
import Project1 from '../../Sync_Files/RunikConquests.png';
import Project2 from '../../Sync_Files/AboutSikat.jpg';
import Project3 from '../../Sync_Files/SCSA.png';
import Project4 from '../../Sync_Files/Samal.jpg';
import Project5 from '../../Sync_Files/Beanbg1.jpg';
import Project6 from '../../Sync_Files/trendtothrift.jpg';
import { ExternalLink } from 'lucide-react';



const Home = () => {
  const [displayedText, setDisplayedText] = React.useState('');
  const fullText = "Specializing in Web Development, we craft and deliver smart digital solutions that optimize workflows and enhance user experiences.";
  
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

      {/* About Us Section */}
<section className="about-us" id="about">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        <div className="about-grid">
          <div className="team-member">
            <img src={CharlesPic} alt="Charles" className="team-img" />
      <h3>Charles<br />Dimalanta</h3>
            <p>Fullstack Developer</p>
            <div className="social-links">
              <a href="https://www.facebook.com/charles.dimalanta.33" target="_blank" rel="noopener noreferrer">
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
          <h3>John Axel<br />Ramirez</h3>
            <p>Frontend Developer</p>
            <div className="social-links">
              <a href="https://www.facebook.com/axelramirez44/" target="_blank" rel="noopener noreferrer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="social-icon" />
              </a>
              <a href="https://www.linkedin.com/in/john-axel-ramirez-6151a4254/" target="_blank" rel="noopener noreferrer">
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
                <h3 className="project-title">RUNIK Conquests</h3>
                <p className="project-description">
                  RUNIK Conquest is a blockchain-strategy game built on the Hive network where players construct cities, harvest resources, upgrade buildings, form alliances, and engage in territorial conquest to earn digital rewards and dominate the game map.
                </p>
                <div className="project-tags">
                  <span className="tag">React</span>
                  <span className="tag">CSS</span>
                  <span className="tag">Visual Studio</span>
                  <span className="tag">Node JS</span>
                  <span className="tag">Mango DB</span>
                </div>
                <a 
                  href="https://runik-conquests.online/authentication" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <ExternalLink className="project-link-icon" size={20} />
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src={Project2} alt="Project 2" />
              </div>
              <div className="project-content">
                <h3 className="project-title">BPSU SIKAT TBI</h3>
                <p className="project-description">
                 BPSU SIKAT Ventures Portal is a web and mobile system that streamlines startup incubation through registration, SMS notifications, 2D mapping, and milestone tracking for BPSU SIKAT TBI incubatees and investors.
                </p>
                <div className="project-tags">
                  <span className="tag">HTML</span>
                  <span className="tag">CSS</span>
                  <span className="tag">Javascript</span>
                  <span className="tag">MySQL</span>
                </div>
                <a 
                  href="https://sikat-ventures.onrender.com/admin_LP" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <ExternalLink className="project-link-icon" size={20} />
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src={Project3} alt="Project 3" />
              </div>
              <div className="project-content">
                <h3 className="project-title">SCSA Financial Portal</h3>
                <p className="project-description">
St. Catherine of Siena Academy Financial Portal is an online platform that allows students and parents to manage tuition payments, view financial statements, and access billing information conveniently and securely.
                </p>
                <div className="project-tags">
                  <span className="tag">React</span>
                  <span className="tag">Node.js</span>
                  <span className="tag">Visual Studio</span>
                </div>
                <a 
                  href="https://scsa-expensetracker.onrender.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <ExternalLink className="project-link-icon" size={20} />
                </a>
              </div>
            </div>

    <div className="project-card">
              <div className="project-image">
                <img src={Project4} alt="Project 4" />
              </div>
              <div className="project-content">
                <h3 className="project-title">Municipality of Samal Website</h3>
                <p className="project-description">
                 Municipality of Samal Website provides information about local government services, community updates, tourism attractions, public announcements, and development projects, promoting transparency and engagement among residents and visitors.
                </p>
                <div className="project-tags">
                  <span className="tag">React</span>
                  <span className="tag">Node.js</span>
                  <span className="tag">Visual Studio</span>
                  <span className="tag">Database Management</span>
                </div>
                <div className="project-link disabled">
                  <ExternalLink className="project-link-icon" size={20} />
                </div>
              </div>
            </div>

              <div className="project-card">
              <div className="project-image">
                <img src={Project5} alt="Project 5" />
              </div>
              <div className="project-content">
                <h3 className="project-title">Bean Addicted Coffee Website</h3>
                <p className="project-description">
Bean Addicted Coffee is a cozy and modern coffee website showcasing premium brews, signature blends, and café experiences. It highlights the brand’s passion for quality coffee, offers event bookings, and connects coffee lovers through engaging content and promotions.
                </p>
                <div className="project-tags">
                  <span className="tag">React</span>
                  <span className="tag">Node.js</span>
                  <span className="tag">Visual Studio</span>
                      <span className="tag">CSS</span>
                </div>
                <a 
                  href="https://bean-addicted.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <ExternalLink className="project-link-icon" size={20} />
                </a>
              </div>
            </div>
<div className="project-card">
              <div className="project-image">
                <img src={Project6} alt="Project 6" />
              </div>
              <div className="project-content">
                <h3 className="project-title">Trend To Thrift Website</h3>
                <p className="project-description">
                Trend to Thrift is your guide to sustainable style, featuring premium brands alongside recycled, low-cost clothing. Browse curated thrifted picks and eco-friendly alternatives that help you look great while reducing waste and spending less.
                </p>
                <div className="project-tags">
                  <span className="tag">React</span>
                  <span className="tag">Vite</span>
                  <span className="tag">Visual Studio</span>
                  <span className="tag">CSS</span>
                  <span className="tag">HTML</span>
                </div>
                 <a 
                  href="https://trend-to-thrift.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <ExternalLink className="project-link-icon" size={20} />
                </a>
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
            <p>synchrotechitsolutions@gmail.com</p>
          </div>
        </div>
      </div>
<button
  className="btn-email"
  onClick={() =>
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=synchrotechitsolutions@gmail.com",
      "_blank"
    )
  }
>
  Send an Email
</button>


    </div>
  </div>
</section>
    </div>
  );
};

export default Home;