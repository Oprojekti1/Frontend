import React, { useState, useEffect } from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';


// Funktiolla luodaan kentät radio napeille
export default function RadioQue(props) {
    
    const [radio, setRadio] = useState(props.kys);
    const [answer, setAnswer] = useState({ vast: 'Mies' });
   
     // Päivittää tekstin sivulle sekä lähettää muuttuneen arvon Kysymykset funktioon
     const handleChange = (event) => {
	var vastaus = { ...answer, vast: event.target.value}
	 setAnswer(vastaus.vast);
         props.parentMethod(event.target.name, vastaus.vast);
     }

    // Kun tekstiä muuttaa handleChange kutsutaan
    return (
        <div>
            <div><h1>{props.index}. {radio.kys}</h1></div>
            <RadioGroup aria-label="sukupuoli" name="gender1" onChange={handleChange}>
                    {radio.vaihtoehdot.map((vaihtoehdot, index) =>
                        <FormControlLabel key={index} name={radio.kysid.toString()} value={vaihtoehdot.vaihtoehtoja} control={<Radio />} label={vaihtoehdot.vaihtoehtoja} />
                    )}

                </RadioGroup>
      <div>{answer.vast}</div>
        </div>
    )
}
