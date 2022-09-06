import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style/App.css';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';
import { Routes, Route, Link } from 'react-router-dom'
import Bags from './components/Bags';
import Accessories from './components/Accessories';
import NewArrivals from './components/NewArrivals';
import Login from './components/Login';
import Register from './components/Register';
import ProductDetail from './components/ProductDetail';

function App() {
  const [newArrivals, setNewArrivals] = useState({});
  const [bags, SetBags] = useState({});
  const [accessories, setAccessories] = useState({});
  const [products, setProducts] = useState({});
  const [loginStatus, setLoginStatus] = useState(false);

  const endpoints = [
    '/api/new-arrivals',
    '/api/bags',
    '/api/accessories',
    '/api/all-products'
  ];

  useEffect(() => {
    Promise.all(endpoints.map((api) => axios.get(api)))
      .then(([{ data: newArrivals }, { data: bags }, { data: accessories }, { data: products }]) => {
        setNewArrivals({ ...newArrivals })
        SetBags({ ...bags })
        setAccessories({ ...accessories })
        setProducts({ ...products })
      })
  }, [])

  return (
    <div>
      <header>
        <div className="logo"><Link to={'/'} className='logo-link'>D E P A W T U R E</Link></div>
        <nav>
          <ul className="nav_links" >
            <li><Link to={'/new-arrivals'}>New Arrivals</Link></li>
            <li><Link to={'/bags'}>Bags</Link></li>
            <li><Link to={'/accessories'}>Accessories</Link></li>
          </ul>
        </nav>
        <Link to='/login' className='login-button'>Log in</Link>
      </header>

      <Routes>

        <Route path='/' element={<LandingPage />} />
        <Route path='/new-arrivals' element={<NewArrivals newArrivals={newArrivals} />} />
        <Route path='/bags' element={<Bags bags={bags} />} />
        <Route path='/accessories' element={<Accessories accessories={accessories} />} />
        <Route path='/login' element={<Login setLoginStatus={setLoginStatus} />} />
        <Route path='/register' element={<Register />} />
        <Route path='/product/:id' element={<ProductDetail products={products} />} />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;