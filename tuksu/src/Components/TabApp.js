import React, {useState, useEffect}  from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
//import './App.css';
import  {BrowserRouter as Router,
        Route,
        Link
        } from 'react-router-dom';
import Home from './Home';
//import ToDo from './todo';
import Kysymykset from './Kysymykset';
import Grafiikat from './Grafiikat'

function TabApp() {

    const [pro, setPro] = useState({index: [0,1], name: ['manni', 'molli']});
    
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
            <AppBar position="static" color= "#f2f2f2">
                <Tabs value={value} onChange={handleChange}>
                    <Tab value="one"label="Kyselyt"/>
                    <Tab value="two"label="Kysely"/> 
                    <Tab value="three"label="Login"/> 
                </ Tabs>
            </ AppBar>
            {value === 'one' && <div><Route exact path = "/"component = {Home}/></div>}
            {value === 'two' && <div><Route exact path = "/"component = {Grafiikat}/></div>}
            {value === 'three' && <div> <Link to="https://orjat.herokuapp.com/login"></Link></div>}
           
            </Router>
        </div>

    )
}
//{value === 'two' && <div><Route render={{Grafiikat}}/></div>}
export default TabApp;