import React, {useState, useEffect}  from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
//import './App.css';
import  {BrowserRouter as Router,
        Route,
        } from 'react-router-dom';
//import Home from './Home';
//import ToDo from './todo';
import Kysymykset from './Kysymykset';


function TabApp() {
    
    const [allKyselyt, setAllKyselyt] = useState([]);

    const [value, setValue] = useState('one');

    const handleChange= (event, value) => {
        setValue(value);
    };

    useEffect(() => {
        getAllKyselyt();
    
    
      }, [])
    
    
    
      const getAllKyselyt = () => {
        fetch('https://orjat.herokuapp.com/kyselyt')
      //  fetch('http://localhost:8080/kyselyt')
          .then(response => response.json())
          .then(data => {
         
           setAllKyselyt(data)
       
          })
          .catch(err => console.error(err))
    
      }

    return(
        <div>
            <Router>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange}>
                    <Tab value="one"label="Home"/>
                    <Tab value="two"label="Todolist"/> 
                </ Tabs>
            </ AppBar>
            {value === 'one' && <div><Route render={() => <h1> This is home page </h1>}/></div>}
            {value === 'two' && <div><Route exact path = "/"component =  {allKyselyt.map((kysely, index) => {
        	console.log(kysely)
         // Added key = {index} to get off this warning
	 // Warning: Each child in a list should have a unique "key" prop. 
	 return <Kysymykset key={index} nimi={kysely.nimi} intro={kysely.intro} kyslista={kysely.kysymykset}/>
        
      })}/></div>}
            
            </Router>
        </div>

    )
}

export default TabApp;