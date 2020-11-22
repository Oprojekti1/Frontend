import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Kysymykset from './Kysymykset';

export default function OpenText(props) {

    const useStyles = makeStyles((theme) => ({
        root: {
          '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '40ch',
          },
        },
      }));
      
      
        const [avoin, setAvoin] = useState(props.kys);
     
        const classes = useStyles();
        const [answer, setAnswer] = useState({vast: ''});

   
        const handleChange = (event) => {
          setAnswer({ ...answer, vast: event.target.value });
        };

        const addAnswer = () => {
          // fetch('https://tuksun-orjat.herokuapp.com/vastaus/' + kysid, {
                fetch('http://localhost:8080/vastaus/' + avoin.kysid, {    
               method: 'POST',
               headers: { 'Content-type': 'application/json' },
               body: JSON.stringify(answer)
           })
   
               .catch(err => console.error(err))
       }
      
    return (
        <form className={classes.root} noValidate autoComplete="off">
        <div>
        <div><h1>{props.index}. {avoin.kys}</h1></div>
        <TextField
       
          id="filled-multiline-static"
          label="Vastaus"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="filled"
          value={answer.vast}
          onChange={handleChange}
        
        />
        <div>
       <Button onClick={addAnswer} type="submit" variant="contained" color="default" size="small" >Save</Button>
        </div>
        </div>
        </form>
    )
}
