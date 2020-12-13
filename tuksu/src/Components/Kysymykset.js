import React, { useState } from 'react';
import Radio from './RadioQue';
import OpenText from './OpenText';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

// Funktiolla luodaan kysely formi
export default function Kysymykset(props) {
    
    const [allQue, setAllQue] = useState(props.kyslista);
    var vastaukset = {};
    // Handler funktio joka vastaanotttaa ali komponenttien sisällön
 
    // Looppaa vastaukset ja postaa ne palvelimelle
    const postAnswers = () => {
    	console.log("POSTING...");
	console.log(vastaukset);
    	Object.keys(vastaukset).map(function(kysId) {
          	 fetch('https://orjat.herokuapp.com/vastaus/' + kysId, {
	//	fetch('http://localhost:8080/vastaus/' + kysId, {		
    method: 'POST',
		headers: {'Content-type':'application/json'},
		body: JSON.stringify({vast:vastaukset[kysId]})
	})
	.catch(err => console.log(err))
	});
    }

    // Asettaa radiobutton childista tulleen arvon vastaukset listaan
    // funktio syötetään radiobutton funktiolle props:in sisällä parentMethod nimellä
    const setRadio = (kysId, vastaus) => {
	console.log("Vastaus", kysId, vastaus);
	vastaukset[kysId] = vastaus;
    }
    
    // Asettaa opentext childista tulleen arvon vastaukset listaan
    // funktio syötetään opentext funktiolle props:in sisällä parentMethod nimellä
    const setOpen = (kysId, text) => {
	console.log("Text", kysId, text);
	vastaukset[kysId] = text;
    }
   
    // Kysymykset loopataan läpi, jokaisen kysymyksen tyyppi arvoa käyttäen luodaan oikea kysymys kenttä
    // parentMethod annetaan funktioille, jotta ne voivat palauttaa arvoja takaisin
    // Submit nappi kutsuu postAnswers funktiota joka toteutta post pyynnöt
    return (
        
        <div>
          
        <h1 style={{ backgroundColor: " #f2f2f2", textAlign: "center" }}>Kysely</h1>
        
     
        <Container maxWidth="sm" style={{ height: '700px', width: '50%', margin: 'auto' }}>
        <p>{props.nimi}</p>
        <p>{props.intro}</p>
        {allQue.map((kys, index) => {
        if (kys.kysymystyyppi === "radio") {
          return <Typography key={index} parentMethod={setRadio} component={Radio} kys={kys} index={index + 1} />
        }else if(kys.kysymystyyppi === "avoin") {
          return <Typography key={index} parentMethod={setOpen} component={OpenText} kys={kys} index={index + 1} />
        }
        })}
   
      <Button onClick={postAnswers} type="submit" variant="contained" color="default" size="small" >Save</Button>
      </Container>
        </div>
    );
}
