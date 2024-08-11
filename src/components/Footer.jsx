import React from 'react';
import '../styles/Footer.css';

export function Footer(){
    return(
        <footer className="footer">
            <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} Jachen Liu. All rights reserved.</p>
            <div className="social-links">
          <a href="https://linkedin.com/in/jachenliu" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/jachenliu" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <p>Contact: <a href="mailto:jachen.liu@gmail.com">jachen.liu@gmail.com</a></p>
            </div>
        </footer>
    );
}