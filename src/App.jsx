import './App.css'
import {React, useState, useEffect } from 'react';
import { ReactDOM } from 'react-dom';
import {Link, useLocation} from 'react-router-dom';
import {routes} from './components/routes';

function App() {

  const [activePath, setActivePath] = useState('');

  useEffect(() => {
    switch (location.pathname){
      case ('/'):
        setActivePath('home');
        break;
        default:
          setActivePath('')
          break;
    }
  }, [location.pathname]);

  return (
    <>
      <main className="main">
        <nav className="navigation">
          <Link 
            className="nav-link" 
            to="/" 
            style={activePath === 'home' ? {color:'', cursor:'default'} : {}}>
            Home
          </Link>
        </nav>
      </main>
    </>
  )
}

export default App
