import './App.css'
import {React, useState, useEffect } from 'react';
import { ReactDOM } from 'react-dom';
import {Link, NavLink, Route, Routes, useLocation} from 'react-router-dom';
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
          <NavLink
          to="/home"
          className={({ isActive, isPending, isTransitioning}) =>
        [
          isPending ? "pending" : "",
          isActive ? "active" : "",
          isTransitioning ? "transitioning" : "",
        ].join(" ")
          }
        >
          Home
          </NavLink>
        </nav>
        <Routes>
          {routes.map((route) => 
          <Route exact path={route.path}
          render={route.component}>

          </Route>)}
        </Routes>
      </main>
      
    </>
  )
}

export default App
