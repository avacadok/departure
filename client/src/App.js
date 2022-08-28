import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style/App.css';
import Navbar from './components/Navbar'

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('/api/new-arrivals')
      .then((res) => {
        console.log("res", res.data);
      })
      .catch((err) => console.log("err", err));
  }, []);

  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;
