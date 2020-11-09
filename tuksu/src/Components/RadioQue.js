import React, {useState, useEffect} from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';



export default function RadioQue(props) {

    const[radio, setRadio] = useState('');
    const[answer, setAnswer] = useState([]);
    const[kysid,setKysid] = useState('');

    useEffect(() => {
        getRadios();
    }, [])



    const getRadios = () => {
        fetch('https://tuksun-orjat.herokuapp.com/kysymykset')
        .then(response => response.json())
        .then(data => {
            setRadio(data[0].radiokys)
            console.log(data[0].radiokys)
            setKysid(data[0].kysid)})
        .catch(err => console.error(err))

    }

    const handleChange = (event) => {
        setAnswer(event.target.value);
    }

    const addAnswer = () => {
        fetch('https://tuksun-orjat.herokuapp.com/vastaus/' + kysid, {
            method: 'POST',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify(answer)
        })
       
        .catch(err => console.error(err))
    }




    return (
        <div>
        <div>{radio}</div>
      
        <FormControl component="fieldset">
  
      <RadioGroup aria-label="sukupuoli" name="gender1" value={answer} onChange={handleChange}>
        <FormControlLabel value={answer.radiovast} control={<Radio />} label="Nainen" />
        <FormControlLabel value={answer.radiovast} control={<Radio />} label="Mies" />
        <FormControlLabel value={answer.radiovast} control={<Radio />} label="muu" />
      </RadioGroup>
      <Button onClick={addAnswer} type="submit" variant="outlined" color="primary" >
      Save
    </Button>
    </FormControl>
        <div>{answer}</div>
        </div>
    )
}
