import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
function App() {
 const [data, setData] = useState({});
 
 useEffect(() => {
   axios.get('/api')
     .then((res) => {
       console.log("res",res);
     })
     .catch((err) => console.log("err", err));
 }, []);
 
 return (
   <div>
     Depawture 
   </div>
 );
}
 
export default App;
