import React from 'react';
import '../styles/Layout.css';


import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function Layout({ children }) {
  return (
    <div className="layout-container">
      <header>
      <Navbar />
    </header>
      <main className="main-content">
        {children}
      </main>
      <footer className="footer">    
        <Footer />
      </footer>
    </div>
  );
}