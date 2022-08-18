import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { fetchApi } from './apis/getItems'

function App() {

  const [ test, setTest ] = useState([]);

  useEffect(() => {
    fetchApi()
      .then(data => setTest(data));
  }, [])

  return (
    <div>
      {test.map((data)=>(
          <div>{data.title}</div>
        ))}
    </div>
  );
}

export default App;