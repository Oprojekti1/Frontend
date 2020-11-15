import React, { useState, useEffect } from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';




export default function RadioQue(props) {

    const [radio, setRadio] = useState('');
    const [answer, setAnswer] = useState({ radiovast: 'Mies' });
    const [kysid, setKysid] = useState('');
    const [options, setOptions] = useState([]);


    useEffect(() => {
        getRadios();
    }, [])

    // useEffect(() => {
    //     getOptions();
    // }, [])



    const getRadios = () => {
        fetch('https://tuksun-orjat.herokuapp.com/kysymykset')
            //fetch('http://localhost:8080/kysymykset')
            .then(response => response.json())
            .then(data => {
                setRadio(data[0].radiokys)
                console.log(data[0].radiokys)
                setKysid(data[0].kysid)
                setOptions(data[0].vaihtoehdot)
                console.log(data[0].vaihtoehdot)
            })
            .catch(err => console.error(err))

    }

    const handleChange = (event) => {
        setAnswer({ ...answer, radiovast: event.target.value });
    }

    const addAnswer = () => {
        fetch('https://tuksun-orjat.herokuapp.com/vastaus/' + kysid, {
            // fetch('http://localhost:8080/vastaus/' + kysid, {    
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(answer)
        })

            .catch(err => console.error(err))
    }




    return (
        <div>
            <div><h1>1.{radio}</h1></div>

            <FormControl component="fieldset">
                <RadioGroup aria-label="sukupuoli" name="gender1" value={answer.radiovast} onChange={handleChange}>
                    {options.map((vaihtoehdot) =>
                        <FormControlLabel value={vaihtoehdot.vaihtoehto} control={<Radio />} label={vaihtoehdot.vaihtoehto} />
                    )}

                </RadioGroup>
                <div>{answer.radiovast}</div>
                <Button onClick={addAnswer} type="submit" variant="contained" color="default" size="small" >Save</Button>


            </FormControl>

        </div>
    )
}
