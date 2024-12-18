import React from 'react';
import '../styles/Resume.css';

export function Resume() {
  return (
  <div className="resume-container">
      <h2 className="resume-title">My Resume</h2>
      
      <div className="resume-viewer">
        <iframe 
          src="/Jachen Liu Resume 2024.pdf" 
          title="Jachen Liu's Resume" 
          width="100%" 
          height="500px"
        ></iframe>
      </div>

      <div className="resume-download">
        <a href="/Jachen_Liu_Resume.pdf" download="Jachen Liu Resume 2024.pdf" className="download-button">
          Download Resume
        </a>
      </div>
    </div>
  );
}
