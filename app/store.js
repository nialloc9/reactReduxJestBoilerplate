import { applyMiddleware, createStore } from 'redux'

//import middleware
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

//reducers
import reducers from './reducers'

//apply middleware
const middleware = applyMiddleware(logger(), thunk, promise())

//export store
export default createStore(reducers, middleware)
