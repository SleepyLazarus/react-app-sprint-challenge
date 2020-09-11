import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Characters from './Characters';
import styled from 'styled-components'

const FancyHeader = styled.h1`
font-family: sans-serif;
color: white;
`

const MainDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #00134d;
`

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.py4e.com/api/people')
    .then((response => {
      setData(response.data.results);
    }))
    .catch(( err => {

    }))
  }, []);


  return (
    <>
      <MainDiv>
        <div>
          <FancyHeader>Star Wars Characters</FancyHeader>
        </div>
        <Characters data={data}/>
      </MainDiv>
    </>
  );
}

export default App;
