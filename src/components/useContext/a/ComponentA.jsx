import { Container, Typography } from '@mui/material'
import React, { createContext } from 'react'
import ComponentB from '../b/ComponentB'
// create context
const UserProfile = createContext();

const ComponentA = () => {
   const anyData = "MydataCompA"
   const userInfo = [{ id: 1, name: 'Sanjeev', role: 'Developer' }, { id: 2, name: 'Radhe', role: 'Sr.Developer' }]
   return (
      <>
         <UserProfile.Provider value={{ anyData, userInfo }} >
            <Container>
               {/* <Typography variant="body1">ComponentA</Typography> */}
               <ComponentB />
            </Container>
         </UserProfile.Provider>
      </>
   )
}

export default ComponentA
export { UserProfile }