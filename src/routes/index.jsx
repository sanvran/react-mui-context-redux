import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ContactList from '../features/contact-book'
import { publicRoute } from './path'


const Router = () => {
   return (
      <>
         <Routes>
            <Route path={publicRoute.contactList} element={<ContactList />} />
         </Routes>
      </>
   )
}

export default Router