import React, { useState, useEffect, Component } from 'react';
import Radio from './Components/RadioQue';
import OpenText from './Components/OpenText';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Kysymykset from './Components/Kysymykset';

export default function App() {

  const [allKyselyt, setAllKyselyt] = useState([]);
  
 
  useEffect(() => {
    getAllKyselyt();


  }, [])



  const getAllKyselyt = () => {
   //  fetch('https://tuksun-orjat.herokuapp.com/kyselyt')
    fetch('http://localhost:8080/kyselyt')
      .then(response => response.json())
      .then(data => {
     
       setAllKyselyt(data)
   
      })
      .catch(err => console.error(err))

  }


  return (
    <div >
      <div>
        <h1 style={{ backgroundColor: " #f2f2f2", textAlign: "center" }}>Kysely</h1>
      </div>
      {allKyselyt.map((kysely, index) => {
        
          return <Kysymykset nimi={kysely.nimi} kyslista={kysely.kysymykset}/>
        
      })}
      

    </div>
  );
}


