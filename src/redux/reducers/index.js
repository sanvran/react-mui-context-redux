import { combineReducers } from 'redux'
import { todosReducer } from '../reducers/todosReducers'
import { contactReducer } from './contactReducer';

export const rootReducers = combineReducers({
   todosReducer,

   contacts: contactReducer
   // more reducer

}); 