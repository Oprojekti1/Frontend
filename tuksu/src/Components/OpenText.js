import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export default function OpenText() {

    const useStyles = makeStyles((theme) => ({
        root: {
          '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '40ch',
          },
        },
      }));
      
      
     
        const classes = useStyles();
        const [value, setValue] = React.useState('Tähän tulee vastaus');
      
        const handleChange = (event) => {
          setValue(event.target.value);
        };
      
    return (
        <form className={classes.root} noValidate autoComplete="off">
        <div>
        <div><h1>2.</h1></div>
        <TextField
       
          id="filled-multiline-static"
          label="Vastaus"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="filled"
          value={value}
          onChange={handleChange}
        
        />
        </div>
        </form>
    )
}
