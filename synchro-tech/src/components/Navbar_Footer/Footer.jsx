import React from 'react';

import './Footer.css';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
    
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} SynchroTech IT Solutions. All rights reserved.</p>
      
        </div>
      
    </footer>
  );
};

export default Footer;