import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About,';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Layout } from './components/Layout';
import { Resume } from './pages/Resume';
import { Trees } from './pages/Trees';
function App() {

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
    </Routes>
      </Layout>
    </div>
  );
}

export default App
