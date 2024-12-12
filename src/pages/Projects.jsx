import React from 'react';
import '../styles/Projects.css';
import { Link } from 'react-router-dom';

export function Projects() {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="project-item">
        <h3>Project One</h3>
        <p>Details<Link to="/trees"> Trees
        </Link></p>
        
      </div>
      <div className="project-item">
        <h3>Project Two</h3>
        <p>Details.</p>
        <a href="https://example.com/project-two" target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
    </div>
  );
}
