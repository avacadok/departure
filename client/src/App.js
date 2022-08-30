import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style/App.css';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';
import { Routes, Route, Link } from 'react-router-dom'
import Bags from './components/Bags';
import Accessories from './components/Accessories';
import NewArrivals from './components/NewArrivals';

function App() {
  useEffect(() => {
    axios.get('/api/new-arrivals')
      .then((res) => {
        console.log("new-arrivals", res.data);
      })
      .catch((err) => console.log("err", err));
  }, []);

  return (
    <div>
      <header>
        <div className="logo"><Link to='/' className='logo-link'>D E P A W T U R E</Link></div>
        <nav>
          <ul className="nav_links" >
            <li><Link to='/new-arrivals'>New Arrivals</Link></li>
            <li><Link to='/bags'>Bags</Link></li>
            <li><Link to='/accessories'>Accessories</Link></li>
          </ul>
        </nav>
        <a className="login" href="#"><button>Log in</button></a>
      </header>

      <Routes>

        <Route path='/' element={<LandingPage />} />
        <Route path='/new-arrivals' element={<NewArrivals />} />
        <Route path='/bags' element={<Bags />} />
        <Route path='/accessories' element={<Accessories />} />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;