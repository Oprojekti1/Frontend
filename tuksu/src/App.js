import React from 'react';
import Radio from './Components/RadioQue';
import OpenText from './Components/OpenText';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <div >
    <div>
    <h1 style={{backgroundColor: " #f2f2f2", textAlign: "center"}}>Kysely</h1>
    </div>
    <div>
    <Container maxWidth="sm" style={{height: '700px', width: '50%', margin: 'auto'}}>
 
        <Typography component={Radio} />
        
        <Typography component={OpenText} />
      </Container>
      </div>
    
   </div>
  );
}

export default App;
