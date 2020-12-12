import React, { useState, useEffect, Component } from 'react';
import Radio from './RadioQue';
import OpenText from './OpenText';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Router } from 'react-router-dom';

export default function Grafiikat(props) {
    const [allKyselytC, setAllKyselytC] = useState([]);
    //const [prop, setProp] = useState({nimi: '', intro: '', kyslista: ''});//*********************** */
    //const [allQue, setAllQue] = useState([]);
    //var vastaukset = {};
    //const [osoite, setOsoite] = useState();
    //const [lista, setLista] = useState({index: [1,2], name: ['molli', 'manni']});

      // Handler funktio joka vastaanotttaa ali komponenttien sisällön
  
      useEffect(() => {
        getAllKyselytC()
        //getAllQue()
      }, [])
  
   

    //   const handleClick = () => {
    //     this.props.history.push('/');
    //   }

      const getAllKyselytC = () => {
        fetch('https://orjat.herokuapp.com/kyselyt')
      //  fetch('http://localhost:8080/kyselyt')
      //    .then(response => response.json())
      //    .then(data => {setProp ({...prop, nimi:  data.nimi,  intro: data.intro, kyslista: data.kyslista})})//************** */
        .then(response => response.json())
          .then(data => { setAllKyselytC(data[0]) } )
          .catch(err => console.error(err))
          console.log(allKyselytC)
      }
    //   // Asettaa radiobutton childista tulleen arvon vastaukset listaan
    // // funktio syötetään radiobutton funktiolle props:in sisällä parentMethod nimellä
    // const setRadio = (kysId, vastaus) => {
    //     console.log("Vastaus", kysId, vastaus);
    //     vastaukset[kysId] = vastaus;
    //     }
        
    //     // Asettaa opentext childista tulleen arvon vastaukset listaan
    //     // funktio syötetään opentext funktiolle props:in sisällä parentMethod nimellä
    //     const setOpen = (kysId, text) => {
    //     console.log("Text", kysId, text);
    //     vastaukset[kysId] = text;
    //     }

      const consoleLog = () => {
        console.log(allKyselytC.kysymykset);
        //console.log(allQue);
      }
 
      

      return (
                <div>
                    <h1>{allKyselytC.nimi} Kysely</h1>
                    <p>{allKyselytC.intro}</p>
                    
                   
                    <Button onClick={consoleLog} type="submit" variant="contained" color="default" size="small" >Save</Button>
                </div>
            )
}

// const Grafiikat = () => {
//     return (
//         <div>
//             <h1>This is home page</h1>
//         </div>
//     )
// }

// export default Grafiikat;

// {allQue.map((kys, index) => {
//     if (kys.kysymystyyppi === "radio") {
//       return <Typography key={index} parentMethod={setRadio} component={Radio} kys={kys} index={index + 1} />
//     }else if(kys.kysymystyyppi === "avoin") {
//       return <Typography key={index} parentMethod={setOpen} component={OpenText} kys={kys} index={index + 1} />
//     }
//     })}

//***** */


// {allKyselytC.kysymykset.map((kys, index) => {
//     if (kys.kysymystyyppi === "radio") {
//       return <Typography key={index} parentMethod={setRadio} component={Radio} kys={kys} index={index + 1} />
//     }else if(kys.kysymystyyppi === "avoin") {
//       return <Typography key={index} parentMethod={setOpen} component={OpenText} kys={kys} index={index + 1} />
//     }
//     })}