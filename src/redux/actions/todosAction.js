import { actionTypes } from "../constants";

export const addTodoAction = (payload) => {
   return {
      type: actionTypes.ADD_TODO,
      payload: payload
   }
};