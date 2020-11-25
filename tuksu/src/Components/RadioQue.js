import React, { useState, useEffect } from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Kysymykset from './Kysymykset';




export default function RadioQue(props) {

    const [radio, setRadio] = useState(props.kys);
    const [answer, setAnswer] = useState({ vast: ' ' });
     // const [options, setOptions] = useState([]);
    
    // useEffect(() => {
    //     getRadios();

    // }, [])

   // const getRadios = () => {
    //    // fetch('https://tuksun-orjat.herokuapp.com/kysymykset')
    //         fetch('http://localhost:8080/kysymykset')
    //         .then(response => response.json())
    //         .then(data => {
    //             setRadio(data[0].kys)
    //             console.log(data[0].kys)
    //             setKysid(data[0].kysid)
    //             setOptions(data[0].vaihtoehdot)
    //             console.log(data[0].vaihtoehdot)
    //         })
    //         .catch(err => console.error(err))

    // }

     const handleChange = (event) => {
         setAnswer({ ...answer, vast: event.target.value });
     }

    const addAnswer = () => {
       // fetch('https://tuksun-orjat.herokuapp.com/vastaus/' + kysid, {
             fetch('http://localhost:8080/vastaus/' + radio.kysid, {    
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(answer)
        })

            .catch(err => console.error(err))
    }


    return (
        <div>
            <div><h1>{props.index}. {radio.kys}</h1></div>
   
            <div onChange={props.handleChange()}>
            {radio.vaihtoehdot.map((vaihtoehdot) =>
              
                <input type="Radio" value={vaihtoehdot.vaihtoehto} name={vaihtoehdot.vaihtoehto} />
            )}
                </div>


<<<<<<< Updated upstream
                </RadioGroup>
              
      </FormControl>
      <div>{answer.vast}</div>
      <Button onClick={addAnswer} type="submit" variant="contained" color="default" size="small" >Save</Button>
        </div>
=======

                
                <div>{answer.vast}</div>
                <Button onClick={addAnswer} type="submit" variant="contained" color="default" size="small" >Save</Button>
    
      </div>
      
        
>>>>>>> Stashed changes
    )

  
}

// < RadioGroup aria-label="sukupuoli" name="gender1" value={answer.vast} onChange={handleChange}>