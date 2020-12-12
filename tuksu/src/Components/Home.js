import React, { useState, useEffect, Component } from 'react';
//import Radio from './RadioQue';
//import OpenText from './OpenText';
//import Typography from '@material-ui/core/Typography';
//import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
//import { Router } from 'react-router-dom';
import  {BrowserRouter as Router,
    Route,
    Link
    } from 'react-router-dom';
import Grafiikat from './Grafiikat';

export default function Home(props) {
    const [allKyselytC, setAllKyselytC] = useState([]);
    const [allQue, setAllQue] = useState([]);
    //const [osoite, setOsoite] = useState();

    const [value, setValue] = useState('one');

    const handleChange= (event, value) => {
        setValue(value);
        console.log(value);
    };

      
      // Handler funktio joka vastaanotttaa ali komponenttien sisällön
  
      useEffect(() => {
        getAllKyselytC()
        getAllQue()
      }, [])
  
      const getAllQue = () => {
        setAllQue(allKyselytC.kysymykset)
      }

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
   

      const consoleLog = () => {
        console.log(allKyselytC[0].kysymykset);
        //console.log(allQue);
      }
 
      

      return (
                <div>
                    <h1>Kyselyt</h1>
            
                    <Router>
                    <Button onClick={handleChange} value="two" type="submit" variant="contained" color="default" size="small" >{allKyselytC.nimi}</Button>
                    {value !== 'one' && <div><Route exact path = "/"component = {Grafiikat}/></div>}
                    </Router>

                    
                    
                   
                    
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
//     return (
//         <div>
//             <h1>This is home page</h1>
//         </div>
//     )
// }

//export default Home;