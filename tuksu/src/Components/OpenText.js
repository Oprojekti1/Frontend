import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Kysymykset from './Kysymykset';

// Funktiolla luodaan kentät avoimille kysymyksille
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

   	// Päivittää tekstin sivulle sekä lähettää muuttuneen arvon Kysymykset funktioon
        const handleChange = (event) => {
	  var text = { ...answer, vast: event.target.value }
          setAnswer(text.vast);
		console.log(answer);
	  props.parentMethod(event.target.name, text.vast);
        };

    // Kun tekstiä muuttaa handleChange kutsutaan
    return (
        <div>
        <div><h1>{props.index}. {avoin.kys}</h1></div>
	<TextField
       
          id="filled-multiline-static"
          label="Vastaus"
          multiline
          rows={4}
          variant="filled"
	  name={avoin.kysid.toString()}
          value={answer.vast}
          onChange={handleChange}
        
        />
        <div>
        </div>
        </div>
    )
}
