import React, { useEffect, useState } from 'react'
import {
   Button,
   Typography,
   Container,
   TextField,
   Box,
} from "@mui/material";

const Increament = () => {
   const initialVal = {
      name: "",
      selected: false,
   };
   const [number, setnumber] = useState(0);
   const [name, setName] = useState(initialVal);

   // handle increase cout
   const increaseCount = () => {
      setnumber((prev) => prev + 1);
   };

   useEffect(() => {
      console.count("useeffect run!");
      document.title = `Radhe radhe boll`;
   }, []);

   console.count("component render=>", name);
   console.log("number=>", number);

   return (
      <Container>
         <Typography variant="h6">
            You clicked <b>{number}</b> times
         </Typography>
         <Button onClick={increaseCount} variant="outlined" color="primary">
            Increment value
         </Button>
         <Button
            onClick={(e) => {
               if (!(number === 0)) {
                  setnumber((prev) => prev - 1);
               }
            }}
            variant="outlined"
            color="primary"
         >
            Decrease value
         </Button>
         <Box mt={2}>
            <TextField label="Full name" size="small" onChange={(e) => setName(e.target.value)} />
         </Box>
      </Container>
   )
}

export default Increament