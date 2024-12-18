import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Layout } from './components/Layout';
import { Resume } from './pages/Resume';
import { NotFound } from './pages/NotFound';
import { Trees } from './pages/Trees';
import { Sandbox } from './pages/Sandbox';
import Cards from './pages/Cards';
function App() {

  const location = useLocation();

  useEffect(() => {
    const pageTitles = {
      '/': 'Home - Jachen',
      '/about': 'About - Jachen',
      '/projects': 'Projects - Jachen',
      '/contact': 'Contact - Jachen',
      '/resume': 'Resume - Jachen',
      '/trees': 'Trees - Jachen',
      '/sandbox': 'Sandbox - Jachen',
      '/cards' : 'Cards - Jachen',
    };
    document.title = pageTitles[location.pathname] || 'Jachen';
  }, [location]);

  return (
    <div className='app-container'>
      <Layout>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/trees" element={<Trees />} />
      <Route path="/sandbox" element={<Sandbox />} />
      <Route path="/cards" element={<Cards />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
      </Layout>
    </div>
  );
}

export default App
