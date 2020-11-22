import React, { useState, useEffect, Component } from 'react';
import Radio from './RadioQue';
import OpenText from './OpenText';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';


export default function Kysymykset(props) {
    const [allQue, setAllQue] = useState(props.kyslista);
    // Handler funktio joka vastaanotttaa ali komponenttien sisällön

     useEffect(() => {
       getAllQue();
   
   
     }, [])
   
     const getAllQue = () => {
      //  fetch('https://tuksun-orjat.herokuapp.com/kysymykset')
       fetch('http://localhost:8080/kysymykset')
         .then(response => response.json())
         .then(data => {
           console.log(data);
           setAllQue(data)
      
         })
         .catch(err => console.error(err))
   
     }
   
    return (
        <div>
        <p>{props.nimi}</p>
        <Container maxWidth="sm" style={{ height: '700px', width: '50%', margin: 'auto' }}>
        {allQue.map((kys, index) => {
        if (kys.kystyp === "Radio") {
          return <Typography component={Radio} kys={kys} index={index + 1} />
        }else if(kys.kystyp === "Avoin teksti") {
          return      <Typography component={OpenText} kys={kys} index={index + 1} />
        }
        })}
   
      </Container>
        </div>
    );
}

