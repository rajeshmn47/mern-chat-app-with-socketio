import React from 'react';

//importing typewriter-effect
import Typewriter from "typewriter-effect";
import './App.css';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function Cap() {
return (
    <>
	<div className="App">
	<Typewriter

	onInit={(typewriter)=> {

	typewriter
		
	.typeString("react chat application")
		
	.pauseFor(1000)
	.deleteAll()
	.typeString("Welcomes to the messenger")
	.start();
	}}
	/>
    
  
	</div>
     <Stack spacing={2} direction="row">
     <Button variant="text">Text</Button>
     <Button variant="contained">Contained</Button>
     <Button variant="outlined">Outlined</Button>
   </Stack>
   </>
);
}

export default Cap;
