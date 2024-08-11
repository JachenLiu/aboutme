import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import homeIcon from '../assets/wpst.png';
export function Navbar() {

  const storedTheme = localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState(storedTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };


  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-brand">
            <Link to="/"><img src={homeIcon} alt="Home" className="navbar-icon" /> 
            {/* <span className="navbar-title">JACHEN</span> */}
            </Link>
        </div>
      </div>

      <ul className="navbar-links">
        {/* <li><Link to="/" className='navbar-link'>Home</Link></li> */}
        <li><Link to="/about"className='navbar-link'>About</Link></li>
        <li><Link to="/projects"className='navbar-link'>Projects</Link></li>
        {/* <li><Link to="/contact"className='navbar-link'>Contact</Link></li> */}
        <li><Link to="/resume"className='navbar-link'>Resume</Link></li>
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </ul>
    </nav>
  );
}