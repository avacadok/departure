import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style/App.css';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('/api/new-arrivals')
      .then((res) => {
        console.log("new-arrivals", res.data);
      })
      .catch((err) => console.log("err", err));
  }, []);

  useEffect(() => {
    axios.get('/api/bags')
    .then((res) => {
      console.log("bags",res.data)
    })
    .catch((err) => console.log("err", err));
  },[]);

  return (
    <div>
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
