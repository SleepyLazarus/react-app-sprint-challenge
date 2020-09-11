import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Movies from './Movies';



function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.py4e.com/api/films')
    .then((response => {
      setData(response.data.results);
    }))
    .catch(( err => {

    }))
  }, []);


  return (
    <div>
      <Movies data={data}/>
    </div>
  );
}

export default App;
