import React, { useState, useEffect, Component } from 'react';
import Radio from './Components/RadioQue';
import OpenText from './Components/OpenText';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Kysymykset from './Components/Kysymykset';
import TabApp from './Components/TabApp';

export default function App() {

  // const [allKyselyt, setAllKyselyt] = useState([]);
  // //const [prop, setProp] = useState(nimi=[], intro=[], kyslista=[]);
 
  // useEffect(() => {
  //   getAllKyselyt();
  //   //console.log(allKyselyt);
  // }, [])

  // const getAllKyselyt = () => {
  //   fetch('https://orjat.herokuapp.com/kyselyt')
  // //  fetch('http://localhost:8080/kyselyt')
  //     .then(response => response.json())
  //   //  .then(data => {setProp (nimi =  data.nimi,  intro = data.intro, kyslista = data.kyslista)})
  //     .then(data => { setAllKyselyt(data) })
  //     .then(data => console.log(data.nimi))
  //     .catch(err => console.error(err))

  // }




  return (
    <div >
      <TabApp />
      
      

    </div>
  );
 }
// {allKyselyt.map((kysely, index) => {
//   //	console.log(kysely)
//    // Added key = {index} to get off this warning
// // Warning: Each child in a list should have a unique "key" prop. 
// return <Kysymykset key={index} nimi={kysely.nimi} intro={kysely.intro} kyslista={kysely.kysymykset}/>
  
// })}

