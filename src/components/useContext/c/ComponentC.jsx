import { Container, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { UserProfile } from '../a/ComponentA'

const ComponentC = ({ anyData }) => {
   const user = useContext(UserProfile)
   const myAnyData = useContext(UserProfile)
   console.log('COMING FROM CREATECONTEXT PROFIVER', user);
   return (
      <>
         <Container>
            <Typography variant="body1">Hello i am from ComponentC, Here is no any A,B,C component call!</Typography>
            {/* <h3>Coming from context api:- {JSON.stringify(userInfo)}</h3> */}
            {user?.userInfo.map((currItm, ind) => {
               return (
                  <p key={ind}> {currItm.name} </p>
               )
            })}
            <h3>Coming from context/api:- {myAnyData.anyData}</h3>
         </Container>
      </>
   )
}

export default ComponentC