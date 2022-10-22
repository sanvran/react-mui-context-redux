import { Container, Typography } from '@mui/material'
import React from 'react'
import ComponentC from '../c/ComponentC'

const ComponentB = ({ anyData }) => {
   console.log('data from comp A and showing in component b=>', anyData);
   return (
      <>
         <Container>
            {/* <Typography variant="body1">ComponentB : C call</Typography> */}
            <ComponentC />
         </Container>
      </>
   )
}

export default ComponentB