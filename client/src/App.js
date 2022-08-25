import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style/App.css';
import Navbar from './components/Navbar'

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('/api')
      .then((res) => {
        console.log("res", res);
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
