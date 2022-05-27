import { createStore, applyMiddleware } from 'redux'
import rootReducer from "./rootReducers"
import { composeWithDevTools } from "redux-devtools-extension"
import reduxThunk from 'redux-thunk'

const middleware = [
  reduxThunk,
]

const store = createStore(
  rootReducer,
  composeWithDevTools( applyMiddleware(...middleware))
)

export default store