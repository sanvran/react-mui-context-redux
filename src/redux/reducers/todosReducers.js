import { actionTypes } from "../constants";

const initTodo = [
   { id: 1, todo: 'Goto office', isCompleted: false },
   { id: 2, todo: 'Office went', isCompleted: true },
];
export const todosReducer = (state = initTodo, action) => {
   switch (action.type) {
      case actionTypes.ADD_TODO:
         return [...state, action.payload];
      default: return state;
   }
};
