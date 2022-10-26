import { Button, ButtonBase, Container, Divider, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodoAction } from '../redux/actions/todosAction'
import TodoList from './index'

// main components
const Addtodo = () => {
   const dispatch = useDispatch();
   const [todoValue, setTodoValue] = useState('');

   const handleTodoSubmit = (e) => {
      e.preventDefault();
      const date = new Date();
      const uid = date.getTime();
      let todoData = {
         id: uid,
         todo: todoValue,
         isCompleted: false,
      }
      setTodoValue('');
      dispatch(addTodoAction(todoData));

      console.log('ttttttttt', todoData);
   };
   return (
      <>
         <Container>
            <TextField size='small' placeholder="Enter todo"
               name='todos'
               onChange={(e) => setTodoValue(e.target.value)}
            />
            <Button variant="contained" color="info" onClick={(e) => handleTodoSubmit(e)}>Save</Button>
            <Divider />
            <TodoList />

         </Container>

      </>
   )
}

export default Addtodo