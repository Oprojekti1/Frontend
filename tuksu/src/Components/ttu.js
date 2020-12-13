import React, { useState, useEffect } from 'react';
import Kysymykset from './Kysymykset';

export default function Ttu(props) {

const [allKyselyt, setAllKyselyt] = useState([]);
  
  useEffect(() => {
    getAllKyselyt();
    //console.log(allKyselyt);
  }, [])

  const getAllKyselyt = () => {
    fetch('https://orjat.herokuapp.com/kyselyt')
  //  fetch('http://localhost:8080/kyselyt')
      .then(response => response.json())
    //  .then(data => {setProp (nimi =  data.nimi,  intro = data.intro, kyslista = data.kyslista)})
      .then(data => { setAllKyselyt(data) })
      //.then(data => console.log(data.nimi))
      .catch(err => console.error(err))
  }

  return (
    <div >
      {allKyselyt.map((kysely, index) => {
        //	console.log(kysely)
         // Added key = {index} to get off this warning
	 // Warning: Each child in a list should have a unique "key" prop. 
	 return <Kysymykset key={index} nimi={kysely.nimi} intro={kysely.intro} kyslista={kysely.kysymykset} />
        
      })}
         
    </div>
  );
}