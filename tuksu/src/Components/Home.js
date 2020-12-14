import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import  {BrowserRouter as Router,
    Route
    } from 'react-router-dom';
import Ttu from './ttu';


export default function Home() {
    const [allKyselytC, setAllKyselytC] = useState([]); 
    const [value, setValue] = useState('one');

    const handleChange= (event, value) => {
        setValue(value);
        console.log(value);
    };
      // Handler funktio joka vastaanotttaa ali komponenttien sisällön
  
      useEffect(() => {
        getAllKyselytC()
      }, [])

      const getAllKyselytC = () => {
        fetch('https://tuksun-orjat.herokuapp.com/kyselyt')
      //  fetch('http://localhost:8080/kyselyt')
        .then(response => response.json())
          .then(data => { setAllKyselytC(data[0]) } )
          .catch(err => console.error(err))
          console.log(allKyselytC)
      }
   
      return (
                <div>
                    <h1>Kyselyt</h1>
                    <Router>
   

                    <Button onClick={handleChange} value="two" type="submit" variant="contained" color="default" size="small" >{allKyselytC.nimi}</Button>
                    {value !== 'one' && <div><Route exact path = "/"component = {Ttu}/></div>} 
                    </Router>
                </div>
            )
}
