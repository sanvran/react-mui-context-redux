import { legacy_createStore as createStore } from 'redux'
import { rootReducers } from './reducers'
const REDUX_DEVTOOL_EXT = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const store = createStore(
   rootReducers,
   // {},
   REDUX_DEVTOOL_EXT
)