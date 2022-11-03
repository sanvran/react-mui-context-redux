import { Container, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const TodoList = () => {
   const todos = useSelector(state => state.todosReducer)
   return (
      <>
         <Container>
            {todos.map((currTodo, ind) => (
               <Typography variant="body2" key={ind}>
                  {currTodo.todo}
               </Typography>

            ))}
         </Container>
      </>
   )
}

export default TodoList